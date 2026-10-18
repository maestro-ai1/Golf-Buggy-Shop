import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { CONTACT, SHOP, SITE } from '@/config/site';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Terms & Conditions', description: 'Terms and conditions for buying golf buggies, golf carts, parts and off-road buggies from Buggies For Sale, including pricing, payment, delivery and warranty.', path: '/terms/' });

export default function Terms() {
  return (
    <InfoPage crumb={{ name: 'Terms & conditions', url: '/terms/' }} title="Terms & conditions" lead={`${SITE.legalName}, ABN ${CONTACT.abn}.`}>
      <h2>Prices and GST</h2>
      <p>All prices are in Australian dollars and include 10% GST. We update prices regularly. If a price is shown incorrectly we may cancel the order and refund any payment.</p>
      <h2>Orders and payment</h2>
      <p>The minimum order is ${SHOP.minOrder}. After you place an order we confirm stock and freight, then send payment details by email. We accept bank transfer (Osko or EFT), PayID, and Bitcoin or USDT with a {SHOP.cryptoDiscount}% discount applied automatically at checkout. Your order is confirmed when payment is received.</p>
      <h2>Delivery</h2>
      <p>Delivery is free over ${SHOP.freeShippingThreshold.toLocaleString()} to major metro and depot corridors, otherwise ${SHOP.shippingFee} flat. See our <Link href="/delivery/">delivery page</Link>.</p>
      <h2>Warranty and returns</h2>
      <p>The manufacturer warranty applies to new goods. Our goods come with guarantees under the Australian Consumer Law that cannot be excluded. See our <Link href="/returns/">returns page</Link>.</p>
      <h2>Use of vehicles</h2>
      <p>Golf buggies, golf carts, quads and off-road buggies must be used lawfully, with suitable safety gear, and only where permitted. Road use rules differ by state and territory, and it is your responsibility to check them.</p>
      <h2>Contact</h2>
      <p>Questions about these terms? Email {CONTACT.email}.</p>
    </InfoPage>
  );
}
