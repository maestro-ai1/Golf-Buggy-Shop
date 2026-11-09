import { BLOG_POSTS, type BlogPost } from '@/config/site';

// Related guides: every post links to 4+ topically similar posts, and every post is guaranteed at least MIN_INBOUND contextual links from other posts.
// The graph is computed once, deterministically (post order + topical similarity), so it is identical on every build.
const MIN_INBOUND = 3;
const OUT = 4;
const STOP = new Set(['the', 'and', 'for', 'with', 'what', 'how', 'you', 'your', 'are', 'can', 'best', 'guide', 'buyer', 'buyers', 'australia', 'australian', 'sale', 'buy', 'new', 'vs', 'from', 'that', 'this', 'which', 'should']);
const stem = (w: string) => (w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w);
const toks = (p: BlogPost) => new Set(`${p.targetKeyword} ${p.title} ${(p.tags || []).join(' ')}`.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)).map(stem));

let memo: Map<string, BlogPost[]> | null = null;

function build(): Map<string, BlogPost[]> {
  const posts = BLOG_POSTS;
  const t = new Map(posts.map((p) => [p.slug, toks(p)]));
  const sim = (a: BlogPost, b: BlogPost) => {
    const A = t.get(a.slug)!, B = t.get(b.slug)!; let hit = 0; for (const w of A) if (B.has(w)) hit++;
    return hit / Math.sqrt(Math.max(1, A.size) * Math.max(1, B.size)) + (a.category === b.category ? 0.15 : 0);
  };
  const inbound = new Map(posts.map((p) => [p.slug, 0]));
  const out = new Map<string, string[]>(posts.map((p) => [p.slug, []]));
  // pass 1: each post picks its OUT best matches, nudged away from posts that already have many inbound links
  for (const p of posts) {
    const ranked = posts.filter((q) => q.slug !== p.slug).map((q) => ({ q, s: sim(p, q) - 0.1 * (inbound.get(q.slug) || 0) })).sort((a, b) => b.s - a.s || a.q.slug.localeCompare(b.q.slug));
    for (const { q } of ranked.slice(0, OUT)) { out.get(p.slug)!.push(q.slug); inbound.set(q.slug, (inbound.get(q.slug) || 0) + 1); }
  }
  // pass 2: any post still short of MIN_INBOUND gets linked from its most similar posts
  for (const q of posts) {
    while ((inbound.get(q.slug) || 0) < MIN_INBOUND) {
      const src = posts.filter((p) => p.slug !== q.slug && !out.get(p.slug)!.includes(q.slug) && out.get(p.slug)!.length < OUT + 3).sort((a, b) => sim(b, q) - sim(a, q) || a.slug.localeCompare(b.slug))[0];
      if (!src) break;
      out.get(src.slug)!.push(q.slug); inbound.set(q.slug, (inbound.get(q.slug) || 0) + 1);
    }
  }
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  return new Map(posts.map((p) => [p.slug, out.get(p.slug)!.map((s) => bySlug.get(s)!).filter(Boolean)]));
}

export function relatedGuides(slug: string): BlogPost[] {
  if (!memo) memo = build();
  return memo.get(slug) || [];
}
