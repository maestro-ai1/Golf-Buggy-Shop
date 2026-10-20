'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Bitcoin, Check, Copy, ShieldCheck, Upload } from 'lucide-react';
import QRCode from 'qrcode';
import { CRYPTO } from '@/config/site';

const COINS = [
  { id: 'btc', label: 'Bitcoin', sub: 'BTC', coin: 'Bitcoin (BTC)', network: 'Bitcoin network', address: CRYPTO.bitcoinAddress, uri: (a: string) => `bitcoin:${a}` },
  { id: 'trc20', label: 'USDT', sub: 'TRC20 (Tron)', coin: 'USDT (TRC20)', network: 'Tron (TRC20)', address: CRYPTO.usdtTrc20Address, uri: (a: string) => a },
  { id: 'erc20', label: 'USDT', sub: 'ERC20 (Ethereum)', coin: 'USDT (ERC20)', network: 'Ethereum (ERC20)', address: CRYPTO.usdtErc20Address, uri: (a: string) => a },
];
const aud = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Shrinks big phone photos so they stay under the 4MB upload limit. Falls back to the original file if the browser cannot decode it.
async function shrink(file: File): Promise<File> {
  if (file.size <= 3 * 1024 * 1024 || !/^image\/(jpeg|png|webp)$/.test(file.type)) return file;
  try {
    const bmp = await createImageBitmap(file); const k = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
    const c = document.createElement('canvas'); c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
    c.getContext('2d')!.drawImage(bmp, 0, 0, c.width, c.height);
    const blob: Blob | null = await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.85));
    return blob ? new File([blob], 'payment.jpg', { type: 'image/jpeg' }) : file;
  } catch { return file; }
}

