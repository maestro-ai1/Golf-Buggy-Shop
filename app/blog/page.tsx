import Link from 'next/link';
import { Breadcrumbs } from '@/components/Bits';
import { BLOG_POSTS } from '@/config/site';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Golf Buggy & Golf Cart Buying Guides', description: 'Buying guides, price guides and how-tos for golf buggies, golf carts, lithium batteries and off-road buggies in Australia, written by the Buggies For Sale team.', path: '/blog/' });

export default function Blog() {
  return (
    <>
      <section className="border-b border-line bg-white"><div className="container-x py-10"><Breadcrumbs trail={[{ name: 'Blog', url: '/blog/' }]} /><h1 className="mt-4 text-4xl font-black md:text-5xl">Buying guides &amp; advice</h1><p className="mt-3 max-w-2xl text-lg text-muted">Straight answers on golf buggies, golf carts, batteries and off-road buggies for Australian buyers.</p></div></section>
      <section className="section"><div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((b) => (
          <article key={b.slug} className="card card-hover group flex flex-col overflow-hidden">
            <Link href={`/blog/${b.slug}/`} className="block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.image} alt={`${b.targetKeyword} guide`} width={1600} height={900} loading="lazy" className="aspect-[16/9] w-full object-cover" />
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <p className="eyebrow">{b.category} · {b.readTime}</p>
              <h2 className="mt-2 text-xl font-extrabold leading-snug"><Link href={`/blog/${b.slug}/`} className="hover:text-fw-600">{b.title}</Link></h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.excerpt}</p>
              <Link href={`/blog/${b.slug}/`} className="mt-auto pt-5 text-sm font-extrabold text-accent-600">Read the guide →</Link>
            </div>
          </article>
        ))}
      </div></section>
    </>
  );
}
