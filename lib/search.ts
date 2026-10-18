import { PAGES, PRODUCTS, type Product } from '@/config/site';

// Store search: weighted field matching with plural stemming and buyer synonyms.
// Products rank by where the words match (name > brand > category > tags > description). Category, sub-category and brand pages are matched too.
const SYN: Record<string, string[]> = {
  trolley: ['caddy'], caddy: ['trolley'], electric: ['motorised'], motorised: ['electric'],
  utv: ['side by side', 'ssv'], ssv: ['utv'], quad: ['atv'], atv: ['quad'], kid: ['youth', 'junior'], child: ['kid', 'youth'],
  tyre: ['tire', 'wheel'], tire: ['tyre', 'wheel'], wheel: ['tyre'], offroad: ['off-road', 'off road'], gokart: ['go kart'],
};
const stem = (t: string) => t.replace(/ies$/, 'y').replace(/ses$/, 's').replace(/([^s])s$/, '$1');
export const tokens = (q: string) => q.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((t) => t.length > 1).map(stem);
const norm = (x: string) => x.toLowerCase().split(/\s+/).map(stem).join(' ');
const variants = (t: string) => [t, ...(SYN[t] || [])];

const fields = (p: Product): [string, number][] => [
  [norm(p.name), 6], [norm(p.brand), 5], [norm(p.groupLabel), 3],
  [norm(p.tags.join(' ')), 2], [norm(p.shortDescription), 1],
];

function scoreProduct(p: Product, terms: string[]): { score: number; matched: number } {
  const f = fields(p); let score = 0, matched = 0;
  for (const t of terms) {
    let best = 0;
    for (const [i, v] of variants(t).entries()) for (const [text, w] of f) if (text.includes(v)) best = Math.max(best, i === 0 ? w : w * 0.6);
    if (best > 0) { matched++; score += best; }
  }
  return { score, matched };
}

export interface PageHit { name: string; url: string; level: string }
const PAGE_LEVELS = new Set(['category', 'sub-category', 'brand', 'accessory-category', 'accessory']);

export function searchStore(q: string, limit = 24): { products: Product[]; pages: PageHit[]; terms: string[] } {
  const terms = tokens(q);
  if (!terms.length) return { products: [], pages: [], terms };
  const scored = PRODUCTS.map((p) => ({ p, ...scoreProduct(p, terms) })).filter((x) => x.matched > 0);
  const all = scored.filter((x) => x.matched === terms.length);
  const pool = (all.length ? all : scored).sort((a, b) => b.matched - a.matched || b.score - a.score || a.p.price - b.p.price);
  const pages = PAGES.filter((pg) => PAGE_LEVELS.has(pg.level) && !(pg as { lowDemand?: boolean }).lowDemand)
    .map((pg) => {
      const hay = norm(`${pg.name} ${pg.primary?.keyword || ''}`);
      const m = terms.filter((t) => hay.includes(t)).length;
      return { pg, m };
    })
    .filter((x) => x.m === terms.length)
    .sort((a, b) => a.pg.url.length - b.pg.url.length)
    .slice(0, 6)
    .map(({ pg }) => ({ name: pg.name.replace(/ \(Hub\)$/, '').replace(/ \(LOW DEMAND\)$/, ''), url: pg.url, level: pg.level }));
  return { products: pool.slice(0, limit).map((x) => x.p), pages, terms };
}
