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
  const mail = await sendMail({ to: process.env.ORDER_EMAIL || FORMS.destinations.order || CONTACT.email, subject: `Payment screenshot for order ${id}`, html: emailShell('Payment screenshot received', table(fieldRow('Order', id) + fieldRow('Customer', o?.customerName || '-') + fieldRow('Amount due', o ? '$' + o.amountDue.toFixed(2) : '-')) + `<p style="font-size:14px">${esc(file.name)} is attached.</p>`), attachments: [{ filename: file.name || 'payment.jpg', content: buf }] });
  if (o) { o.status = 'payment-confirmed'; await saveOrder(o); }
  if (!mail.sent && !o) return NextResponse.json({ success: false, error: 'Upload is temporarily unavailable. Please email your screenshot to sales@buggiesforsale.com.au' }, { status: 503 });
  return NextResponse.json({ success: true });
}
