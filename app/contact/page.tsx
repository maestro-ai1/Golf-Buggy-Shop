import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Mail, MapPin, MessageCircle, Phone, Truck, Users, Wrench } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Breadcrumbs, Faq, JsonLd } from '@/components/Bits';
import { CONTACT, SHOP, SITE } from '@/config/site';
import { abs, faqSchema, meta } from '@/lib/seo';

// Primary: golf carts for sale near me. Secondary: golf cart for sale near me, second hand golf carts for sale near me, golf buggy for sale sydney, golf buggy for sale perth, golf carts for sale adelaide.
export const metadata = meta({
  title: 'Contact Us | Golf Carts For Sale Near Me, Australia',
  description: 'Looking for golf carts for sale near me? Call, WhatsApp or email our Sydney team for quotes, freight and fitment help. We deliver Australia-wide.',
  path: '/contact/',
});

const free = `$${SHOP.freeShippingThreshold.toLocaleString('en-AU')}`;
const FAQS: [string, string][] = [
  ['Golf cart for sale near me: can I see one before I buy?', 'Tell us your postcode and the model you are considering. We will confirm what is available, how it ships and the delivered cost, and answer your questions by phone or WhatsApp before you pay.'],
  ['Second hand golf carts for sale near me: do you stock used carts?', 'We list used and refurbished golf carts when they are available. Call us with your budget and we will tell you what is in stock and what it costs delivered.'],
  ['Golf buggy for sale Sydney: where are you based?', 'We are based in Sydney, New South Wales. Send us your suburb and we will confirm delivery options for your golf buggy or golf cart.'],
  ['Golf buggy for sale Perth: do you deliver to Western Australia?', `Yes, we deliver Australia-wide. Delivery is free over ${free} to major metro and depot corridors, a flat $${SHOP.shippingFee} freight fee applies below that, and regional freight is confirmed before dispatch.`],
  ['Golf carts for sale Adelaide: do you deliver to South Australia?', `Yes. We freight golf carts, buggies and parts to every state and territory. We confirm the delivered cost to your postcode before you pay.`],
  ['Can I get a trade or wholesale quote?', 'Yes. Send a wholesale enquiry with the models, quantities and delivery location and we will quote the order together, including accessories and freight.'],
];

const REASONS = [
  { Icon: FileText, t: 'Get a quote', d: 'Tell us the model and your postcode and we confirm stock and the delivered price.', href: '/shop/', cta: 'Browse the range' },
  { Icon: Truck, t: 'Delivery and freight', d: `Free delivery over ${free} to major metro and depot corridors. We confirm regional freight first.`, href: '/delivery/', cta: 'Delivery information' },
  { Icon: Wrench, t: 'Fitment and parts', d: 'Check that a battery, charger or accessory fits your golf cart before you order.', href: '/parts-accessories/', cta: 'Parts and accessories' },
  { Icon: Users, t: 'Trade and wholesale', d: 'Clubs, resorts, farms and fleets: quote several units and accessories together.', href: '/wholesale/', cta: 'Wholesale enquiry' },
];

export default async function Contact({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic = '' } = await searchParams;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact Buggies For Sale', url: abs('/contact/'), isPartOf: { '@id': abs('/#website') }, about: { '@id': abs('/#org') } },
    faqSchema(FAQS),
  ];
  return (
    <>
      <JsonLd data={schema} />
      <section className="border-b border-line bg-white"><div className="container-x py-10">
        <Breadcrumbs trail={[{ name: 'Contact', url: '/contact/' }]} />
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Contact Us: Golf Carts For Sale Near Me, Australia-Wide</h1>
        <p className="mt-3 max-w-3xl text-lg text-muted">Looking for golf carts for sale near me? Our Sydney team ships Australia-wide, so wherever you are we can quote the delivered price, confirm stock and help you choose. Ask about a model, a quote, fitment or delivery. We reply the same business day.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="tel:+61420128746" className="btn btn-primary"><Phone size={18} aria-hidden="true" /> Call {CONTACT.phone}</a>
          <a href="https://wa.me/61420128746?text=Hi%20Buggies%20For%20Sale%2C%20" target="_blank" rel="noopener noreferrer" className="btn btn-green"><MessageCircle size={18} aria-hidden="true" /> WhatsApp us</a>
          <a href={`mailto:${CONTACT.email}`} className="btn btn-ghost"><Mail size={18} aria-hidden="true" /> Email us</a>
        </div>
      </div></section>

      <section className="section" aria-labelledby="send-h"><div className="container-x grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 id="send-h" className="mb-4 text-2xl font-extrabold md:text-3xl">Send us a message</h2>
          <Suspense><ContactForm topic={topic} /></Suspense>
        </div>
        <div className="space-y-4">
          {[[Phone, 'Call', CONTACT.phone, 'tel:+61420128746'], [MessageCircle, 'WhatsApp', 'Message us', 'https://wa.me/61420128746?text=Hi%20Buggies%20For%20Sale%2C%20'], [Mail, 'Email', CONTACT.email, `mailto:${CONTACT.email}`]].map(([Icon, t, v, h]) => { const I = Icon as typeof Phone; return <a key={t as string} href={h as string} className="card card-hover flex items-center gap-4 p-5"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-fw-50 text-fw-700"><I size={22} /></span><span><span className="block text-xs font-bold uppercase tracking-wider text-fw-600">{t as string}</span><span className="block font-bold text-fw-900">{v as string}</span></span></a>; })}
          <div className="card p-5"><p className="flex items-start gap-3"><MapPin size={20} className="mt-0.5 shrink-0 text-fw-600" /><span><strong className="block">{CONTACT.hq}</strong><span className="text-sm text-muted">{CONTACT.hours}</span><span className="mt-1 block text-sm text-muted">{SITE.legalName} · ABN {CONTACT.abn}</span></span></p></div>
        </div>
      </div></section>

      <section className="section pt-0" aria-labelledby="why-contact-h"><div className="container-x">
        <h2 id="why-contact-h" className="text-2xl font-extrabold md:text-3xl">How we can help</h2>
        <p className="mt-2 max-w-3xl text-muted">Whether you are comparing golf carts for sale near me or you are ready to order, our team can help with the four things buyers ask about most.</p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ Icon, t, d, href, cta }) => (
            <li key={t} className="card flex flex-col p-5">
              <Icon size={26} className="text-fw-600" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-extrabold">{t}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{d}</p>
              <Link href={href} className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-accent-600 hover:underline">{cta} <ArrowRight size={15} aria-hidden="true" /></Link>
            </li>
          ))}
        </ul>
      </div></section>

      <Faq items={FAQS} title="Golf carts and buggies for sale: contact questions" />
    </>
  );
}
