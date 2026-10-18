'use client';

import { useCallback, useEffect, useState } from 'react';
import { CRYPTO, REPLY } from '@/config/site';

// Passcode-gated reply portal: orders, enquiries, payment-details composer, enquiry replies. Passcode stays server-side (X-Admin-Passcode header).
type Order = { orderNumber: string; customerName: string; customerEmail: string; customerPhone: string; address: string; items: { name: string; quantity: number; price: number }[]; amountDue: number; paymentMethod: string; status: string; channel: string; createdAt: number; paymentDetails?: string };
type Enq = { id: string; type: string; name: string; email: string; phone?: string; message: string; topic?: string; status: string; createdAt: number; reply?: string };
const aud = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2 });
const when = (t: number) => new Date(t).toLocaleString('en-AU', { dateStyle: 'medium', timeStyle: 'short' });

export default function Admin() {
  const [pass, setPass] = useState(''); const [authed, setAuthed] = useState(false); const [err, setErr] = useState('');
  const [tab, setTab] = useState<'orders' | 'enquiries'>('orders');
  const [orders, setOrders] = useState<Order[]>([]); const [enqs, setEnqs] = useState<Enq[]>([]); const [configured, setConfigured] = useState(true);
  const [sel, setSel] = useState<Order | null>(null); const [selE, setSelE] = useState<Enq | null>(null);
  const [detail, setDetail] = useState(''); const [methodId, setMethodId] = useState(REPLY.paymentMethods[0].id); const [reply, setReply] = useState(''); const [note, setNote] = useState('');
  const hdr = { 'X-Admin-Passcode': pass, 'Content-Type': 'application/json' };

  const load = useCallback(async (p = pass) => {
    const h = { 'X-Admin-Passcode': p };
    const r = await fetch('/api/admin/orders', { headers: h });
    if (!r.ok) { setErr(r.status === 503 ? 'Admin is not configured (set ADMIN_PASSCODE).' : 'Wrong passcode.'); setAuthed(false); return false; }
    const j = await r.json(); setOrders(j.orders); setConfigured(j.configured);
    const e = await fetch('/api/admin/enquiries', { headers: h }); if (e.ok) setEnqs((await e.json()).enquiries);
    setAuthed(true); setErr(''); return true;
  }, [pass]);
  useEffect(() => { const s = sessionStorage.getItem('bfs-admin'); if (s) { setPass(s); load(s); } }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function login(e: React.FormEvent) { e.preventDefault(); if (await load()) sessionStorage.setItem('bfs-admin', pass); }
  async function sendPayment() { if (!sel) return; setNote('Sending…'); const r = await fetch('/api/admin/send-payment-email', { method: 'POST', headers: hdr, body: JSON.stringify({ id: sel.orderNumber, methodId, detail }) }); const j = await r.json(); setNote(r.ok ? (j.emailed ? 'Payment email sent.' : 'Saved. Email not sent (SMTP not configured).') : j.error); if (r.ok) { load(); if (j.whatsapp) window.open(j.whatsapp, '_blank', 'noopener'); } }
  async function sendReply() { if (!selE) return; setNote('Sending…'); const r = await fetch('/api/admin/reply-enquiry', { method: 'POST', headers: hdr, body: JSON.stringify({ id: selE.id, message: reply }) }); const j = await r.json(); setNote(r.ok ? (j.emailed ? 'Reply sent.' : 'Saved. Email not sent (SMTP not configured).') : j.error); if (r.ok) load(); }
  async function del(kind: 'orders' | 'enquiries', id: string) { if (!confirm('Delete this record?')) return; await fetch(`/api/admin/${kind}?id=${encodeURIComponent(id)}`, { method: 'DELETE', headers: hdr }); setSel(null); setSelE(null); load(); }

  const box = 'rounded-xl border border-line bg-white p-3 text-sm outline-none focus:border-fw-500';
  if (!authed) return (
    <section className="section"><div className="container-x max-w-sm">
      <h1 className="text-3xl font-black">Admin sign in</h1>
      <form onSubmit={login} className="card mt-6 space-y-4 p-6"><label className="block text-sm font-bold">Passcode<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className={box + ' mt-1.5 w-full'} autoFocus /></label>{err && <p role="alert" className="text-sm font-semibold text-accent-600">{err}</p>}<button className="btn btn-green w-full">Sign in</button></form>
    </div></section>
  );
  return (
    <section className="section !pt-8"><div className="container-x">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h1 className="text-3xl font-black">Reply portal</h1><div className="flex gap-2"><button onClick={() => { setTab('orders'); setSelE(null); }} className={`btn ${tab === 'orders' ? 'btn-green' : 'btn-ghost'}`}>Orders ({orders.length})</button><button onClick={() => { setTab('enquiries'); setSel(null); }} className={`btn ${tab === 'enquiries' ? 'btn-green' : 'btn-ghost'}`}>Enquiries ({enqs.length})</button><button onClick={async () => { setNote('Sending test email…'); const r = await fetch('/api/admin/mail-test', { method: 'POST', headers: hdr }); const j = await r.json().catch(() => ({})); setNote(j.ok ? 'Test email sent to ' + j.to : 'Email test failed: ' + (j.error || r.status)); }} className="btn btn-ghost">Test email</button><a href="/admin/keywords/" className="btn btn-ghost">Keyword report</a><button onClick={() => { sessionStorage.removeItem('bfs-admin'); setAuthed(false); setPass(''); }} className="btn btn-ghost">Sign out</button></div></div>
      {note && !sel && !selE && <p className="mb-5 rounded-xl bg-fw-50 p-4 text-sm font-semibold text-fw-800">{note}</p>}
      {!configured && <p className="mb-5 rounded-xl bg-accent-100 p-4 text-sm font-semibold text-accent-600">Storage is not configured: connect an Upstash Redis database in Vercel (Storage tab) so orders and enquiries appear here. Emails still send.</p>}
      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        <ul className="card max-h-[70vh] divide-y divide-line overflow-y-auto">
          {tab === 'orders' ? orders.map((o) => <li key={o.orderNumber}><button onClick={() => { setSel(o); setDetail(o.paymentDetails || ''); setNote(''); }} className={`w-full p-4 text-left hover:bg-fw-50 ${sel?.orderNumber === o.orderNumber ? 'bg-fw-50' : ''}`}><span className="flex justify-between font-bold"><span>{o.orderNumber}</span><span>{aud(o.amountDue)}</span></span><span className="block text-sm text-muted">{o.customerName} · {o.channel}</span><span className="mt-1 inline-block rounded-full bg-fw-100 px-2 py-0.5 text-[11px] font-bold text-fw-700">{o.status}</span></button></li>) : enqs.map((e) => <li key={e.id}><button onClick={() => { setSelE(e); setReply(''); setNote(''); }} className={`w-full p-4 text-left hover:bg-fw-50 ${selE?.id === e.id ? 'bg-fw-50' : ''}`}><span className="flex justify-between font-bold"><span>{e.name}</span><span className="text-xs text-muted">{e.type}</span></span><span className="block truncate text-sm text-muted">{e.topic || e.message}</span><span className="mt-1 inline-block rounded-full bg-fw-100 px-2 py-0.5 text-[11px] font-bold text-fw-700">{e.status}</span></button></li>)}
          {(tab === 'orders' ? orders : enqs).length === 0 && <li className="p-6 text-center text-muted">Nothing here yet.</li>}
        </ul>
        <div className="card p-6">
          {tab === 'orders' && sel && (<div className="space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-2xl font-extrabold">{sel.orderNumber}</h2><p className="text-sm text-muted">{when(sel.createdAt)} · {sel.channel} · {sel.paymentMethod}</p></div><button onClick={() => del('orders', sel.orderNumber)} className="btn btn-ghost !text-accent-600">Delete</button></div>
            <p className="text-sm"><strong>{sel.customerName}</strong><br />{sel.customerEmail} · {sel.customerPhone}<br />{sel.address}</p>
            <ul className="divide-y divide-line rounded-xl border border-line">{sel.items.map((i, k) => <li key={k} className="flex justify-between p-3 text-sm"><span>{i.name} × {i.quantity}</span><strong>{aud(i.price * i.quantity)}</strong></li>)}<li className="flex justify-between bg-sand-50 p-3 font-extrabold"><span>Amount due</span><span>{aud(sel.amountDue)}</span></li></ul>
            <div><h3 className="text-lg font-extrabold">Send payment details</h3><select value={methodId} onChange={(e) => { const v = e.target.value; setMethodId(v); if (v === 'crypto' && !detail.trim() && (CRYPTO.bitcoinAddress || CRYPTO.usdtTrc20Address || CRYPTO.usdtErc20Address)) setDetail([CRYPTO.bitcoinAddress && 'Bitcoin (BTC) address: ' + CRYPTO.bitcoinAddress, CRYPTO.usdtTrc20Address && 'USDT address (TRC20 / TRON): ' + CRYPTO.usdtTrc20Address, CRYPTO.usdtErc20Address && 'USDT address (ERC20 / Ethereum): ' + CRYPTO.usdtErc20Address].filter(Boolean).join('\n')); }} className={box + ' mt-2 w-full'}>{REPLY.paymentMethods.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}</select><textarea value={detail} onChange={(e) => setDetail(e.target.value)} rows={7} placeholder={'Paste payment details once, e.g.\nAccount name: ...\nBSB: ...\nAccount number: ...\nPayID: ...'} className={box + ' mt-3 w-full font-mono'} /><div className="mt-3 flex flex-wrap items-center gap-3"><button onClick={sendPayment} className="btn btn-primary">Email + WhatsApp payment details</button>{note && <span className="text-sm font-semibold text-fw-700">{note}</span>}</div></div>
          </div>)}
          {tab === 'enquiries' && selE && (<div className="space-y-5">
            <div className="flex justify-between gap-3"><div><h2 className="text-2xl font-extrabold">{selE.name}</h2><p className="text-sm text-muted">{when(selE.createdAt)} · {selE.type}{selE.topic ? ' · ' + selE.topic : ''}</p></div><button onClick={() => del('enquiries', selE.id)} className="btn btn-ghost !text-accent-600">Delete</button></div>
            <p className="text-sm">{selE.email}{selE.phone ? ' · ' + selE.phone : ''}</p>
            <p className="whitespace-pre-wrap rounded-xl bg-sand-50 p-4 text-sm leading-relaxed">{selE.message}</p>
            <div><h3 className="text-lg font-extrabold">Reply</h3><textarea value={reply} onChange={(e) => setReply(e.target.value)} rows={6} className={box + ' mt-2 w-full'} /><div className="mt-3 flex items-center gap-3"><button onClick={sendReply} className="btn btn-primary">Send reply</button>{note && <span className="text-sm font-semibold text-fw-700">{note}</span>}</div></div>
          </div>)}
          {!(tab === 'orders' ? sel : selE) && <p className="py-16 text-center text-muted">Select a record to view and reply.</p>}
        </div>
      </div>
    </div></section>
  );
}
