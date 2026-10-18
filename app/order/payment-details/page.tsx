'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, Copy } from 'lucide-react';
import Link from 'next/link';

type Field = { label: string; value: string };

function CopyField({ f }: { f: Field }) {
  const [ok, setOk] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(f.value); } catch { /* ignore */ } setOk(true); setTimeout(() => setOk(false), 2000); };
  return (
    <button onClick={copy} className="flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-white p-4 text-left transition hover:border-fw-500" aria-label={`Copy ${f.label}`}>
      <span className="min-w-0"><span className="block text-xs font-bold uppercase tracking-wider text-fw-600">{f.label}</span><span className="block break-all font-bold text-ink">{f.value}</span></span>
      <span className={`flex shrink-0 items-center gap-1 text-sm font-bold ${ok ? 'text-fw-600' : 'text-accent-600'}`}>{ok ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}</span>
    </button>
  );
}

function Inner() {
  const id = useSearchParams().get('id') || '';
  const [data, setData] = useState<{ orderNumber: string; amountDue: number; fields: Field[] } | null>(null);
  const [err, setErr] = useState('');
  useEffect(() => { if (!id) return; fetch(`/api/order/payment-details?id=${encodeURIComponent(id)}`).then(async (r) => { const j = await r.json(); if (r.ok) setData(j); else setErr(j.error || 'Not available'); }).catch(() => setErr('Could not load details.')); }, [id]);
  return (
    <section className="section"><div className="container-x max-w-xl">
      {!id && <p className="mt-4 text-muted">Open this page from the link in your payment email.</p>}
      {err && <p className="card mt-5 p-5 text-muted">{err}</p>}
      {data && (<>
        <p className="mt-3 text-muted">Order <strong className="text-fw-900">{data.orderNumber}</strong> · Amount due <strong className="text-fw-900">${data.amountDue.toLocaleString('en-AU', { minimumFractionDigits: 2 })} AUD</strong></p>
        <div className="mt-6 space-y-3">{data.fields.map((f, i) => <CopyField key={i} f={f} />)}</div>
        <Link href={`/order/confirm-payment/?id=${encodeURIComponent(data.orderNumber)}`} className="btn btn-primary mt-8 w-full">I have paid: upload a screenshot</Link>
      </>)}
    </div></section>
  );
}
export default function PaymentDetails() { return <><h1 className="container-x !max-w-xl pt-12 text-3xl font-black">Payment details</h1><Suspense><Inner /></Suspense></>; }
