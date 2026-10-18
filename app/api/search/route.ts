import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, BLOG_POSTS, CATEGORIES, SITE } from '@/config/site';

const CORS = { 'Access-Control-Allow-Origin': '*' };

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get('q') || '').toLowerCase().trim();
  const limit = Math.min(40, Number(searchParams.get('limit')) || 20);
  if (!q) return NextResponse.json({ query: '', results: [], products: [], blogPosts: [], categories: [] }, { headers: CORS });
  const terms = q.split(/\s+/).filter((t) => t.length > 1).map((t) => t.replace(/s$/, ''));
  const matched = PRODUCTS.filter((p) => { const hay = `${p.name} ${p.brand} ${p.groupLabel} ${p.tags.join(' ')} ${p.shortDescription}`.toLowerCase(); return terms.every((t) => hay.includes(t)); }).slice(0, limit);
  const products = matched.map((p) => ({ slug: p.slug, name: p.name, brand: p.brand, price: p.price, currency: SITE.currency, category: p.category, url: `https://${SITE.domain}/products/${p.slug}/` }));
  const blogPosts = BLOG_POSTS.filter((b) => terms.every((t) => `${b.title} ${b.excerpt} ${b.category}`.toLowerCase().includes(t))).map((b) => ({ slug: b.slug, title: b.title, category: b.category, url: `https://${SITE.domain}/blog/${b.slug}/` }));
  const categories = CATEGORIES.filter((c) => terms.every((t) => c.name.toLowerCase().includes(t))).map((c) => ({ slug: c.slug, name: c.name, url: `https://${SITE.domain}/${c.slug}/` }));
  // `results` is the compact shape used by the site search box
  const results = matched.map((p) => ({ slug: p.slug, name: p.name, brand: p.brand, price: p.price, image: p.images[0], category: p.category }));
  return NextResponse.json({ query: q, results, products, blogPosts, categories }, { headers: CORS });
}
