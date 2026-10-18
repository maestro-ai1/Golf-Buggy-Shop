import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { CONTACT, SITE } from '@/config/site';

const SHOP = [['Shop all', '/shop/'], ['Golf buggies', '/golf-buggies/'], ['Electric buggies', '/golf-buggies/motorised-electric/'], ['Remote control buggies', '/golf-buggies/remote-control/'], ['Push & pull buggies', '/golf-buggies/push-pull-trolleys/'], ['Golf carts', '/golf-carts/'], ['Off-road buggies', '/off-road-buggies/'], ['Parts & accessories', '/parts-accessories/'], ['Clearance', '/clearance/']];
const HELP = [['Delivery', '/delivery/'], ['Locations & delivery areas', '/golf-buggies/for-sale-locations/'], ['Returns', '/returns/'], ['FAQ', '/faq/'], ['Wholesale & fleet', '/wholesale/'], ['Contact us', '/contact/'], ['About us', '/about/'], ['Blog', '/blog/'], ['Brands', '/brands/']];
const LEGAL = [['Privacy policy', '/privacy/'], ['Terms & conditions', '/terms/'], ['Cookies', '/cookies/']];

function Pay({ children, label }: { children: React.ReactNode; label: string }) {
  return <li className="grid h-9 min-w-[58px] place-items-center rounded-md border border-white/15 bg-white px-2" title={label} aria-label={label}>{children}</li>;
}

export default function Footer() {
  return (
    <footer className="mt-0 bg-fw-900 text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-fw-200">Australia&apos;s golf buggy, golf cart and off-road buggy superstore.</p>
          <ul className="mt-5 space-y-2 text-sm text-fw-100">
            <li className="flex items-center gap-3"><Phone size={16} className="text-accent" /><a href="tel:+61420128746" className="hover:text-white">{CONTACT.phone}</a></li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-accent" /><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></li>
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-accent" /><span>{CONTACT.hq}</span></li>
          </ul>
          <p className="mt-3 text-xs text-fw-200">{CONTACT.hours}</p>
        </div>
        <nav aria-label="Shop"><h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-accent">Shop</h2><ul className="space-y-2.5 text-sm">{SHOP.map(([n, u]) => <li key={u}><Link href={u} className="text-fw-100 hover:text-white">{n}</Link></li>)}</ul></nav>
        <nav aria-label="Help"><h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-accent">Help</h2><ul className="space-y-2.5 text-sm">{HELP.map(([n, u]) => <li key={u}><Link href={u} className="text-fw-100 hover:text-white">{n}</Link></li>)}</ul></nav>
        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-accent">We accept</h2>
          <ul className="flex flex-wrap gap-2" aria-label="Payment methods">
            <Pay label="Bank transfer (Osko / EFT)"><span className="text-[11px] font-extrabold text-fw-900">Osko</span></Pay>
            <Pay label="PayID"><span className="text-[12px] font-extrabold italic text-[#0b7a75]">PayID</span></Pay>
            <Pay label="Bitcoin"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#f7931a] text-[14px] font-black text-white">₿</span></Pay>
            <Pay label="USDT"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#26a17b] text-[13px] font-black text-white">₮</span></Pay>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-fw-200">Pay with Bitcoin or USDT for an extra 10% off, applied automatically at checkout. Minimum order $500.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-fw-200 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.legalName} · ABN {CONTACT.abn} · All prices in AUD including GST</p>
          <ul className="flex gap-5">{LEGAL.map(([n, u]) => <li key={u}><Link href={u} className="hover:text-white">{n}</Link></li>)}</ul>
        </div>
      </div>
    </footer>
  );
}
