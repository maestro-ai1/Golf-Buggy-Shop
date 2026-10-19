import type { MetadataRoute } from 'next';
import { BLOG_POSTS, PAGES, PRODUCTS, SITE, pageCountFor } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (p: string) => SITE.url + p;
  const pages = PAGES.filter((p) => p.level !== 'product').map((p) => ({ url: abs(p.url), lastModified: now, changeFrequency: 'weekly' as const, priority: p.url === '/' ? 1 : p.level === 'category' ? 0.9 : 0.8 }));
  const paged = PAGES.filter((p) => p.level !== 'product' && p.url !== '/').flatMap((p) => Array.from({ length: pageCountFor(p) - 1 }, (_, i) => ({ url: abs(p.url + 'page/' + (i + 2) + '/'), lastModified: now, changeFrequency: 'weekly' as const, priority: 0.5 })));
  const products = PRODUCTS.map((p) => ({ url: abs(`/products/${p.slug}/`), lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7, images: p.images.map((i) => abs(i + '.webp')) }));
  const blog = BLOG_POSTS.map((b) => ({ url: abs(`/blog/${b.slug}/`), lastModified: new Date(b.date), changeFrequency: 'monthly' as const, priority: 0.6 }));
  const statics = ['/shop/', '/blog/', '/about/', '/contact/', '/delivery/', '/returns/', '/faq/', '/wholesale/', '/privacy/', '/terms/', '/cookies/'].map((u) => ({ url: abs(u), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 }));
  return [...pages, ...paged, ...statics, ...blog, ...products];
}
