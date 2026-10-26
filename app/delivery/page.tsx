import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { meta } from '@/lib/seo';
import { SHOP } from '@/config/site';

export const metadata = meta({ title: 'Delivery & Freight Across Australia', description: 'Delivery information for golf buggies, golf carts and parts: free over $1,000 to major metro and depot corridors, flat $95 below, dispatch within 24-48 business hours.', path: '/delivery/' });

export default function Delivery() {
  return (
    <InfoPage crumb={{ name: 'Delivery', url: '/delivery/' }} title="Delivery & freight" lead="Australia-wide delivery with clear costs before you pay.">
      <h2>What it costs</h2>
      <ul><li><strong>Orders over $1,000:</strong> free delivery to major capital city metro areas and depot corridors.</li><li><strong>Orders under $1,000:</strong> flat $95 freight fee.</li><li><strong>Regional and remote:</strong> we confirm freight before you pay, and some locations need a quote.</li></ul>
      <h2>How long it takes</h2>
      <p>We aim to dispatch from our depots within 24 to 48 business hours of confirming your order and payment. Transit to major metro areas is typically {SHOP.transitDays.min} to {SHOP.transitDays.max} business days after dispatch. Regional and remote locations can take longer, and we confirm the timing before you pay.</p>
      <h2>Large items and golf carts</h2>
      <p>Golf carts, buggies and heavy items ship by insured freight. Where available we arrange tailgate delivery to your address, golf shed or farm gate. Tell us about access when you order so the driver is prepared.</p>
      <h2>On delivery</h2>
      <p>Please inspect your goods as soon as they arrive and note any visible damage on the delivery paperwork, then contact us straight away. See our <Link href="/returns/">returns page</Link> for your rights.</p>
      <h2>Orders from other states</h2>
      <p>We deliver to New South Wales, Queensland, Victoria, South Australia, Western Australia, Tasmania and the ACT. Questions? Call 0420 128 746.</p>
    </InfoPage>
  );
}
