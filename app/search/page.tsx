import Link from 'next/link';
import type { Metadata } from 'next';
import ProductCard, { toCard } from '@/components/ProductCard';
import { Breadcrumbs } from '@/components/Bits';
import { searchStore } from '@/lib/search';
import { abs } from '@/lib/seo';

export const metadata: Metadata = { title: 'Search', robots: { index: false, follow: true }, alternates: { canonical: abs('/search/') } };

export default async function Search({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const { products: hits, pages } = searchStore(q, 60);
  return (
    <section className="section"><div className="container-x">
      <Breadcrumbs trail={[{ name: 'Search', url: '/search/' }]} />
      <h1 className="mt-4 text-3xl font-black md:text-4xl">{q ? `Results for “${q}”` : 'Search the shop'}</h1>
      <form action="/search/" className="mt-5 flex max-w-xl gap-2"><input name="q" defaultValue={q} placeholder="Search buggies, carts, batteries…" className="h-12 flex-1 rounded-full border border-line bg-white px-5" aria-label="Search" /><button className="btn btn-green">Search</button></form>
      {q && <p className="mt-5 text-muted">{hits.length} result{hits.length === 1 ? '' : 's'}</p>}
      {pages.length > 0 && <div className="mt-4 flex flex-wrap items-center gap-2"><span className="text-sm font-bold text-muted">Browse:</span>{pages.map((pg) => <Link key={pg.url} href={pg.url} className="chip hover:bg-fw-100">{pg.name}</Link>)}</div>}
      {hits.length > 0 && <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{hits.map((p) => <ProductCard key={p.slug} p={toCard(p)} />)}</div>}
      {q && hits.length === 0 && <div className="card mt-6 p-8 text-center"><p className="font-bold">No matches found.</p><p className="mt-1 text-muted">Try a broader word, or browse the <Link href="/shop/" className="font-bold text-fw-700 underline">full shop</Link>.</p></div>}
    </div></section>
  );
}
