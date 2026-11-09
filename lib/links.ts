import { PAGES, PRODUCTS, childrenOf, type SitePage } from '@/config/site';

// Keyword-anchored internal links: the anchor is a transactional or commercial keyword that belongs to the TARGET page, so every link
// passes relevance to the page that is meant to rank for it. Primary keywords are used most; high-volume T/C secondaries rotate in
// (chosen from a hash of source+target, so the result is stable between builds) to keep anchor text varied.
export interface KwLink { url: string; anchor: string }

const TC = /transactional|commercial/i;
const hash = (s: string) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
const usable = (p: SitePage) => p.level !== 'product' && !p.lowDemand && !!p.primary && p.url !== '/golf-buggies/for-sale-locations/';

export function anchorFor(from: string, target: SitePage): string {
  const primary = target.primary!.keyword;
  const alts = target.secondary.filter((s) => TC.test(s.intent || '') && s.volume >= 100 && s.keyword !== primary && !primary.includes(s.keyword) && !s.keyword.includes(primary)).slice(0, 3);
  const h = hash(from + '>' + target.url);
  return alts.length && h % 3 === 0 ? alts[(h >>> 3) % alts.length].keyword : primary;
}

export function linksForPage(page: SitePage, limit = 8): KwLink[] {
  const parent = PAGES.find((p) => p.name === page.parent);
  const kids = childrenOf(page.name);
  const siblings = PAGES.filter((p) => p.parent === page.parent && p.level !== 'brand');
  const seen = new Set<string>([page.url]);
  const out: KwLink[] = [];
  for (const t of [parent, ...kids, ...siblings]) {
    if (!t || seen.has(t.url) || !usable(t)) continue;
    seen.add(t.url);
    out.push({ url: t.url, anchor: anchorFor(page.url, t) });
    if (out.length >= limit) break;
  }
  // The locations page is not a sibling or child of anything, so link it from the pages whose shoppers ask about city delivery.
  const loc = PAGES.find((p) => p.url === '/golf-buggies/for-sale-locations/');
  if (loc && !seen.has(loc.url) && ['/golf-buggies/', '/golf-buggies/for-sale/', '/golf-carts/', '/golf-carts/for-sale/'].includes(page.url)) out.push({ url: loc.url, anchor: anchorFor(page.url, loc) });
  return out;
}

export function linksForProduct(categoryUrl: string, brandUrl?: string): KwLink[] {
  const cat = PAGES.find((p) => p.url === categoryUrl);
  const out: KwLink[] = [];
  const seen = new Set<string>();
  const add = (t?: SitePage) => { if (t && usable(t) && !seen.has(t.url)) { seen.add(t.url); out.push({ url: t.url, anchor: anchorFor('/p' + categoryUrl, t) }); } };
  add(cat);
  add(PAGES.find((p) => p.name === cat?.parent));
  add(brandUrl ? PAGES.find((p) => p.url === brandUrl) : undefined);
  return out;
}

// Brand pages: link out to the category pages where the brand's products live, and to related brands that share those categories.
// Anchors are the target page's own T/C keyword; counts come from the catalogue, so nothing is invented.
export interface BrandMore { cats: (KwLink & { count: number })[]; related: KwLink[]; total: number }

export function brandMore(page: SitePage): BrandMore {
  const slug = page.slug.split('/').pop() || '';
  const mine = PRODUCTS.filter((p) => p.brandPage === slug);
  const tally = new Map<string, number>();
  for (const p of mine) for (const c of p.categories) tally.set(c, (tally.get(c) || 0) + 1);
  const cats = [...tally.entries()]
    .map(([url, count]) => ({ t: PAGES.find((x) => x.url === url), count }))
    .filter((x): x is { t: SitePage; count: number } => !!x.t && usable(x.t))
    .sort((a, b) => b.count - a.count || b.t.url.length - a.t.url.length)
    .slice(0, 4)
    .map(({ t, count }) => ({ url: t.url, anchor: anchorFor(page.url, t), count }));
  const related = (brandGraph().get(page.url) || []).map((t) => ({ url: t.url, anchor: anchorFor(page.url, t) }));
  return { cats, related, total: mine.length };
}

// Related-brand graph, computed once: each brand links to its 4 closest brands (most shared categories), nudged away from brands that already
// have many inbound links, then any brand still under 3 inbound links is linked from its closest brands. Deterministic, so builds are stable.
let brandGraphMemo: Map<string, SitePage[]> | null = null;
function brandGraph(): Map<string, SitePage[]> {
  if (brandGraphMemo) return brandGraphMemo;
  const brands = PAGES.filter((p) => p.level === 'brand' && usable(p));
  const slugOf = (p: SitePage) => p.slug.split('/').pop() || '';
  const cats = new Map(brands.map((b) => [b.url, new Set(PRODUCTS.filter((p) => p.brandPage === slugOf(b)).flatMap((p) => p.categories))]));
  const sim = (a: SitePage, b: SitePage) => { let n = 0; for (const c of cats.get(a.url)!) if (cats.get(b.url)!.has(c)) n++; return n; };
  const inbound = new Map(brands.map((b) => [b.url, 0]));
  const out = new Map<string, SitePage[]>(brands.map((b) => [b.url, []]));
  for (const b of brands) {
    const ranked = brands.filter((x) => x.url !== b.url).map((x) => ({ x, s: sim(b, x) - 0.35 * (inbound.get(x.url) || 0) })).sort((p, q) => q.s - p.s || p.x.url.localeCompare(q.x.url));
    for (const { x } of ranked.slice(0, 4)) { out.get(b.url)!.push(x); inbound.set(x.url, (inbound.get(x.url) || 0) + 1); }
  }
  for (const t of brands) {
    while ((inbound.get(t.url) || 0) < 3) {
      const src = brands.filter((b) => b.url !== t.url && !out.get(b.url)!.some((x) => x.url === t.url) && out.get(b.url)!.length < 7).sort((p, q) => sim(q, t) - sim(p, t) || p.url.localeCompare(q.url))[0];
      if (!src) break;
      out.get(src.url)!.push(t); inbound.set(t.url, (inbound.get(t.url) || 0) + 1);
    }
  }
  brandGraphMemo = out;
  return out;
}
