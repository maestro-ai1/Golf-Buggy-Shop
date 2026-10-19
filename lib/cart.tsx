'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ORDER_RULES, computeTotals } from '@/lib/totals';

export interface CartLine { slug: string; name: string; price: number; image: string; brand: string; quantity: number }
export type CartInput = Omit<CartLine, 'quantity'>;

// Order rules (owner): min order $250, free delivery over $1,000, flat $95 freight below, 10% crypto discount.
export const RULES = { minOrder: ORDER_RULES.minOrder, freeShippingThreshold: ORDER_RULES.freeShippingThreshold, shippingFee: ORDER_RULES.shippingFee, cryptoDiscount: ORDER_RULES.cryptoDiscountPct, key: 'bfs-cart-v2' };

interface CartCtx {
  items: CartLine[];
  add: (p: CartInput, qty?: number, opts?: { open?: boolean }) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number; subtotal: number; shipping: number; cryptoDiscount: number; total: number; gst: number;
  crypto: boolean; setCrypto: (v: boolean) => void;
  freeRemaining: number; minMet: boolean; minRemaining: number;
  open: boolean; setOpen: (v: boolean) => void;
}
const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [crypto, setCrypto] = useState(false);

  useEffect(() => {
    try { const s = localStorage.getItem(RULES.key); if (s) setItems(JSON.parse(s)); } catch { /* ignore */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) try { localStorage.setItem(RULES.key, JSON.stringify(items)); } catch { /* ignore */ } }, [items, ready]);

  const value = useMemo<CartCtx>(() => {
    const { subtotal, shipping, cryptoDiscount, total, gst } = computeTotals(items, crypto);
    return {
      items,
      add: (p, qty = 1, opts) => { setItems((prev) => { const i = prev.findIndex((x) => x.slug === p.slug); if (i > -1) { const c = [...prev]; c[i] = { ...c[i], quantity: c[i].quantity + qty }; return c; } return [...prev, { ...p, quantity: qty }]; }); if (opts?.open !== false) setOpen(true); },
      remove: (slug) => setItems((prev) => prev.filter((i) => i.slug !== slug)),
      setQty: (slug, qty) => setItems((prev) => (qty <= 0 ? prev.filter((i) => i.slug !== slug) : prev.map((i) => (i.slug === slug ? { ...i, quantity: qty } : i)))),
      clear: () => setItems([]),
      count: items.reduce((s, i) => s + i.quantity, 0), subtotal, shipping, cryptoDiscount,
      total, gst,
      crypto, setCrypto,
      freeRemaining: Math.max(0, RULES.freeShippingThreshold - subtotal),
      minMet: subtotal >= RULES.minOrder, minRemaining: Math.max(0, RULES.minOrder - subtotal),
      open, setOpen,
    };
  }, [items, crypto, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error('useCart must be used within CartProvider');
  return c;
}
