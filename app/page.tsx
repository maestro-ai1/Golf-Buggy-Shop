import Link from 'next/link';
import { ArrowRight, BadgePercent, Headset, ShieldCheck, Truck } from 'lucide-react';
import Pic from '@/components/Pic';
import ProductCard, { toCard } from '@/components/ProductCard';
import { Faq, JsonLd, SectionHead, TrustpilotBlock } from '@/components/Bits';
import BrandStrip from '@/components/BrandStrip';
import { BLOG_POSTS, BRAND, PRODUCTS, money, pageByUrl } from '@/config/site';
import { FAQ_ITEMS } from '@/content/faq';
import { faqSchema, meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Buggies For Sale Australia | Golf, Electric & Beach Buggies',
  description: 'Buggies for sale in Australia: golf buggies, electric and remote buggies, golf carts, beach buggies, parts and accessories. Free delivery over $1,000.',
  path: '/',
});

const find = (re: RegExp) => PRODUCTS.find((p) => re.test(p.name));
const tile = (name: string, url: string, blurb: string, re: RegExp) => ({ name, url, blurb, p: find(re) });

export default function Home() {
  const home = pageByUrl('/');
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
  const tiles = [
    tile('Golf Buggies', '/golf-buggies/', 'Push, electric and remote buggies', /MGI ZIP X3/),
    tile('Golf Carts', '/golf-carts/', 'New lithium electric carts, 2 to 8 seats', /Magnum 4S 4 Seat/),
    tile('Off-Road Buggies', '/off-road-buggies/', 'Dune buggies, side by sides, go karts', /Kayo S150/),
    tile('Lithium Batteries', '/parts-accessories/golf-buggy-parts/lithium-batteries/', 'Upgrade your cart or buggy', /Core 48V 105Ah Lithium Battery Package for Club Car/),
    tile('Accessories', '/parts-accessories/golf-cart-accessories/', 'Holders, seat belts, lights, mats', /LED Deluxe Light Kit/),
    tile('Wheels & Tyres', '/parts-accessories/golf-buggy-parts/wheels-rims-tyres/', 'Mag wheels and tyres', /HEXAGON 12 inch/),
  ];
  const faqs = FAQ_ITEMS.slice(0, 6).map((f) => [f.q, f.a] as [string, string]);
  const lowest = Math.min(...PRODUCTS.filter((p) => p.group.endsWith('buggy')).map((p) => p.price));

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-fw-900 text-white">
        <picture className="absolute inset-0 hidden md:block" aria-hidden="true">
          <source type="image/avif" srcSet="/images/hero/home-golf-cart-fairway-1200.avif 1200w, /images/hero/home-golf-cart-fairway.avif 2400w" sizes="100vw" />
          <source type="image/webp" srcSet="/images/hero/home-golf-cart-fairway-1200.webp 1200w, /images/hero/home-golf-cart-fairway.webp 2400w" sizes="100vw" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero/home-golf-cart-fairway-1200.webp" alt="" width={1200} height={600} className="h-full w-full object-cover object-right" fetchPriority="high" />
        </picture>
        <picture className="block md:hidden">
          <source type="image/avif" srcSet="/images/hero/home-golf-cart-fairway-1200.avif" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero/home-golf-cart-fairway-1200.webp" alt="Buggies for sale in Australia: black ECAR Compass 4 seat golf cart on a green fairway" width={1200} height={600} className="aspect-[2/1] w-full object-cover object-right" fetchPriority="high" />
        </picture>
        <div className="container-x relative py-10 md:py-24">
          <div className="fade-up max-w-[620px]">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-bold text-fw-100 ring-1 ring-white/15"><BadgePercent size={15} className="text-accent" /> Extra 10% off when you pay with crypto</p>
            <h1 className="!text-white text-[40px] font-black leading-[1.04] sm:text-[56px] lg:text-[64px]">Buggies For Sale <span className="block text-accent">Across Australia</span></h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-fw-100">Browse buggies for sale in Australia: golf buggies, electric and remote models, new lithium golf carts, off-road buggies and parts from brands Australians trust. Delivered Australia-wide, free over $1,000.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/golf-buggies/" className="btn btn-primary !min-h-[52px] !px-7 !text-base">Shop golf buggies <ArrowRight size={18} /></Link>
              <Link href="/golf-carts/" className="btn !min-h-[52px] !px-7 !text-base bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">Shop golf carts</Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
              <div><dt className="text-xs font-semibold text-fw-200">Products</dt><dd className="font-display text-3xl font-extrabold">{PRODUCTS.length}+</dd></div>
              <div><dt className="text-xs font-semibold text-fw-200">Buggies from</dt><dd className="font-display text-3xl font-extrabold">{money(Math.ceil(lowest))}</dd></div>
              <div><dt className="text-xs font-semibold text-fw-200">Customer score</dt><dd className="font-display text-3xl font-extrabold">4.9★</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section aria-label="Why shop with us" className="border-b border-line bg-white">
        <ul className="container-x grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[[BadgePercent, 'Extra 10% off with crypto', 'Bitcoin or USDT at checkout'], [Truck, 'Free delivery over $1,000', 'Flat $95 below, Australia-wide'], [ShieldCheck, 'Manufacturer warranty', 'On every new model we list'], [Headset, 'Local expert support', 'Call or WhatsApp 0420 128 746']].map(([Icon, t, s]) => {
            const I = Icon as typeof Truck;
            return <li key={t as string} className="flex items-center gap-3"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-fw-50 text-fw-700"><I size={24} /></span><span><span className="block font-bold text-fw-900">{t as string}</span><span className="block text-sm text-muted">{s as string}</span></span></li>;
          })}
        </ul>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Shop by category" title="Find the right buggy, cart or part" sub="From a lightweight push buggy to a lithium golf cart or a dune buggy, start with the job you need it to do." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t) => (
              <Link key={t.url} href={t.url} className="card card-hover group flex items-center gap-5 overflow-hidden p-4">
                <span className="product-frame h-28 w-28 shrink-0 border border-line sm:h-32 sm:w-32">{t.p && <Pic base={t.p.images[0]} alt={t.name} width={128} height={128} sizes="128px" />}</span>
                <span className="flex-1">
                  <span className="block font-display text-xl font-extrabold text-fw-900">{t.name}</span>
                  <span className="mt-1 block text-sm text-muted">{t.blurb}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-accent-600">Shop now <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHead eyebrow="Best sellers" title="Popular golf buggies, carts and buggies" sub="Hand-picked models our customers ask about most. Every price includes GST." action={{ href: '/shop/', label: 'View all products' }} />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{featured.map((p, i) => <ProductCard key={p.slug} p={toCard(p)} priority={i < 4} />)}</div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section" aria-labelledby="brands-h">
        <div className="container-x">
          <SectionHead eyebrow="Brands" title="Shop by brand" sub="Trusted names in golf buggies, golf carts and off-road buggies." action={{ href: '/brands/', label: 'All brands' }} />
          <BrandStrip />
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="section bg-fw-900 text-white" aria-labelledby="about-h">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-accent mb-3">About Buggies For Sale</p>
            <h2 id="about-h" className="!text-white text-3xl font-extrabold md:text-[40px]">Australia&apos;s buggy superstore, built on price and support</h2>
            <p className="mt-5 text-lg leading-relaxed text-fw-100">{BRAND.statement}</p>
            <ul className="mt-6 space-y-3 text-fw-100">
              {['Competitive prices on every model, all including GST', 'Real specifications, clear delivery costs and no hidden fees', 'Pay by Osko/EFT, PayID or crypto with an extra 10% off', 'Fleet, club and resort buyers welcome: ask for a quote'].map((t) => <li key={t} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />{t}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/about/" className="btn btn-primary">About us</Link><Link href="/wholesale/" className="btn !bg-white/10 text-white ring-1 ring-white/30 hover:!bg-white/20">Wholesale & fleet</Link></div>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {[['2023', 'Established in Sydney'], [`${PRODUCTS.length}+`, 'Models and parts online'], ['AU-wide', 'Freight and depots'], ['$250', 'Minimum order, free delivery over $1,000']].map(([a, b]) => (
              <div key={b} className="rounded-2xl bg-white/[.07] p-6 ring-1 ring-white/10"><dt className="font-display text-4xl font-black text-accent">{a}</dt><dd className="mt-1 text-sm text-fw-100">{b}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* BUYING GUIDE COPY */}
      <section className="section bg-white" aria-labelledby="buyers-h">
        <div className="container-x">
          <div className="prose-copy max-w-3xl">
            <h2 id="buyers-h">Buggies for sale in Australia: golf, electric and off-road</h2>
            <p>When people search for buggies for sale they usually mean one of three things: a golf buggy that carries clubs around the course, a golf cart or utility buggy for a property, or an off-road buggy for work and recreation. Buggies For Sale lists all three in one place, with Australian prices that include GST, clear delivery costs and a team you can call before you order.</p>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="card prose-copy p-6 [&_h3]:mt-0">
              <h3>Golf buggies and golf carts</h3>
              <p>A golf buggy takes the weight off your back and keeps your bag steady. You can start with a simple <Link href="/golf-buggies/push-pull-trolleys/">push buggy</Link>, move up to a <Link href="/golf-buggies/motorised-electric/">motorised electric buggy</Link> or choose a <Link href="/golf-buggies/remote-control/">remote control golf buggy</Link> that follows your lead. If you need to carry people, our <Link href="/golf-carts/">golf carts</Link> include lithium electric and petrol models in two to eight seats. Not sure which type suits you? Read our guide to <Link href="/blog/electric-vs-push-golf-buggy-which-should-you-buy/">electric vs push golf buggies</Link>.</p>
            </div>
            <div className="card prose-copy p-6 [&_h3]:mt-0">
              <h3>Beach buggy for sale and other off-road buggies</h3>
              <p>If you want sand, farm tracks or bush trails, look at a <Link href="/off-road-buggies/dune-buggies/">dune or beach buggy</Link>, a <Link href="/off-road-buggies/side-by-sides-utvs/">side-by-side</Link> or a <Link href="/off-road-buggies/go-karts/">go kart</Link>. Choose the engine size and seating for your ground and your riders, and plan helmets and training from day one. Our <Link href="/blog/offroad-buggy/">off-road buggy buyer guide</Link> explains the options in plain language, and our <Link href="/brands/trailmaster/">Trailmaster range</Link> is a popular place to start.</p>
            </div>
            <div className="card prose-copy p-6 [&_h3]:mt-0">
              <h3>Kids buggies, parts and accessories</h3>
              <p>Younger drivers can start with a licensed <Link href="/off-road-buggies/kids-buggies/">kids ride-on buggy</Link> or a youth quad, always with supervision. Owners can keep a buggy or cart working with <Link href="/parts-accessories/golf-buggy-parts/lithium-batteries/">lithium batteries</Link>, chargers, wheels and <Link href="/parts-accessories/golf-cart-accessories/">accessories</Link>.</p>
            </div>
          </div>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="prose-copy">
              <h3>How to buy a buggy online</h3>
            <ol>
              <li>Pick the type that matches the job, using the categories above.</li>
              <li>Compare the specifications, the warranty and the delivered price.</li>
              <li>Add your buggy and any accessories to the cart. The minimum order is $250 and delivery is free over $1,000.</li>
              <li>Choose bank transfer (Osko or EFT), PayID, or Bitcoin or USDT for an extra 10% off at checkout.</li>
              <li>We confirm stock and freight, then email your payment details and keep you updated until it arrives.</li>
            </ol>
              <h3>Why Australians choose Buggies For Sale</h3>
            <p>Every product page shows the specifications, the delivered cost and the warranty position, so you can compare models without chasing a quote. We are a Sydney-based team that has supplied golfers, farms, estates and families since 2023, and we are happy to talk through seating, batteries, fitment and freight before you pay. If you are buying for a club, resort or fleet, ask about wholesale and purchase-order arrangements on our <Link href="/wholesale/">wholesale page</Link>.</p>
              <p className="text-sm text-muted">Popular searches: buggy, buggies, beach buggy for sale, for sale buggy and buggy buggies. Whatever you type, the shop above has the range.</p>
            </div>
            <aside className="card p-6 lg:sticky lg:top-28">
            <h2 className="font-display text-xl font-extrabold">Need help choosing?</h2>
            <p className="mt-2 text-sm text-muted">Tell us where and how you will use your buggy and we will suggest models, options and freight.</p>
            <a href="tel:+61420128746" className="btn btn-green mt-4 w-full">Call 0420 128 746</a>
            <a href="https://wa.me/61420128746?text=Hi%20Buggies%20For%20Sale%2C%20" target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-3 w-full">WhatsApp us</a>
            <Link href="/contact/" className="mt-3 block text-center text-sm font-extrabold text-accent-600">Send an enquiry →</Link>
          </aside>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Buying guides" title="Make the right choice before you buy" action={{ href: '/blog/', label: 'All guides' }} />
          <div className="grid gap-5 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}/`} className="card card-hover flex flex-col overflow-hidden">
                <span className="grid aspect-[16/9] place-items-center bg-gradient-to-br from-fw-800 to-fw-600 p-4 text-center"><span className="font-display text-xl font-extrabold leading-tight text-white">{b.title}</span></span>
                <span className="flex flex-1 flex-col p-5"><span className="eyebrow mb-2">{b.category}</span><span className="text-sm leading-relaxed text-muted">{b.excerpt}</span><span className="mt-auto pt-4 text-sm font-extrabold text-accent-600">Read guide →</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrustpilotBlock />
      <Faq items={faqs} title={`Buggies for sale: ${home ? 'your questions answered' : 'frequently asked questions'}`} />
    </>
  );
}
