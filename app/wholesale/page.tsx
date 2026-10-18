import ContactForm from '@/components/ContactForm';
import InfoPage from '@/components/InfoPage';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Wholesale & Fleet Golf Buggies and Golf Carts', description: 'Wholesale, club, resort and fleet pricing on golf buggies, golf carts and off-road buggies across Australia. Request a quote and purchase-order invoicing from Buggies For Sale.', path: '/wholesale/' });

export default function Wholesale() {
  return (
    <InfoPage crumb={{ name: 'Wholesale & fleet', url: '/wholesale/' }} title="Wholesale & fleet buyers" lead="Golf clubs, resorts, schools, councils, farms and dealers: tell us what you need and we will quote.">
      <p>We supply golf buggies, lithium golf carts, utility carts and off-road buggies to clubs, resorts, estates, farms and trade buyers across Australia. Volume orders can include delivery coordination, accessories and purchase-order invoicing.</p>
      <ul><li>Fleet quotes for 3 or more units</li><li>Purchase order and invoice payment</li><li>Lithium upgrades and accessories bundled in</li><li>Delivery to your site Australia-wide</li></ul>
      <div className="not-prose mt-8"><ContactForm formName="wholesale" topic="Wholesale enquiry" thanks="/thank-you-wholesale/" cta="Request a quote" /></div>
    </InfoPage>
  );
}
