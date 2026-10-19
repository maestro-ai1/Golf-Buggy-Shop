'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import ProductCard, { type CardProduct } from '@/components/ProductCard';

const PER_PAGE = 9; // 3 x 3 grid
const SORTS: Record<string, string> = { featured: 'Featured', low: 'Price: low to high', high: 'Price: high to low', name: 'Name A–Z' };

// basePath: when given, pages 2+ are real URLs at <basePath>page/<n>/ (server-rendered), so every page of a range can be crawled. initialPage is the page this URL renders.
export default function ProductGrid({ products, showBrandFilter = true, emptyNote, basePath, initialPage = 1 }: { products: CardProduct[]; showBrandFilter?: boolean; emptyNote?: string; basePath?: string; initialPage?: number }) {
  const [sort, setSort] = useState('featured');
  const [brand, setBrand] = useState('all');
  const [page, setPage] = useState(initialPage);

  useEffect(() => { if (basePath) return; const n = Number(new URLSearchParams(window.location.search).get('page')); if (n > 0) setPage(n); }, [basePath]);
  const brands = useMemo(() => [...new Set(products.map((p) => p.brand))].sort(), [products]);
  const list = useMemo(() => {
    const l = products.filter((p) => brand === 'all' || p.brand === brand);
    if (sort === 'low') return [...l].sort((a, b) => a.price - b.price);
    if (sort === 'high') return [...l].sort((a, b) => b.price - a.price);
    if (sort === 'name') return [...l].sort((a, b) => a.name.localeCompare(b.name));
    return l;
  }, [products, sort, brand]);
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const cur = Math.min(page, pages);
  const slice = list.slice((cur - 1) * PER_PAGE, cur * PER_PAGE);
  const hrefFor = (n: number) => (basePath ? (n > 1 ? basePath + 'page/' + n + '/' : basePath) : n === 1 ? '?' : '?page=' + n);
  const go = (n: number) => { setPage(n); if (basePath) window.history.replaceState(null, '', hrefFor(n)); else { const u = new URL(window.location.href); if (n > 1) u.searchParams.set('page', String(n)); else u.searchParams.delete('page'); window.history.replaceState(null, '', u); } document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  if (products.length === 0) return <div className="card p-8 text-center text-muted">{emptyNote || 'No products listed here yet. Contact us and we will source it for you.'}</div>;
  return (
    <div id="product-grid">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-muted">{list.length} product{list.length === 1 ? '' : 's'}</p>
        <div className="flex flex-wrap items-center gap-3">
          {showBrandFilter && brands.length > 1 && (
            <label className="flex items-center gap-2 text-sm font-semibold"><SlidersHorizontal size={16} />
              <select value={brand} onChange={(e) => { setBrand(e.target.value); setPage(1); }} className="h-10 rounded-full border border-line bg-white px-4 text-sm" aria-label="Filter by brand">
                <option value="all">All brands</option>{brands.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </label>
          )}
          <select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }} className="h-10 rounded-full border border-line bg-white px-4 text-sm" aria-label="Sort products">
            {Object.entries(SORTS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {slice.map((p, i) => <ProductCard key={p.slug} p={p} priority={cur === 1 && i < 3} />)}
      </div>
      {pages > 1 && (
        <nav aria-label="Pagination" className="mt-8 flex items-center justify-center gap-2">
          {cur === 1
            ? <span aria-disabled="true" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white opacity-40"><ChevronLeft size={18} /></span>
            : <a href={hrefFor(cur - 1)} rel="prev" onClick={(e) => { e.preventDefault(); go(cur - 1); }} className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white" aria-label="Previous page"><ChevronLeft size={18} /></a>}
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <a key={n} href={hrefFor(n)} onClick={(e) => { e.preventDefault(); go(n); }} aria-current={n === cur ? 'page' : undefined} className={`grid h-11 min-w-11 place-items-center rounded-full border px-3 text-sm font-bold ${n === cur ? 'border-fw-800 bg-fw-800 text-white' : 'border-line bg-white hover:border-fw-500'}`}>{n}</a>
          ))}
          {cur === pages
            ? <span aria-disabled="true" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white opacity-40"><ChevronRight size={18} /></span>
            : <a href={hrefFor(cur + 1)} rel="next" onClick={(e) => { e.preventDefault(); go(cur + 1); }} className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white" aria-label="Next page"><ChevronRight size={18} /></a>}
        </nav>
      )}
    </div>
  );
}
