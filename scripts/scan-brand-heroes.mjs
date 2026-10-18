// Finds hero candidates per brand: landscape, >=1000px wide, not mostly white. Downloads to a scratch folder and prints a shortlist.
// Usage: node scripts/scan-brand-heroes.mjs <outDir>
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = process.argv[2]; fs.mkdirSync(OUT, { recursive: true });
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36' };
const P = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
const jobs = [];
for (const p of P) { if (!p.brandPage) continue; (p.imagesRaw || []).forEach((u, i) => jobs.push({ brand: p.brandPage, slug: p.slug, i, u })); }
const rows = []; let n = 0;
async function work(j) {
  try {
    const r = await fetch(j.u, { headers: UA, signal: AbortSignal.timeout(30000) }); if (!r.ok) return;
    const buf = Buffer.from(await r.arrayBuffer());
    const m = await sharp(buf).metadata(); if (!m.width || !m.height) return;
    const { data } = await sharp(buf).resize(40, 40, { fit: 'fill' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    let white = 0; for (let k = 0; k < data.length; k += 3) if (data[k] > 235 && data[k + 1] > 235 && data[k + 2] > 235) white++;
    const whitePct = Math.round((white / 1600) * 100);
    const ratio = m.width / m.height;
    if (m.width >= 1000 && ratio >= 1.25 && whitePct < 35) {
      const f = path.join(OUT, `${j.brand}__${j.slug.slice(0, 40)}__${j.i}.jpg`);
      await sharp(buf).resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 85 }).toFile(f);
      rows.push({ brand: j.brand, file: path.basename(f), w: m.width, h: m.height, whitePct, url: j.u });
    }
  } catch { /* skip */ } finally { if (++n % 50 === 0) console.error(n + '/' + jobs.length); }
}
const q = [...jobs]; await Promise.all(Array.from({ length: 8 }, async () => { while (q.length) await work(q.shift()); }));
const by = {}; rows.forEach((r) => (by[r.brand] = by[r.brand] || []).push(r));
for (const b of Object.keys(by).sort()) console.log(b, by[b].length, by[b].map((r) => `${r.file.split('__').pop()}:${r.w}x${r.h}`).join(' '));
fs.writeFileSync(path.join(OUT, '_candidates.json'), JSON.stringify(rows, null, 1));
const all = new Set(P.map((p) => p.brandPage).filter(Boolean)); console.log('brands with no candidate:', [...all].filter((b) => !by[b]).join(', '));
