import type { MetadataRoute } from 'next';
import { BLOG_POSTS, PAGES, PRODUCTS, SITE } from '@/config/site';
import lastmod from '@/data/lastmod.json';

// Numbered pages (/page/2/ onward) stay crawlable through the pagination links but are left out of the sitemap, so Google spends its crawl on page 1 of each list, the products and the posts.
// Every <loc> is the exact canonical URL of a page that returns 200 (checked by scripts/sitemap-audit.mjs).
// <lastmod> comes from data/lastmod.json (a date only changes when that URL's content changes), never "now".
// The site is a single en-AU storefront, so each URL carries an en-AU + x-default hreflang pair that matches the page's own <link rel="alternate">.
const LM = lastmod as Record<string, { d: string }>;
const when = (u: string) => new Date((LM[u]?.d || '2026-10-19') + 'T00:00:00+11:00');

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (p: string) => SITE.url + p;
  const alt = (p: string) => ({ languages: { 'en-AU': abs(p), 'x-default': abs(p) } });
  const entry = (p: string, lm: Date, changeFrequency: 'weekly' | 'monthly', priority: number, extra: object = {}) => ({ url: abs(p), lastModified: lm, changeFrequency, priority, alternates: alt(p), ...extra });
  const pages = PAGES.filter((p) => p.level !== 'product').map((p) => entry(p.url, when(p.url), 'weekly', p.url === '/' ? 1 : p.level === 'category' ? 0.9 : 0.8));
  const products = PRODUCTS.map((p) => entry(`/products/${p.slug}/`, when(`/products/${p.slug}/`), 'weekly', 0.7, { images: p.images.map((i) => abs(i + '.webp')) }));
  const blog = BLOG_POSTS.map((b) => entry(`/blog/${b.slug}/`, new Date(b.date), 'monthly', 0.6));
  const statics = ['/shop/', '/blog/', '/about/', '/contact/', '/delivery/', '/returns/', '/faq/', '/wholesale/', '/privacy/', '/terms/', '/cookies/'].map((u) => entry(u, when(u), 'monthly', 0.5));
  return [...pages, ...statics, ...blog, ...products];
}
