// Server-only helpers: SMTP mailer, optional Upstash Redis store, rate limit, admin auth, payment-detail parsing.
import nodemailer from 'nodemailer';
import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';
import { CONTACT, FORMS, REPLY, SHOP, SITE } from '@/config/site';
import { computeTotals } from '@/lib/totals';

// ---------- SMTP (the only email transport). Works with Zoho Mail (smtp.zoho.com) and any other SMTP host.
// Returns {sent:false} when unconfigured, never throws. Zoho only accepts mail sent from the authenticated mailbox (or a send-as alias), so for Zoho the From defaults to SMTP_USER.
let transporter: nodemailer.Transporter | null | undefined;
function getTransport() {
  if (transporter !== undefined) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return (transporter = null);
  const port = Number(SMTP_PORT || 465);
  return (transporter = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, requireTLS: port !== 465, auth: { user: SMTP_USER, pass: SMTP_PASS }, connectionTimeout: 12000, greetingTimeout: 12000, socketTimeout: 20000 }));
}
const fromAddress = () => {
  const { SMTP_FROM, SMTP_HOST, SMTP_USER } = process.env;
  if (SMTP_FROM) return SMTP_FROM;
  return /zoho/i.test(SMTP_HOST || '') && SMTP_USER ? `${SITE.name} <${SMTP_USER}>` : FORMS.smtpFrom;
};
const htmlToText = (h: string) => h.replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<br\s*\/?>|<\/(p|tr|div|h\d|li)>/g, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/[ \t]+/g, ' ').replace(/\n\s+/g, '\n').trim();
export const mailConfigured = () => getTransport() !== null;
export async function verifyMail() {
  const t = getTransport();
  if (!t) return { ok: false as const, error: 'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS.' };
  try { await t.verify(); return { ok: true as const }; } catch (e) { return { ok: false as const, error: (e as Error).message }; }
}
export async function sendMail(m: { to: string; subject: string; html: string; text?: string; replyTo?: string; attachments?: { filename: string; content: Buffer }[] }) {
  const t = getTransport();
  if (!t) return { sent: false as const, reason: 'not-configured' };
  const msg = { from: fromAddress(), text: m.text || htmlToText(m.html), ...m };
  for (let attempt = 0; attempt < 2; attempt++) {
    try { await t.sendMail(msg); return { sent: true as const }; }
    catch (e) { console.error('[mail] send failed', attempt + 1, (e as Error).message); if (attempt === 1) return { sent: false as const, reason: 'send-failed', error: (e as Error).message }; }
  }
  return { sent: false as const, reason: 'send-failed' };
}

// ---------- Storage (Upstash Redis). Optional: when unconfigured, orders still email through.
let redis: Redis | null | undefined;
function getRedis() {
  if (redis !== undefined) return redis;
  const env = process.env;
  const url = env.KV_REST_API_URL || env.UPSTASH_REDIS_REST_URL || env.STORAGE_KV_REST_API_URL || env.STORAGE_URL || env.REDIS_REST_URL;
  const token = env.KV_REST_API_TOKEN || env.UPSTASH_REDIS_REST_TOKEN || env.STORAGE_KV_REST_API_TOKEN || env.STORAGE_TOKEN || env.REDIS_REST_TOKEN;
  return (redis = url && token ? new Redis({ url, token }) : null);
}
export const storeReady = () => getRedis() !== null;

export interface StoredOrder {
  orderNumber: string; customerName: string; customerEmail: string; customerPhone: string; address: string;
  items: { slug: string; name: string; price: number; quantity: number }[]; subtotal: number; shipping: number; cryptoDiscount: number; amountDue: number;
  paymentMethod: string; notes?: string; status: 'pending' | 'payment-sent' | 'screenshot-received' | 'payment-confirmed'; channel: 'whatsapp' | 'email'; createdAt: number;
  paymentDetails?: string; paymentMethodId?: string;
}
export interface StoredEnquiry { id: string; type: 'contact' | 'wholesale'; name: string; email: string; phone?: string; message: string; topic?: string; status: 'new' | 'replied'; createdAt: number; reply?: string }

