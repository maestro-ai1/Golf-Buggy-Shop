'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import ProductCard, { type CardProduct } from '@/components/ProductCard';

const PER_PAGE = 9; // 3 x 3 grid
const SORTS: Record<string, string> = { featured: 'Featured', low: 'Price: low to high', high: 'Price: high to low', name: 'Name A–Z' };

export default function ProductGrid({ products, showBrandFilter = true, emptyNote }: { products: CardProduct[]; showBrandFilter?: boolean; emptyNote?: string }) {
  const [sort, setSort] = useState('featured');
  const [brand, setBrand] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => { const n = Number(new URLSearchParams(window.location.search).get('page')); if (n > 0) setPage(n); }, []);
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
  const go = (n: number) => { setPage(n); const u = new URL(window.location.href); if (n > 1) u.searchParams.set('page', String(n)); else u.searchParams.delete('page'); window.history.replaceState(null, '', u); document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

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
          <button disabled={cur === 1} onClick={() => go(cur - 1)} className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white disabled:opacity-40" aria-label="Previous page"><ChevronLeft size={18} /></button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <a key={n} href={n === 1 ? '?' : `?page=${n}`} onClick={(e) => { e.preventDefault(); go(n); }} aria-current={n === cur ? 'page' : undefined} className={`grid h-11 min-w-11 place-items-center rounded-full border px-3 text-sm font-bold ${n === cur ? 'border-fw-800 bg-fw-800 text-white' : 'border-line bg-white hover:border-fw-500'}`}>{n}</a>
          ))}
          <button disabled={cur === pages} onClick={() => go(cur + 1)} className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white disabled:opacity-40" aria-label="Next page"><ChevronRight size={18} /></button>
        </nav>
      )}
    </div>
  );
}
