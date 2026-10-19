import Link from 'next/link';
import { ArrowRight, BadgeCheck, Headset, Truck, Wallet } from 'lucide-react';
import Pic from '@/components/Pic';
import ProductGrid from '@/components/ProductGrid';
import { toCard } from '@/components/ProductCard';
import { Breadcrumbs, Faq, JsonLd, SectionHead } from '@/components/Bits';
import { CONTACT, PRODUCTS, SHOP, SITE, pageByUrl } from '@/config/site';
import { abs, faqSchema, meta } from '@/lib/seo';

// Primary: golf buggies for sale australia. Secondary: off road buggies for sale australia, golf push buggy australia, golf scooters for sale australia, buy a buggy, golf cart batteries australia.
export const metadata = meta({
  title: 'Golf Buggies For Sale Australia | Shop Carts & Parts',
  description: 'Shop golf buggies for sale Australia-wide: push, electric and remote control buggies, golf carts, batteries and off-road buggies. Free delivery over $1,000.',
  path: '/shop/',
});

const CATS = ['/golf-buggies/', '/golf-carts/', '/off-road-buggies/', '/parts-accessories/'];

const FAQS: [string, string][] = [
  ['What golf buggies are for sale in Australia?', `We list push buggies, motorised electric buggies, remote control golf buggies, ride-on buggies and golf scooters, plus golf carts and off-road buggies. Every product page shows the GST-inclusive price, the specifications and the delivered cost to your postcode.`],
  ['What is the minimum order and how much is delivery?', `The minimum order is $${SHOP.minOrder}. Delivery is free over $${SHOP.freeShippingThreshold.toLocaleString('en-AU')} to major metro and depot corridors, and a flat $${SHOP.shippingFee} freight fee applies below that. We confirm regional freight before dispatch.`],
  ['How do I pay for a buggy or golf cart?', 'You can pay by bank transfer (Osko or EFT), PayID, or Bitcoin or USDT. Crypto payments receive an extra 10% off, applied automatically at checkout. We email your payment details after we confirm stock and freight.'],
  ['Do the prices include GST?', 'Yes. Every price on the site is in Australian dollars and includes 10% GST.'],
  ['Can I buy for a golf club, farm or business?', 'Yes. Send us a wholesale or fleet enquiry and we will quote multiple units, accessories and freight in one order.'],
];

