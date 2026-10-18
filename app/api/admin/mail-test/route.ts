import { NextRequest, NextResponse } from 'next/server';
import { CONTACT, FORMS } from '@/config/site';
import { checkAdmin, emailShell, mailConfigured, sendMail, verifyMail } from '@/lib/server';

export const runtime = 'nodejs';

// Owner tool: confirms the Zoho (or other SMTP) settings work and sends a test message to the order mailbox.
export async function GET(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  return NextResponse.json({ configured: mailConfigured(), to: process.env.ORDER_EMAIL || FORMS.destinations.order || CONTACT.email, ...(await verifyMail()) });
}

export async function POST(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  const to = process.env.ORDER_EMAIL || FORMS.destinations.order || CONTACT.email;
  const v = await verifyMail();
  if (!v.ok) return NextResponse.json({ ok: false, error: v.error }, { status: 502 });
  const r = await sendMail({ to, subject: 'Test email from your website', html: emailShell('Email test', '<p style="font-size:15px;line-height:1.6">This is a test from the Buggies For Sale reply portal. If you can read this in your Zoho inbox, orders and enquiries will arrive the same way.</p>') });
  return NextResponse.json(r.sent ? { ok: true, to } : { ok: false, error: ('error' in r && r.error) || r.reason }, { status: r.sent ? 200 : 502 });
}
