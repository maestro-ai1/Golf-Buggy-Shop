import { NextRequest, NextResponse } from 'next/server';
import { CONTACT, REPLY } from '@/config/site';
import { aud, checkAdmin, emailShell, esc, getOrder, orderSummary, saveOrder, sendMail } from '@/lib/server';

export const runtime = 'nodejs';

// Owner replies "payment received": marks the order paid and emails the customer a receipt-style confirmation.
export async function POST(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  const { id, note } = await req.json();
  const o = await getOrder(id); if (!o) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  o.status = 'payment-confirmed'; await saveOrder(o);
  const extra = String(note || '').trim().slice(0, 1000);
  const html = emailShell(`Payment received for order ${o.orderNumber}`,
    `<p style="font-size:15px;line-height:1.6">Hi ${esc(o.customerName.split(' ')[0])}, we have received your payment of <strong>${aud(o.amountDue)}</strong>. Thank you.</p>`
    + (extra ? `<p style="font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(extra)}</p>` : '')
    + `<p style="font-size:15px;line-height:1.6">We are now arranging your delivery and will contact you with the details. Your order summary is below for your records.</p>${orderSummary(o)}`
    + `<p style="font-size:13px;color:#5b6b63;margin-top:16px">Questions? Reply to this email or call ${esc(CONTACT.phone)}.</p>`);
  const mail = await sendMail({ to: o.customerEmail, subject: `Payment received: order ${o.orderNumber}`, html });
  const wa = `https://wa.me/${REPLY.channels.whatsappCountryCode}${o.customerPhone.replace(/^0/, '').replace(/\D/g, '')}?text=${encodeURIComponent(`*Buggies For Sale*\nOrder ${o.orderNumber}: payment of ${aud(o.amountDue)} received. Thank you!${extra ? '\n\n' + extra : ''}`)}`;
  return NextResponse.json({ ok: true, emailed: mail.sent, whatsapp: wa });
}