export default function Shop() {
  const trail = [{ name: 'Shop', url: '/shop/' }];
  const tiles = CATS.map((url) => {
    const page = pageByUrl(url);
    const list = PRODUCTS.filter((p) => p.categories.some((c) => c.startsWith(url)));
    return page ? { url, name: page.name.replace(/ \(Hub\)$/, ''), count: list.length, image: list[0]?.images[0] } : null;
  }).filter(Boolean) as { url: string; name: string; count: number; image?: string }[];

  const schema = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Golf Buggies For Sale Australia', url: abs('/shop/'), description: 'Golf buggies, golf carts, parts, accessories and off-road buggies for sale in Australia.', isPartOf: { '@id': abs('/#website') }, mainEntity: { '@type': 'ItemList', numberOfItems: PRODUCTS.length, itemListElement: PRODUCTS.slice(0, 24).map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/products/${p.slug}/`), name: p.name })) } },
    faqSchema(FAQS),
  ];

  const blocks = [
    { h: 'Golf buggies', href: '/golf-buggies/', cta: 'Shop golf buggies', body: <>Choose a <Link href="/golf-buggies/push-pull-trolleys/">golf push buggy</Link> for a light, simple round, a <Link href="/golf-buggies/motorised-electric/">motorised electric buggy</Link> that does the work for you, or a <Link href="/golf-buggies/remote-control/">remote control golf buggy</Link> that follows your lead. Order a golf push buggy Australia-wide with the delivered cost shown before you pay, or try <Link href="/golf-buggies/golf-scooters/">golf scooters for sale Australia-wide</Link> if you prefer to ride.</> },
    { h: 'Golf carts', href: '/golf-carts/', cta: 'Shop golf carts', body: <>New lithium and petrol carts in two to eight seats, plus <Link href="/golf-carts/used/">used golf carts</Link> and <Link href="/clearance/">clearance carts</Link>. Compare <Link href="/golf-carts/electric/">electric golf carts Australia-wide</Link> by seating, battery and warranty, or browse the <Link href="/brands/ecar/">ECAR</Link> and <Link href="/brands/club-car/">Club Car</Link> ranges.</> },
    { h: 'Off-road buggies', href: '/off-road-buggies/', cta: 'Shop off-road buggies', body: <>Off road buggies for sale Australia-wide include <Link href="/off-road-buggies/dune-buggies/">dune and beach buggies</Link>, <Link href="/off-road-buggies/side-by-sides-utvs/">side-by-sides</Link>, <Link href="/off-road-buggies/go-karts/">go karts and off road karts</Link> and <Link href="/off-road-buggies/kids-buggies/">youth buggies</Link>, from brands such as <Link href="/brands/polaris/">Polaris</Link>, <Link href="/brands/kubota/">Kubota</Link> and <Link href="/brands/kawasaki/">Kawasaki</Link>.</> },
    { h: 'Parts and accessories', href: '/parts-accessories/', cta: 'Shop parts & accessories', body: <>Find <Link href="/parts-accessories/golf-buggy-parts/lithium-batteries/">golf cart batteries Australia-wide</Link>, chargers, wheels, seat belts, lights and <Link href="/parts-accessories/golf-cart-accessories/">golf cart accessories</Link>, with fitment checked before you pay.</> },
  ];

  const why = [
    { Icon: BadgeCheck, t: 'Prices include GST', d: 'Every price is in AUD with GST included, so the price you see is the price you pay for the product.' },
    { Icon: Truck, t: `Free delivery over $${SHOP.freeShippingThreshold.toLocaleString('en-AU')}`, d: `A flat $${SHOP.shippingFee} freight fee applies below that. Regional freight is confirmed before dispatch.` },
    { Icon: Wallet, t: 'Pay your way', d: 'Bank transfer (Osko or EFT), PayID, or Bitcoin and USDT with an extra 10% off at checkout.' },
    { Icon: Headset, t: 'Talk to a person', d: `Call or WhatsApp ${CONTACT.phone} for stock, freight and fitment answers before you order.` },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <section className="border-b border-line bg-white"><div className="container-x py-8">
        <Breadcrumbs trail={trail} />
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Golf Buggies For Sale Australia: Shop Buggies, Carts &amp; Parts</h1>
        <p className="mt-3 max-w-3xl text-lg text-muted">Shop golf buggies for sale Australia-wide, from push and electric buggies to remote control models, plus golf carts, lithium batteries, accessories and off-road buggies. {PRODUCTS.length} products, all prices include GST, the minimum order is ${SHOP.minOrder} and delivery is free over ${SHOP.freeShippingThreshold.toLocaleString('en-AU')}.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/golf-buggies/" className="btn btn-primary">Shop golf buggies <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="/golf-carts/" className="btn btn-green">Shop golf carts</Link>
          <Link href="/contact/" className="btn btn-ghost">Ask an expert</Link>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((t) => (
            <li key={t.url}><Link href={t.url} className="card card-hover group flex h-full flex-col overflow-hidden">
              <span className="product-frame m-3 mb-0 border border-line/70">{t.image ? <Pic base={t.image} alt={`${t.name}: shop ${t.name.toLowerCase()} online in Australia`} sizes="(max-width: 640px) 45vw, 260px" /> : null}</span>
              <span className="flex flex-1 flex-col p-4"><span className="font-display text-[17px] font-extrabold leading-tight text-fw-900">{t.name}</span><span className="mt-1 text-xs font-semibold text-muted">{t.count} product{t.count === 1 ? '' : 's'}</span><span className="mt-auto pt-3 text-sm font-extrabold text-accent-600">Shop now <ArrowRight size={14} className="inline" aria-hidden="true" /></span></span>
            </Link></li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">Also browse <Link href="/brands/" className="font-bold text-fw-700 underline">all brands</Link> or the <Link href="/clearance/" className="font-bold text-fw-700 underline">clearance</Link> range.</p>
      </div></section>

      <section className="section"><div className="container-x"><SectionHead title="All products" /><ProductGrid products={PRODUCTS.map(toCard)} /></div></section>

      <section className="section bg-white" aria-labelledby="shop-by-cat-h"><div className="container-x">
        <h2 id="shop-by-cat-h" className="text-3xl font-black md:text-4xl">Shop by category</h2>
        <p className="mt-3 max-w-3xl text-muted">Not sure where to start with golf buggies for sale Australia-wide? Pick the type that matches how you will use it, then compare specifications, warranty and delivered price on each product page.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {blocks.map((b) => (
            <article key={b.h} className="card flex flex-col p-6">
              <h3 className="text-xl font-extrabold text-fw-900">{b.h}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-[#2c3a33] [&_a]:font-semibold [&_a]:text-fw-700 [&_a]:underline">{b.body}</p>
              <Link href={b.href} className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-accent-600 hover:underline">{b.cta} <ArrowRight size={16} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div></section>

      <section className="section" aria-labelledby="why-h"><div className="container-x">
        <h2 id="why-h" className="text-3xl font-black md:text-4xl">Why buy from {SITE.name}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ Icon, t, d }) => (
            <li key={t} className="card p-5"><Icon size={26} className="text-fw-600" aria-hidden="true" /><h3 className="mt-3 text-lg font-extrabold">{t}</h3><p className="mt-1 text-sm leading-relaxed text-muted">{d}</p></li>
          ))}
        </ul>
      </div></section>

      <section className="section pt-0" aria-labelledby="how-h"><div className="container-x max-w-4xl">
        <h2 id="how-h" className="text-3xl font-black md:text-4xl">How to buy a buggy online</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-6 leading-relaxed text-[#2c3a33]">
          <li>Ready to buy a buggy? Pick the type that matches the job and add it to your cart.</li>
          <li>Check out with your delivery address. No payment is taken on the site.</li>
          <li>We confirm stock and freight, then email your payment details.</li>
          <li>Pay by Osko, EFT, PayID or crypto, send us the screenshot, and we book your delivery.</li>
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/checkout/" className="btn btn-primary">Go to checkout <ArrowRight size={16} aria-hidden="true" /></Link>
          <a href="tel:+61420128746" className="btn btn-green">Call {CONTACT.phone}</a>
          <a href="https://wa.me/61420128746?text=Hi%20Buggies%20For%20Sale%2C%20" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp us</a>
        </div>
      </div></section>

      <Faq items={FAQS} title="Golf buggies for sale: your questions answered" />
    </>
  );
}
