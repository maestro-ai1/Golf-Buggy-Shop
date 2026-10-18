// Technical SEO audit across every page in the sitemap. Usage: node scripts/tech-audit.mjs [baseUrl]
// Checks: status, one H1, title and meta length, canonical, noindex, JSON-LD validity, breadcrumb schema, image alt text, duplicate titles/descriptions,
// internal links (broken or redirecting), anchors without href, robots.txt, sitemap coverage.
import fs from 'node:fs';
const base = process.argv[2] || 'http://localhost:3000';
const get = async (u, opt = {}) => { try { return await fetch(base + u, { redirect: 'manual', ...opt }); } catch (e) { return { status: 0, text: async () => '' }; } };
const sm = await (await get('/sitemap.xml')).text();
const urls = [...new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, '')))];
const problems = {}; const add = (k, u, d = '') => { (problems[k] = problems[k] || []).push(u + (d ? ' (' + d + ')' : '')); };
const titles = new Map(), descs = new Map(); const links = new Set();
const decode = (s) => (s || '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
let ok = 0;
const q = [...urls];
await Promise.all(Array.from({ length: 8 }, async () => { while (q.length) {
  const u = q.shift(); const r = await get(u); if (r.status !== 200) { add('status not 200', u, r.status); continue; }
  const h = await r.text(); ok++;
  const title = decode((h.match(/<title>([^<]*)<\/title>/) || [])[1]); const meta = decode((h.match(/<meta name="description" content="([^"]*)"/) || [])[1]);
  const canon = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1]; const robots = (h.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || '';
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (!title) add('missing title', u); else { if (title.length > 60) add('title over 60 chars', u, title.length); if (title.length < 20) add('title very short', u, title.length); titles.set(title, [...(titles.get(title) || []), u]); }
  if (!meta) add('missing meta description', u); else { if (meta.length > 160) add('meta over 160 chars', u, meta.length); if (meta.length < 70) add('meta under 70 chars', u, meta.length); descs.set(meta, [...(descs.get(meta) || []), u]); }
  if (!canon) add('missing canonical', u); else if (!canon.endsWith(u.endsWith('/') ? u : u + '/') && u !== '/') add('canonical differs from URL', u, canon);
  if (/noindex/.test(robots)) add('noindex page in sitemap', u);
  if (h1 !== 1) add('H1 count not 1', u, h1);
  const ld = [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => { try { return JSON.parse(m[1]); } catch { return null; } });
  if (ld.includes(null)) add('invalid JSON-LD', u);
  const types = ld.filter(Boolean).map((x) => (Array.isArray(x['@type']) ? x['@type'].join('/') : x['@type']));
  if (u !== '/' && !types.includes('BreadcrumbList')) add('no BreadcrumbList schema', u);
  const dup = types.filter((t, i) => types.indexOf(t) !== i); if (dup.length) add('duplicate schema type', u, dup.join(','));
  const imgs = [...h.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]); const noAlt = imgs.filter((i) => !/\balt="[^"]+"/.test(i)); if (noAlt.length) add('images without alt', u, noAlt.length);
  if (/<a\b(?![^>]*\bhref)[^>]*>/.test(h.replace(/<script[\s\S]*?<\/script>/g, ''))) add('anchor without href', u);
  for (const m of h.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)) links.add(m[1]);
} }));
for (const [t, us] of titles) if (us.length > 1) add('duplicate title', us.join(' + '), t.slice(0, 40));
for (const [t, us] of descs) if (us.length > 1) add('duplicate meta description', us.join(' + '), t.slice(0, 40));
const lq = [...links].filter((l) => !/\.(png|jpg|webp|avif|svg|pdf|xml|txt|js|css|ico)$/.test(l) && !urls.includes(l)); let bad = 0;
await Promise.all(Array.from({ length: 8 }, async () => { while (lq.length) { const l = lq.shift(); const r = await get(l); if (r.status >= 300) { bad++; add('internal link not 200', l, r.status); } } }));
const robots = await (await get('/robots.txt')).text();
console.log(`pages in sitemap: ${urls.length}, fetched OK: ${ok}, unique internal links outside sitemap checked: ${links.size}`);
console.log('robots.txt has Sitemap line:', /sitemap:/i.test(robots), '| blocks everything:', /disallow:\s*\/\s*$/im.test(robots));
const keys = Object.keys(problems);
if (!keys.length) console.log('RESULT: PASS (no issues found)');
else for (const k of keys) console.log(`ISSUE ${k}: ${problems[k].length}\n   ` + problems[k].slice(0, 6).join('\n   '));
fs.writeFileSync('data/tech-audit.json', JSON.stringify({ generated: new Date().toISOString().slice(0, 10), pages: urls.length, problems }, null, 1));
