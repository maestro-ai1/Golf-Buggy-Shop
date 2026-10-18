'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface CartLine { slug: string; name: string; price: number; image: string; brand: string; quantity: number }
export type CartInput = Omit<CartLine, 'quantity'>;

// Order rules (owner): min order $500, free delivery over $1,000, flat $95 freight below, 5% crypto discount.
export const RULES = { minOrder: 500, freeShippingThreshold: 1000, shippingFee: 95, cryptoDiscount: 5, key: 'bfs-cart-v2' };

interface CartCtx {
  items: CartLine[];
  add: (p: CartInput, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number; subtotal: number; shipping: number; cryptoDiscount: number; total: number;
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
    const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
    const shipping = items.length === 0 || subtotal >= RULES.freeShippingThreshold ? 0 : RULES.shippingFee;
    const cryptoDiscount = crypto ? Math.round(subtotal * (RULES.cryptoDiscount / 100)) : 0;
    return {
      items,
      add: (p, qty = 1) => { setItems((prev) => { const i = prev.findIndex((x) => x.slug === p.slug); if (i > -1) { const c = [...prev]; c[i] = { ...c[i], quantity: c[i].quantity + qty }; return c; } return [...prev, { ...p, quantity: qty }]; }); setOpen(true); },
      remove: (slug) => setItems((prev) => prev.filter((i) => i.slug !== slug)),
      setQty: (slug, qty) => setItems((prev) => (qty <= 0 ? prev.filter((i) => i.slug !== slug) : prev.map((i) => (i.slug === slug ? { ...i, quantity: qty } : i)))),
      clear: () => setItems([]),
      count: items.reduce((s, i) => s + i.quantity, 0), subtotal, shipping, cryptoDiscount,
      total: Math.max(0, subtotal + shipping - cryptoDiscount),
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
