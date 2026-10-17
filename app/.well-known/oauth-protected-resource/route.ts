import { NextResponse } from 'next/server';
import { SITE } from '@/config/site';

export async function GET() {
  return NextResponse.json(
    {
      resource: `https://${SITE.domain}`,
      resource_name: `${SITE.name} Public Catalog`,
      authorization_servers: [],
      scopes_supported: [],
      bearer_methods_supported: [],
      resource_documentation: `https://${SITE.domain}/auth.md`,
      resource_policy_uri: `https://${SITE.domain}/terms/`,
      tls_client_certificate_bound_access_tokens: false,
      note: `All resources on ${SITE.domain} are publicly accessible. No OAuth tokens required.`,
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
