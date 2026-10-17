import { NextResponse } from 'next/server';
import { SITE, SHOP } from '@/config/site';

export async function GET() {
  const ucpData = {
    ucp: '1.0',
    protocol_version: '1.0',
    spec: 'https://ucp.dev/specification/overview/',
    schema: 'https://ucp.dev/schema/v1.json',
    site: `https://${SITE.domain}`,
    name: SITE.name,
    description: SITE.tagline,
    services: [
      {
        id: 'product-catalog',
        type: 'catalog',
        url: `https://${SITE.domain}/shop/`,
        description: 'Full product catalog of buggies, UTVs, golf carts, and parts',
      },
      {
        id: 'mcp-server',
        type: 'mcp',
        url: `https://${SITE.domain}/api/mcp`,
        description: 'MCP Streamable HTTP server',
      },
      {
        id: 'order',
        type: 'commerce',
        url: 'https://wa.me/61420128746',
        description: 'Human-assisted orders via WhatsApp or online checkout',
      },
      {
        id: 'wholesale',
        type: 'b2b',
        url: `https://${SITE.domain}/wholesale/`,
        description: 'Wholesale pricing and fleet tenders',
      },
    ],
    capabilities: ['browse', 'search', 'inquiry', 'wholesale', 'content', 'mcp'],
    endpoints: {
      mcp: `https://${SITE.domain}/api/mcp`,
      catalog: `https://${SITE.domain}/shop/`,
      contact: `https://${SITE.domain}/contact/`,
      agent_skills: `https://${SITE.domain}/.well-known/agent-skills/index.json`,
      mcp_server_card: `https://${SITE.domain}/.well-known/mcp/server-card.json`,
      api_catalog: `https://${SITE.domain}/.well-known/api-catalog`,
      llms_txt: `https://${SITE.domain}/llms.txt`,
    },
    currency: 'AUD',
    minimum_order_usd: SHOP.minOrder,
    payment_methods: SHOP.paymentMethods,
    legal: {
      abn: '53 635 284 267',
      age_restriction: 'none',
      product_type: 'Commercial & Recreational Buggies, UTVs & Golf Carts',
      compliance: 'Australian Consumer Law (ACL)',
    },
  };

  return NextResponse.json(ucpData, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
