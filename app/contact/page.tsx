import { Suspense } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Breadcrumbs, JsonLd } from '@/components/Bits';
import { CONTACT } from '@/config/site';
import { meta, orgSchema } from '@/lib/seo';

export const metadata = meta({ title: 'Contact Buggies For Sale: Call, WhatsApp or Email', description: 'Contact Buggies For Sale in Sydney for golf buggies, golf carts, parts and off-road buggies. Call 0420 128 746, WhatsApp or email sales@buggiesforsale.com.au.', path: '/contact/' });

export default async function Contact({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic = '' } = await searchParams;
  return (
    <>
      <JsonLd data={orgSchema()} />
      <section className="border-b border-line bg-white"><div className="container-x py-10"><Breadcrumbs trail={[{ name: 'Contact', url: '/contact/' }]} /><h1 className="mt-4 text-4xl font-black md:text-5xl">Contact us</h1><p className="mt-3 max-w-2xl text-lg text-muted">Ask about a model, a quote, fitment or delivery. We reply the same business day.</p></div></section>
      <section className="section"><div className="container-x grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Suspense><ContactForm topic={topic} /></Suspense>
        <div className="space-y-4">
          {[[Phone, 'Call', CONTACT.phone, 'tel:+61420128746'], [MessageCircle, 'WhatsApp', 'Message us', 'https://wa.me/61420128746?text=Hi%20Buggies%20For%20Sale%2C%20'], [Mail, 'Email', CONTACT.email, `mailto:${CONTACT.email}`]].map(([Icon, t, v, h]) => { const I = Icon as typeof Phone; return <a key={t as string} href={h as string} className="card card-hover flex items-center gap-4 p-5"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-fw-50 text-fw-700"><I size={22} /></span><span><span className="block text-xs font-bold uppercase tracking-wider text-fw-600">{t as string}</span><span className="block font-bold text-fw-900">{v as string}</span></span></a>; })}
          <div className="card p-5"><p className="flex items-start gap-3"><MapPin size={20} className="mt-0.5 shrink-0 text-fw-600" /><span><strong className="block">{CONTACT.hq}</strong><span className="text-sm text-muted">{CONTACT.hours}</span></span></p></div>
        </div>
      </div></section>
    </>
  );
}
