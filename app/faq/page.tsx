import { Breadcrumbs, Faq, JsonLd } from '@/components/Bits';
import { FAQ_ITEMS } from '@/content/faq';
import { faqSchema, meta } from '@/lib/seo';

export const metadata = meta({ title: 'Golf Buggy & Golf Cart FAQs', description: 'Answers to common questions about buying golf buggies, golf carts, parts and off-road buggies in Australia: pricing, delivery, payment, warranty and road rules.', path: '/faq/' });

export default function FaqPage() {
  const items = FAQ_ITEMS.map((f) => [f.q, f.a] as [string, string]);
  return (
    <>
      <JsonLd data={faqSchema(items)} />
      <section className="border-b border-line bg-white"><div className="container-x py-10"><Breadcrumbs trail={[{ name: 'FAQ', url: '/faq/' }]} /><h1 className="mt-4 text-4xl font-black md:text-5xl">Frequently asked questions</h1><p className="mt-3 max-w-2xl text-lg text-muted">Quick answers about prices, delivery, payment and warranty.</p></div></section>
      <div className="pt-12"><Faq items={items} title="Everything you need to know" /></div>
    </>
  );
}
