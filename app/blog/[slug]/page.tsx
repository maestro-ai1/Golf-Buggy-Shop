import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProductCard, { toCard } from '@/components/ProductCard';
import { Breadcrumbs, Faq, JsonLd, SectionHead } from '@/components/Bits';
import { BLOG_POSTS, PRODUCTS, SITE } from '@/config/site';
import { Markdown, toc } from '@/lib/md';
import { abs, faqSchema, meta } from '@/lib/seo';

export function generateStaticParams() { return BLOG_POSTS.map((b) => ({ slug: b.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = BLOG_POSTS.find((x) => x.slug === slug);
  if (!b) return {};
  const kwOk = b.excerpt.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').includes(b.targetKeyword.toLowerCase());
  return meta({ title: b.seoTitle, description: kwOk ? b.excerpt : `${b.targetKeyword.charAt(0).toUpperCase()}${b.targetKeyword.slice(1)}: ${b.excerpt}`, path: `/blog/${b.slug}/`, image: b.image, type: 'article' });
}

const PICKS: Record<string, RegExp> = {
  'can-you-drive-a-golf-cart-on-the-road-in-australia': /Magnum 2S 2 Seat|Compass 2S|IKON HD 2UL/,
  'how-much-does-a-golf-cart-cost-in-australia': /ECAR Lithium (A2|IKON HD|Magnum 2S)/,
  'electric-vs-push-golf-buggy-which-should-you-buy': /MGI ZIP X|Stinger SG|PowerBug NX Lithium/,
  'lithium-vs-lead-acid-golf-cart-batteries': /PRO-Li/,
  'what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy': /Kayo S150|Cheetah|Hammerhead|Kayo S350/,
  'remote-control-golf-buggy-buyers-guide': /MGI (ZIP Navigator|Ai)|QOD Q2|Concourse/,
};

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = BLOG_POSTS.find((x) => x.slug === slug);
  if (!b) notFound();
  const heads = toc(b.content);
  const picks = b.products?.length ? b.products.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean).slice(0, 4) as typeof PRODUCTS : PRODUCTS.filter((p) => (PICKS[b.slug] || /MGI ZIP/).test(p.name)).slice(0, 4);
  const words = b.content.join(' ').split(/\s+/).length;
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: b.title, description: b.excerpt, image: abs(b.image), datePublished: b.date, dateModified: b.date, wordCount: words, inLanguage: 'en-AU', author: { '@type': 'Organization', name: SITE.name, url: SITE.url }, publisher: { '@id': abs('/#org') }, mainEntityOfPage: abs(`/blog/${b.slug}/`) };
  const trail = [{ name: 'Blog', url: '/blog/' }, { name: b.title, url: `/blog/${b.slug}/` }];

  return (
    <>
      <JsonLd data={[article, ...(b.faqs ? [faqSchema(b.faqs)] : [])]} />
      <section className="border-b border-line bg-white"><div className="container-x py-8"><div className="mx-auto max-w-[69rem]"><Breadcrumbs trail={trail} /></div></div></section>
      <article className="section !pt-10">
        <div className="container-x"><div className="mx-auto grid max-w-[69rem] gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="min-w-0">
            <p className="eyebrow">{b.category} · {b.readTime}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-[46px]">{b.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{b.excerpt}</p>
            <p className="mt-4 text-sm font-semibold text-muted">By the {SITE.name} team · Updated <time dateTime={b.date}>{new Date(b.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</time></p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.image} alt={`${b.targetKeyword}: ${b.category.toLowerCase()} from ${SITE.name}`} width={1600} height={900} className="mt-7 aspect-[16/9] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" fetchPriority="high" />
            <nav aria-label="Table of contents" className="card mt-8 p-6"><p className="font-display text-lg font-extrabold">In this guide</p><ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15px]">{heads.map((h) => <li key={h.id}><a href={`#${h.id}`} className="font-semibold text-fw-700 hover:underline">{h.text}</a></li>)}</ol></nav>
            <div className="prose-copy mt-8"><Markdown lines={b.content} /></div>
            {b.tags && <ul aria-label="Tags" className="mt-8 flex flex-wrap gap-2">{b.tags.map((t) => <li key={t}><Link href={`/search/?q=${encodeURIComponent(t)}`} className="chip hover:bg-fw-100">{t}</Link></li>)}</ul>}
          </div>
          <aside className="space-y-5 self-start lg:sticky lg:top-28">
            <div className="card p-6"><h2 className="font-display text-xl font-extrabold">Talk to an expert</h2><p className="mt-2 text-sm text-muted">Not sure which model suits you? We will help you choose.</p><a href="tel:+61420128746" className="btn btn-green mt-4 w-full">Call 0420 128 746</a><a href="https://wa.me/61420128746?text=Hi%20Buggies%20For%20Sale%2C%20" target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-3 w-full">WhatsApp us</a></div>
            <div className="card p-6"><h2 className="font-display text-lg font-extrabold">Shop the ranges</h2><ul className="mt-3 space-y-2 text-sm font-semibold"><li><Link className="text-fw-700 hover:underline" href="/golf-buggies/">Golf buggies</Link></li><li><Link className="text-fw-700 hover:underline" href="/golf-carts/">Golf carts</Link></li><li><Link className="text-fw-700 hover:underline" href="/parts-accessories/">Parts &amp; accessories</Link></li><li><Link className="text-fw-700 hover:underline" href="/off-road-buggies/">Off-road buggies</Link></li></ul></div>
          </aside>
        </div></div>
      </article>
      {b.faqs && <Faq items={b.faqs} title="Frequently asked questions" />}
      {picks.length > 0 && <section className="section pt-0"><div className="container-x"><SectionHead eyebrow="Related products" title="Shop the models mentioned" /><div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{picks.map((p) => <ProductCard key={p.slug} p={toCard(p)} />)}</div></div></section>}
    </>
  );
}
