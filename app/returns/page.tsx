import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Returns, Refunds & Warranty', description: 'Returns, refunds and warranty information for golf buggies, golf carts and parts from Buggies For Sale, including your rights under the Australian Consumer Law.', path: '/returns/' });

export default function Returns() {
  return (
    <InfoPage crumb={{ name: 'Returns & warranty', url: '/returns/' }} title="Returns, refunds & warranty" lead="Your rights under the Australian Consumer Law always apply.">
      <p>Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and to compensation for any other reasonably foreseeable loss or damage. You are also entitled to have goods repaired or replaced if they fail to be of acceptable quality and the failure does not amount to a major failure.</p>
      <h2>Damaged or incorrect goods</h2>
      <p>Inspect your delivery on arrival. If anything is damaged, faulty or not as described, contact us as soon as possible with your order reference and photos. We will arrange a repair, replacement or refund as the law requires.</p>
      <h2>Manufacturer warranty</h2>
      <p>New products carry the manufacturer warranty. Warranty terms differ by brand and model, and the conditions are provided with your order. Lithium battery conversions should be installed by a qualified person, and installation photos may be required to register the warranty.</p>
      <h2>Change of mind</h2>
      <p>Change-of-mind returns are not guaranteed by law. Contact us before you order if you are unsure about a model, and we will help you choose. If a change-of-mind return is agreed, goods must be unused and in original packaging, and freight costs may apply.</p>
      <h2>How to contact us</h2>
      <p>Call 0420 128 746, WhatsApp, or use the <Link href="/contact/">contact form</Link>. Please include your order reference.</p>
    </InfoPage>
  );
}
