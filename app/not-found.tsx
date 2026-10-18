import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Page not found', robots: { index: false, follow: true } };
export default function NotFound() {
  return (
    <section className="section"><div className="container-x max-w-xl text-center">
      <p className="eyebrow">404</p><h1 className="mt-2 text-4xl font-black">We could not find that page</h1>
      <p className="mt-4 text-lg text-muted">It may have moved. Try one of these instead.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/golf-buggies/" className="btn btn-green">Golf buggies</Link><Link href="/golf-carts/" className="btn btn-green">Golf carts</Link><Link href="/shop/" className="btn btn-primary">Shop all</Link></div>
    </div></section>
  );
}
