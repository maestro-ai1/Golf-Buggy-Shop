import { NextRequest, NextResponse } from 'next/server';
import { CONTACT, FORMS } from '@/config/site';
import { esc, emailShell, fieldRow, limited, newId, saveEnquiry, sendMail, table, type StoredEnquiry } from '@/lib/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  if (limited(req)) return NextResponse.json({ success: false, error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  let b: Record<string, string>;
  try { b = await req.json(); } catch { return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 }); }
  if (b.botcheck) return NextResponse.json({ success: true }); // honeypot: pretend success
  if (Date.now() - Number(b.t || 0) < 2500) return NextResponse.json({ success: true }); // time-trap
  const name = (b.name || '').trim().slice(0, 120), email = (b.email || '').trim().slice(0, 160), message = (b.message || '').trim().slice(0, 4000);
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 5) return NextResponse.json({ success: false, error: 'Please complete your name, a valid email and your message.' }, { status: 400 });
  const type = b.formName === 'wholesale' ? 'wholesale' : 'contact';
  const enq: StoredEnquiry = { id: newId(), type, name, email, phone: (b.phone || '').slice(0, 40), message, topic: (b.topic || '').slice(0, 160), status: 'new', createdAt: Date.now() };
  const stored = await saveEnquiry(enq);
  const to = (type === 'wholesale' ? FORMS.destinations.wholesale : FORMS.destinations.contact) || CONTACT.email;
  const mail = await sendMail({
    to: process.env[type === 'wholesale' ? 'WHOLESALE_EMAIL' : 'CONTACT_EMAIL'] || to, replyTo: email,
    subject: `${type === 'wholesale' ? 'Wholesale enquiry' : 'Website enquiry'}${enq.topic ? ': ' + enq.topic : ''} (${enq.id})`,
    html: emailShell('New enquiry', table(fieldRow('Reference', enq.id) + fieldRow('Name', name) + fieldRow('Email', email) + fieldRow('Phone', enq.phone || '-') + fieldRow('Topic', enq.topic || '-')) + `<p style="margin:16px 0 0;white-space:pre-wrap;font-size:14px;line-height:1.6">${esc(message)}</p>`, stored ? { href: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://buggiesforsale.com.au'}/admin/enquiries/`, label: 'Reply in Dashboard' } : undefined),
  });
  if (!mail.sent && !stored) return NextResponse.json({ success: false, error: 'Our enquiry form is temporarily unavailable. Please call 0420 128 746 or WhatsApp us.' }, { status: 503 });
  return NextResponse.json({ success: true, id: enq.id });
}
