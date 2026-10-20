import { NextRequest, NextResponse } from 'next/server';
import { CRYPTO } from '@/config/site';
import { REF_RE, getOrder } from '@/lib/server';

export const runtime = 'nodejs';

// Public: the customer's own order reference is the token. Only crypto orders get the wallet page; PayID and bank orders are untouched.
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id') || '';
  if (!REF_RE.test(id)) return NextResponse.json({ error: 'Invalid reference' }, { status: 400 });
  const o = await getOrder(id);
  if (!o) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  if (!/crypto/i.test(o.paymentMethod)) return NextResponse.json({ error: 'This order was not placed with crypto.' }, { status: 400 });
  return NextResponse.json({
    orderNumber: o.orderNumber, amountDue: o.amountDue, subtotal: o.subtotal, shipping: o.shipping, cryptoDiscount: o.cryptoDiscount, status: o.status,
    wallets: [
      { id: 'btc', label: 'Bitcoin', short: 'BTC', network: 'Bitcoin network', address: CRYPTO.bitcoinAddress, uri: 'bitcoin:' + CRYPTO.bitcoinAddress },
      { id: 'usdt-trc20', label: 'USDT', short: 'USDT', network: 'TRC20 (TRON network)', address: CRYPTO.usdtTrc20Address, uri: CRYPTO.usdtTrc20Address },
      { id: 'usdt-erc20', label: 'USDT', short: 'USDT', network: 'ERC20 (Ethereum network)', address: CRYPTO.usdtErc20Address, uri: CRYPTO.usdtErc20Address },
    ].filter((w) => w.address),
  });
}
