import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Bits';
import BlogGrid, { blogPageCount } from '@/components/BlogGrid';
import { BLOG_POSTS } from '@/config/site';
import { meta } from '@/lib/seo';

// Pages 2+ of the blog live at /blog/page/<n>/ (real URLs, self-canonical, unique title). Page 1 is /blog/.
const pages = blogPageCount(BLOG_POSTS.length);
export function generateStaticParams() { return Array.from({ length: Math.max(0, pages - 1) }, (_, i) => ({ n: String(i + 2) })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const n = Number((await params).n);
  if (!Number.isInteger(n) || n < 2 || n > pages) return {};
  return meta({ title: `Buying Guides - Page ${n} of ${pages}`, description: `Page ${n} of ${pages}: more golf buggy, golf cart, lithium battery and off-road buggy buying guides and how-tos for Australian buyers.`, path: `/blog/page/${n}/` });
}

export default async function BlogPage({ params }: { params: Promise<{ n: string }> }) {
  const n = Number((await params).n);
  if (n === 1) permanentRedirect('/blog/');
  if (!Number.isInteger(n) || n < 2 || n > pages) notFound();
  return (
    <>
      <section className="border-b border-line bg-white"><div className="container-x py-10"><Breadcrumbs trail={[{ name: 'Blog', url: '/blog/' }, { name: `Page ${n}`, url: `/blog/page/${n}/` }]} /><h1 className="mt-4 text-4xl font-black md:text-5xl">Buying guides &amp; advice: page {n} of {pages}</h1></div></section>
      <section className="section"><div className="container-x"><BlogGrid posts={BLOG_POSTS} page={n} pages={pages} /></div></section>
    </>
  );
}
