import { NextRequest, NextResponse } from 'next/server';
import { BLOG_POSTS, SITE } from '@/config/site';
import { searchStore, tokens } from '@/lib/search';

const CORS = { 'Access-Control-Allow-Origin': '*' };

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get('q') || '').toLowerCase().trim();
  const limit = Math.min(40, Number(searchParams.get('limit')) || 20);
  if (!q) return NextResponse.json({ query: '', results: [], products: [], blogPosts: [], categories: [], pages: [] }, { headers: CORS });
  const { products: matched, pages } = searchStore(q, limit);
  const terms = tokens(q);
  const products = matched.map((p) => ({ slug: p.slug, name: p.name, brand: p.brand, price: p.price, currency: SITE.currency, category: p.category, url: `https://${SITE.domain}/products/${p.slug}/` }));
  const blogPosts = BLOG_POSTS.filter((b) => terms.every((t) => `${b.title} ${b.excerpt} ${b.category}`.toLowerCase().includes(t))).map((b) => ({ slug: b.slug, title: b.title, category: b.category, url: `https://${SITE.domain}/blog/${b.slug}/` }));
  const categories = pages.map((pg) => ({ name: pg.name, url: `https://${SITE.domain}${pg.url}` }));
  // `results` and `pages` are the compact shapes used by the site search box
  const results = matched.map((p) => ({ slug: p.slug, name: p.name, brand: p.brand, price: p.price, image: p.images[0], category: p.category }));
  return NextResponse.json({ query: q, results, products, blogPosts, categories, pages }, { headers: CORS });
}
