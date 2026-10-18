'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import Pic from '@/components/Pic';
import { money } from '@/lib/utils';

interface PageHit { name: string; url: string }
interface Hit { slug: string; name: string; price: number; brand: string; image: string; category?: string }
const QUICK = [['Electric golf buggies', '/golf-buggies/motorised-electric/'], ['Remote control buggies', '/golf-buggies/remote-control/'], ['Golf carts for sale', '/golf-carts/for-sale/'], ['Lithium batteries', '/parts-accessories/golf-buggy-parts/lithium-batteries/'], ['Dune buggies', '/off-road-buggies/dune-buggies/'], ['Accessories', '/parts-accessories/golf-cart-accessories/']];

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const [hits, setHits] = useState<Hit[]>([]);
  const [pages, setPages] = useState<PageHit[]>([]);
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => { if (open) { setTimeout(() => input.current?.focus(), 40); document.body.style.overflow = 'hidden'; } return () => { document.body.style.overflow = ''; }; }, [open]);
  useEffect(() => { const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); }; document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k); }, [onClose]);
  useEffect(() => {
    if (q.trim().length < 2) { setHits([]); setPages([]); return; }
    setBusy(true);
    const t = setTimeout(async () => {
      try { const r = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}&limit=8`); const j = await r.json(); setHits(j.results || []); setPages(j.pages || []); } catch { setHits([]); setPages([]); }
      setBusy(false);
    }, 220);
    return () => clearTimeout(t);
  }, [q]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search">
      <div className="absolute inset-0 bg-fw-950/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative mx-auto mt-[8vh] w-[min(720px,calc(100%-24px))] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={20} className="text-fw-600" />
          <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && q.trim()) { window.location.href = `/search/?q=${encodeURIComponent(q.trim())}`; } }} placeholder="Search buggies, carts, batteries, parts…" className="h-16 flex-1 bg-transparent text-lg outline-none" aria-label="Search products" />
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full hover:bg-sand-100" aria-label="Close search"><X size={20} /></button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {q.trim().length < 2 ? (
            <div>
              <p className="eyebrow mb-3">Popular searches</p>
              <div className="flex flex-wrap gap-2">{QUICK.map(([n, u]) => <Link key={u} href={u} onClick={onClose} className="chip hover:bg-fw-100">{n}</Link>)}</div>
            </div>
          ) : hits.length === 0 && pages.length === 0 ? (
            <p className="py-6 text-center text-muted">{busy ? 'Searching…' : `No matches for “${q}”. Try “golf buggy”, “battery” or “UTV”.`}</p>
          ) : (
            <ul className="divide-y divide-line">
              {pages.length > 0 && <li className="flex flex-wrap items-center gap-2 pb-3"><span className="text-xs font-bold uppercase tracking-wide text-muted">Browse</span>{pages.map((pg) => <Link key={pg.url} href={pg.url} onClick={onClose} className="chip hover:bg-fw-100">{pg.name}</Link>)}</li>}
              {hits.map((h) => (
                <li key={h.slug}>
                  <Link href={`/products/${h.slug}/`} onClick={onClose} className="flex items-center gap-4 py-3 hover:bg-sand-50">
                    <span className="product-frame h-16 w-16 shrink-0 border border-line">{h.image && <Pic base={h.image} alt={h.name} width={64} height={64} />}</span>
                    <span className="flex-1"><span className="block text-xs font-bold uppercase tracking-wide text-fw-600">{h.brand}</span><span className="block text-sm font-semibold text-ink">{h.name}</span></span>
                    <span className="font-extrabold text-fw-900">{money(h.price)}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-3"><Link href={`/search/?q=${encodeURIComponent(q.trim())}`} onClick={onClose} className="text-sm font-extrabold text-accent-600">See all results →</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
