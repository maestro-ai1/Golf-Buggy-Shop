import { NextRequest, NextResponse } from 'next/server';
import { CONTACT, FORMS } from '@/config/site';
import { REF_RE, emailShell, esc, fieldRow, getOrder, limited, saveOrder, sendMail, table } from '@/lib/server';

export const runtime = 'nodejs';

// Customer uploads a payment screenshot (JPG/PNG/WebP/HEIC, max 4MB). Emails the shop and marks the order payment-confirmed.
export async function POST(req: NextRequest) {
  if (limited(req, 5)) return NextResponse.json({ success: false, error: 'Too many requests.' }, { status: 429 });
  const form = await req.formData().catch(() => null);
  if (!form) return NextResponse.json({ success: false, error: 'Invalid upload' }, { status: 400 });
  const id = String(form.get('id') || ''); const file = form.get('file') as File | null;
  if (!REF_RE.test(id) || !file || typeof file === 'string') return NextResponse.json({ success: false, error: 'Missing order reference or file' }, { status: 400 });
  if (file.size > 4 * 1024 * 1024) return NextResponse.json({ success: false, error: 'File too large (max 4MB)' }, { status: 400 });
  if (!/^image\/(jpeg|png|webp|heic|heif)$/i.test(file.type)) return NextResponse.json({ success: false, error: 'Please upload a JPG, PNG, WebP or HEIC image' }, { status: 400 });
  const o = await getOrder(id);
  const buf = Buffer.from(await file.arrayBuffer());
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://buggiesforsale.com.au';
  const mail = await sendMail({ to: process.env.ORDER_EMAIL || FORMS.destinations.order || CONTACT.email, replyTo: o?.customerEmail, subject: `Payment screenshot for order ${id}${o && /crypto/i.test(o.paymentMethod) ? ' (crypto)' : ''}`, html: emailShell('Payment screenshot received', table(fieldRow('Order', id) + fieldRow('Customer', o?.customerName || '-') + fieldRow('Payment method', o?.paymentMethod || '-') + fieldRow('Amount due', o ? '$' + o.amountDue.toFixed(2) : '-')) + `<p style="font-size:14px">${esc(file.name)} is attached. Check it against your bank or wallet, then press "Payment received" in the portal to confirm to the customer.</p>`, o ? { href: `${site}/admin/`, label: 'Open reply portal' } : undefined), attachments: [{ filename: file.name || 'payment.jpg', content: buf }] });
  if (o) {
    o.status = 'screenshot-received'; await saveOrder(o);
    // Acknowledge to the customer so they know the screenshot arrived.
    await sendMail({ to: o.customerEmail, subject: `We received your payment screenshot: order ${id}`, html: emailShell('Screenshot received', `<p style="font-size:15px;line-height:1.6">Hi ${esc(o.customerName.split(' ')[0])}, thank you. We have your payment screenshot for order <strong>${esc(id)}</strong>. We will check it and email you as soon as your payment is confirmed.</p><p style="font-size:13px;color:#5b6b63">Questions? Reply to this email or call ${esc(CONTACT.phone)}.</p>`) });
  }
  if (!mail.sent && !o) return NextResponse.json({ success: false, error: 'Upload is temporarily unavailable. Please email your screenshot to sales@buggiesforsale.com.au' }, { status: 503 });
  return NextResponse.json({ success: true });
}