export async function saveOrder(o: StoredOrder) { const r = getRedis(); if (r) await r.hset('bfs:orders', { [o.orderNumber]: JSON.stringify(o) }); return !!r; }
export async function getOrder(id: string): Promise<StoredOrder | null> { const r = getRedis(); if (!r) return null; const v = await r.hget<string | StoredOrder>('bfs:orders', id); return v ? (typeof v === 'string' ? JSON.parse(v) : v) : null; }
export async function listOrders(): Promise<StoredOrder[]> { const r = getRedis(); if (!r) return []; const all = (await r.hgetall<Record<string, string | StoredOrder>>('bfs:orders')) || {}; return Object.values(all).map((v) => (typeof v === 'string' ? JSON.parse(v) : v)).sort((a, b) => b.createdAt - a.createdAt); }
export async function deleteOrder(id: string) { const r = getRedis(); if (r) await r.hdel('bfs:orders', id); }
export async function saveEnquiry(e: StoredEnquiry) { const r = getRedis(); if (r) await r.hset('bfs:enquiries', { [e.id]: JSON.stringify(e) }); return !!r; }
export async function getEnquiry(id: string): Promise<StoredEnquiry | null> { const r = getRedis(); if (!r) return null; const v = await r.hget<string | StoredEnquiry>('bfs:enquiries', id); return v ? (typeof v === 'string' ? JSON.parse(v) : v) : null; }
export async function listEnquiries(): Promise<StoredEnquiry[]> { const r = getRedis(); if (!r) return []; const all = (await r.hgetall<Record<string, string | StoredEnquiry>>('bfs:enquiries')) || {}; return Object.values(all).map((v) => (typeof v === 'string' ? JSON.parse(v) : v)).sort((a, b) => b.createdAt - a.createdAt); }
export async function deleteEnquiry(id: string) { const r = getRedis(); if (r) await r.hdel('bfs:enquiries', id); }

// ---------- Rate limit (per instance; good enough as a basic guard)
const hits = new Map<string, number[]>();
export function limited(req: NextRequest, max = 8, windowMs = 60_000) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  const now = Date.now(); const arr = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  arr.push(now); hits.set(ip, arr);
  return arr.length > max;
}

// ---------- Admin auth: X-Admin-Passcode header vs ADMIN_PASSCODE (server only)
export function checkAdmin(req: NextRequest): NextResponse | null {
  const pass = process.env.ADMIN_PASSCODE;
  if (!pass) return NextResponse.json({ error: 'Admin is not configured' }, { status: 503 });
  if (req.headers.get('x-admin-passcode') !== pass) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  return null;
}

// ---------- Helpers
export const esc = (s: unknown) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
export const aud = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const REF_RE = /^BFS-[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{7}$/;
export const newId = () => 'ENQ-' + Math.random().toString(36).slice(2, 9).toUpperCase();

// Splits one pasted blob of payment info into copyable {label, value} fields (any country or rail).
export function parsePaymentDetail(raw: string): { label: string; value: string }[] {
  const KNOWN = /^(bank|account name|account number|acct|bsb|swift|iban|pay ?id|reference|ref|amount|wallet|address|network|btc|usdt|abn|link|email|name|sort code|routing)\b/i;
  const out: { label: string; value: string }[] = []; let n = 0;
  for (const line of raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)) {
    const m = line.match(/^([^:]{2,40}):\s*(.+)$/);
    if (m) { out.push({ label: m[1].trim(), value: m[2].trim() }); continue; }
    const k = line.match(KNOWN);
    if (k) { const rest = line.slice(k[0].length).replace(/^[\s\-–=]+/, '').trim(); if (rest) { out.push({ label: k[0][0].toUpperCase() + k[0].slice(1).toLowerCase(), value: rest }); continue; } }
    out.push({ label: `Detail ${++n}`, value: line });
  }
  return out;
}

