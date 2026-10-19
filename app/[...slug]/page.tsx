import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Pic from '@/components/Pic';
import ProductGrid from '@/components/ProductGrid';
import { toCard } from '@/components/ProductCard';
import BrandStrip from '@/components/BrandStrip';
import BrandLogo from '@/components/BrandLogo';
import { Breadcrumbs, Faq, JsonLd, SectionHead } from '@/components/Bits';
import { PAGES, PRODUCTS, brandPages, breadcrumbsFor, childrenOf, pageBySlug, productsForPage, money, listProductsFor, pageCountFor } from '@/config/site';
import { copyFor, descFor } from '@/lib/copy';
import categoryHeroes from '@/data/category-heroes.json';
import { faqSchema, listSchema, meta } from '@/lib/seo';
import { supportFaqsFor } from '@/lib/support';

type Params = { slug: string[] };
const HERO: Record<string, { base: string; alt: string }> = {
  '/golf-buggies/': { base: '/images/hero/golf-buggies-course', alt: 'MGI electric golf buggy carrying a golf bag on a course' },
  '/golf-carts/': { base: '/images/hero/golf-carts-fairway', alt: 'Navy ECAR Magnum 2 seat lithium golf cart on a golf course' },
  '/off-road-buggies/': { base: '/images/hero/off-road-desert', alt: 'Trailmaster Cheetah dune buggy driving across sand' },
};
const CAT_HEROES = categoryHeroes as Record<string, { base: string; alt: string }>;
const heroFor = (url: string) => CAT_HEROES[url] || HERO[url] || (url.startsWith('/golf-buggies/') ? HERO['/golf-buggies/'] : url.startsWith('/golf-carts/') || url === '/clearance/' ? HERO['/golf-carts/'] : url.startsWith('/off-road-buggies/') ? HERO['/off-road-buggies/'] : null);

// Pages 2+ of a range live at <page url>page/<n>/ (real URLs, not just a browser-side filter).
const parseSlug = (slug: string[]) => { const n = slug.length; return n >= 3 && slug[n - 2] === 'page' && /^[0-9]+$/.test(slug[n - 1]) ? { base: slug.slice(0, -2).join('/'), n: +slug[n - 1] } : { base: slug.join('/'), n: 1 }; };

export function generateStaticParams() {
  const pages = PAGES.filter((p) => p.url !== '/' && p.level !== 'product');
  const paged = pages.flatMap((p) => Array.from({ length: pageCountFor(p) - 1 }, (_, i) => ({ slug: [...p.slug.split('/'), 'page', String(i + 2)] })));
  return [...pages.map((p) => ({ slug: p.slug.split('/') })), ...paged];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const { base, n } = parseSlug(slug);
  const page = pageBySlug(base);
  if (!page) return {};
  if (n > 1) {
    const pc = pageCountFor(page); if (n > pc) return {};
    const nm = page.name.replace(/ \(Hub\)$/, '');
    return meta({ title: `${nm} - Page ${n}`, description: `Page ${n} of ${pc}: more ${nm.toLowerCase()} with prices in AUD including GST, Australia-wide delivery and free freight over $1,000.`, path: `${page.url}page/${n}/`, image: listProductsFor(page)[(n - 1) * 9]?.images[0] + '.webp' });
  }
  const products = productsForPage(page);
  const copy = copyFor(page, products);
  const h = heroFor(page.url);
  return meta({ title: page.titleTag, description: descFor(page, copy.intro[0] + ' ' + (copy.intro[1] || '')), path: page.url, image: h ? h.base + '.webp' : products[0] ? products[0].images[0] + '.webp' : undefined });
}

