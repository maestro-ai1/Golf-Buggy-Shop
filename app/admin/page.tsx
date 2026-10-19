'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { CRYPTO, REPLY } from '@/config/site';

// Passcode-gated reply portal, orders only. Flow per order: 1) email payment details, 2) customer pays and uploads a screenshot (arrives by email),
// 3) press "Payment received" to confirm to the customer. The passcode stays server-side (X-Admin-Passcode header).
type Order = { orderNumber: string; customerName: string; customerEmail: string; customerPhone: string; address: string; items: { name: string; quantity: number; price: number }[]; subtotal: number; shipping: number; cryptoDiscount: number; amountDue: number; paymentMethod: string; status: string; channel: string; createdAt: number; paymentDetails?: string; notes?: string };
const aud = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2 });
const when = (t: number) => new Date(t).toLocaleString('en-AU', { dateStyle: 'medium', timeStyle: 'short' });
const STATUS: Record<string, { label: string; cls: string }> = {
  pending: { label: 'New order', cls: 'bg-accent-100 text-accent-600' },
  'payment-sent': { label: 'Details sent', cls: 'bg-fw-100 text-fw-700' },
  'screenshot-received': { label: 'Screenshot in', cls: 'bg-accent-100 text-accent-600' },
  'payment-confirmed': { label: 'Paid', cls: 'bg-fw-600 text-white' },
};
const STEPS = ['Send payment details', 'Customer pays', 'Confirm payment'];
const stepOf = (s: string) => (s === 'payment-confirmed' ? 3 : s === 'screenshot-received' ? 2 : s === 'payment-sent' ? 1 : 0);

