import { NextRequest, NextResponse } from 'next/server';
import { REF_RE, getOrder, parsePaymentDetail } from '@/lib/server';

export const runtime = 'nodejs';

// Public: the customer's own order reference is the token. Returns only what the customer's email already contained.
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id') || '';
  if (!REF_RE.test(id)) return NextResponse.json({ error: 'Invalid reference' }, { status: 400 });
  const o = await getOrder(id);
  if (!o || !o.paymentDetails) return NextResponse.json({ error: 'Payment details are not available yet. We will email them shortly.' }, { status: 404 });
  return NextResponse.json({ orderNumber: o.orderNumber, amountDue: o.amountDue, paymentMethod: o.paymentMethod, fields: parsePaymentDetail(o.paymentDetails), status: o.status });
}
