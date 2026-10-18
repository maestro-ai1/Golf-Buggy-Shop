'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Minus, Plus, ShoppingCart, Trash2, X, Truck } from 'lucide-react';
import { useCart, RULES } from '@/lib/cart';
import Pic from '@/components/Pic';
import { money } from '@/lib/utils';

export default function CartDrawer() {
  const { open, setOpen, items, setQty, remove, subtotal, shipping, total, freeRemaining, minMet, minRemaining, count } = useCart();
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); }; document.addEventListener('keydown', k); return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', k); }; }, [open, setOpen]);
  if (!open) return null;
  const pct = Math.min(100, (subtotal / RULES.freeShippingThreshold) * 100);
  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-[440px] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-line p-4">
          <h2 className="flex items-center gap-2 text-xl font-extrabold"><ShoppingCart size={22} /> Your cart <span className="text-muted">({count})</span></h2>
          <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-line" aria-label="Close cart"><X size={20} /></button>
        </div>
        {items.length === 0 ? (
          <div className="grid flex-1 place-items-center p-8 text-center">
            <div><p className="mb-1 text-lg font-bold text-fw-900">Your cart is empty</p><p className="mb-5 text-sm text-muted">Find a golf buggy, cart or accessory to get started.</p><Link href="/shop/" onClick={() => setOpen(false)} className="btn btn-primary">Shop all products</Link></div>
          </div>
        ) : (
          <>
            <div className="border-b border-line bg-fw-50 p-4">
              <p className="mb-2 flex items-center gap-2 text-sm font-bold text-fw-800"><Truck size={16} />{freeRemaining > 0 ? `Add ${money(freeRemaining)} for free delivery` : 'You qualify for free delivery'}</p>
              <div className="h-2 overflow-hidden rounded-full bg-fw-100"><div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} /></div>
            </div>
            <ul className="flex-1 divide-y divide-line overflow-y-auto p-4">
              {items.map((i) => (
                <li key={i.slug} className="flex gap-3 py-4">
                  <Link href={`/products/${i.slug}/`} onClick={() => setOpen(false)} className="product-frame h-20 w-20 shrink-0 border border-line"><Pic base={i.image} alt={i.name} width={80} height={80} /></Link>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-fw-600">{i.brand}</p>
                    <Link href={`/products/${i.slug}/`} onClick={() => setOpen(false)} className="line-clamp-2 text-sm font-semibold leading-snug text-ink">{i.name}</Link>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-line">
                        <button className="grid h-9 w-9 place-items-center" aria-label="Decrease quantity" onClick={() => setQty(i.slug, i.quantity - 1)}><Minus size={14} /></button>
                        <span className="w-7 text-center text-sm font-bold" aria-live="polite">{i.quantity}</span>
                        <button className="grid h-9 w-9 place-items-center" aria-label="Increase quantity" onClick={() => setQty(i.slug, i.quantity + 1)}><Plus size={14} /></button>
                      </div>
                      <span className="font-extrabold text-fw-900">{money(i.price * i.quantity)}</span>
                    </div>
                  </div>
                  <button onClick={() => remove(i.slug)} className="self-start p-2 text-muted hover:text-accent-600" aria-label={`Remove ${i.name}`}><Trash2 size={16} /></button>
                </li>
              ))}
            </ul>
            <div className="border-t border-line p-4">
              <dl className="mb-3 space-y-1 text-sm">
                <div className="flex justify-between"><dt className="text-muted">Subtotal (inc. GST)</dt><dd className="font-bold">{money(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Freight</dt><dd className="font-bold">{shipping === 0 ? 'Free' : money(shipping)}</dd></div>
                <div className="flex justify-between border-t border-line pt-2 text-lg"><dt className="font-extrabold">Total</dt><dd className="font-extrabold text-fw-900">{money(total)}</dd></div>
              </dl>
              {!minMet && <p className="mb-3 rounded-lg bg-accent-100 p-3 text-xs font-semibold text-accent-600">Minimum order is {money(RULES.minOrder)}. Add {money(minRemaining)} more to check out.</p>}
              <Link href="/checkout/" onClick={() => setOpen(false)} aria-disabled={!minMet} className={`btn btn-primary w-full ${!minMet ? 'pointer-events-none opacity-50' : ''}`}>Checkout</Link>
              <p className="mt-2 text-center text-xs text-muted">Pay by EFT, PayID, card or crypto (extra 5% off)</p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
