import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import { toCard } from '@/components/ProductCard';
import { Breadcrumbs, SectionHead } from '@/components/Bits';
import { PRODUCTS } from '@/config/site';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Shop All Golf Buggies, Golf Carts, Parts & Off-Road Buggies', description: 'Shop every golf buggy, electric and remote buggy, golf cart, lithium battery, accessory and off-road buggy in one place. Prices set 2% below the market, free delivery over $1,000.', path: '/shop/' });

const CHIPS = [['Golf buggies', '/golf-buggies/'], ['Golf carts', '/golf-carts/'], ['Off-road buggies', '/off-road-buggies/'], ['Parts & accessories', '/parts-accessories/'], ['Brands', '/brands/'], ['Clearance', '/clearance/']];

export default function Shop() {
  return (
    <>
      <section className="border-b border-line bg-white"><div className="container-x py-8">
        <Breadcrumbs trail={[{ name: 'Shop', url: '/shop/' }]} />
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Shop all buggies, carts &amp; parts</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{PRODUCTS.length} products from trusted brands, with prices set 2% below the lowest Australian retailer we find.</p>
        <div className="mt-5 flex flex-wrap gap-2">{CHIPS.map(([n, u]) => <Link key={u} href={u} className="chip hover:bg-fw-100">{n}</Link>)}</div>
      </div></section>
      <section className="section"><div className="container-x"><SectionHead title="All products" /><ProductGrid products={PRODUCTS.map(toCard)} /></div></section>
    </>
  );
}