export default async function StructurePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const { base, n: pageNo } = parseSlug(slug);
  const page = pageBySlug(base);
  if (!page) notFound();
  if (page.level === 'product') permanentRedirect(PAGES.find((p) => p.name === page.parent)?.url || '/shop/');
  if (pageNo > 1 && pageNo > pageCountFor(page)) notFound();

  const isClearance = page.url === '/clearance/';
  const isBrandsHub = page.url === '/brands/';
  const products = listProductsFor(page);

  // Pages 2+ of a range: a compact, unique page (own title, own canonical, only that page's products) so page 1's copy is not repeated.
  if (pageNo > 1) {
    const nm = page.name.replace(/ \(Hub\)$/, '');
    const trail2 = [...breadcrumbsFor(page), { name: `Page ${pageNo}`, url: `${page.url}page/${pageNo}/` }];
    return (
      <section className="section"><div className="container-x">
        <Breadcrumbs trail={trail2} />
        <h1 className="mt-4 font-display text-3xl font-black text-fw-900 sm:text-4xl">{nm}: page {pageNo} of {pageCountFor(page)}</h1>
        <p className="mt-2 max-w-2xl text-muted">More {nm.toLowerCase()} from our range. Prices include GST and free delivery applies over $1,000. <Link href={page.url} className="font-semibold text-fw-700 hover:underline">Back to page 1 of {nm}</Link>.</p>
        <div className="mt-6"><ProductGrid products={products.map(toCard)} showBrandFilter={page.level !== 'brand'} basePath={page.url} initialPage={pageNo} /></div>
      </div></section>
    );
  }
  const copy = copyFor(page, products);
  const faqs = [...copy.faqs, ...supportFaqsFor(page.url, products)];
  const kids = childrenOf(page.name).filter((k) => !k.lowDemand && k.level !== 'product' && k.url !== '/golf-buggies/for-sale-locations/');
  const siblings = PAGES.filter((p) => p.parent === page.parent && p.url !== page.url && p.level !== 'brand').slice(0, 8);
  const trail = breadcrumbsFor(page);
  const hero = heroFor(page.url);
  const brand = page.level === 'brand' ? page.name.replace(/ Buggies$/, '') : '';
  const sample = products.slice(0, 3);

  return (
    <>
      <JsonLd data={[faqSchema(faqs), listSchema(page, products)]} />

      {/* HEADER BAND */}
      <section className="relative overflow-hidden bg-fw-900 text-white">
        {hero && (
          <picture className="absolute inset-0 hidden md:block">
            <source type="image/avif" srcSet={`${hero.base}-1200.avif 1200w, ${hero.base}.avif 2400w`} sizes="100vw" />
            <source type="image/webp" srcSet={`${hero.base}-1200.webp 1200w, ${hero.base}.webp 2400w`} sizes="100vw" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${hero.base}-1200.webp`} alt={`${page.primary?.keyword || page.name}: ${hero.alt}`} className="h-full w-full object-cover object-right" width={1200} height={600} fetchPriority="high" />
          </picture>
        )}
        {!hero && <div className="absolute inset-0 grain opacity-50" aria-hidden="true" />}
        <div className="container-x relative py-10 md:py-16">
          <div className="[&_*]:!text-fw-200 [&_a:hover]:!text-white"><Breadcrumbs trail={trail} /></div>
          <div className="mt-5 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="max-w-2xl">
              <h1 className="!text-white text-[34px] font-black leading-[1.08] sm:text-5xl">{page.h1}</h1>
              <p className="mt-4 text-[17px] leading-relaxed text-fw-100">{copy.intro[0]}</p>
              {copy.intro[1] && <p className="mt-3 hidden text-[15px] leading-relaxed text-fw-200 md:block">{copy.intro[1]}</p>}
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#product-grid" className="btn btn-primary">Shop now <ArrowRight size={17} /></a>
                <a href={`https://wa.me/61420128746?text=${encodeURIComponent('Hi Buggies For Sale, I have a question about ' + page.h1 + '. ')}`} target="_blank" rel="noopener noreferrer" className="btn bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"><MessageCircle size={17} /> Ask an expert</a>
              </div>
            </div>
            {!hero && sample.length > 0 && (
              <div className="hidden grid-cols-3 gap-3 lg:grid" aria-hidden="true">
                {sample.map((p, i) => <div key={p.slug} className={`rounded-2xl bg-white p-2 shadow-xl ${i === 1 ? '-translate-y-4' : ''}`}><div className="product-frame"><Pic base={p.images[0]} alt="" width={200} height={200} sizes="200px" /></div></div>)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BRANDS HUB */}
      {isBrandsHub && (
        <section className="section"><div className="container-x"><SectionHead eyebrow="All brands" title="Shop by brand" sub="Choose a brand to see its models, prices and delivery details." />
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brandPages().map((b) => { const s = b.slug.split('/').pop()!; const n = PRODUCTS.filter((p) => p.brandPage === s).length; const nm = b.name.replace(/ Buggies$/, ''); return (
              <li key={b.url}><Link href={b.url} className="card card-hover flex h-full flex-col items-center justify-center gap-3 p-6 text-center"><span className="grid h-14 place-items-center"><BrandLogo slug={s} name={nm} /></span><span className="font-bold text-fw-900">{nm}</span><span className="text-xs font-semibold text-muted">{n ? `${n} product${n === 1 ? '' : 's'}` : 'Ask for availability'}</span></Link></li>
            ); })}
          </ul></div></section>
      )}

      {/* SUBCATEGORIES */}
      {kids.length > 0 && !isBrandsHub && (
        <section className="section pb-0"><div className="container-x">
          <SectionHead eyebrow="Shop by type" title={`Browse ${page.name.replace(/ \(Hub\)$/, '')}`} />
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {kids.map((k) => { const kp = productsForPage(k); return (
              <li key={k.url}><Link href={k.url} className="card card-hover group flex h-full flex-col overflow-hidden">
                <span className="product-frame m-3 mb-0 border border-line/70">{kp[0] ? <Pic base={kp[0].images[0]} alt={k.primary?.keyword || k.name} sizes="(max-width: 640px) 45vw, 260px" /> : <span className="text-sm font-bold text-muted">Ask us</span>}</span>
                <span className="flex flex-1 flex-col p-4"><span className="font-display text-[17px] font-extrabold leading-tight text-fw-900">{k.name.replace(/ \(Hub\)$/, '')}</span><span className="mt-1 text-xs font-semibold text-muted">{kp.length ? `${kp.length} product${kp.length === 1 ? '' : 's'}` : 'Enquire for availability'}</span><span className="mt-auto pt-3 text-sm font-extrabold text-accent-600">Shop <ArrowRight size={14} className="inline transition group-hover:translate-x-1" /></span></span>
              </Link></li>
            ); })}
          </ul></div></section>
      )}

      {/* PRODUCTS */}
      {!isBrandsHub && (
        <section className="section"><div className="container-x">
          <SectionHead eyebrow={isClearance ? 'Lowest prices' : brand ? brand : 'Range'} title={isClearance ? 'Our lowest-priced buggies, carts and parts' : products.length ? `${page.h1}: shop the range` : 'Ask us about this range'} sub={products.length ? 'Prices include GST. Free delivery over $1,000.' : undefined} />
          <ProductGrid products={products.map(toCard)} showBrandFilter={page.level !== 'brand'} basePath={page.url} emptyNote={copy.cta ? undefined : undefined} />
          {products.length === 0 && (
            <div className="card mt-2 flex flex-col items-start gap-4 p-7 md:flex-row md:items-center md:justify-between"><div><p className="font-display text-xl font-extrabold">{copy.cta || 'Tell us what you need'}</p><p className="mt-1 text-muted">We source to order and quote within one business day. Call 0420 128 746 or send an enquiry.</p></div><Link href={`/contact/?topic=${encodeURIComponent(page.h1)}`} className="btn btn-primary shrink-0">Send an enquiry</Link></div>
          )}
        </div></section>
      )}

      {/* GUIDES */}
      {copy.guides.length > 0 && (
        <section className="section bg-white"><div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="prose-copy max-w-3xl">
            {copy.intro[1] && <p className="md:hidden">{copy.intro[1]}</p>}
            {copy.guides.map((g) => <div key={g.h2}><h2>{g.h2}</h2>{g.p.map((t, i) => <p key={i}>{t}</p>)}</div>)}
          </div>
          <aside className="space-y-4 self-start">
            <div className="card p-6"><h2 className="font-display text-xl font-extrabold">Need a hand choosing?</h2><p className="mt-2 text-sm text-muted">Our team knows these products. Call, WhatsApp or email and we will help you match a model to your needs.</p><a href="tel:+61420128746" className="btn btn-green mt-4 w-full">Call 0420 128 746</a></div>
            {siblings.length > 0 && <div className="card p-6"><h2 className="font-display text-lg font-extrabold">Related ranges</h2><ul className="mt-3 space-y-2">{siblings.map((s) => <li key={s.url}><Link href={s.url} className="text-sm font-semibold text-fw-700 hover:underline">{s.name.replace(/ \(Hub\)$/, '')}</Link></li>)}</ul></div>}
          </aside>
        </div></section>
      )}

      {/* BRANDS */}
      {(page.level === 'category' && !isBrandsHub) && <section className="section"><div className="container-x"><SectionHead eyebrow="Brands" title="Shop by brand" action={{ href: '/brands/', label: 'All brands' }} /><BrandStrip limit={12} /></div></section>}

      <Faq items={faqs} title={`${page.h1}: your questions answered`} />
    </>
  );
}