// ---------- Light email shell (never a dark body: Zoho/Gmail dark mode force-inverts dark emails)
export function emailShell(title: string, bodyHtml: string, cta?: { href: string; label: string }) {
  const accent = REPLY.brand.primary, band = REPLY.brand.headerDark;
  const site = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;
  // Header carries the site icon (PNG: Gmail and Outlook do not render SVG) and the ABN so every email reads as coming from the business.
  return `<!doctype html><html><body style="margin:0;background:#f4f1ea;font-family:Arial,Helvetica,sans-serif;color:#12201a"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 12px"><table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e3ddd0"><tr><td style="background:${band};padding:18px 28px;color:#ffffff"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="padding-right:14px;vertical-align:middle"><img src="${site}/icon-512.png" width="48" height="48" alt="${esc(SITE.name)}" style="display:block;border-radius:10px;border:0"></td><td style="vertical-align:middle"><div style="font-size:20px;font-weight:800;color:#ffffff">${esc(SITE.name)}</div><div style="font-size:12px;color:#ffffff;opacity:.85;margin-top:2px">ABN ${esc(CONTACT.abn)} · ${esc(CONTACT.phone)}</div></td></tr></table></td></tr><tr><td style="padding:28px"><h1 style="margin:0 0 14px;font-size:21px;color:${accent}">${esc(title)}</h1>${bodyHtml}${cta ? `<p style="margin:24px 0 0"><a href="${cta.href}" style="display:inline-block;background:#f07a1f;color:#ffffff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:999px">${esc(cta.label)}</a></p>` : ''}</td></tr><tr><td style="padding:18px 28px;background:#faf8f3;font-size:12px;line-height:1.6;color:#5b6b63">${esc(SITE.legalName)} · ABN ${esc(CONTACT.abn)}<br>${esc(CONTACT.phone)} · ${esc(CONTACT.email)}<br>All prices in AUD including GST.</td></tr></table></td></tr></table></body></html>`;
}
// Order summary used in the customer email, the shop email and the payment-details email, so both ends see identical figures.
// Layout: items, then Subtotal, Freight, Crypto discount (only when chosen), GST included (info), and the TOTAL TO PAY as the very last row.
export function orderSummary(o: StoredOrder) {
  const date = new Date(o.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Australia/Sydney' });
  const t = computeTotals(o.items, o.cryptoDiscount > 0);
  const due = o.amountDue ?? t.total;
  const row = (a: string, b: string, o2: { color?: string; muted?: boolean } = {}) => `<tr><td style="padding:6px 0;font-size:14px;color:${o2.color || (o2.muted ? '#7a867f' : '#5b6b63')};${o2.muted ? 'font-style:italic;' : ''}">${a}</td><td align="right" style="padding:6px 0;font-size:14px;font-weight:${o2.muted ? '400' : '700'};color:${o2.color || (o2.muted ? '#7a867f' : '#12201a')};white-space:nowrap">${b}</td></tr>`;
  const lines = o.items.map((i) => `<tr><td style="padding:9px 0;font-size:14px;border-bottom:1px solid #eee8db">${esc(i.name)}<div style="font-size:12px;color:#5b6b63">${i.quantity} × ${aud(i.price)}</div></td><td align="right" style="padding:9px 0;font-size:14px;font-weight:700;border-bottom:1px solid #eee8db;vertical-align:top;white-space:nowrap">${aud(i.price * i.quantity)}</td></tr>`).join('');
  const totalRow = `<tr><td style="padding:14px 12px;font-size:16px;font-weight:800;color:#ffffff;background:${REPLY.brand.headerDark};border-radius:8px 0 0 8px">TOTAL TO PAY (AUD)</td><td align="right" style="padding:14px 12px;font-size:20px;font-weight:800;color:#ffffff;background:${REPLY.brand.headerDark};border-radius:0 8px 8px 0;white-space:nowrap">${aud(due)}</td></tr>`;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 14px;background:#faf8f3;border-radius:10px"><tr><td style="padding:12px 14px;font-size:13px;line-height:1.7"><strong>Order ${esc(o.orderNumber)}</strong> · ${esc(date)}<br>${esc(o.customerName)} · ${esc(o.customerEmail)} · ${esc(o.customerPhone)}<br>Deliver to: ${esc(o.address)}<br>Payment: ${esc(o.paymentMethod)}</td></tr></table><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed"><colgroup><col><col style="width:130px"></colgroup>${lines}<tr><td colspan="2" style="height:6px;line-height:6px;font-size:0">&nbsp;</td></tr>${row('Subtotal (inc. GST)', aud(o.subtotal))}${row('Freight', o.shipping ? aud(o.shipping) : 'Free')}${o.cryptoDiscount ? row(`Crypto discount (${SHOP.cryptoDiscount}%)`, '-' + aud(o.cryptoDiscount), { color: '#1c7a55' }) : ''}${row('GST included in total', aud(t.gst), { muted: true })}<tr><td colspan="2" style="height:8px;line-height:8px;font-size:0;border-top:2px solid #12201a">&nbsp;</td></tr>${totalRow}</table>`;
}
// Big "pay exactly this" box for the payment-details email.
export const amountBox = (o: StoredOrder) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px"><tr><td align="center" style="background:#fff4e8;border:2px solid #f07a1f;border-radius:12px;padding:16px"><div style="font-size:12px;font-weight:700;letter-spacing:.06em;color:#5b6b63">PLEASE PAY EXACTLY</div><div style="font-size:30px;font-weight:800;color:#12201a;margin:4px 0">${aud(o.amountDue)} AUD</div><div style="font-size:13px;color:#5b6b63">Reference: <strong>${esc(o.orderNumber)}</strong>${o.cryptoDiscount ? ' · crypto discount already applied' : ''}</div></td></tr></table>`;
export const fieldRow =(k: string, v: string) => `<tr><td style="padding:6px 0;color:#5b6b63;font-size:13px;width:34%;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;font-weight:600;font-size:14px">${esc(v)}</td></tr>`;
export const table = (rows: string) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>`;
