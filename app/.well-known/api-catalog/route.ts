import { NextResponse } from 'next/server';
import { SITE } from '@/config/site';

export async function GET() {
  const catalogData = {
    linkset: [
      {
        anchor: `https://${SITE.domain}/`,
        'https://www.iana.org/assignments/link-relations/service-doc': [
          { href: `https://${SITE.domain}/faq/` },
        ],
        title: `${SITE.name} — Australia's Premier Buggy Superstore`,
      },
      {
        anchor: `https://${SITE.domain}/shop/`,
        type: 'text/html',
        title: `${SITE.name} Product Catalog`,
      },
      {
        anchor: `https://${SITE.domain}/wholesale/`,
        type: 'text/html',
        title: `${SITE.name} Commercial Wholesale`,
      },
      {
        anchor: `https://${SITE.domain}/api/products`,
        type: 'application/json',
        title: `${SITE.name} Products API`,
      },
      {
        anchor: `https://${SITE.domain}/api/categories`,
        type: 'application/json',
        title: `${SITE.name} Categories API`,
      },
      {
        anchor: `https://${SITE.domain}/api/search`,
        type: 'application/json',
        title: `${SITE.name} Search API`,
      },
      {
        anchor: `https://${SITE.domain}/api/mcp`,
        type: 'application/json',
        'https://www.iana.org/assignments/link-relations/service-desc': [
          { href: `https://${SITE.domain}/.well-known/mcp/server-card.json` },
        ],
        title: `${SITE.name} MCP Server`,
      },
    ],
  };

  return NextResponse.json(catalogData, {
    headers: {
      'Content-Type': 'application/linkset+json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
