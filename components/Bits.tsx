import Link from 'next/link';
import { ChevronRight, Star, ChevronDown } from 'lucide-react';
import { TRUSTPILOT, REVIEWS } from '@/content/reviews';
import { crumbSchema } from '@/lib/seo';

export function JsonLd({ data }: { data: object | object[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return <>{arr.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, '\\u003c') }} />)}</>;
}

export function Breadcrumbs({ trail }: { trail: { name: string; url: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] font-semibold text-muted">
      <JsonLd data={crumbSchema(trail)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link href="/" className="hover:text-fw-700">Home</Link></li>
        {trail.map((t, i) => (
          <li key={t.url} className="flex items-center gap-1.5"><ChevronRight size={13} />{i === trail.length - 1 ? <span aria-current="page" className="text-ink">{t.name}</span> : <Link href={t.url} className="hover:text-fw-700">{t.name}</Link>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function Faq({ items, title = 'Frequently asked questions' }: { items: [string, string][]; title?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq-h" className="section pt-0">
      <div className="container-x max-w-4xl">
        <h2 id="faq-h" className="mb-6 text-2xl font-extrabold md:text-3xl">{title}</h2>
        <div className="space-y-3">
          {items.map(([q, a], i) => (
            <details key={q} className="card group p-0" open={i === 0}>
              <summary className="flex items-center justify-between gap-4 p-5 font-bold text-fw-900"><span>{q}</span><ChevronDown size={18} className="shrink-0 transition group-open:rotate-180" /></summary>
              <p className="px-5 pb-5 leading-relaxed text-[#2c3a33]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trustpilot block: owner's content from the previous website, unchanged.
export function TrustpilotBlock() {
  return (
    <section className="section bg-sand-100" aria-labelledby="tp-h">
      <div className="container-x">
        <div className="card p-6 sm:p-9">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="space-y-3 lg:col-span-5">
              <span className="eyebrow">{TRUSTPILOT.kicker}</span>
              <h2 id="tp-h" className="text-2xl font-extrabold uppercase tracking-tight md:text-3xl">{TRUSTPILOT.heading}</h2>
              <div className="flex items-center gap-3">
                <div className="font-display text-5xl font-black text-fw-700">{TRUSTPILOT.score}</div>
                <div>
                  <div role="img" className="flex text-trustpilot" aria-label="5 out of 5 stars">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                  <div className="mt-0.5 text-xs font-bold text-trustpilot">{TRUSTPILOT.countLabel}</div>
                </div>
              </div>
              <div className="text-xs font-bold text-trustpilot">{TRUSTPILOT.platformLabel}</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {REVIEWS.map((r) => (
                <figure key={r.author} className="space-y-2 rounded-xl border border-line bg-sand-50 p-5">
                  <div className="flex text-amber-500">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                  <blockquote className="text-sm italic leading-relaxed text-[#2c3a33]">“{r.quote}”</blockquote>
                  <figcaption className="text-xs font-bold text-fw-900">— {r.author}, {r.place}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub, action }: { eyebrow?: string; title: string; sub?: string; action?: { href: string; label: string } }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-3xl font-extrabold md:text-[40px]">{title}</h2>
        {sub && <p className="mt-3 text-[17px] leading-relaxed text-muted">{sub}</p>}
      </div>
      {action && <Link href={action.href} className="btn btn-ghost">{action.label} →</Link>}
    </div>
  );
}
