import { PRODUCTS, type Product } from '@/config/site';

// "You may also like": every product links to 4 close relatives (same category first, then same group, then same brand), nudged toward products
// that have few inbound links, and any product still under 3 inbound links is linked from its closest relatives. Computed once, deterministic.
const OUT = 4;
const MIN_INBOUND = 3;
let memo: Map<string, Product[]> | null = null;

const closeness = (a: Product, b: Product) =>
  a.categories[0] === b.categories[0] ? 0 : a.group === b.group ? 1 : a.brandPage && a.brandPage === b.brandPage ? 1.5 : a.categories.some((c) => b.categories.includes(c)) ? 2 : 3;

function build(): Map<string, Product[]> {
  const out = new Map<string, Product[]>(PRODUCTS.map((p) => [p.slug, []]));
  const inbound = new Map(PRODUCTS.map((p) => [p.slug, 0]));
  for (const p of PRODUCTS) {
    const ranked = PRODUCTS.filter((x) => x.slug !== p.slug)
      .map((x) => ({ x, s: closeness(p, x) * 10 + (inbound.get(x.slug) || 0) * 1.5 }))
      .sort((a, b) => a.s - b.s || a.x.slug.localeCompare(b.x.slug));
    for (const { x } of ranked.slice(0, OUT)) { out.get(p.slug)!.push(x); inbound.set(x.slug, (inbound.get(x.slug) || 0) + 1); }
  }
  for (const t of PRODUCTS) {
    while ((inbound.get(t.slug) || 0) < MIN_INBOUND) {
      const src = PRODUCTS.filter((b) => b.slug !== t.slug && !out.get(b.slug)!.some((x) => x.slug === t.slug) && out.get(b.slug)!.length < OUT + 3)
        .sort((a, b) => closeness(a, t) - closeness(b, t) || a.slug.localeCompare(b.slug))[0];
      if (!src) break;
      out.get(src.slug)!.push(t); inbound.set(t.slug, (inbound.get(t.slug) || 0) + 1);
    }
  }
  return out;
}

export function relatedProducts(slug: string): Product[] {
  if (!memo) memo = build();
  return memo.get(slug) || [];
}
