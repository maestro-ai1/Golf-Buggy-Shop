import type { Product } from '@/config/site';

// Internal pricing data (price source, RRP, saving %) must never appear in public APIs, MCP, llms or agent files.
export function publicProduct(p: Product) {
  const { priceSource: _ps, rrp: _rrp, savingPct: _sp, imagesRaw: _ir, ...rest } = p as Product & { priceSource?: unknown; savingPct?: unknown; imagesRaw?: unknown };
  void _ps; void _rrp; void _sp; void _ir;
  return rest;
}
