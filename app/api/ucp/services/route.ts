import { NextResponse } from 'next/server';
import { SITE, CONTACT, SHOP } from '@/config/site';

export async function GET() {
  return NextResponse.json(
    {
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
          description: 'Full buggies, golf carts, UTVs, and parts catalog',
        },
        {
          id: 'mcp-server',
          type: 'mcp',
          url: `https://${SITE.domain}/api/mcp`,
          description: 'MCP Streamable HTTP server for agents and models',
        },
        {
          id: 'order',
          type: 'commerce',
          url: `https://wa.me/61420128746`,
          description: 'Human-in-the-loop assisted ordering via WhatsApp or Checkout',
        },
        {
          id: 'wholesale',
          type: 'b2b',
          url: `https://${SITE.domain}/wholesale/`,
          description: 'Commercial fleet supply and bulk tenders',
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
      currency: SITE.currency,
      minimum_order_usd: SHOP.minOrder,
      payment_methods: SHOP.paymentMethods,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
