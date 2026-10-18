// On-page keyword audit against the locked keyword map. Usage: node scripts/keyword-audit.mjs http://localhost:3000
// For every mapped page and blog post: is the primary keyword in the title, H1, meta description and first 150 words, how many secondaries appear,
// and is the density healthy (no stuffing). Writes data/keyword-report.json, which the admin keyword report page renders.
import fs from 'node:fs'; import path from 'node:path';
const base = process.argv[2] || 'http://localhost:3000';
const ROOT = path.resolve(import.meta.dirname, '..');
const structure = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/structure.json'), 'utf8'));
const stem = (w) => w.replace(/ies$/, 'y').replace(/ses$/, 's').replace(/([^s])s$/, '$1');
const toks = (t) => t.toLowerCase().replace(/&amp;|&#x27;|&#39;/g, ' ').replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean).map(stem);
const count = (text, phrase) => { const T = toks(text), P = toks(phrase); if (!P.length) return 0; let n = 0; for (let i = 0; i + P.length <= T.length; i++) { let ok = true; for (let j = 0; j < P.length; j++) if (T[i + j] !== P[j]) { ok = false; break; } if (ok) n++; } return n; };
// keyword -> intent / volume / kd from the keyword bank master list
const bank = new Map();
const csv = fs.readFileSync(path.join(ROOT, '01-keyword-research/00-master/all-keywords-kd28-and-below.csv'), 'utf8').replace(/^﻿/, '').split(/\r?\n/).slice(1);
for (const l of csv) { const m = l.match(/^([^,]+),("[^"]*"|[^,]*),(\d+),(\d+),([\d.]*)/); if (m) bank.set(m[1].toLowerCase(), { intent: m[2].replace(/"/g, ''), volume: +m[3], kd: +m[4], cpc: m[5] }); }
const strip = (h) => h.replace(/<a [^>]*href="\/products\/[^"]*"[^>]*>[\s\S]*?<\/a>/g, ' ').replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<(header|footer)[\s\S]*?<\/\1>/g, ' ').replace(/<nav[\s\S]*?<\/nav>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
const decode = (s) => (s || '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');

const targets = structure.filter((p) => p.level !== 'product').map((p) => ({ kind: 'page', url: p.url, name: p.name.replace(/ \(Hub\)$/, '').replace(/ \(LOW DEMAND\)$/, ''), level: p.level, primary: p.primary, secondary: p.secondary || [] }));
const blogSrc = fs.readFileSync(path.join(ROOT, 'content/blog.ts'), 'utf8') + fs.readFileSync(path.join(ROOT, 'content/blog-extra.ts'), 'utf8');
for (const m of blogSrc.matchAll(/slug: '([^']+)',\n\s+title: '([^']+)'[\s\S]*?targetKeyword: '([^']+)'/g)) { const kw = m[3]; const b = bank.get(kw.toLowerCase()); targets.push({ kind: 'blog', url: `/blog/${m[1]}/`, name: m[2], level: 'blog', primary: { keyword: kw, volume: b?.volume ?? null, kd: b?.kd ?? null }, secondary: [] }); }

const rows = [];
for (const t of targets) {
  const r = await fetch(base + t.url); if (!r.ok) { rows.push({ ...t, error: r.status }); continue; }
  const html = await r.text();
  const title = decode((html.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1]);
  const h1 = decode(strip((html.match(/<h1[\s\S]*?<\/h1>/) || [''])[0]));
  const meta = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1]);
  const mainHtml = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const body = decode(strip(mainHtml));
  const words = body.split(/\s+/).filter(Boolean);
  const intro = words.slice(0, 160).join(' ');
  // density is measured over paragraph copy only (<p> only), so navigation tiles and product grids do not count as keyword repetition
  const copyText = decode([...mainHtml.matchAll(/<p[ >][\s\S]*?<\/p>/g)].map((m) => m[0].replace(/<a [^>]*href="\/products\/[^"]*"[^>]*>[\s\S]*?<\/a>/g, ' ').replace(/<[^>]+>/g, ' ')).join(' ').replace(/\s+/g, ' '));
  const copyWords = copyText.split(/\s+/).filter(Boolean).length;
  const kw = t.primary?.keyword;
  const standalone = (text) => { let x = text.toLowerCase(); for (const s of [...t.secondary].map((y) => y.keyword.toLowerCase()).sort((p, q) => q.length - p.length)) if (kw && s !== kw.toLowerCase() && s.includes(kw.toLowerCase())) x = x.split(s).join(' _ '); return x; };
  const prim = kw ? { inTitle: count(title, kw) > 0, inH1: count(h1, kw) > 0, inMeta: count(meta, kw) > 0, inIntro: count(intro, kw) > 0, uses: count(standalone(copyText), kw), density: +((count(standalone(copyText), kw) * 100) / Math.max(copyWords, 1)).toFixed(2) } : null;
  const sec = t.secondary.map((s) => ({ keyword: s.keyword, volume: s.volume, kd: s.kd, intent: s.intent || bank.get(s.keyword.toLowerCase())?.intent || '', uses: count(body, s.keyword) }));
  const b = kw ? bank.get(kw.toLowerCase()) : null;
  const flags = [];
  if (prim) { if (!prim.inTitle) flags.push('primary missing from title'); if (!prim.inH1) flags.push('primary missing from H1'); if (!prim.inMeta) flags.push('primary missing from meta description'); if (!prim.inIntro) flags.push('primary missing from intro'); if (prim.density > 2) flags.push('keyword density above 2% (stuffing risk)'); }
  const missing = sec.filter((s) => s.uses === 0).length; if (sec.length && missing > 2) flags.push(`${missing} of ${sec.length} secondaries not used`);
  rows.push({ kind: t.kind, url: t.url, name: t.name, level: t.level, words: words.length, title, h1, meta, primary: kw ? { keyword: kw, volume: t.primary.volume, kd: t.primary.kd, intent: b?.intent || '', ...prim } : null, secondary: sec, flags });
}
const ok = rows.filter((r) => !r.error);
const summary = { pages: ok.filter((r) => r.kind === 'page').length, posts: ok.filter((r) => r.kind === 'blog').length, withFlags: ok.filter((r) => r.flags.length).length, totalPrimaryVolume: ok.reduce((a, r) => a + (r.primary?.volume || 0), 0), totalSecondaryVolume: ok.reduce((a, r) => a + r.secondary.reduce((x, s) => x + (s.volume || 0), 0), 0), keywordsMapped: new Set(ok.flatMap((r) => [r.primary?.keyword, ...r.secondary.map((s) => s.keyword)]).filter(Boolean)).size, generated: new Date().toISOString().slice(0, 10) };
fs.writeFileSync(path.join(ROOT, 'data/keyword-report.json'), JSON.stringify({ summary, rows: ok }, null, 1));
console.log(JSON.stringify(summary));
for (const r of ok.filter((x) => x.flags.length)) console.log(r.url.padEnd(54), r.flags.join(' | '));
