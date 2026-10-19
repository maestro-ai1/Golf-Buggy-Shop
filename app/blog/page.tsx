import { Breadcrumbs } from '@/components/Bits';
import BlogGrid, { blogPageCount } from '@/components/BlogGrid';
import { BLOG_POSTS } from '@/config/site';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Golf Buggy & Golf Cart Buying Guides', description: 'Buying guides, price guides and how-tos for golf buggies, golf carts, lithium batteries and off-road buggies in Australia, written by the Buggies For Sale team.', path: '/blog/' });

export default function Blog() {
  return (
    <>
      <section className="border-b border-line bg-white"><div className="container-x py-10"><Breadcrumbs trail={[{ name: 'Blog', url: '/blog/' }]} /><h1 className="mt-4 text-4xl font-black md:text-5xl">Buying guides &amp; advice</h1><p className="mt-3 max-w-2xl text-lg text-muted">Straight answers on golf buggies, golf carts, batteries and off-road buggies for Australian buyers.</p></div></section>
      <section className="section"><div className="container-x"><BlogGrid posts={BLOG_POSTS} page={1} pages={blogPageCount(BLOG_POSTS.length)} /></div></section>
    </>
  );
}
