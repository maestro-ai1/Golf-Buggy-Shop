import Link from 'next/link';
import Pic from '@/components/Pic';
import AddToCart from '@/components/AddToCart';
import { money } from '@/lib/utils';
import type { Product } from '@/config/site';

export type CardProduct = Pick<Product, 'slug' | 'name' | 'brand' | 'price' | 'rrp' | 'images' | 'badge'> & { group?: string };
export const toCard = (p: Product): CardProduct => ({ slug: p.slug, name: p.name, brand: p.brand, price: p.price, rrp: p.rrp, images: p.images.slice(0, 1), badge: p.badge, group: p.group });

export default function ProductCard({ p, priority = false }: { p: CardProduct; priority?: boolean }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <Link href={`/products/${p.slug}/`} className="relative block p-3 pb-0" aria-label={p.name}>
        <div className="product-frame border border-line/70">
          <Pic base={p.images[0]} alt={p.name} priority={priority} className="transition-transform duration-500 group-hover:scale-[1.04]" />
        </div>
        {p.badge && <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">{p.badge}</span>}
        <span className="absolute right-5 top-5 rounded-full bg-fw-800 px-2.5 py-1 text-[11px] font-extrabold text-white">2% below market</span>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-fw-600">{p.brand}</p>
        <h3 className="mt-1 line-clamp-2 min-h-[2.6em] text-[15.5px] font-bold leading-snug text-ink"><Link href={`/products/${p.slug}/`}>{p.name}</Link></h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-[22px] font-extrabold text-fw-900">{money(p.price)}</span>
          {p.rrp ? <span className="text-sm text-muted line-through" aria-label={`Market price ${money(p.rrp)}`}>{money(p.rrp)}</span> : null}
        </div>
        <p className="mb-3 text-[11.5px] text-muted">Inc. GST · Free delivery over $1,000</p>
        <div className="mt-auto"><AddToCart item={{ slug: p.slug, name: p.name, price: p.price, image: p.images[0], brand: p.brand }} compact /></div>
      </div>
    </article>
  );
}
