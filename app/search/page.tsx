import Link from 'next/link';
import type { Metadata } from 'next';
import ProductCard, { toCard } from '@/components/ProductCard';
import { Breadcrumbs } from '@/components/Bits';
import { searchStore } from '@/lib/search';
import { abs } from '@/lib/seo';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q?: string }> }): Promise<Metadata> {
  const { q = '' } = await searchParams;
  const t = q.trim().slice(0, 60);
  // Search result pages are for shoppers, not for Google: noindex, canonical to the plain search page.
  return { title: t ? `Search results for ${t}` : 'Search', robots: { index: false, follow: true }, alternates: { canonical: abs('/search/') } };
}

const POPULAR: [string, string][] = [['Electric golf buggies', '/golf-buggies/motorised-electric/'], ['Remote control buggies', '/golf-buggies/remote-control/'], ['Golf carts', '/golf-carts/'], ['Lithium batteries', '/parts-accessories/golf-buggy-parts/lithium-batteries/'], ['Dune buggies', '/off-road-buggies/dune-buggies/'], ['Accessories', '/parts-accessories/golf-cart-accessories/']];

export default async function Search({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const { products: hits, pages, corrected } = searchStore(q, 60);
  return (
    <section className="section"><div className="container-x">
      <Breadcrumbs trail={[{ name: 'Search', url: '/search/' }]} />
      <h1 className="mt-4 text-3xl font-black md:text-4xl">{q ? `Results for “${q}”` : 'Search the shop'}</h1>
      <form action="/search/" className="mt-5 flex max-w-xl gap-2"><input name="q" defaultValue={q} placeholder="Search buggies, carts, batteries…" className="h-12 flex-1 rounded-full border border-line bg-white px-5" aria-label="Search" /><button className="btn btn-green">Search</button></form>
      {!q && <div className="mt-6"><p className="eyebrow mb-3">Popular searches</p><div className="flex flex-wrap gap-2">{POPULAR.map(([n, u]) => <Link key={u} href={u} className="chip hover:bg-fw-100">{n}</Link>)}</div></div>}
      {q && <p className="mt-5 text-muted" role="status">{hits.length} result{hits.length === 1 ? '' : 's'}{corrected && <> for <strong className="text-ink">{corrected}</strong> <span className="text-sm">(showing the closest match to “{q}”)</span></>}</p>}
      {pages.length > 0 && <div className="mt-4 flex flex-wrap items-center gap-2"><span className="text-sm font-bold text-muted">Browse:</span>{pages.map((pg) => <Link key={pg.url} href={pg.url} className="chip hover:bg-fw-100">{pg.name}</Link>)}</div>}
      {hits.length > 0 && <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{hits.map((p) => <ProductCard key={p.slug} p={toCard(p)} />)}</div>}
      {q && hits.length === 0 && <div className="card mt-6 p-8 text-center"><p className="font-bold">No matches found for “{q}”.</p><p className="mt-1 text-muted">Check the spelling, try a broader word, or browse a popular category.</p><div className="mt-4 flex flex-wrap justify-center gap-2">{POPULAR.map(([n, u]) => <Link key={u} href={u} className="chip hover:bg-fw-100">{n}</Link>)}</div><p className="mt-4 text-sm text-muted">Or see the <Link href="/shop/" className="font-bold text-fw-700 underline">full shop</Link>, or <Link href="/contact/" className="font-bold text-fw-700 underline">ask our team</Link> and we will find it for you.</p></div>}
    </div></section>
  );
}
