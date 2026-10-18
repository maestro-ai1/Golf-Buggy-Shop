import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Order received', robots: { index: false, follow: true } };

// Deliberately contains NO payment instructions: those arrive by email only after we confirm stock and freight.
export default async function Thanks({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const { ref } = await searchParams;
  return (
    <section className="section"><div className="container-x max-w-xl text-center">
      <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-fw-100 text-3xl text-fw-700">✓</div>
      <h1 className="text-4xl font-black">Thanks, your order is in</h1>
      {ref && <p className="mt-3 text-lg">Order reference <strong className="text-fw-900">{ref}</strong></p>}
      <p className="mt-4 text-lg text-muted">Please watch for our follow-up email with your payment details. We will confirm stock and freight first.</p>
      <p className="mt-2 text-sm text-muted">Nothing arrived? Check your spam folder or call 0420 128 746.</p>
      <Link href="/shop/" className="btn btn-primary mt-8">Keep shopping</Link>
    </div></section>
  );
}
