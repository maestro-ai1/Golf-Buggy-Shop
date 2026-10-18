import { NextRequest, NextResponse } from 'next/server';
import { checkAdmin, emailShell, esc, getEnquiry, sendMail } from '@/lib/server';
import { getRedis } from '@/lib/store-access';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  const { id, message } = await req.json();
  const e = await getEnquiry(id); if (!e) return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
  if (!message || String(message).trim().length < 3) return NextResponse.json({ error: 'Write a reply first' }, { status: 400 });
  const mail = await sendMail({ to: e.email, subject: `Re: your enquiry${e.topic ? ' about ' + e.topic : ''} (${e.id})`, html: emailShell(`Hi ${e.name.split(' ')[0]},`, `<p style="font-size:15px;line-height:1.7;white-space:pre-wrap">${esc(message)}</p><p style="font-size:12px;color:#5b6b63;margin-top:18px;border-top:1px solid #e3ddd0;padding-top:12px">Your message: ${esc(e.message.slice(0, 300))}</p>`) });
  e.status = 'replied'; e.reply = String(message); await getRedis()?.hset('bfs:enquiries', { [e.id]: JSON.stringify(e) });
  return NextResponse.json({ ok: true, emailed: mail.sent });
}
