// Golden Image Rule: for every product the image with a white background goes first.
// Scores each processed 1200px image by how white a thin band just inside the product canvas is (white studio shot = high, lifestyle/interior shot = low),
// then renames N.webp/.avif and N-600.webp/.avif so white-background shots come first (stable order inside each group), and updates data/catalog.json + data/image-sources.json.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
sharp.cache(false);

const ROOT = path.resolve(import.meta.dirname, '..');
const CAT = path.join(ROOT, 'data/catalog.json');
const SRC = path.join(ROOT, 'data/image-sources.json');
const catalog = JSON.parse(fs.readFileSync(CAT, 'utf8'));
const sources = fs.existsSync(SRC) ? JSON.parse(fs.readFileSync(SRC, 'utf8')) : [];
const WHITE = 0.86;

async function whiteScore(file) {
  const { data, info } = await sharp(fs.readFileSync(file)).resize(120, 120, { fit: 'fill' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height, lo = 8, hi = 11; // band between 7% and 9% from each edge (just inside the 5% white padding)
  let n = 0, white = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const d = Math.min(x, y, w - 1 - x, h - 1 - y);
    if (d < lo || d > hi) continue;
    const i = (y * w + x) * 3; n++;
    if (data[i] >= 238 && data[i + 1] >= 238 && data[i + 2] >= 238) white++;
  }
  return white / n;
}

const exts = ['.webp', '.avif'];
let changed = 0, products = 0;
for (const p of catalog) {
  const dir = path.join(ROOT, 'public/products', p.slug);
  if (!fs.existsSync(dir) || !p.images || p.images.length < 2) continue;
  const idx = p.images.map((u) => parseInt(u.split('/').pop(), 10));
  const scored = [];
  for (const n of idx) scored.push({ n, score: await whiteScore(path.join(dir, `${n}.webp`)) });
  const order = [...scored.filter((s) => s.score >= WHITE), ...scored.filter((s) => s.score < WHITE)].map((s) => s.n);
  products++;
  if (order.every((n, i) => n === idx[i])) continue;
  // rename via temp names to avoid collisions
  for (const n of idx) for (const e of exts) for (const sfx of ['', '-600']) { const a = path.join(dir, `${n}${sfx}${e}`); if (fs.existsSync(a)) fs.renameSync(a, path.join(dir, `tmp-${n}${sfx}${e}`)); }
  order.forEach((oldN, i) => {
    const newN = idx[i];
    for (const e of exts) for (const sfx of ['', '-600']) { const a = path.join(dir, `tmp-${oldN}${sfx}${e}`); if (fs.existsSync(a)) fs.renameSync(a, path.join(dir, `${newN}${sfx}${e}`)); }
    const s = sources.find((x) => x.file === `products/${p.slug}/${oldN}`);
    if (s) s.__new = `products/${p.slug}/${newN}`;
  });
  for (const s of sources) if (s.__new) { s.file = s.__new; delete s.__new; }
  changed++;
}
fs.writeFileSync(SRC, JSON.stringify(sources, null, 1));
console.log(`ordered ${products} multi-image products, reordered ${changed}`);
