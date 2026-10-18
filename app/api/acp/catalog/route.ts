import { NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES, SHOP, SITE, inCategory } from '@/config/site';

export async function GET() {
  return NextResponse.json(
    {
      protocol: 'acp',
      version: '0.1.0',
      catalog: CATEGORIES.map((c) => ({
        ...c,
        url: `https://${SITE.domain}/${c.slug}/`,
        products: PRODUCTS.filter((p) => inCategory(p, c.slug)).map((p) => ({
          slug: p.slug,
          name: p.name,
          price: p.price,
          currency: SITE.currency,
          url: `https://${SITE.domain}/products/${p.slug}/`,
        })),
      })),
      currency: SITE.currency,
      minimumOrder: SHOP.minOrder,
      paymentMethods: SHOP.paymentMethods,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
