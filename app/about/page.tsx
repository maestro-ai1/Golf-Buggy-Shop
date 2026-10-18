import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import InfoPage from '@/components/InfoPage';
import { TrustpilotBlock, JsonLd } from '@/components/Bits';
import { BRAND, CONTACT, PRODUCTS, SHOP, SITE } from '@/config/site';
import { meta, orgSchema } from '@/lib/seo';

// Primary: buggies australia. Secondary: golf cars australia, best golf buggy australia, mgi electric golf buggy australia, electric golf carts australia, buggy australia.
export const metadata = meta({
  title: 'About Buggies For Sale | Buggies Australia-Wide',
  description: 'Buggies For Sale is a Sydney-based supplier of buggies Australia-wide: golf buggies, golf carts, parts and off-road buggies. See who we are and how we work.',
  path: '/about/',
});

export default function About() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Buggies For Sale', url: SITE.url + '/about/', mainEntity: orgSchema() }} />
      <InfoPage crumb={{ name: 'About us', url: '/about/' }} title="About Buggies For Sale: Buggies Australia-Wide" lead="Golf buggies, golf carts and off-road buggies, supplied from Sydney and delivered across Australia.">
        <p>{BRAND.statement} We supply buggies Australia-wide, and every order is checked by a person before you pay.</p>

        <figure className="my-6 overflow-hidden rounded-2xl">
          <picture>
            <source type="image/avif" srcSet="/images/home/about-golf-cart.avif" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/home/about-golf-cart.webp" alt="Golf cart with two golfers driving along a fairway path at sunset" width={1200} height={800} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" />
          </picture>
        </figure>

        <h2>Who we are</h2>
        <p>{SITE.legalName} (ABN {CONTACT.abn}) was founded in Sydney, New South Wales, in 2023. Golfers, farmers, estates and families ask us the same questions: which one should I buy, what will it really cost to get here, and who do I call if I need help? We built the business to answer those questions up front.</p>

        <h2>What we supply</h2>
        <p>Today the catalogue lists {PRODUCTS.length}+ products. For golfers, that means push buggies, electric and remote control buggies and golf scooters from brands such as <Link href="/brands/mgi/">MGI</Link>, <Link href="/brands/stinger/">Stinger</Link>, <Link href="/brands/powakaddy/">PowaKaddy</Link>, <Link href="/brands/motocaddy/">Motocaddy</Link> and <Link href="/brands/clicgear/">Clicgear</Link>. Our MGI electric golf buggy Australia line-up includes the ZIP X1, ZIP X3 and ZIP X5 and the Ai Navigator remote control models.</p>
        <p>Golf cars Australia-wide go by many names, including golf carts, utility carts and buggies, and we supply them all: lithium and petrol carts from <Link href="/brands/ecar/">ECAR</Link>, <Link href="/brands/club-car/">Club Car</Link> and <Link href="/brands/ezgo/">E-Z-GO</Link>, plus used and clearance stock. You can compare all of our <Link href="/golf-carts/electric/">electric golf carts Australia-wide</Link> by seating, battery and price on one page. For work and recreation we list side-by-sides and off-road buggies from <Link href="/brands/polaris/">Polaris</Link>, <Link href="/brands/kubota/">Kubota</Link>, <Link href="/brands/kawasaki/">Kawasaki</Link>, <Link href="/brands/cfmoto/">CFMOTO</Link>, <Link href="/brands/hammerhead/">Hammerhead</Link> and <Link href="/brands/trailmaster/">Trailmaster</Link>, along with <Link href="/parts-accessories/">parts and accessories</Link> to keep them running.</p>

        <h2>How we choose and describe products</h2>
        <p>The best golf buggy Australia has to offer is the one that suits your course, your budget and your car boot, so we describe each product plainly instead of hyping it. We only list current models. Specifications come from the manufacturer or the Australian distributor, and each product page shows the weight, battery or engine details we can verify.</p>

        <h2>Our customer-first promise</h2>
        <ul>
          <li><strong>Real prices:</strong> every price is in AUD and includes GST. Delivery is free over ${SHOP.freeShippingThreshold.toLocaleString('en-AU')} to major metro and depot corridors and a flat ${SHOP.shippingFee} below that.</li>
          <li><strong>Checked before you pay:</strong> we confirm stock and freight first, then email your payment details. No payment is taken on the website.</li>
          <li><strong>Simple payment:</strong> Osko or EFT bank transfer, PayID, or Bitcoin and USDT with an extra 10% off.</li>
          <li><strong>People you can call:</strong> phone or WhatsApp {CONTACT.phone}, or email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Hours: {CONTACT.hours}.</li>
        </ul>
        <p>Read our <Link href="/delivery/">delivery information</Link> and <Link href="/returns/">returns policy</Link> before you order, and see the <Link href="/faq/">FAQ</Link> for answers to common questions.</p>

        <h2>Buying for a club, farm or fleet?</h2>
        <p>We quote multiple units, accessories and freight together. Send a <Link href="/wholesale/">wholesale enquiry</Link> and tell us what you need.</p>
      </InfoPage>

      <section className="section pt-0" aria-label="Next steps"><div className="container-x max-w-3xl">
        <div className="flex flex-wrap gap-3">
          <Link href="/shop/" className="btn btn-primary">Shop the full range <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="/contact/" className="btn btn-green">Talk to our team</Link>
          <a href="tel:+61420128746" className="btn btn-ghost">Call {CONTACT.phone}</a>
        </div>
      </div></section>
      <TrustpilotBlock />
    </>
  );
}
