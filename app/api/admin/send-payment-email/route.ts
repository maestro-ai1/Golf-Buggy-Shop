import { NextRequest, NextResponse } from 'next/server';
import { REPLY } from '@/config/site';
import { amountBox, aud, checkAdmin, emailShell, esc, fieldRow, getOrder, orderSummary, parsePaymentDetail, saveOrder, sendMail, table } from '@/lib/server';

export const runtime = 'nodejs';

// Admin pastes one blob of payment info; it is parsed into copyable fields and emailed with a link to the public copy page.
export async function POST(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  const { id, methodId, detail } = await req.json();
  const o = await getOrder(id); if (!o) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  if (!detail || String(detail).trim().length < 4) return NextResponse.json({ error: 'Paste the payment details first' }, { status: 400 });
  const method = REPLY.paymentMethods.find((m) => m.id === methodId) || REPLY.paymentMethods[0];
  o.paymentDetails = String(detail); o.paymentMethodId = method.id; o.status = 'payment-sent'; await saveOrder(o);
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://buggiesforsale.com.au';
  const link = `${site}/order/payment-details/?id=${encodeURIComponent(o.orderNumber)}`;
  const fields = parsePaymentDetail(o.paymentDetails);
  const terms = [method.opening.replace('{amount}', aud(o.amountDue)).replace('{ref}', o.orderNumber), method.closing, `Please pay within ${REPLY.deadlineHours} hours to hold your order.`];
  const html = emailShell(`Payment details for order ${o.orderNumber}`, `<p style="font-size:15px;line-height:1.6">Hi ${esc(o.customerName.split(' ')[0])}, here are your payment details. Tap the button below to copy each field easily. After you pay, upload a screenshot on that page (or reply to this email with it) and we will confirm your payment by email.</p>${amountBox(o)}${table(fields.map((f) => fieldRow(f.label, f.value)).join(''))}<p style="margin:14px 0 20px;font-size:14px;line-height:1.7">${terms.map(esc).join('<br>')}</p>${orderSummary(o)}`, { href: link, label: 'Open payment page and copy details' });
  const mail = await sendMail({ to: o.customerEmail, subject: `Payment details for order ${o.orderNumber}`, html });
  return NextResponse.json({ ok: true, emailed: mail.sent, link, fields, whatsapp: `https://wa.me/${REPLY.channels.whatsappCountryCode}${o.customerPhone.replace(/^0/, '').replace(/\D/g, '')}?text=${encodeURIComponent(`*${'Buggies For Sale'}*\nOrder ${o.orderNumber}: payment details\n` + fields.map((f) => `${f.label}: ${f.value}`).join('\n') + `\n\nCopy here: ${link}`)}` });
}
