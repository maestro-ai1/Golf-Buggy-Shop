import { PAGES, PRODUCTS, type Product } from '@/config/site';

// Store search: weighted field matching with plural stemming, buyer synonyms, typo correction and "main products first" ranking.
// Products rank by where the words match (name > brand > category > tags > description). Category, sub-category and brand pages are matched too.
const SYN: Record<string, string[]> = {
  trolley: ['caddy'], caddy: ['trolley'], electric: ['motorised'], motorised: ['electric'],
  utv: ['side by side', 'ssv'], ssv: ['utv'], quad: ['atv'], atv: ['quad'], kid: ['youth', 'junior'], child: ['kid', 'youth'],
  tyre: ['tire', 'wheel'], tire: ['tyre', 'wheel'], wheel: ['tyre'], offroad: ['off-road', 'off road'], gokart: ['go kart'],
  seatbelt: ['seat belt'], carburetor: ['carburettor'], carburettor: ['carburetor'], golfcart: ['golf cart'], golfbuggy: ['golf buggy'],
  esky: ['cooler'], cooler: ['esky'],
};
const stem = (t: string) => t.replace(/ies$/, 'y').replace(/ses$/, 's').replace(/([^s])s$/, '$1');
export const tokens = (q: string) => q.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((t) => t.length > 1).map(stem);
const norm = (x: string) => x.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter(Boolean).map(stem).join(' ');
const variants = (t: string) => [t, ...(SYN[t] || [])];

// Vehicles, carts and batteries are the main things shoppers look for, so they rank ahead of accessories that merely mention "golf buggy".
const MAIN_GROUPS = new Set(['electric-buggy', 'remote-buggy', 'push-buggy', 'ride-on', 'golf-board', 'cart', 'utility-cart', 'petrol-cart', 'used-cart', 'dune', 'ssv', 'kids', 'gokart', 'quad']);

const fields = (p: Product): [string, number][] => [
  [norm(p.name), 6], [norm(p.sku || ''), 6], [norm(p.brand), 5], [norm(p.groupLabel), 3],
  [norm(p.tags.join(' ')), 2], [norm(p.shortDescription), 1],
];
const FIELD_CACHE = new Map<string, [string, number][]>();
const fieldsOf = (p: Product) => FIELD_CACHE.get(p.slug) || (FIELD_CACHE.set(p.slug, fields(p)), FIELD_CACHE.get(p.slug)!);

function scoreProduct(p: Product, terms: string[], phrase: string): { score: number; matched: number } {
  const f = fieldsOf(p); let score = 0, matched = 0, direct = 0;
  for (const t of terms) {
    let best = 0, hit = false;
    for (const [i, v] of variants(t).entries()) for (const [text, w] of f) if (text.includes(v)) { best = Math.max(best, i === 0 ? w : i === 1 ? w * 0.8 : w * 0.5); if (i === 0 && w >= 3) hit = true; }
    if (best > 0) { matched++; score += best; if (hit) direct++; }
  }
  if (matched === terms.length) {
    if (p.featured) score += 1;
    const name = f[0][0];
    if (terms.length > 1 && name.includes(phrase)) score += 3;
    if (name.startsWith(terms[0])) score += 2;
    if (direct === terms.length && MAIN_GROUPS.has(p.group)) score += 10;
  }
  return { score, matched };
}

// ---- typo correction: words that appear in no product field are replaced by the closest word that does (edit distance 1, or 2 for long words)
let VOCAB: Map<string, number> | null = null;
const vocab = () => {
  if (VOCAB) return VOCAB; VOCAB = new Map();
  for (const p of PRODUCTS) for (const [text] of fieldsOf(p).slice(0, 5)) for (const w of text.split(/\s+/)) if (w.length > 2) VOCAB.set(w, (VOCAB.get(w) || 0) + 1);
  for (const pg of PAGES) for (const w of norm(pg.name).split(/\s+/)) if (w.length > 2) VOCAB.set(w, (VOCAB.get(w) || 0) + 1);
  return VOCAB;
};
function dist(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) {
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
  }
  return d[a.length][b.length];
}
const known = (t: string) => variants(t).some((v) => PRODUCTS.some((p) => fieldsOf(p).some(([text]) => text.includes(v))));
function correct(terms: string[]): string[] | null {
  let changed = false;
  const out = terms.map((t) => {
    if (t.length < 4 || known(t)) return t;
    const max = t.length >= 8 ? 2 : 1; let best = '', bd = max + 1, bc = 0;
    for (const [w, c] of vocab()) { const x = dist(t, w, max); if (x < bd || (x === bd && c > bc)) { best = w; bd = x; bc = c; } }
    if (best && bd <= max) { changed = true; return best; }
    return t;
  });
  return changed ? out : null;
}

export interface PageHit { name: string; url: string; level: string }
const PAGE_LEVELS = new Set(['category', 'sub-category', 'brand', 'accessory-category', 'accessory']);

function run(terms: string[], limit: number) {
  const phrase = terms.join(' ');
  const scored = PRODUCTS.map((p) => ({ p, ...scoreProduct(p, terms, phrase) })).filter((x) => x.matched > 0);
  const all = scored.filter((x) => x.matched === terms.length);
  const pool = (all.length ? all : scored).sort((a, b) => b.matched - a.matched || b.score - a.score || a.p.price - b.p.price);
  const pages = PAGES.filter((pg) => PAGE_LEVELS.has(pg.level) && pg.url !== '/brands/' && !(pg as { lowDemand?: boolean }).lowDemand)
    .map((pg) => {
      const hay = norm(`${pg.name} ${pg.primary?.keyword || ''}`);
      const m = terms.filter((t) => variants(t).some((v) => hay.includes(v))).length;
      return { pg, m };
    })
    .filter((x) => x.m === terms.length)
    .sort((a, b) => a.pg.url.length - b.pg.url.length)
    .slice(0, 6)
    .map(({ pg }) => ({ name: pg.name.replace(/ \(Hub\)$/, '').replace(/ \(LOW DEMAND\)$/, ''), url: pg.url, level: pg.level }));
  return { products: pool.slice(0, limit).map((x) => x.p), pages, exact: all.length > 0 };
}

export function searchStore(q: string, limit = 24): { products: Product[]; pages: PageHit[]; terms: string[]; corrected?: string } {
  const terms = tokens(q);
  if (!terms.length) return { products: [], pages: [], terms };
  const first = run(terms, limit);
  // Try a typo-corrected query when the words as typed find nothing, or only partial matches.
  const fixed = first.exact ? null : correct(terms);
  if (fixed) {
    const second = run(fixed, limit);
    if (second.exact || second.products.length > first.products.length) return { products: second.products, pages: second.pages, terms: fixed, corrected: fixed.join(' ') };
  }
  return { products: first.products, pages: first.pages, terms };
}
