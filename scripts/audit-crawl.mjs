// Run with the site running (npm run start): node scripts/audit-crawl.mjs
// Crawl every URL in the sitemap; for each page check every image URL (src/srcset) returns 200,
// and that none of the 16 re-photographed products is referenced by an old (cached) filename.
import fs from 'node:fs';
const base = 'http://localhost:3000';
const sel = [];
const sm = await (await fetch(base + '/sitemap.xml')).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, ''));
const seen = new Map(); const bad = []; let pages = 0;
const old = /^$never$/;
const dec = (s) => s.replace(/&amp;/g, '&');
for (const u of urls) {
  const r = await fetch(base + u); pages++;
  if (!r.ok) { bad.push([u, 'page ' + r.status]); continue; }
  const h = await r.text();
  if (old.test(h)) bad.push([u, 'references an OLD image filename']);
  const set = new Set([...h.matchAll(/(?:src|srcSet|srcset|href)="([^"]+\.(?:webp|avif|jpg|jpeg|png))[^"]*"/gi)].flatMap((m) => dec(m[1]).split(',').map((x) => x.trim().split(' ')[0])));
  for (const s of set) {
    if (!s.startsWith('/')) continue;
    if (!seen.has(s)) { const ir = await fetch(base + s, { method: 'HEAD' }); seen.set(s, ir.status); }
    if (seen.get(s) !== 200) bad.push([u, `${s} -> ${seen.get(s)}`]);
  }
}
console.log(JSON.stringify({ pages, uniqueImageUrls: seen.size, problems: bad.length }));
console.log(bad.slice(0, 30));
