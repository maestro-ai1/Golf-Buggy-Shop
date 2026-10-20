'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import QRCode from 'qrcode';
import { Check, Copy, ShieldCheck, TriangleAlert } from 'lucide-react';

type Wallet = { id: string; label: string; short: string; network: string; address: string; uri: string };
type Data = { orderNumber: string; amountDue: number; subtotal: number; shipping: number; cryptoDiscount: number; status?: string; wallets: Wallet[] };
const aud = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' AUD';

function Qr({ value, label }: { value: string; label: string }) {
  const [src, setSrc] = useState('');
  useEffect(() => { let ok = true; QRCode.toDataURL(value, { width: 480, margin: 2, errorCorrectionLevel: 'M' }).then((u) => ok && setSrc(u)).catch(() => ok && setSrc('')); return () => { ok = false; }; }, [value]);
  return <div className="mx-auto grid h-56 w-56 place-items-center rounded-2xl border border-line bg-white p-2">{src ? <img src={src} alt={`QR code for the ${label} wallet address`} width={224} height={224} className="h-full w-full" /> : <span className="text-xs text-muted">Loading QR…</span>}</div>;
}

function Inner() {
  const id = useSearchParams().get('id') || '';
  const [data, setData] = useState<Data | null>(null);
  const [err, setErr] = useState('');
  const [pick, setPick] = useState(0);
  const [copied, setCopied] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const [upErr, setUpErr] = useState('');
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (!id) return;
    fetch(`/api/order/crypto?id=${encodeURIComponent(id)}`).then(async (r) => { const j = await r.json(); if (r.ok) { setData(j); if (j.status === 'screenshot-received' || j.status === 'payment-confirmed') setState('done'); } else setErr(j.error || 'Not available'); }).catch(() => setErr('Could not load your order. Please call 0420 128 746.'));
  }, [id]);

  async function copy(key: string, text: string) { try { await navigator.clipboard.writeText(text); } catch { /* ignore */ } setCopied(key); setTimeout(() => setCopied(''), 2000); }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState('busy'); setUpErr('');
    const fd = new FormData(e.currentTarget); fd.set('id', id);
    try { const r = await fetch('/api/order/confirm-payment', { method: 'POST', body: fd }); const j = await r.json(); if (j.success) setState('done'); else { setUpErr(j.error || 'Upload failed'); setState('idle'); } } catch { setUpErr('Network error. Please try again.'); setState('idle'); }
  }

  if (!id) return <section className="section"><div className="container-x max-w-xl"><p className="card p-5 text-muted">Open this page from checkout or from the link in your order email.</p></div></section>;
  if (err) return <section className="section"><div className="container-x max-w-xl"><p className="card p-5 text-muted" role="alert">{err}</p></div></section>;
  if (!data) return <section className="section"><div className="container-x max-w-xl"><p className="text-muted">Loading your order…</p></div></section>;
  if (data.status === 'payment-confirmed') return <section className="section"><div className="container-x max-w-xl"><p className="card p-6 text-lg font-semibold text-fw-800">Payment received for order {data.orderNumber}. Thank you! We are arranging your delivery and will be in touch.</p></div></section>;

  const w = data.wallets[pick];
  return (
    <section className="section !pt-8"><div className="container-x max-w-2xl">
      <div className="rounded-2xl bg-fw-900 p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-wider opacity-80">Order {data.orderNumber}</p>
        <p className="mt-1 text-3xl font-black tabular-nums">{aud(data.amountDue)}</p>
        <p className="mt-1 text-sm opacity-90">Includes your 10% crypto discount{data.cryptoDiscount ? ` (-${aud(data.cryptoDiscount)})` : ''}. Pay the equivalent in the crypto you choose below.</p>
      </div>

      <h2 className="mt-8 text-xl font-extrabold">1. Choose how you want to pay</h2>
      <div role="tablist" aria-label="Crypto payment options" className="mt-3 grid gap-2 sm:grid-cols-3">
        {data.wallets.map((x, i) => (
          <button key={x.id} role="tab" aria-selected={pick === i} onClick={() => setPick(i)} className={`rounded-xl border-2 p-3 text-left transition ${pick === i ? 'border-fw-600 bg-fw-50' : 'border-line bg-white hover:border-fw-500'}`}>
            <span className="block font-extrabold">{x.label}</span><span className="block text-xs text-muted">{x.network}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className="card mt-4 p-5 sm:p-6">
        <Qr value={w.uri} label={`${w.label} ${w.network}`} />
        <p className="mt-4 text-center text-sm font-semibold">Scan with your wallet app, or copy the address</p>
        <label htmlFor={`addr-${w.id}`} className="mt-3 block text-xs font-bold uppercase tracking-wider text-fw-600">{w.label} address · {w.network}</label>
        <textarea id={`addr-${w.id}`} readOnly rows={2} value={w.address} onFocus={(e) => e.currentTarget.select()} onClick={(e) => e.currentTarget.select()} className="mt-1.5 w-full resize-none break-all rounded-xl border-2 border-fw-600 bg-fw-50 p-3 text-center font-mono text-[15px] font-bold text-ink" />
        <button onClick={() => copy(w.id, w.address)} className={`btn mt-2 w-full !min-h-[52px] ${copied === w.id ? 'btn-green' : 'btn-primary'}`} aria-label={`Copy ${w.label} ${w.network} address`}>{copied === w.id ? <><Check size={18} /> Address copied</> : <><Copy size={18} /> Copy address</>}</button>
        <p className="mt-4 flex gap-2 rounded-xl bg-accent-100 p-3 text-sm font-semibold text-accent-600"><TriangleAlert size={18} className="mt-0.5 shrink-0" /><span>Send only {w.short} on the {w.network}. Funds sent on a different network cannot be recovered. Network fees are paid by you, so send enough to cover {aud(data.amountDue)} after fees.</span></p>
      </div>

      <h2 className="mt-8 text-xl font-extrabold">2. Upload your payment screenshot</h2>
      {state === 'done' ? (
        <p className="card mt-3 p-6 font-semibold text-fw-800" role="status">Thank you. We have your screenshot for order {data.orderNumber}. We will check it against our wallet and email you as soon as your payment is confirmed. A copy of this confirmation is on its way to your inbox.</p>
      ) : (
        <form onSubmit={submit} className="card mt-3 space-y-4 p-5 sm:p-6">
          <p className="text-sm text-muted">After you have sent the payment, upload a screenshot showing the amount and transaction (JPG, PNG, WebP or HEIC, up to 4MB).</p>
          <label className="block text-sm font-bold">Payment screenshot
            <input type="file" name="file" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" required onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} className="mt-1.5 block w-full rounded-xl border border-line bg-white p-3 text-sm" />
          </label>
          {upErr && <p role="alert" className="rounded-xl bg-accent-100 p-3 text-sm font-semibold text-accent-600">{upErr}</p>}
          <button disabled={state === 'busy' || !fileName} className="btn btn-primary w-full !min-h-[52px] disabled:opacity-50">{state === 'busy' ? 'Uploading…' : 'I have paid: send screenshot'}</button>
          <p className="flex items-center gap-2 text-xs text-muted"><ShieldCheck size={14} /> Questions? Call 0420 128 746 or email sales@buggiesforsale.com.au.</p>
        </form>
      )}
    </div></section>
  );
}
export default function CryptoPay() { return <><h1 className="container-x !max-w-2xl pt-10 text-3xl font-black">Pay with crypto</h1><Suspense><Inner /></Suspense></>; }
