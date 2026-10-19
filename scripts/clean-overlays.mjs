// Removes floating overlays (stickers such as "NEW", compliance badges, title banners, inset callout circles) that sit on the white margin of a
// processed product image, away from the product. The product is the largest non-white region; any other region in the outer band, separate from it,
// is painted white. Retailer watermarks across a product are NOT edited: those images are dropped instead (Golden Image Rule).
// Usage: node scripts/clean-overlays.mjs /products/<slug>/<n> [...]
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
sharp.cache(false); // libvips keeps source files open otherwise, which blocks overwriting them on Windows
const ROOT = path.resolve(import.meta.dirname, '..');

const writeSafe = async (file, buf) => { for (let i = 0; i < 6; i++) { try { fs.writeFileSync(file, buf); return; } catch { try { fs.unlinkSync(file); } catch { /* ignore */ } await new Promise((r) => setTimeout(r, 400 * (i + 1))); } } throw new Error('cannot write ' + file); };
async function encode(canvas, dest, kb) {
  let q = 84, buf; do { buf = await canvas.clone().webp({ quality: q, effort: 5 }).toBuffer(); q -= 8; } while (buf.length > kb * 1024 && q > 40);
  await writeSafe(dest + '.webp', buf);
  let a = 58, ab; do { ab = await canvas.clone().avif({ quality: a, effort: 4 }).toBuffer(); a -= 8; } while (ab.length > kb * 1024 && a > 30);
  await writeSafe(dest + '.avif', ab);
}

const FORCE = process.argv.includes('--force'); // also clear corner overlays that sit inside the product's bounding box (inset circles, title banners)
for (const img of process.argv.slice(2).filter((a) => !a.startsWith('--'))) {
  const src = fs.readFileSync(path.join(ROOT, 'public' + img + '.webp'));
  const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, S = 4; const w = Math.floor(W / S), h = Math.floor(H / S);
  const mask = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let dark = 0; for (let dy = 0; dy < S; dy++) for (let dx = 0; dx < S; dx++) { const i = ((y * S + dy) * W + (x * S + dx)) * 3; if (Math.min(data[i], data[i + 1], data[i + 2]) < 232) dark++; } mask[y * w + x] = dark > 1 ? 1 : 0; }
  // dilate by 3 cells so parts of one object join up
  const dil = new Uint8Array(w * h); const R = 1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (mask[y * w + x]) for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) { const yy = y + dy, xx = x + dx; if (yy >= 0 && yy < h && xx >= 0 && xx < w) dil[yy * w + xx] = 1; }
  const lab = new Int32Array(w * h).fill(-1); const comps = [];
  for (let s = 0; s < w * h; s++) {
    if (!dil[s] || lab[s] >= 0) continue;
    const c = { n: 0, x0: w, y0: h, x1: 0, y1: 0 }; const st = [s]; lab[s] = comps.length;
    while (st.length) { const k = st.pop(); const x = k % w, y = (k / w) | 0; c.n++; c.x0 = Math.min(c.x0, x); c.y0 = Math.min(c.y0, y); c.x1 = Math.max(c.x1, x); c.y1 = Math.max(c.y1, y);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const xx = x + dx, yy = y + dy; if (xx >= 0 && xx < w && yy >= 0 && yy < h) { const j = yy * w + xx; if (dil[j] && lab[j] < 0) { lab[j] = comps.length; st.push(j); } } } }
    comps.push(c);
  }
  if (comps.length < 2) { console.log('no overlay:', img); continue; }
  const main = comps.reduce((a, b) => (b.n > a.n ? b : a));
  // an overlay is a separate, small region that sits wholly in a corner zone or wholly in the top band of the frame
  const inCorner = (c) => (c.x1 < w * 0.42 || c.x0 > w * 0.58) && (c.y1 < h * 0.4 || c.y0 > h * 0.6);
  const inTop = (c) => c.y1 < h * 0.3;
  // --force: centre-based zone for inset callout circles that reach into the middle rows
  const inUpperSide = (c) => FORCE && ((c.x0 + c.x1) / 2 < w * 0.45 || (c.x0 + c.x1) / 2 > w * 0.55) && (c.y0 + c.y1) / 2 < h * 0.5;
  const fills = comps.filter((c) => c !== main && c.n < w * h * 0.08 && (inCorner(c) || inTop(c) || inUpperSide(c)) && (FORCE || !(c.x0 > main.x0 && c.x1 < main.x1 && c.y0 > main.y0 && c.y1 < main.y1)));
  if (!fills.length) { console.log('no separate overlay:', img); continue; }
  const rects = fills.map((c) => ({ left: Math.max(0, (c.x0 - 1) * S), top: Math.max(0, (c.y0 - 1) * S), width: Math.min(W, (c.x1 + 2) * S) - Math.max(0, (c.x0 - 1) * S), height: Math.min(H, (c.y1 + 2) * S) - Math.max(0, (c.y0 - 1) * S) }));
  const white = rects.map((r) => ({ input: { create: { width: r.width, height: r.height, channels: 3, background: '#ffffff' } }, left: r.left, top: r.top }));
  const cleaned = await sharp(src).removeAlpha().composite(white).png().toBuffer();
  // re-centre: trim white and place back on the square at 90% like process-images
  const trimmed = await sharp(cleaned).trim({ background: '#ffffff', threshold: 14 }).toBuffer();
  const sq = async (size) => { const r = await sharp(trimmed).resize({ width: Math.round(size * 0.9), height: Math.round(size * 0.9), fit: 'inside' }).toBuffer(); return sharp({ create: { width: size, height: size, channels: 3, background: '#ffffff' } }).composite([{ input: r, gravity: 'centre' }]); };
  const dest = path.join(ROOT, 'public' + img);
  await encode(await sq(1200), dest, 150); await encode(await sq(600), dest + '-600', 70);
  console.log('cleaned', img, 'removed', fills.length, 'overlay(s)');
}
