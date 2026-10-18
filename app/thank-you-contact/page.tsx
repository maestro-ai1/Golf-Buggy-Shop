import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Thank you', robots: { index: false, follow: true } };
export default function Thanks() {
  return <section className="section"><div className="container-x max-w-xl text-center"><h1 className="text-4xl font-black">Thanks, we have your message</h1><p className="mt-4 text-lg text-muted">A member of our team will reply by email, usually the same business day.</p><Link href="/shop/" className="btn btn-primary mt-8">Keep shopping</Link></div></section>;
}
