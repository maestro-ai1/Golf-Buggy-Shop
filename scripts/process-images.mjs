// Golden Image Rule pipeline (local, no API): download -> trim margins -> square 1:1 on pure white -> WebP + AVIF.
// Master 1200x1200 and a 600x600 card size. Adaptive quality keeps each file under ~150 KB.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const CAT = path.join(ROOT, 'data/catalog.json');
const OUT = path.join(ROOT, 'public/products');
const MAX_PER_PRODUCT = 4;
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36' };
const catalog = JSON.parse(fs.readFileSync(CAT, 'utf8'));
const sources = [];
const failures = [];

async function fetchBuf(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(30000) });
      if (r.ok) return Buffer.from(await r.arrayBuffer());
      if (r.status === 404) return null;
    } catch { /* retry */ }
    await new Promise((r) => setTimeout(r, 600 * (i + 1)));
  }
  return null;
}

// Studio shots on off-white / light-grey backdrops are pushed to pure white (#fff), as the Golden Image Rule requires.
async function whitenStudio(buf) {
  const { data, info } = await sharp(buf).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height, band = Math.max(2, Math.round(Math.min(w, h) * 0.01)); let n = 0, light = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { if (Math.min(x, y, w - 1 - x, h - 1 - y) >= band) continue; const i = (y * w + x) * 3; n++; if (Math.min(data[i], data[i + 1], data[i + 2]) >= 212) light++; }
  return light / n >= 0.9 ? sharp(buf).linear(255 / 226, 0).toBuffer() : buf;
}

async function toSquare(buf, size) {
  let img = sharp(buf, { failOn: 'none' }).rotate().flatten({ background: '#ffffff' });
  const meta = await img.metadata();
  if (!meta.width || meta.width < 300 || meta.height < 300) return null;
  let work = img;
  try {
    const trimmed = await img.clone().trim({ background: '#ffffff', threshold: 14 }).toBuffer({ resolveWithObject: true });
    if (trimmed.info.width > meta.width * 0.12 && trimmed.info.height > meta.height * 0.12) work = sharp(trimmed.data);
  } catch { /* keep untrimmed */ }
  const inner = Math.round(size * 0.9);
  let resized = await work.resize({ width: inner, height: inner, fit: 'inside', withoutEnlargement: false, kernel: 'lanczos3' }).toBuffer();
  resized = await whitenStudio(resized);
  return sharp({ create: { width: size, height: size, channels: 3, background: '#ffffff' } }).composite([{ input: resized, gravity: 'centre' }]);
}

async function encode(canvas, dest, kb = 150) {
  let q = 84, buf;
  do { buf = await canvas.clone().webp({ quality: q, effort: 5 }).toBuffer(); q -= 8; } while (buf.length > kb * 1024 && q > 40);
  fs.writeFileSync(dest + '.webp', buf);
  let a = 58, ab;
  do { ab = await canvas.clone().avif({ quality: a, effort: 4 }).toBuffer(); a -= 8; } while (ab.length > kb * 1024 && a > 30);
  fs.writeFileSync(dest + '.avif', ab);
  return { webp: buf.length, avif: ab.length };
}

async function processProduct(p) {
  const dir = path.join(OUT, p.slug);
  if (process.env.FORCE) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const seen = new Set();
  const kept = [];
  for (const url of p.imagesRaw) {
    if (kept.length >= MAX_PER_PRODUCT) break;
    const buf = await fetchBuf(url);
    if (!buf) { failures.push(url); continue; }
    const h = crypto.createHash('md5').update(buf).digest('hex');
    if (seen.has(h)) continue; seen.add(h);
    const n = kept.length + 1;
    let big = null;
    try { big = await toSquare(buf, 1200); } catch { failures.push(url + ' (not an image)'); }
    if (!big) continue;
    await encode(big, path.join(dir, String(n)));
    const small = await toSquare(buf, 600);
    await encode(small, path.join(dir, n + '-600'), 70);
    kept.push(`/products/${p.slug}/${n}`);
    sources.push({ file: `products/${p.slug}/${n}`, source: url, product: p.name });
  }
  p.images = kept;
}

const only = process.argv[2];
const list = catalog.filter((p) => !only || p.slug.includes(only));
let i = 0;
const queue = [...list];
const workers = Array.from({ length: 5 }, async () => {
  while (queue.length) {
    const p = queue.shift();
    if (p.images && p.images.length && !process.env.FORCE) { i++; continue; }
    await processProduct(p);
    i++;
    if (i % 10 === 0) console.log(`${i}/${list.length}`);
  }
});
await Promise.all(workers);
fs.writeFileSync(CAT, JSON.stringify(catalog, null, 1));
const srcFile = path.join(ROOT, 'data/image-sources.json');
const prevSources = fs.existsSync(srcFile) ? JSON.parse(fs.readFileSync(srcFile, 'utf8')) : [];
const merged = new Map(prevSources.map((e) => [e.file, e])); sources.forEach((e) => merged.set(e.file, e));
fs.writeFileSync(srcFile, JSON.stringify([...merged.values()], null, 1));
const noImg = catalog.filter((p) => !p.images.length);
console.log('done. products with images:', catalog.length - noImg.length, 'without:', noImg.length, 'failed downloads:', failures.length);
if (noImg.length) console.log(noImg.map((p) => p.slug).join('\n'));
