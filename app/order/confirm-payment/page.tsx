'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function Inner() {
  const id = useSearchParams().get('id') || '';
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const [err, setErr] = useState('');
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState('busy'); setErr('');
    const fd = new FormData(e.currentTarget); fd.set('id', id);
    try { const r = await fetch('/api/order/confirm-payment', { method: 'POST', body: fd }); const j = await r.json(); if (j.success) setState('done'); else { setErr(j.error || 'Upload failed'); setState('idle'); } } catch { setErr('Network error.'); setState('idle'); }
  }
  return (
    <section className="section"><div className="container-x max-w-xl">
      {state === 'done' ? <p className="card mt-6 p-6 text-lg font-semibold text-fw-800">Thank you. We have your screenshot and will confirm your order shortly.</p> : (
        <form onSubmit={submit} className="card mt-6 space-y-4 p-6">
          <p className="text-muted">Order <strong className="text-fw-900">{id || '(missing reference)'}</strong>. Upload a screenshot of your payment (JPG, PNG, WebP or HEIC, up to 4MB).</p>
          <input type="file" name="file" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" required className="block w-full text-sm" />
          {err && <p role="alert" className="rounded-xl bg-accent-100 p-3 text-sm font-semibold text-accent-600">{err}</p>}
          <button disabled={!id || state === 'busy'} className="btn btn-primary w-full disabled:opacity-50">{state === 'busy' ? 'Uploading…' : 'Send screenshot'}</button>
        </form>
      )}
    </div></section>
  );
}
export default function ConfirmPayment() { return <><h1 className="container-x !max-w-xl pt-12 text-3xl font-black">Confirm your payment</h1><Suspense><Inner /></Suspense></>; }
