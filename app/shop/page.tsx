import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Pic from '@/components/Pic';
import ProductGrid from '@/components/ProductGrid';
import { toCard } from '@/components/ProductCard';
import { Breadcrumbs, SectionHead } from '@/components/Bits';
import { PRODUCTS, pageByUrl } from '@/config/site';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Shop All Golf Buggies, Golf Carts, Parts & Off-Road Buggies', description: 'Shop every golf buggy, electric and remote buggy, golf cart, lithium battery, accessory and off-road buggy in one place. Free delivery over $1,000 Australia-wide.', path: '/shop/' });

const CATS = ['/golf-buggies/', '/golf-carts/', '/off-road-buggies/', '/parts-accessories/'];

export default function Shop() {
  const trail = [{ name: 'Shop', url: '/shop/' }];
  const tiles = CATS.map((url) => {
    const page = pageByUrl(url);
    const list = PRODUCTS.filter((p) => p.categories.some((c) => c.startsWith(url)));
    return page ? { url, name: page.name.replace(/ \(Hub\)$/, ''), count: list.length, image: list[0]?.images[0] } : null;
  }).filter(Boolean) as { url: string; name: string; count: number; image?: string }[];
  return (
    <>
      <section className="border-b border-line bg-white"><div className="container-x py-8">
        <Breadcrumbs trail={trail} />
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Shop all buggies, carts &amp; parts</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{PRODUCTS.length} products from trusted brands, delivered Australia-wide. Minimum order $250, free delivery over $1,000.</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((t) => (
            <li key={t.url}><Link href={t.url} className="card card-hover group flex h-full flex-col overflow-hidden">
              <span className="product-frame m-3 mb-0 border border-line/70">{t.image ? <Pic base={t.image} alt={t.name} sizes="(max-width: 640px) 45vw, 260px" /> : null}</span>
              <span className="flex flex-1 flex-col p-4"><span className="font-display text-[17px] font-extrabold leading-tight text-fw-900">{t.name}</span><span className="mt-1 text-xs font-semibold text-muted">{t.count} product{t.count === 1 ? '' : 's'}</span><span className="mt-auto pt-3 text-sm font-extrabold text-accent-600">Shop {t.name.toLowerCase()} <ArrowRight size={14} className="inline transition group-hover:translate-x-1" /></span></span>
            </Link></li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">Also browse <Link href="/brands/" className="font-bold text-fw-700 underline">all brands</Link> or the <Link href="/clearance/" className="font-bold text-fw-700 underline">clearance</Link> range.</p>
      </div></section>
      <section className="section"><div className="container-x"><SectionHead title="All products" /><ProductGrid products={PRODUCTS.map(toCard)} /></div></section>
    </>
  );
}
