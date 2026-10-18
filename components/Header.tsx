'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone, Search, ShoppingCart, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { useCart } from '@/lib/cart';
import type { NavItem } from '@/lib/nav';

export default function Header({ nav, onSearch }: { nav: NavItem[]; onSearch: () => void }) {
  const { count, setOpen } = useCart();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobIdx, setMobIdx] = useState<number | null>(null);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => { if (barRef.current && !barRef.current.contains(e.target as Node)) setOpenIdx(null); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpenIdx(null); setMobile(false); } };
    document.addEventListener('mousedown', close); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobile]);

  return (
    <header ref={barRef} className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-[68px] items-center gap-3 sm:gap-5">
        <button className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden" aria-label="Open menu" onClick={() => setMobile(true)}><Menu size={22} /></button>
        <Link href="/" aria-label="Buggies For Sale home" className="shrink-0"><Logo /></Link>
        <button onClick={onSearch} className="mx-2 hidden h-11 flex-1 items-center gap-3 rounded-full border border-line bg-sand-50 px-5 text-left text-sm text-muted transition hover:border-fw-500 md:flex" aria-label="Search products">
          <Search size={18} /> Search golf buggies, carts, batteries, accessories…
        </button>
        <div className="ml-auto flex items-center gap-2">
          <a href="tel:+61420128746" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-fw-800 hover:bg-fw-50 xl:flex"><Phone size={18} /> 0420 128 746</a>
          <button onClick={onSearch} className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden" aria-label="Search"><Search size={20} /></button>
          <button onClick={() => setOpen(true)} className="relative grid h-11 w-11 place-items-center rounded-full bg-fw-800 text-white transition hover:bg-fw-700" aria-label={`Cart, ${count} items`}>
            <ShoppingCart size={20} />
            {count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[11px] font-extrabold text-white">{count}</span>}
          </button>
        </div>
      </div>

      <nav aria-label="Main" className="hidden border-t border-line bg-fw-900 lg:block">
        <ul className="container-x flex items-center gap-1">
          {nav.map((n, i) => (
            <li key={n.url} className="relative" onMouseEnter={() => n.children && setOpenIdx(i)} onMouseLeave={() => setOpenIdx(null)}>
              <div className="flex items-center">
                <Link href={n.url} className="flex h-12 items-center px-4 text-[14px] font-bold text-white/95 hover:text-accent" onClick={() => setOpenIdx(null)}>{n.name}</Link>
                {n.children && (
                  <button aria-label={`${n.name} menu`} aria-expanded={openIdx === i} onClick={() => setOpenIdx(openIdx === i ? null : i)} className="-ml-2 grid h-12 w-6 place-items-center text-white/70 hover:text-accent"><ChevronDown size={14} className={openIdx === i ? 'rotate-180' : ''} /></button>
                )}
              </div>
              {n.children && openIdx === i && (
                <div className={`absolute left-0 top-12 z-50 rounded-b-2xl border border-line bg-white p-5 shadow-[0_24px_60px_rgba(11,46,34,.22)] ${n.name === 'Brands' ? 'w-[620px]' : n.children.some((c) => c.children) ? 'w-[760px]' : 'w-[420px]'}`}>
                  <div className={`grid gap-x-8 gap-y-1 ${n.name === 'Brands' ? 'grid-cols-3' : n.children.some((c) => c.children) ? 'grid-cols-3' : 'grid-cols-2'}`}>
                    {n.children.map((c) => (
                      <div key={c.url} className="mb-3">
                        <Link href={c.url} onClick={() => setOpenIdx(null)} className={`block rounded-lg px-2 py-1.5 text-sm hover:bg-fw-50 hover:text-fw-700 ${c.children ? 'font-extrabold text-fw-900' : 'font-semibold text-ink'}`}>{c.name}</Link>
                        {c.children && (
                          <ul className="mt-1 border-l-2 border-fw-100 pl-3">
                            {c.children.map((g) => <li key={g.url}><Link href={g.url} onClick={() => setOpenIdx(null)} className="block rounded px-2 py-1 text-[13px] text-muted hover:text-fw-700">{g.name}</Link></li>)}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 border-t border-line pt-3"><Link href={n.url} onClick={() => setOpenIdx(null)} className="text-sm font-extrabold text-accent-600">Shop all {n.name} →</Link></div>
                </div>
              )}
            </li>
          ))}
          <li className="ml-auto text-[13px] font-semibold text-fw-200">Free delivery over $1,000 Australia-wide</li>
        </ul>
      </nav>

      {mobile && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobile(false)} />
          <div className="absolute inset-y-0 left-0 flex w-[88%] max-w-[380px] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-line p-4"><Logo /><button className="grid h-11 w-11 place-items-center rounded-full border border-line" onClick={() => setMobile(false)} aria-label="Close menu"><X size={20} /></button></div>
            <ul className="flex-1 overflow-y-auto p-3">
              {nav.map((n, i) => (
                <li key={n.url} className="border-b border-line/70">
                  <div className="flex items-center">
                    <Link href={n.url} onClick={() => setMobile(false)} className="flex-1 py-3.5 text-[16px] font-bold text-fw-900">{n.name}</Link>
                    {n.children && <button className="grid h-11 w-11 place-items-center" aria-label={`Expand ${n.name}`} aria-expanded={mobIdx === i} onClick={() => setMobIdx(mobIdx === i ? null : i)}><ChevronDown size={18} className={mobIdx === i ? 'rotate-180' : ''} /></button>}
                  </div>
                  {n.children && mobIdx === i && (
                    <ul className="mb-3 ml-1 border-l-2 border-fw-100 pl-3">
                      {n.children.map((c) => (
                        <li key={c.url}>
                          <Link href={c.url} onClick={() => setMobile(false)} className="block py-2 text-[15px] font-semibold text-ink">{c.name}</Link>
                          {c.children && <ul className="ml-3">{c.children.map((g) => <li key={g.url}><Link href={g.url} onClick={() => setMobile(false)} className="block py-1.5 text-sm text-muted">{g.name}</Link></li>)}</ul>}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="border-t border-line p-4"><a href="tel:+61420128746" className="btn btn-green w-full"><Phone size={18} /> Call 0420 128 746</a></div>
          </div>
        </div>
      )}
    </header>
  );
}
