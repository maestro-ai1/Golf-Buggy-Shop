import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/config/site';

export const BLOG_PER_PAGE = 9; // 3 x 3 on desktop, 1 x 9 on mobile
export const blogPageCount = (total: number) => Math.max(1, Math.ceil(total / BLOG_PER_PAGE));
const hrefFor = (n: number) => (n > 1 ? `/blog/page/${n}/` : '/blog/');

// Server-rendered list: every page is a real, crawlable URL. A short last row is centred so the grid never looks lopsided.
export default function BlogGrid({ posts, page, pages }: { posts: BlogPost[]; page: number; pages: number }) {
  const slice = posts.slice((page - 1) * BLOG_PER_PAGE, page * BLOG_PER_PAGE);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {slice.map((b, i) => (
          <article key={b.slug} className="card card-hover group flex w-full flex-col overflow-hidden md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
            <Link href={`/blog/${b.slug}/`} className="block" tabIndex={-1} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.image} alt={`${b.targetKeyword} guide`} width={1600} height={900} loading={page === 1 && i < 3 ? 'eager' : 'lazy'} className="aspect-[16/9] w-full object-cover" />
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <p className="eyebrow">{b.category} · {b.readTime}</p>
              <h2 className="mt-2 text-xl font-extrabold leading-snug"><Link href={`/blog/${b.slug}/`} className="hover:text-fw-600">{b.title}</Link></h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.excerpt}</p>
              <Link href={`/blog/${b.slug}/`} className="mt-auto pt-5 text-sm font-extrabold text-accent-600">Read the guide →</Link>
            </div>
          </article>
        ))}
      </div>
      {pages > 1 && (
        <nav aria-label="Blog pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {page === 1
            ? <span aria-disabled="true" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white opacity-40"><ChevronLeft size={18} /></span>
            : <Link href={hrefFor(page - 1)} rel="prev" aria-label="Previous page" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white hover:border-fw-500"><ChevronLeft size={18} /></Link>}
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <Link key={n} href={hrefFor(n)} aria-label={`Page ${n}`} aria-current={n === page ? 'page' : undefined} className={`grid h-11 min-w-11 place-items-center rounded-full border px-3 text-sm font-bold ${n === page ? 'border-fw-800 bg-fw-800 text-white' : 'border-line bg-white hover:border-fw-500'}`}>{n}</Link>
          ))}
          {page === pages
            ? <span aria-disabled="true" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white opacity-40"><ChevronRight size={18} /></span>
            : <Link href={hrefFor(page + 1)} rel="next" aria-label="Next page" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white hover:border-fw-500"><ChevronRight size={18} /></Link>}
        </nav>
      )}
    </>
  );
}
