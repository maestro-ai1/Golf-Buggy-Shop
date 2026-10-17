import { MetadataRoute } from 'next';
import { PRODUCTS, CATEGORIES, BLOG_POSTS, SITE } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${SITE.domain}`;
  const now = new Date();

  // Static Pages
  const staticRoutes = [
    '',
    '/shop/',
    '/brands/',
    '/about/',
    '/delivery/',
    '/returns/',
    '/wholesale/',
    '/blog/',
    '/faq/',
    '/contact/',
    '/privacy/',
    '/terms/',
    '/cookies/',
    '/search/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Category Pages
  const categoryRoutes = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/shop/${cat.slug}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // Product Pages
  const productRoutes = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/shop/${prod.category}/${prod.slug}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.9,
    images: prod.images,
  }));

  // Blog Routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
