import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { meta } from '@/lib/seo';
import { SHOP } from '@/config/site';

export const metadata = meta({ title: 'Returns, Refunds & Warranty', description: `${SHOP.returnDays}-day returns, refunds and warranty for golf buggies, golf carts and parts from Buggies For Sale, plus your rights under Australian Consumer Law.`, path: '/returns/' });

export default function Returns() {
  return (
    <InfoPage crumb={{ name: 'Returns & warranty', url: '/returns/' }} title="Returns, refunds & warranty" lead={`${SHOP.returnDays}-day returns, and your rights under the Australian Consumer Law always apply.`}>
      <p>Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and to compensation for any other reasonably foreseeable loss or damage. You are also entitled to have goods repaired or replaced if they fail to be of acceptable quality and the failure does not amount to a major failure.</p>
      <h2>Damaged or incorrect goods</h2>
      <p>Inspect your delivery on arrival. If anything is damaged, faulty or not as described, contact us as soon as possible with your order reference and photos. We will arrange a repair, replacement or refund as the law requires.</p>
      <h2>Manufacturer warranty</h2>
      <p>New products carry the manufacturer warranty. Warranty terms differ by brand and model, and the conditions are provided with your order. Lithium battery conversions should be installed by a qualified person, and installation photos may be required to register the warranty.</p>
      <h2>{SHOP.returnDays}-day return policy</h2>
      <p>You can return an item within {SHOP.returnDays} days of delivery if you change your mind. Contact us within those {SHOP.returnDays} days with your order reference and we will confirm the return. Goods must be unused, undamaged and in their original packaging with all accessories. Return freight is paid by the buyer, and your refund is sent to the original payment method once we receive and check the goods.</p>
      <p>This is in addition to your rights under the Australian Consumer Law, which never expire because of this policy. For faulty, damaged or incorrect goods we cover the return freight. Contact us before you order if you are unsure about a model, and we will help you choose.</p>
      <h2>How to contact us</h2>
      <p>Call 0420 128 746, WhatsApp, or use the <Link href="/contact/">contact form</Link>. Please include your order reference.</p>
    </InfoPage>
  );
}