export default function Admin() {
  const [pass, setPass] = useState(''); const [authed, setAuthed] = useState(false); const [err, setErr] = useState('');
  const [orders, setOrders] = useState<Order[]>([]); const [configured, setConfigured] = useState(true);
  const [selId, setSelId] = useState<string | null>(null);
  const [detail, setDetail] = useState(''); const [methodId, setMethodId] = useState(REPLY.paymentMethods[0].id); const [paidNote, setPaidNote] = useState('');
  const [note, setNote] = useState(''); const [wa, setWa] = useState('');
  const hdr = { 'X-Admin-Passcode': pass, 'Content-Type': 'application/json' };
  const sel = orders.find((o) => o.orderNumber === selId) || null;

  const load = useCallback(async (p = pass) => {
    const r = await fetch('/api/admin/orders', { headers: { 'X-Admin-Passcode': p } });
    if (!r.ok) { setErr(r.status === 503 ? 'Admin is not configured (set ADMIN_PASSCODE).' : 'Wrong passcode.'); setAuthed(false); return false; }
    const j = await r.json(); setOrders(j.orders); setConfigured(j.configured); setAuthed(true); setErr(''); return true;
  }, [pass]);
  useEffect(() => { const s = sessionStorage.getItem('bfs-admin'); if (s) { setPass(s); load(s); } }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (!authed) return; const t = setInterval(() => load(), 30000); return () => clearInterval(t); }, [authed, load]);

  function pick(o: Order) {
    setSelId(o.orderNumber); setDetail(o.paymentDetails || ''); setNote(''); setWa(''); setPaidNote('');
    const m = REPLY.paymentMethods.find((x) => /crypto/i.test(o.paymentMethod) ? x.id === 'crypto' : /payid/i.test(o.paymentMethod) ? x.id === 'payid' : x.id === 'eft');
    setMethodId(m ? m.id : REPLY.paymentMethods[0].id);
  }
  async function login(e: React.FormEvent) { e.preventDefault(); if (await load()) sessionStorage.setItem('bfs-admin', pass); }
  async function sendPayment() {
    if (!sel) return; setNote('Sending…');
    const r = await fetch('/api/admin/send-payment-email', { method: 'POST', headers: hdr, body: JSON.stringify({ id: sel.orderNumber, methodId, detail }) }); const j = await r.json();
    setNote(r.ok ? (j.emailed ? 'Payment details emailed to the customer.' : 'Saved, but the email did not send (check Test email).') : j.error);
    if (r.ok) { setWa(j.whatsapp || ''); load(); }
  }
  async function confirmPaid() {
    if (!sel || !confirm(`Confirm payment received for ${sel.orderNumber} and email the customer?`)) return; setNote('Sending…');
    const r = await fetch('/api/admin/confirm-payment', { method: 'POST', headers: hdr, body: JSON.stringify({ id: sel.orderNumber, note: paidNote }) }); const j = await r.json();
    setNote(r.ok ? (j.emailed ? 'Marked paid. Confirmation emailed to the customer.' : 'Marked paid, but the email did not send.') : j.error);
    if (r.ok) { setWa(j.whatsapp || ''); load(); }
  }
  async function del(id: string) { if (!confirm('Delete this order?')) return; await fetch(`/api/admin/orders?id=${encodeURIComponent(id)}`, { method: 'DELETE', headers: hdr }); setSelId(null); load(); }
  async function testEmail() { setNote('Sending test email…'); const r = await fetch('/api/admin/mail-test', { method: 'POST', headers: hdr }); const j = await r.json().catch(() => ({})); setNote(j.ok ? 'Test email sent to ' + j.to : 'Email test failed: ' + (j.error || r.status)); }

  const box = 'rounded-xl border border-line bg-white p-3 text-sm outline-none focus:border-fw-500';
  if (!authed) return (
    <section className="section"><div className="container-x max-w-sm">
      <h1 className="text-3xl font-black">Admin sign in</h1>
      <form onSubmit={login} className="card mt-6 space-y-4 p-6"><label className="block text-sm font-bold">Passcode<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className={box + ' mt-1.5 w-full'} autoFocus /></label>{err && <p role="alert" className="text-sm font-semibold text-accent-600">{err}</p>}<button className="btn btn-green w-full">Sign in</button></form>
    </div></section>
  );

  const step = sel ? stepOf(sel.status) : 0;
  const open = orders.filter((o) => o.status !== 'payment-confirmed').length;
  return (
    <section className="section !pt-8"><div className="container-x">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div><h1 className="text-3xl font-black">Orders</h1><p className="text-sm text-muted">{orders.length} total · {open} to action</p></div>
        <div className="flex flex-wrap gap-2"><button onClick={() => load()} className="btn btn-ghost">Refresh</button><button onClick={testEmail} className="btn btn-ghost">Test email</button><Link href="/admin/keywords/" className="btn btn-ghost">Keyword report</Link><button onClick={() => { sessionStorage.removeItem('bfs-admin'); setAuthed(false); setPass(''); }} className="btn btn-ghost">Sign out</button></div>
      </div>
      {note && !sel && <p className="mb-5 rounded-xl bg-fw-50 p-4 text-sm font-semibold text-fw-800">{note}</p>}
      {!configured && <p className="mb-5 rounded-xl bg-accent-100 p-4 text-sm font-semibold text-accent-600">Storage is not configured: connect an Upstash Redis database in Vercel (Storage tab) so orders appear here. Order emails still send.</p>}
      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        <ul className="card max-h-[70vh] divide-y divide-line overflow-y-auto">
          {orders.map((o) => { const s = STATUS[o.status] || STATUS.pending; return (
            <li key={o.orderNumber}><button onClick={() => pick(o)} className={`w-full p-4 text-left hover:bg-fw-50 ${selId === o.orderNumber ? 'bg-fw-50' : ''}`}>
              <span className="flex justify-between font-bold"><span>{o.orderNumber}</span><span>{aud(o.amountDue)}</span></span>
              <span className="block text-sm text-muted">{o.customerName} · {when(o.createdAt)}</span>
              <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold ${s.cls}`}>{s.label}</span>
            </button></li>); })}
          {orders.length === 0 && <li className="p-6 text-center text-muted">No orders yet.</li>}
        </ul>
        <div className="card p-6">
          {!sel && <p className="py-16 text-center text-muted">Select an order to view and reply.</p>}
          {sel && (<div className="space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-2xl font-extrabold">{sel.orderNumber}</h2><p className="text-sm text-muted">{when(sel.createdAt)} · {sel.channel} · {sel.paymentMethod}</p></div><button onClick={() => del(sel.orderNumber)} className="btn btn-ghost !text-accent-600">Delete</button></div>

            <ol className="grid grid-cols-3 gap-2 text-center text-xs font-bold" aria-label="Order progress">{STEPS.map((s, i) => <li key={s} className={`rounded-xl px-2 py-2 ${i < step ? 'bg-fw-600 text-white' : i === step ? 'bg-accent-100 text-accent-600' : 'bg-sand-50 text-muted'}`}>{i + 1}. {s}</li>)}</ol>

            <p className="text-sm"><strong>{sel.customerName}</strong><br />{sel.customerEmail} · {sel.customerPhone}<br />{sel.address}{sel.notes ? <><br /><em>Notes: {sel.notes}</em></> : null}</p>
            <div className="overflow-hidden rounded-xl border border-line text-sm">
              <ul className="divide-y divide-line">{sel.items.map((i, k) => <li key={k} className="grid grid-cols-[1fr_auto] gap-3 p-3"><span>{i.name}<span className="block text-xs text-muted">{i.quantity} × {aud(i.price)}</span></span><strong className="tabular-nums">{aud(i.price * i.quantity)}</strong></li>)}</ul>
              <dl className="space-y-1.5 border-t-2 border-fw-900 bg-white p-3">
                <div className="grid grid-cols-[1fr_auto] gap-3"><dt className="text-muted">Subtotal (inc. GST)</dt><dd className="font-bold tabular-nums">{aud(sel.subtotal)}</dd></div>
                <div className="grid grid-cols-[1fr_auto] gap-3"><dt className="text-muted">Freight</dt><dd className="font-bold tabular-nums">{sel.shipping > 0 ? aud(sel.shipping) : 'Free'}</dd></div>
                {sel.cryptoDiscount > 0 && <div className="grid grid-cols-[1fr_auto] gap-3 text-fw-700"><dt>Crypto discount (10%)</dt><dd className="font-bold tabular-nums">-{aud(sel.cryptoDiscount)}</dd></div>}
                <div className="grid grid-cols-[1fr_auto] gap-3 text-xs italic text-muted"><dt>GST included in total</dt><dd className="tabular-nums">{aud(sel.amountDue / 11)}</dd></div>
              </dl>
              <div className="flex items-center justify-between gap-3 bg-fw-900 p-3 text-white"><span className="font-extrabold">TOTAL TO PAY (AUD)</span><span className="flex items-center gap-3"><strong className="text-xl tabular-nums">{aud(sel.amountDue)}</strong><button type="button" onClick={() => { navigator.clipboard?.writeText(sel.amountDue.toFixed(2)); setNote('Amount ' + sel.amountDue.toFixed(2) + ' copied.'); }} className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold hover:bg-white/25">Copy</button></span></div>
            </div>
            {(methodId === 'crypto') !== (sel.cryptoDiscount > 0) && <p className="rounded-xl bg-accent-100 p-3 text-sm font-semibold text-accent-600">{methodId === 'crypto' ? 'The customer did not choose crypto at checkout, so no 10% discount is applied. The amount above is what they pay.' : 'The customer chose crypto, so the 10% discount is already in the amount above.'}</p>}

            {sel.status !== 'payment-confirmed' && (<div>
              <h3 className="text-lg font-extrabold">1. {sel.paymentDetails ? 'Payment details (sent). Resend if needed' : 'Send payment details'}</h3>
              <select value={methodId} onChange={(e) => { const v = e.target.value; setMethodId(v); if (v === 'crypto' && !detail.trim() && (CRYPTO.bitcoinAddress || CRYPTO.usdtTrc20Address || CRYPTO.usdtErc20Address)) setDetail([CRYPTO.bitcoinAddress && 'Bitcoin (BTC) address: ' + CRYPTO.bitcoinAddress, CRYPTO.usdtTrc20Address && 'USDT address (TRC20 / TRON): ' + CRYPTO.usdtTrc20Address, CRYPTO.usdtErc20Address && 'USDT address (ERC20 / Ethereum): ' + CRYPTO.usdtErc20Address].filter(Boolean).join('\n')); }} className={box + ' mt-2 w-full'} aria-label="Payment method">{REPLY.paymentMethods.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}</select>
              <textarea value={detail} onChange={(e) => setDetail(e.target.value)} rows={6} placeholder={'Paste payment details once, e.g.\nAccount name: ...\nBSB: ...\nAccount number: ...\nPayID: ...'} className={box + ' mt-3 w-full font-mono'} aria-label="Payment details" />
              <div className="mt-3 flex flex-wrap items-center gap-3"><button onClick={sendPayment} disabled={detail.trim().length < 4} className="btn btn-primary disabled:opacity-50">Email payment details</button>{wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Open WhatsApp message</a>}</div>
            </div>)}

            {sel.status !== 'payment-confirmed' && (<div className="rounded-xl bg-sand-50 p-4">
              <h3 className="text-lg font-extrabold">2. Customer pays</h3>
              <p className="mt-1 text-sm text-muted">{sel.status === 'screenshot-received' ? 'The screenshot is in your inbox (subject: "Payment screenshot for order ' + sel.orderNumber + '"). Check it against your bank or wallet.' : 'The customer pays and uploads a screenshot. It arrives in your inbox with the subject "Payment screenshot for order ' + sel.orderNumber + '".'}</p>
            </div>)}

            <div>
              <h3 className="text-lg font-extrabold">{sel.status === 'payment-confirmed' ? 'Paid' : '3. Confirm payment'}</h3>
              {sel.status !== 'payment-confirmed' && <><textarea value={paidNote} onChange={(e) => setPaidNote(e.target.value)} rows={3} placeholder="Optional message to the customer, e.g. delivery timing" className={box + ' mt-2 w-full'} aria-label="Message to customer" />
              <div className="mt-3"><button onClick={confirmPaid} className="btn btn-green">Payment received: email customer</button></div></>}
              {sel.status === 'payment-confirmed' && <p className="mt-1 text-sm text-muted">Payment confirmed and the customer has been emailed.</p>}
              {wa && sel.status === 'payment-confirmed' && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-3">Open WhatsApp message</a>}
            </div>
            {note && <p className="rounded-xl bg-fw-50 p-3 text-sm font-semibold text-fw-800" role="status">{note}</p>}
          </div>)}
        </div>
      </div>
    </div></section>
  );
}
