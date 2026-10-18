import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { TrustpilotBlock, JsonLd } from '@/components/Bits';
import { BRAND, CONTACT, PRODUCTS, SITE } from '@/config/site';
import { meta, orgSchema } from '@/lib/seo';

export const metadata = meta({ title: 'About Buggies For Sale: Australia’s Buggy Superstore', description: 'Buggies For Sale is a Sydney-based Australian retailer of golf buggies, golf carts, parts and off-road buggies, founded in 2023, with prices set 2% below the market.', path: '/about/' });

export default function About() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Buggies For Sale', url: SITE.url + '/about/', mainEntity: orgSchema() }} />
      <InfoPage crumb={{ name: 'About us', url: '/about/' }} title="About Buggies For Sale" lead="Australia’s golf buggy, golf cart and off-road buggy superstore.">
        <p>{BRAND.statement}</p>
        <h2>What we do</h2>
        <p>We bring together the golf buggies, lithium golf carts, accessories and off-road buggies that Australians ask for, in one easy-to-shop catalogue. Today that is {PRODUCTS.length}+ products from brands including MGI, Stinger, PowerBug, ECAR, Trailmaster, Kayo and Hammerhead.</p>
        <h2>Our price promise</h2>
        <p>We check comparable Australian retailers for every model we list and set our price 2% below the lowest we find. Prices include GST and you can see the delivered cost before you pay.</p>
        <h2>How we work</h2>
        <ul><li><strong>Founded:</strong> 2023, Sydney, New South Wales</li><li><strong>Legal name:</strong> {SITE.legalName}, ABN {CONTACT.abn}</li><li><strong>Delivery:</strong> Australia-wide, free over $1,000 to major metro and depot corridors</li><li><strong>Payments:</strong> EFT, PayID, Visa, Mastercard, Amex, BTC and USDT (extra 5% off)</li><li><strong>Support:</strong> Call or WhatsApp {CONTACT.phone}</li></ul>
        <h2>Talk to us</h2>
        <p>Not sure which buggy or cart is right? <Link href="/contact/">Contact the team</Link> and tell us your course, property or budget.</p>
      </InfoPage>
      <TrustpilotBlock />
    </>
  );
}
