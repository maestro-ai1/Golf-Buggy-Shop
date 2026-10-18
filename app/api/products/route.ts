import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, SITE, inCategory } from '@/config/site';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const q = searchParams.get('q');
  const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : undefined;

  let results = [...PRODUCTS];

  if (category) {
    results = results.filter((p) => inCategory(p, category));
  }

  if (q) {
    const query = q.toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query))
    );
  }

  if (limit) {
    results = results.slice(0, limit);
  }

  const items = results.map((p) => ({
    ...p,
    currency: SITE.currency,
    url: `https://${SITE.domain}/products/${p.slug}/`,
  }));

  return NextResponse.json(
    {
      count: items.length,
      currency: SITE.currency,
      products: items,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
