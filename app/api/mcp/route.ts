import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES, SHOP, SITE, CONTACT, inCategory } from '@/config/site';

const MCP_TOOLS = [
  {
    name: 'search_products',
    description: 'Search buggies, golf carts, UTVs, or parts by keyword, category, or max_price',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search keywords e.g. remote golf buggy, lithium battery, dune buggy' },
        category: { type: 'string', description: 'Category path e.g. golf-buggies, golf-carts, off-road-buggies, parts-accessories' },
        max_price: { type: 'number', description: 'Maximum price in AUD' },
      },
    },
  },
  {
    name: 'get_product',
    description: 'Get full product details and technical specifications by slug',
    inputSchema: {
      type: 'object',
      required: ['slug'],
      properties: {
        slug: { type: 'string', description: 'Product slug' },
      },
    },
  },
  {
    name: 'list_categories',
    description: 'List all buggy and accessory categories with subcategories',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'get_policies',
    description: 'Get delivery freight thresholds, minimum order, payment rails, and warranty policies',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'create_order_draft',
    description: 'Create a prefilled WhatsApp and online order draft URL. Human completes the order.',
    inputSchema: {
      type: 'object',
      required: ['items'],
      properties: {
        items: {
          type: 'array',
          items: {
            type: 'object',
            required: ['slug', 'quantity'],
            properties: {
              slug: { type: 'string' },
              quantity: { type: 'number' },
            },
          },
        },
        notes: { type: 'string' },
      },
    },
  },
];

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id',
    },
  });
}

export async function GET() {
  return NextResponse.json({
    status: 'online',
    server: SITE.name,
    protocol: 'modelcontextprotocol',
    version: '1.0.0',
    tools: MCP_TOOLS.map((t) => t.name),
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, method, params } = body;

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    if (method === 'initialize') {
      return NextResponse.json(
        {
          jsonrpc: '2.0',
          id,
          result: {
            protocolVersion: '2024-11-05',
            capabilities: {
              tools: {},
            },
            serverInfo: {
              name: SITE.name,
              version: '1.0.0',
            },
          },
        },
        { headers }
      );
    }

    if (method === 'tools/list') {
      return NextResponse.json(
        {
          jsonrpc: '2.0',
          id,
          result: {
            tools: MCP_TOOLS,
          },
        },
        { headers }
      );
    }

    if (method === 'tools/call') {
      const toolName = params?.name;
      const args = params?.arguments || {};

      if (toolName === 'search_products') {
        let matches = [...PRODUCTS];
        if (args.category) {
          matches = matches.filter((p) => inCategory(p, String(args.category)));
        }
        if (args.max_price) {
          matches = matches.filter((p) => p.price <= args.max_price);
        }
        if (args.query) {
          const q = args.query.toLowerCase();
          matches = matches.filter(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.brand.toLowerCase().includes(q) ||
              p.shortDescription.toLowerCase().includes(q)
          );
        }
        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(
                    matches.map((p) => ({
                      slug: p.slug,
                      name: p.name,
                      brand: p.brand,
                      price: p.price,
                      currency: SITE.currency,
                      url: `https://${SITE.domain}/products/${p.slug}/`,
                    }))
                  ),
                },
              ],
            },
          },
          { headers }
        );
      }

      if (toolName === 'get_product') {
        const product = PRODUCTS.find((p) => p.slug === args.slug);
        if (!product) {
          return NextResponse.json(
            {
              jsonrpc: '2.0',
              id,
              error: { code: -32602, message: `Product ${args.slug} not found` },
            },
            { headers }
          );
        }
        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    ...product,
                    currency: SITE.currency,
                    url: `https://${SITE.domain}/products/${product.slug}/`,
                  }),
                },
              ],
            },
          },
          { headers }
        );
      }

      if (toolName === 'list_categories') {
        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(
                    CATEGORIES.map((c) => ({
                      slug: c.slug,
                      name: c.name,
                      url: `https://${SITE.domain}/${c.slug}/`,
                      subcategories: c.subcategories,
                    }))
                  ),
                },
              ],
            },
          },
          { headers }
        );
      }

      if (toolName === 'get_policies') {
        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    minimumOrderAud: SHOP.minOrder,
                    freeShippingThresholdAud: SHOP.freeShippingThreshold,
                    flatShippingFeeAud: SHOP.shippingFee,
                    cryptoDiscountPercent: SHOP.cryptoDiscount,
                    paymentMethods: SHOP.paymentMethods,
                    supportPhone: CONTACT.phone,
                    supportEmail: CONTACT.email,
                  }),
                },
              ],
            },
          },
          { headers }
        );
      }

      if (toolName === 'create_order_draft') {
        const orderItems = (args.items || []).map((it: any) => {
          const prod = PRODUCTS.find((p) => p.slug === it.slug);
          return {
            name: prod?.name || it.slug,
            quantity: it.quantity,
            price: prod ? prod.price * it.quantity : 0,
          };
        });

        const subtotal = orderItems.reduce((sum: number, it: any) => sum + it.price, 0);
        const textSummary = orderItems
          .map((it: any) => `${it.quantity}x ${it.name}`)
          .join(', ');

        const waUrl = `https://wa.me/61420128746?text=${encodeURIComponent(
          `Order Draft: ${textSummary}. Total: $${subtotal} AUD. ${args.notes || ''}`
        )}`;

        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    draftCompleted: true,
                    message: 'Draft prepared. Human must complete the order via WhatsApp or Checkout.',
                    whatsappCheckoutUrl: waUrl,
                    webCheckoutUrl: `https://${SITE.domain}/checkout/`,
                    subtotalAud: subtotal,
                  }),
                },
              ],
            },
          },
          { headers }
        );
      }

      return NextResponse.json(
        {
          jsonrpc: '2.0',
          id,
          error: { code: -32601, message: `Tool ${toolName} not found` },
        },
        { headers }
      );
    }

    return NextResponse.json(
      {
        jsonrpc: '2.0',
        id,
        error: { code: -32600, message: 'Invalid Request' },
      },
      { headers }
    );
  } catch {
    return NextResponse.json(
      { jsonrpc: '2.0', error: { code: -32700, message: 'Parse error' } },
      { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}
