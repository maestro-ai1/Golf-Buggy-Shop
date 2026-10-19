'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import Pic from '@/components/Pic';
import { RULES, useCart } from '@/lib/cart';
import { money, money2 } from '@/lib/utils';
import { REPLY } from '@/config/site';
import { Breadcrumbs } from '@/components/Bits';

const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O/1/I/L
const makeRef = () => 'BFS-' + Array.from({ length: 7 }, () => ALPHA[Math.floor(Math.random() * ALPHA.length)]).join('');
const METHODS = ['Bank transfer (Osko / EFT)', 'PayID', 'Cryptocurrency (Bitcoin / USDT) - 10% discount'];

export default function Checkout() {
  const cart = useCart();
  const router = useRouter();
  const [method, setMethod] = useState(METHODS[0]);
  const [busy, setBusy] = useState<'' | 'email' | 'whatsapp'>('');
  const [err, setErr] = useState('');
  const [ref] = useState(makeRef);
  const crypto = /crypto/i.test(method);
  useEffect(() => { cart.setCrypto(crypto); }, [crypto]); // eslint-disable-line react-hooks/exhaustive-deps

  async function place(channel: 'email' | 'whatsapp', form: HTMLFormElement) {
    if (!form.reportValidity()) return;
    setBusy(channel); setErr('');
    const f = Object.fromEntries(new FormData(form).entries());
    const items = cart.items.map((i) => ({ slug: i.slug, quantity: i.quantity }));
    try {
      const r = await fetch('/api/order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...f, items, ref, channel, paymentMethod: method }) });
      const j = await r.json();
      if (!j.success) { setErr(j.error || 'Could not place the order.'); setBusy(''); return; }
      if (channel === 'whatsapp') {
        const msg = `Hi Buggies For Sale, I just placed order ${ref} (${money2(cart.total)}).\nName: ${f.name}\n` + cart.items.map((i) => `${i.quantity} x ${i.name}`).join('\n') + `\nPayment: ${method}\nPlease send my payment details.`;
        window.open(`https://wa.me/${REPLY.channels.whatsappCountryCode}${REPLY.channels.whatsapp.replace(/^0/, '').replace(/\s/g, '')}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
      }
      cart.clear(); router.push(`/thank-you-order/?ref=${ref}`);
    } catch { setErr('Network error. Please call 0420 128 746.'); setBusy(''); }
  }

  const input = 'h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] outline-none focus:border-fw-500 focus:ring-2 focus:ring-fw-100 mt-1.5';
  if (cart.items.length === 0) return <section className="section"><div className="container-x max-w-xl text-center"><div className="mb-6 flex justify-center"><Breadcrumbs trail={[{ name: 'Cart', url: '/shop/' }, { name: 'Checkout', url: '/checkout/' }]} /></div><h1 className="text-3xl font-black">Your cart is empty</h1><p className="mt-3 text-muted">Add a buggy, cart or accessory to continue.</p><Link href="/shop/" className="btn btn-primary mt-6">Shop all products</Link></div></section>;

  return (
    <section className="section !pt-10"><div className="container-x">
      <Breadcrumbs trail={[{ name: 'Cart', url: '/shop/' }, { name: 'Checkout', url: '/checkout/' }]} />
      <h1 className="mt-4 text-4xl font-black">Checkout</h1>
      <p className="mt-2 text-muted">Order reference <strong className="text-fw-900">{ref}</strong>. We confirm stock and freight, then email your payment details.</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form className="card space-y-5 p-6 sm:p-8" onSubmit={(e) => { e.preventDefault(); place('email', e.currentTarget); }}>
          <h2 className="text-xl font-extrabold">Your details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-bold">Full name<input name="name" required autoComplete="name" className={input} /></label>
            <label className="block text-sm font-bold">Email<input name="email" type="email" required autoComplete="email" className={input} /></label>
            <label className="block text-sm font-bold sm:col-span-2">Mobile phone<input name="phone" type="tel" required minLength={8} autoComplete="tel" className={input} /></label>
            <label className="block text-sm font-bold sm:col-span-2">Delivery address (street, suburb, state, postcode)<input name="address" required minLength={8} autoComplete="street-address" className={input} /></label>
          </div>
          <fieldset><legend className="text-sm font-bold">Payment method</legend>
            <div className="mt-2 grid gap-2">{METHODS.map((m) => <label key={m} className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-3.5 text-sm font-semibold ${method === m ? 'border-fw-600 bg-fw-50' : 'border-line'}`}><input type="radio" name="pm" checked={method === m} onChange={() => setMethod(m)} className="accent-[#1c7a55]" />{m}</label>)}</div>
          </fieldset>
          <label className="block text-sm font-bold">Order notes (optional)<textarea name="notes" rows={3} className="mt-1.5 w-full rounded-xl border border-line bg-white p-4 text-[15px]" /></label>
          <input name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          {err && <p role="alert" className="rounded-xl bg-accent-100 p-3 text-sm font-semibold text-accent-600">{err}</p>}
          {!cart.minMet && <p className="rounded-xl bg-accent-100 p-3 text-sm font-semibold text-accent-600">Minimum order is {money(RULES.minOrder)}. Add {money(cart.minRemaining)} more to continue.</p>}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" disabled={!cart.minMet || !!busy} className="btn btn-primary flex-1 !min-h-[52px] disabled:opacity-50">{busy === 'email' ? 'Placing order…' : 'Place order'}</button>
            <button type="button" disabled={!cart.minMet || !!busy} onClick={(e) => place('whatsapp', (e.currentTarget.closest('form') as HTMLFormElement))} className="btn flex-1 !min-h-[52px] bg-[#25D366] text-white hover:bg-[#1fb957] disabled:opacity-50"><MessageCircle size={18} /> {busy === 'whatsapp' ? 'Placing…' : 'Order via WhatsApp'}</button>
          </div>
          <p className="flex items-center gap-2 text-xs text-muted"><ShieldCheck size={14} /> No payment is taken on this page. We email secure payment details after confirming your order.</p>
        </form>
        <aside className="card self-start p-6">
          <h2 className="text-xl font-extrabold">Order summary</h2>
          <ul className="mt-4 divide-y divide-line">{cart.items.map((i) => <li key={i.slug} className="flex gap-3 py-3"><span className="product-frame h-16 w-16 shrink-0 border border-line"><Pic base={i.image} alt={i.name} width={64} height={64} /></span><span className="flex-1 text-sm font-semibold">{i.name}<span className="block text-xs text-muted">Qty {i.quantity}</span></span><span className="font-bold">{money(i.price * i.quantity)}</span></li>)}</ul>
          <dl className="mt-4 space-y-1.5 border-t-2 border-fw-900 pt-4 text-sm">
            <div className="flex justify-between"><dt className="text-muted">Subtotal (inc. GST)</dt><dd className="font-bold tabular-nums">{money2(cart.subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">Freight</dt><dd className="font-bold tabular-nums">{cart.shipping ? money2(cart.shipping) : 'Free'}</dd></div>
            {cart.cryptoDiscount > 0 && <div className="flex justify-between text-fw-700"><dt>Crypto discount (10%)</dt><dd className="font-bold tabular-nums">-{money2(cart.cryptoDiscount)}</dd></div>}
            <div className="flex justify-between text-xs italic text-muted"><dt>GST included in total</dt><dd className="tabular-nums">{money2(cart.gst)}</dd></div>
            <div className="mt-2 flex items-center justify-between rounded-xl bg-fw-900 px-4 py-3 text-white"><dt className="font-extrabold">Total to pay</dt><dd className="text-xl font-black tabular-nums">{money2(cart.total)}</dd></div>
          </dl>
        </aside>
      </div>
    </div></section>
  );
}
