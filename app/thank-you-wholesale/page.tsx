import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Thank you', robots: { index: false, follow: true } };
export default function Thanks() {
  return <section className="section"><div className="container-x max-w-xl text-center"><h1 className="text-4xl font-black">Thanks, we will prepare your quote</h1><p className="mt-4 text-lg text-muted">Our wholesale team will contact you within one business day.</p><Link href="/shop/" className="btn btn-primary mt-8">Browse the range</Link></div></section>;
}
