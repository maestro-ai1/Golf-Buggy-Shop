'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, Minus, Plus, ShoppingCart, Zap } from 'lucide-react';
import { useCart, type CartInput } from '@/lib/cart';

export default function AddToCart({ item, compact = false, label = 'Add to cart' }: { item: CartInput; compact?: boolean; label?: string }) {
  const { add } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);
  const go = () => { add(item, qty); setDone(true); setTimeout(() => setDone(false), 1600); };
  const buyNow = () => { add(item, qty, { open: false }); router.push('/checkout/'); };
  if (compact) {
    return (
      <button onClick={go} className="btn btn-green !min-h-[42px] w-full !px-4 !text-[14px]" aria-label={`Add ${item.name} to cart`}>
        {done ? <><Check size={16} /> Added</> : <><ShoppingCart size={16} /> {label}</>}
      </button>
    );
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center rounded-full border-2 border-fw-100 bg-white">
        <button className="grid h-12 w-12 place-items-center" aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
        <span className="w-8 text-center font-extrabold" aria-live="polite">{qty}</span>
        <button className="grid h-12 w-12 place-items-center" aria-label="Increase quantity" onClick={() => setQty(qty + 1)}><Plus size={16} /></button>
      </div>
      <button onClick={go} className="btn btn-primary !min-h-[52px] flex-1 !text-[16px]">{done ? <><Check size={18} /> Added to cart</> : <><ShoppingCart size={18} /> {label}</>}</button>
      <button onClick={buyNow} className="btn btn-green !min-h-[52px] w-full basis-full !text-[16px]" aria-label={`Buy ${item.name} now`}><Zap size={18} aria-hidden="true" /> Buy now</button>
    </div>
  );
}
