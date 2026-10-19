import { NextRequest } from 'next/server';
import { markdownFallback, markdownFor } from '@/lib/markdown';

export const runtime = 'nodejs';

// Reached only through the Accept: text/markdown rewrite in next.config.ts (/golf-carts/ -> /api/md/golf-carts/).
export async function GET(_req: NextRequest, ctx: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await ctx.params;
  const body = markdownFor('/' + slug.join('/')) ?? markdownFallback();
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'x-markdown-tokens': String(Math.ceil(body.length / 4)), Vary: 'Accept', 'Cache-Control': 'public, max-age=3600, s-maxage=86400', 'Access-Control-Allow-Origin': '*' } });
}