function Inner() {
  const id = useSearchParams().get('id') || '';
  const [coinId, setCoinId] = useState('btc');
  const c = COINS.find((x) => x.id === coinId)!;
  const [qr, setQr] = useState('');
  const [copied, setCopied] = useState(false);
  const [order, setOrder] = useState<{ amount: number; name: string; email: string; status?: string } | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const [err, setErr] = useState('');

  useEffect(() => { QRCode.toDataURL(c.uri(c.address), { width: 320, margin: 2, errorCorrectionLevel: 'M' }).then(setQr).catch(() => setQr('')); }, [c]);
  useEffect(() => {
    if (!id) return;
    let local: { ref: string; name: string; email: string; total: number } | null = null;
    try { local = JSON.parse(sessionStorage.getItem('bfs-crypto-order') || 'null'); } catch { /* optional */ }
    if (local?.ref === id) setOrder({ amount: local.total, name: local.name, email: local.email });
    fetch(`/api/order/crypto-proof?id=${encodeURIComponent(id)}`).then((r) => (r.ok ? r.json() : null)).then((j) => { if (j) setOrder((o) => ({ name: '', email: '', ...o, amount: j.amountDue, status: j.status })); }).catch(() => {});
  }, [id]);

  const copy = async () => { try { await navigator.clipboard.writeText(c.address); } catch { /* ignore */ } setCopied(true); setTimeout(() => setCopied(false), 2000); };
  async function submit(e: React.FormEvent) {
    e.preventDefault(); if (!file) { setErr('Please choose your payment screenshot.'); return; }
    setState('busy'); setErr('');
    const fd = new FormData(); fd.set('id', id); fd.set('coin', c.coin); fd.set('file', await shrink(file));
    if (order) { fd.set('amount', String(order.amount)); fd.set('name', order.name); fd.set('email', order.email); }
    try { const r = await fetch('/api/order/crypto-proof', { method: 'POST', body: fd }); const j = await r.json(); if (j.success) setState('done'); else { setErr(j.error || 'Upload failed.'); setState('idle'); } } catch { setErr('Network error. Please try again or call 0420 128 746.'); setState('idle'); }
  }

  if (!id) return <p className="container-x max-w-xl py-12 text-muted">Open this page from checkout or from the link in your order email.</p>;
  if (state === 'done' || order?.status === 'payment-confirmed') return (
    <section className="section"><div className="container-x max-w-xl text-center">
      <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-fw-100 text-3xl text-fw-700">✓</div>
      <h1 className="text-4xl font-black">{order?.status === 'payment-confirmed' ? 'Payment confirmed' : 'Payment submitted'}</h1>
      <p className="mt-3 text-lg">Order reference <strong className="text-fw-900">{id}</strong></p>
      <p className="mt-4 text-lg text-muted">Thank you. We have your screenshot and sent a confirmation email. We verify the transaction on the blockchain and email you once it is confirmed.</p>
      <p className="mt-2 text-sm text-muted">No email? Check spam or call 0420 128 746.</p>
    </div></section>
  );
  return (
    <section className="section !pt-10"><div className="container-x max-w-2xl">
      <h1 className="text-3xl font-black sm:text-4xl">Pay with crypto</h1>
      <p className="mt-2 text-muted">Order <strong className="text-fw-900">{id}</strong>. Your 10% crypto discount is already applied.</p>
      {order && order.amount > 0 && <div className="mt-5 rounded-2xl bg-fw-900 px-5 py-4 text-white"><span className="text-xs font-bold tracking-wider opacity-80">TOTAL TO PAY</span><div className="text-3xl font-black tabular-nums">{aud(order.amount)} AUD</div><p className="mt-1 text-xs opacity-80">Send the AUD value above in your chosen coin, at the current exchange rate.</p></div>}

      <h2 className="mt-8 text-lg font-extrabold">1. Choose your coin</h2>
      <div role="radiogroup" aria-label="Cryptocurrency" className="mt-3 grid gap-2 sm:grid-cols-3">
        {COINS.map((x) => <button key={x.id} type="button" role="radio" aria-checked={coinId === x.id} onClick={() => setCoinId(x.id)} className={`flex items-center gap-3 rounded-xl border-2 p-3.5 text-left ${coinId === x.id ? 'border-fw-600 bg-fw-50' : 'border-line bg-white'}`}><Bitcoin size={20} className="shrink-0 text-accent-600" /><span><span className="block text-sm font-extrabold">{x.label}</span><span className="block text-xs text-muted">{x.sub}</span></span></button>)}
      </div>

      <h2 className="mt-8 text-lg font-extrabold">2. Scan or copy the address</h2>
      <div className="card mt-3 p-5 text-center sm:p-6">
        {qr ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={qr} alt={`QR code for the ${c.coin} wallet address`} width={240} height={240} className="mx-auto rounded-xl border border-line bg-white" /> : <div className="mx-auto h-60 w-60" />}
        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-fw-600">{c.coin} · {c.network}</p>
        <p className="mt-1 break-all font-mono text-sm font-bold" data-testid="wallet">{c.address}</p>
        <button type="button" onClick={copy} className="btn btn-primary mt-4 !min-h-[48px]">{copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy address</>}</button>
        <p className="mt-4 rounded-xl bg-accent-100 p-3 text-left text-xs font-semibold text-accent-600">Send only {c.id === 'btc' ? 'Bitcoin' : 'USDT'} on the {c.network}. Funds sent on a different network cannot be recovered.</p>
      </div>

      <h2 className="mt-8 text-lg font-extrabold">3. Upload your payment screenshot</h2>
      <form onSubmit={submit} className="card mt-3 space-y-4 p-5 sm:p-6">
        <label className="block text-sm font-bold">Screenshot of your completed payment (JPG, PNG, WebP or HEIC)
          <input type="file" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" required onChange={(e) => setFile(e.target.files?.[0] || null)} className="mt-2 block w-full text-sm" />
        </label>
        {err && <p role="alert" className="rounded-xl bg-accent-100 p-3 text-sm font-semibold text-accent-600">{err}</p>}
        <button disabled={state === 'busy' || !file} className="btn btn-primary w-full !min-h-[52px] disabled:opacity-50"><Upload size={18} /> {state === 'busy' ? 'Sending…' : "I've paid: send screenshot"}</button>
        <p className="flex items-center gap-2 text-xs text-muted"><ShieldCheck size={14} /> We email you a confirmation straight away and verify the transaction on the blockchain.</p>
      </form>
    </div></section>
  );
}
export default function CryptoPay() { return <Suspense><Inner /></Suspense>; }
