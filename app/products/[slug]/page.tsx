import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BadgePercent, Check, CreditCard, ShieldCheck, Truck } from 'lucide-react';
import Gallery from '@/components/Gallery';
import AddToCart from '@/components/AddToCart';
import ProductCard, { toCard } from '@/components/ProductCard';
import { Breadcrumbs, Faq, JsonLd, SectionHead } from '@/components/Bits';
import { PRODUCTS, SHOP, breadcrumbsFor, money, pageByUrl, productBySlug } from '@/config/site';
import { Markdown } from '@/lib/md';
import { faqSchema, meta, productSchema } from '@/lib/seo';

export function generateStaticParams() { return PRODUCTS.map((p) => ({ slug: p.slug })); }

const titleFor = (name: string) => {
  const full = `${name} | Buy Online Australia`;
  if (full.length <= 60) return full;
  const short = `${name} | Buy Online`;
  if (short.length <= 60) return short;
  return name.slice(0, 57).replace(/\s+\S*$/, '') + '…';
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  const d = `Buy the ${p.name} online in Australia for ${money(p.price)} inc. GST. ${p.shortDescription.replace(/^[^:]+:\s*/, '')} Free delivery over $1,000.`;
  return { ...meta({ title: titleFor(p.name), description: d, path: `/products/${p.slug}/`, image: p.images[0] + '.webp' }), title: { absolute: titleFor(p.name) } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const page = pageByUrl(p.category);
  const trail = [...(page ? breadcrumbsFor(page) : []), { name: p.name, url: `/products/${p.slug}/` }];
  const related = PRODUCTS.filter((x) => x.slug !== p.slug && x.categories[0] === p.categories[0]).slice(0, 4);
  const more = related.length < 4 ? [...related, ...PRODUCTS.filter((x) => x.slug !== p.slug && x.group === p.group && !related.includes(x))].slice(0, 4) : related;
  const specs = Object.entries(p.specs);

  return (
    <>
      <JsonLd data={[productSchema(p), faqSchema(p.faqs)]} />
      <div className="border-b border-line bg-white"><div className="container-x py-4"><Breadcrumbs trail={trail} /></div></div>

      <section className="section !pt-8">
        <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Gallery images={p.images} alt={p.name} />
          <div>
            <p className="eyebrow">{p.brand}</p>
            <h1 className="mt-2 text-[30px] font-black leading-tight md:text-[38px]">{p.name}</h1>
            <p className="mt-3 text-[17px] leading-relaxed text-muted">{p.shortDescription}</p>

            <div className="mt-6 rounded-2xl border border-fw-100 bg-fw-50 p-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-[44px] font-black leading-none text-fw-900">{money(p.price)}</span>
              </div>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-fw-700"><BadgePercent size={16} /> Price includes GST.</p>
            </div>

            <div className="mt-5"><AddToCart item={{ slug: p.slug, name: p.name, price: p.price, image: p.images[0], brand: p.brand }} /></div>
            <p className="mt-3 text-center text-xs text-muted">Pay by Osko/EFT, PayID or Bitcoin/USDT (extra {SHOP.cryptoDiscount}% off at checkout). Minimum order {money(SHOP.minOrder)}.</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[[Truck, p.price >= 1000 ? 'Free delivery' : `Delivery ${money(SHOP.shippingFee)} flat`, p.leadTime || 'Dispatch within 24-48 business hours'], [ShieldCheck, 'Manufacturer warranty', 'Details with your order'], [CreditCard, 'Flexible payment', 'Osko/EFT, PayID, crypto'], [Check, 'Expert support', 'Call 0420 128 746']].map(([Icon, t, s]) => {
                const I = Icon as typeof Truck;
                return <li key={t as string} className="flex items-start gap-3 rounded-xl border border-line bg-white p-3.5"><I size={20} className="mt-0.5 shrink-0 text-fw-600" /><span><span className="block text-sm font-bold text-fw-900">{t as string}</span><span className="block text-xs text-muted">{s as string}</span></span></li>;
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-copy">
            <Markdown lines={p.paragraphs} />
            <ul aria-label="Tags" className="mt-8 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t}><Link href={`/search/?q=${encodeURIComponent(t)}`} className="chip hover:bg-fw-100">{t}</Link></li>)}</ul>
            {p.specs.Fits && <p>Fitment: <strong>{p.specs.Fits}</strong>. Not sure it suits your cart? Send us the model and year before you order.</p>}
          </div>
          <div className="space-y-5 self-start">
            <div className="card overflow-hidden">
              <h2 className="bg-fw-900 px-5 py-3 font-display text-lg font-extrabold !text-white">Specifications</h2>
              <table className="w-full text-sm"><tbody>
                {specs.map(([k, v]) => <tr key={k} className="border-b border-line last:border-0"><th scope="row" className="w-2/5 bg-sand-50 px-5 py-2.5 text-left font-semibold text-muted">{k}</th><td className="px-5 py-2.5 font-semibold text-ink">{v}</td></tr>)}
                <tr className="border-b border-line"><th scope="row" className="bg-sand-50 px-5 py-2.5 text-left font-semibold text-muted">SKU</th><td className="px-5 py-2.5 font-semibold">{p.sku}</td></tr>
                <tr><th scope="row" className="bg-sand-50 px-5 py-2.5 text-left font-semibold text-muted">Condition</th><td className="px-5 py-2.5 font-semibold">New</td></tr>
              </tbody></table>
            </div>
            <p className="text-xs leading-relaxed text-muted">Specifications are summarised from the manufacturer and may change. Confirm critical details with us before ordering.</p>
          </div>
        </div>
      </section>

      <Faq items={p.faqs} title={`${p.name}: common questions`} />

      <section className="section pt-0">
        <div className="container-x">
          <SectionHead eyebrow="You may also like" title="Related products" action={page ? { href: page.url, label: `All ${page.name.replace(/ \(Hub\)$/, '')}` } : undefined} />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{more.map((r) => <ProductCard key={r.slug} p={toCard(r)} />)}</div>
        </div>
      </section>
    </>
  );
}
