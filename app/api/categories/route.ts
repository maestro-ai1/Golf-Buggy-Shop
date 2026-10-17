import { NextResponse } from 'next/server';
import { CATEGORIES, PRODUCTS, SITE } from '@/config/site';

export async function GET() {
  const categoriesWithCounts = CATEGORIES.map((c) => ({
    ...c,
    url: `https://${SITE.domain}/shop/${c.slug}/`,
    productCount: PRODUCTS.filter((p) => p.category === c.slug).length,
  }));

  return NextResponse.json(
    {
      count: categoriesWithCounts.length,
      categories: categoriesWithCounts,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
