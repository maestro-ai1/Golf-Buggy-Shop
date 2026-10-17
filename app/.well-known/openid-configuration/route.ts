import { NextResponse } from 'next/server';
import { SITE } from '@/config/site';

export async function GET() {
  return NextResponse.json(
    {
      issuer: `https://${SITE.domain}`,
      note: `${SITE.name} does not operate an OpenID Connect provider. All catalog resources are publicly accessible.`,
      public_site: true,
      authorization_endpoint: null,
      token_endpoint: null,
      userinfo_endpoint: null,
      jwks_uri: null,
      scopes_supported: [],
      response_types_supported: [],
      grant_types_supported: [],
      subject_types_supported: [],
      id_token_signing_alg_values_supported: [],
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
