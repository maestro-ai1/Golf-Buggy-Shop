// The one place order totals are calculated: cart drawer, checkout, order API, emails and the admin portal all use it.
// Prices are AUD including GST. Maths is done in whole cents so no rounding drift appears between screens and emails.
import { SHOP } from '@/config/site';

export const ORDER_RULES = { minOrder: SHOP.minOrder, freeShippingThreshold: SHOP.freeShippingThreshold, shippingFee: SHOP.shippingFee, cryptoDiscountPct: SHOP.cryptoDiscount };

export interface Totals {
  subtotal: number;        // goods, GST included
  shipping: number;        // 0 when free
  cryptoDiscount: number;  // 0 unless the customer chose crypto
  total: number;           // amount to pay: subtotal + freight - crypto discount
  gst: number;             // GST already included in the total (1/11)
}
const cents = (n: number) => Math.round(n * 100);
const dollars = (c: number) => c / 100;

export function computeTotals(lines: { price: number; quantity: number }[], crypto: boolean, rules = ORDER_RULES): Totals {
  const sub = lines.reduce((s, l) => s + cents(l.price) * l.quantity, 0);
  const ship = sub === 0 || sub >= cents(rules.freeShippingThreshold) ? 0 : cents(rules.shippingFee);
  const disc = crypto ? Math.round((sub * rules.cryptoDiscountPct) / 100) : 0;
  const total = Math.max(0, sub + ship - disc);
  return { subtotal: dollars(sub), shipping: dollars(ship), cryptoDiscount: dollars(disc), total: dollars(total), gst: dollars(Math.round(total / 11)) };
}
