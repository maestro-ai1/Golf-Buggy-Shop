// Supporting-keyword audit (Golden Keyword Rule: nothing omitted). For every transactional or commercial keyword (KD 28 or lower) that the ledger placed as SUPPORT,
// checks that it appears on the page that owns it (after data/keyword-decisions.json moves) or is excluded with a stated reason.
// Usage: node scripts/support-audit.mjs [baseUrl]   Writes data/support-ledger.json. Keywords in 02-keyword-mapping come from the owner's Semrush work (not published).
import fs from 'node:fs';
const base = process.argv.find((a) => a.startsWith('http')) || 'http://localhost:3000';
const parse = (t) => { const rows = []; let row = [], cur = '', q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; } else if (c === '"') q = true; else if (c === ',') { row.push(cur); cur = ''; } else if (c === '\n') { row.push(cur.replace(/\r$/, '')); rows.push(row); row = []; cur = ''; } else cur += c; } return rows; };
const L = parse(fs.readFileSync('02-keyword-mapping/FINAL-keyword-ledger.csv', 'utf8').replace(/^﻿/, '')); const H = L[0]; const ix = Object.fromEntries(H.map((h, i) => [h, i]));
const rows = L.slice(1).filter((r) => r.length >= 8).map((r) => ({ keyword: r[ix.Keyword], intent: r[ix.Intent], volume: +r[ix.Volume] || 0, kd: +r[ix.KD] || 0, dest: r[ix.Destination], url: r[ix.URL] }))
  .filter((r) => r.dest === 'SUPPORT' && /transactional|commercial/i.test(r.intent) && r.kd <= 28);
const dec = JSON.parse(fs.readFileSync('data/keyword-decisions.json', 'utf8'));
const excl = new Map(); dec.exclude.forEach((g) => g.keywords.forEach((k) => excl.set(k.toLowerCase(), g.reason)));
const move = new Map(); dec.move.forEach((g) => g.keywords.forEach((k) => move.set(k.toLowerCase(), g.url)));
const stem = (w) => w.replace(/ies$/, 'y').replace(/ses$/, 's').replace(/([^s])s$/, '$1');
const toks = (t) => t.toLowerCase().replace(/&amp;|&#x27;|&#39;/g, ' ').replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean).map(stem);
const has = (T, phrase) => { const P = toks(phrase); if (!P.length) return false; for (let i = 0; i + P.length <= T.length; i++) { let ok = true; for (let j = 0; j < P.length; j++) if (T[i + j] !== P[j]) { ok = false; break; } if (ok) return true; } return false; };
const cache = new Map();
const pageToks = async (u) => { if (cache.has(u)) return cache.get(u); const r = await fetch(base + u); if (!r.ok) { cache.set(u, null); return null; } const h = (await r.text()).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' '); const alt = [...h.matchAll(/alt="([^"]*)"/g)].map((m) => m[1]).join(' '); const T = toks(h.replace(/<[^>]+>/g, ' ') + ' ' + alt); cache.set(u, T); return T; };
const out = [];
for (const r of rows) {
  const k = r.keyword.toLowerCase(); const url = move.get(k) || r.url;
  if (excl.has(k)) { out.push({ ...r, url, status: 'excluded', reason: excl.get(k) }); continue; }
  const T = await pageToks(url); out.push({ ...r, url, status: T && has(T, r.keyword) ? 'placed' : 'missing' });
}
const sum = (a) => a.reduce((s, r) => s + r.volume, 0);
const placed = out.filter((r) => r.status === 'placed'), missing = out.filter((r) => r.status === 'missing'), ex = out.filter((r) => r.status === 'excluded');
console.log(`support buying keywords: ${out.length} (${sum(out)} vol) | placed on page: ${placed.length} (${sum(placed)}) | excluded with reason: ${ex.length} (${sum(ex)}) | MISSING: ${missing.length} (${sum(missing)})`);
const by = {}; missing.forEach((r) => (by[r.url] = by[r.url] || []).push(r));
if (process.argv.includes('--list')) for (const [u, a] of Object.entries(by).sort((x, y) => y[1].length - x[1].length)) { console.log(`\n## ${u} (${a.length})`); console.log(a.sort((x, y) => y.volume - x.volume).map((r) => `${r.keyword}(${r.volume})`).join('; ')); }
else for (const [u, a] of Object.entries(by).sort((x, y) => y[1].length - x[1].length).slice(0, 8)) console.log(' ', u.padEnd(56), a.length, 'missing');
fs.writeFileSync('data/support-ledger.json', JSON.stringify({ generated: new Date().toISOString().slice(0, 10), totals: { keywords: out.length, volume: sum(out), placed: placed.length, excluded: ex.length, missing: missing.length }, rows: out.map(({ keyword, intent, volume, kd, url, status, reason }) => ({ keyword, intent, volume, kd, url, status, ...(reason ? { reason } : {}) })) }, null, 1));
