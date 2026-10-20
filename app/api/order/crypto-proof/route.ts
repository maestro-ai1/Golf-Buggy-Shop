import { NextRequest, NextResponse } from 'next/server';
import { CONTACT, FORMS } from '@/config/site';
import { REF_RE, aud, emailShell, esc, fieldRow, getOrder, limited, saveOrder, sendMail, table } from '@/lib/server';

export const runtime = 'nodejs';

const COINS = ['Bitcoin (BTC)', 'USDT (TRC20)', 'USDT (ERC20)'];
// Image signatures: JPEG, PNG, WebP (RIFF....WEBP), HEIC/HEIF (ftyp). Checked on the bytes, not just the browser-supplied type.
function looksLikeImage(b: Buffer) {
  return (b[0] === 0xff && b[1] === 0xd8) || (b[0] === 0x89 && b.toString('ascii', 1, 4) === 'PNG') || (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') || b.toString('ascii', 4, 8) === 'ftyp';
}

// Crypto checkout: customer uploads the payment screenshot. Shop gets a "PAID" email with the screenshot attached, the customer gets a confirmation email.
export async function POST(req: NextRequest) {
  if (limited(req, 5)) return NextResponse.json({ success: false, error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  const form = await req.formData().catch(() => null);
  if (!form) return NextResponse.json({ success: false, error: 'Invalid upload' }, { status: 400 });
  const id = String(form.get('id') || ''), coin = String(form.get('coin') || ''); const file = form.get('file') as File | null;
  if (!REF_RE.test(id) || !COINS.includes(coin) || !file || typeof file === 'string') return NextResponse.json({ success: false, error: 'Please choose a coin and attach your payment screenshot.' }, { status: 400 });
  if (file.size > 4 * 1024 * 1024) return NextResponse.json({ success: false, error: 'File too large (max 4MB)' }, { status: 400 });
  const buf = Buffer.from(await file.arrayBuffer());
  if (!looksLikeImage(buf)) return NextResponse.json({ success: false, error: 'Please upload a JPG, PNG, WebP or HEIC image' }, { status: 400 });

  // Order comes from the store when available. Without storage, fall back to the details the checkout page held (flagged to the shop as unverified).
  const o = await getOrder(id);
  const name = o?.customerName || String(form.get('name') || '').slice(0, 120);
  const email = o?.customerEmail || String(form.get('email') || '').slice(0, 160);
  const amount = o ? o.amountDue : Number(form.get('amount')) || 0;
  const validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://buggiesforsale.com.au';
  const ext = file.type === 'image/png' ? 'png' : file.type === 'image/webp' ? 'webp' : /hei/.test(file.type) ? 'heic' : 'jpg';

  const shop = await sendMail({
    to: process.env.ORDER_EMAIL || FORMS.destinations.order || CONTACT.email, replyTo: validEmail ? email : undefined,
    subject: `PAID (crypto): order ${id} ${amount ? aud(amount) : ''} via ${coin}`.replace(/\s+/g, ' '),
    html: emailShell('Crypto payment submitted: marked as paid', table(fieldRow('Order', id) + fieldRow('Customer', name || '-') + fieldRow('Customer email', email || '-') + fieldRow('Paid with', coin) + fieldRow('Amount due', amount ? aud(amount) + ' AUD' : '-') + fieldRow('Order record', o ? 'Found' : 'Not in store (details came from the customer\'s browser, verify)')) + `<p style="font-size:14px;line-height:1.6">The customer says they have paid and attached a screenshot. Check the transaction on the blockchain, then confirm in the portal. The customer has already been emailed an acknowledgement.</p>`, o ? { href: `${site}/admin/`, label: 'Open reply portal' } : undefined),
    attachments: [{ filename: `crypto-payment-${id}.${ext}`, content: buf }],
  });
  if (o) { o.status = 'screenshot-received'; o.cryptoCoin = coin; await saveOrder(o); }
  const cust = validEmail ? await sendMail({
    to: email, subject: `Payment received for order ${id}`,
    html: emailShell('Thank you, we have your crypto payment', `<p style="font-size:15px;line-height:1.6">Hi ${esc(name.split(' ')[0] || 'there')}, we have received your ${esc(coin)} payment screenshot for order <strong>${esc(id)}</strong>${amount ? ` (${aud(amount)} AUD)` : ''}.</p><p style="font-size:15px;line-height:1.6">We now verify the transaction on the blockchain, book your freight and email you again as soon as it is confirmed.</p><p style="font-size:13px;color:#5b6b63">Questions? Reply to this email or call ${esc(CONTACT.phone)}.</p>`),
  }) : { sent: false };
  if (!shop.sent && !cust.sent && !o) return NextResponse.json({ success: false, error: 'Upload is temporarily unavailable. Please email your screenshot to sales@buggiesforsale.com.au' }, { status: 503 });
  return NextResponse.json({ success: true });
}

// Public: the customer's own order reference is the token. Returns only the amount and status the customer already saw at checkout.
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id') || '';
  if (!REF_RE.test(id)) return NextResponse.json({ error: 'Invalid reference' }, { status: 400 });
  const o = await getOrder(id);
  if (!o) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ amountDue: o.amountDue, status: o.status, crypto: o.cryptoDiscount > 0 });
}
