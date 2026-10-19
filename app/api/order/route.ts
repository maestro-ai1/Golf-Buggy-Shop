import { NextRequest, NextResponse } from 'next/server';
import { CONTACT, FORMS, PRODUCTS, SHOP } from '@/config/site';
import { computeTotals } from '@/lib/totals';
import { REF_RE, aud, emailShell, esc, limited, orderSummary, saveOrder, sendMail, type StoredOrder } from '@/lib/server';

export const runtime = 'nodejs';

// One handler for both checkout channels. The order is re-priced server-side from the catalogue, never trusted from the browser.
export async function POST(req: NextRequest) {
  if (limited(req, 6)) return NextResponse.json({ success: false, error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  let b: any;
  try { b = await req.json(); } catch { return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 }); }
  if (b.botcheck) return NextResponse.json({ success: true });
  const ref = String(b.ref || '');
  if (!REF_RE.test(ref)) return NextResponse.json({ success: false, error: 'Invalid order reference' }, { status: 400 });
  const name = String(b.name || '').trim().slice(0, 120), email = String(b.email || '').trim().slice(0, 160), phone = String(b.phone || '').trim().slice(0, 40), address = String(b.address || '').trim().slice(0, 300);
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || phone.length < 8 || address.length < 8) return NextResponse.json({ success: false, error: 'Please complete name, email, phone and delivery address.' }, { status: 400 });

  const items = (Array.isArray(b.items) ? b.items : []).slice(0, 40).map((i: any) => {
    const p = PRODUCTS.find((x) => x.slug === i.slug); const q = Math.max(1, Math.min(99, Number(i.quantity) || 1));
    return p ? { slug: p.slug, name: p.name, price: p.price, quantity: q } : null;
  }).filter(Boolean) as StoredOrder['items'];
  if (!items.length) return NextResponse.json({ success: false, error: 'Your cart is empty.' }, { status: 400 });
  const crypto = /crypto/i.test(String(b.paymentMethod || ''));
  const t = computeTotals(items, crypto);
  const { subtotal, shipping, cryptoDiscount } = t;
  if (subtotal < SHOP.minOrder) return NextResponse.json({ success: false, error: `Minimum order is $${SHOP.minOrder}.` }, { status: 400 });
  const order: StoredOrder = { orderNumber: ref, customerName: name, customerEmail: email, customerPhone: phone, address, items, subtotal, shipping, cryptoDiscount, amountDue: t.total, paymentMethod: String(b.paymentMethod || 'Bank transfer').slice(0, 80), notes: String(b.notes || '').slice(0, 800), status: 'pending', channel: b.channel === 'whatsapp' ? 'whatsapp' : 'email', createdAt: Date.now() };
  const stored = await saveOrder(order);

  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://buggiesforsale.com.au';
  // shop notification
  const shopMail = await sendMail({ to: process.env.ORDER_EMAIL || FORMS.destinations.order || CONTACT.email, replyTo: email, subject: `New order ${ref} (${order.channel}) ${aud(order.amountDue)}`, html: emailShell(`New order ${ref}`, orderSummary(order) + (order.notes ? `<p style="font-size:13px;margin:14px 0 0"><strong>Customer notes:</strong> ${esc(order.notes)}</p>` : '') + `<p style="font-size:13px;margin:10px 0 0;color:#5b6b63">Channel: ${order.channel}</p>`, stored ? { href: `${site}/admin/`, label: 'Reply in Dashboard' } : undefined) });
  // customer confirmation: fires for EVERY channel (WhatsApp included). Says "watch for payment details" only, no payment instructions yet.
  const custMail = await sendMail({ to: email, subject: `We received your order ${ref}`, html: emailShell('Thanks, we have your order', `<p style="font-size:15px;line-height:1.6">Hi ${esc(name.split(' ')[0])}, thank you for your order <strong>${ref}</strong>. Our team will check stock and freight, then send your payment details by email shortly. Please watch for that email.</p>${orderSummary(order)}<p style="font-size:13px;color:#5b6b63;margin-top:16px">Questions? Reply to this email or call ${esc(CONTACT.phone)}.</p>`) });
  if (!stored && !shopMail.sent && !custMail.sent) return NextResponse.json({ success: false, error: 'Checkout is temporarily unavailable. Please call 0420 128 746 or WhatsApp us to place your order.' }, { status: 503 });
  return NextResponse.json({ success: true, ref, total: order.amountDue });
}
