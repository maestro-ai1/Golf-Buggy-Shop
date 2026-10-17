import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, BLOG_POSTS, CATEGORIES, SITE } from '@/config/site';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get('q') || '').toLowerCase().trim();

  if (!q) {
    return NextResponse.json(
      { products: [], blogPosts: [], categories: [] },
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }

  const matchedProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  ).map((p) => ({
    slug: p.slug,
    name: p.name,
    brand: p.brand,
    price: p.price,
    currency: SITE.currency,
    category: p.category,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
  }));

  const matchedPosts = BLOG_POSTS.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
  ).map((b) => ({
    slug: b.slug,
    title: b.title,
    category: b.category,
    url: `https://${SITE.domain}/blog/${b.slug}/`,
  }));

  const matchedCategories = CATEGORIES.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.shortDescription.toLowerCase().includes(q)
  ).map((c) => ({
    slug: c.slug,
    name: c.name,
    url: `https://${SITE.domain}/shop/${c.slug}/`,
  }));

  return NextResponse.json(
    {
      query: q,
      products: matchedProducts,
      blogPosts: matchedPosts,
      categories: matchedCategories,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
