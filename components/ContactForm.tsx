'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm({ formName = 'contact', topic = '', thanks = '/thank-you-contact/', cta = 'Send message' }: { formName?: 'contact' | 'wholesale'; topic?: string; thanks?: string; cta?: string }) {
  const router = useRouter();
  const [t, setT] = useState(0);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  useEffect(() => setT(Date.now()), []);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setErr('');
    const f = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...f, formName, t }) });
      const j = await r.json();
      if (j.success) router.push(thanks); else setErr(j.error || 'Something went wrong.');
    } catch { setErr('Network error. Please call 0420 128 746 or WhatsApp us.'); }
    setBusy(false);
  }
  const input = 'h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] outline-none focus:border-fw-500 focus:ring-2 focus:ring-fw-100';
  return (
    <form onSubmit={submit} className="card space-y-4 p-6 sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-bold">Name<input name="name" required autoComplete="name" className={input + ' mt-1.5'} /></label>
        <label className="block text-sm font-bold">Email<input name="email" type="email" required autoComplete="email" className={input + ' mt-1.5'} /></label>
        <label className="block text-sm font-bold">Phone<input name="phone" type="tel" autoComplete="tel" className={input + ' mt-1.5'} /></label>
        <label className="block text-sm font-bold">Topic<input name="topic" defaultValue={topic} className={input + ' mt-1.5'} /></label>
      </div>
      <label className="block text-sm font-bold">Message<textarea name="message" required rows={5} className="mt-1.5 w-full rounded-xl border border-line bg-white p-4 text-[15px] outline-none focus:border-fw-500 focus:ring-2 focus:ring-fw-100" placeholder="Tell us the model, your location and what you need." /></label>
      <input name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {err && <p role="alert" className="rounded-xl bg-accent-100 p-3 text-sm font-semibold text-accent-600">{err}</p>}
      <button disabled={busy} className="btn btn-primary w-full sm:w-auto">{busy ? 'Sending…' : cta}</button>
    </form>
  );
}
