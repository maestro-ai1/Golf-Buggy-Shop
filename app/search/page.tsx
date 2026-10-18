import Link from 'next/link';
import type { Metadata } from 'next';
import ProductCard, { toCard } from '@/components/ProductCard';
import { Breadcrumbs } from '@/components/Bits';
import { PRODUCTS } from '@/config/site';
import { abs } from '@/lib/seo';

export const metadata: Metadata = { title: 'Search', robots: { index: false, follow: true }, alternates: { canonical: abs('/search/') } };

export default async function Search({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const terms = q.toLowerCase().split(/\s+/).filter((t) => t.length > 1);
  const hits = terms.length ? PRODUCTS.filter((p) => { const hay = `${p.name} ${p.brand} ${p.groupLabel} ${p.tags.join(' ')} ${p.shortDescription}`.toLowerCase(); return terms.every((t) => hay.includes(t.replace(/s$/, ''))); }) : [];
  return (
    <section className="section"><div className="container-x">
      <Breadcrumbs trail={[{ name: 'Search', url: '/search/' }]} />
      <h1 className="mt-4 text-3xl font-black md:text-4xl">{q ? `Results for “${q}”` : 'Search the shop'}</h1>
      <form action="/search/" className="mt-5 flex max-w-xl gap-2"><input name="q" defaultValue={q} placeholder="Search buggies, carts, batteries…" className="h-12 flex-1 rounded-full border border-line bg-white px-5" aria-label="Search" /><button className="btn btn-green">Search</button></form>
      {q && <p className="mt-5 text-muted">{hits.length} result{hits.length === 1 ? '' : 's'}</p>}
      {hits.length > 0 && <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{hits.map((p) => <ProductCard key={p.slug} p={toCard(p)} />)}</div>}
      {q && hits.length === 0 && <div className="card mt-6 p-8 text-center"><p className="font-bold">No matches found.</p><p className="mt-1 text-muted">Try a broader word, or browse the <Link href="/shop/" className="font-bold text-fw-700 underline">full shop</Link>.</p></div>}
    </div></section>
  );
}
