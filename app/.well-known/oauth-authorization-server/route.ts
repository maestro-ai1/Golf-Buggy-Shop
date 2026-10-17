import { NextResponse } from 'next/server';
import { SITE } from '@/config/site';

export async function GET() {
  return NextResponse.json(
    {
      issuer: `https://${SITE.domain}`,
      authorization_endpoint: null,
      token_endpoint: null,
      jwks_uri: null,
      grant_types_supported: [],
      response_types_supported: [],
      scopes_supported: [],
      note: `${SITE.name} has no protected private APIs. All catalog resources are publicly accessible.`,
      public_resources: [
        `https://${SITE.domain}/shop/`,
        `https://${SITE.domain}/brands/`,
        `https://${SITE.domain}/blog/`,
        `https://${SITE.domain}/faq/`,
        `https://${SITE.domain}/wholesale/`,
        `https://${SITE.domain}/llms.txt`,
        `https://${SITE.domain}/.well-known/api-catalog`,
        `https://${SITE.domain}/.well-known/agent-skills/index.json`,
        `https://${SITE.domain}/.well-known/mcp/server-card.json`,
      ],
      agent_auth: {
        register_uri: null,
        identity_types_supported: ['none'],
        credential_types_supported: ['none'],
        notes: 'No registration required. All content is publicly accessible to autonomous agents.',
      },
    },
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}
