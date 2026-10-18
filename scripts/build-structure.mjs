// Builds data/structure.json from the locked keyword map in C:\buggy shop (FINAL-*.csv) and the FAQ bank.
import fs from 'node:fs';
import path from 'node:path';

const KM = 'C:/buggy shop';
const ROOT = path.resolve(import.meta.dirname, '..');
function parseCsv(txt) {
  txt = txt.replace(/^\uFEFF/, '');
  const rows = []; let row = [], cur = '', q = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (q) { if (c === '"') { if (txt[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cur); cur = ''; }
    else if (c === '\n') { row.push(cur.replace(/\r$/, '')); rows.push(row); row = []; cur = ''; }
    else cur += c;
  }
  if (cur || row.length) { row.push(cur.replace(/\r$/, '')); rows.push(row); }
  const h = rows.shift();
  return rows.filter((r) => r.length === h.length).map((r) => Object.fromEntries(h.map((k, i) => [k, r[i]])));
}
const rd = (f) => parseCsv(fs.readFileSync(f, 'utf8'));
const pages = rd(`${KM}/02-keyword-mapping/FINAL-site-pages.csv`);
const map = rd(`${KM}/02-keyword-mapping/FINAL-site-keyword-map.csv`);
const support = rd(`${KM}/02-keyword-mapping/FINAL-support-keywords-by-page.csv`);
const faq = rd(`${KM}/01-keyword-research/11-faq-bank-2026-10-18.csv`);

const byPage = {}; map.forEach((r) => (byPage[r.Page] = byPage[r.Page] || []).push(r));
const sup = {}; support.forEach((r) => (sup[r.Page] = sup[r.Page] || []).push(r));
const faqBy = {}; faq.forEach((r) => (faqBy[r['Target Page']] = faqBy[r['Target Page']] || []).push(r));
const slugOf = (url) => url.replace(/^\/|\/$/g, '');

const out = pages.map((p) => {
  const rows = byPage[p.Page] || [];
  const prim = rows.find((r) => r.Role === 'PRIMARY');
  return {
    name: p.Page.replace(' (LOW DEMAND)', ''), url: p.URL, slug: slugOf(p.URL), level: p.Level, parent: p.Parent,
    primary: prim ? { keyword: prim.Keyword, volume: +prim.Volume, kd: +prim.KD } : null,
    secondary: rows.filter((r) => r.Role !== 'PRIMARY').map((r) => ({ keyword: r.Keyword, volume: +r.Volume, kd: +r.KD, intent: r.Intent })),
    support: (sup[p.Page] || []).sort((a, b) => +b.Volume - +a.Volume).slice(0, 14).map((s) => s['Support Keyword']),
    h1: p['Suggested H1'], titleTag: p['Suggested Title Tag'],
    faqSeed: (faqBy[p.Page] || []).map((f) => ({ q: f.Question, angle: f['Answer Angle'], volume: +f.Volume })),
    lowDemand: /LOW DEMAND/.test(p.Page),
  };
});
fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'data/structure.json'), JSON.stringify(out, null, 1));
console.log('pages:', out.length, 'levels:', JSON.stringify(out.reduce((a, p) => ((a[p.level] = (a[p.level] || 0) + 1), a), {})));
console.log(out.filter((p) => p.url.split('/').length > 4).map((p) => p.url).slice(0, 5));
