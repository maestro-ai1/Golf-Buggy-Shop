// Image audit (19 Oct 2026): applies the results of a visual check of every product photo.
//  - drops photos that carry a retailer watermark (Carts n Parts, HELMETKARTS, golftraders), feature-callout or dimension infographics,
//    lifestyle shots that are not on white, UI screenshot fragments and faded cut-outs (never edits a watermark out)
//  - products left with no clean photo get our own white "photos on request" card (owner policy: real unit photos are emailed after an order)
//  - writes data/image-audit.json with what changed and why
// Usage: node scripts/finalize-image-audit.mjs <drop-list.json> [carburettorCutout.png]
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
sharp.cache(false);
const ROOT = path.resolve(import.meta.dirname, '..');
const [dropFile, carbCut] = process.argv.slice(2);
const drops = JSON.parse(fs.readFileSync(dropFile, 'utf8')); // [{ img, reason }]
const catFile = path.join(ROOT, 'data/catalog.json'); const cat = JSON.parse(fs.readFileSync(catFile, 'utf8')); const L = Array.isArray(cat) ? cat : cat.products;
const srcFile = path.join(ROOT, 'data/image-sources.json'); const sources = JSON.parse(fs.readFileSync(srcFile, 'utf8'));
const log = { generated: new Date().toISOString().slice(0, 10), dropped: [], placeholders: [], replaced: [] };

const enc = async (c, dest, kb) => { let q = 84, b; do { b = await c.clone().webp({ quality: q, effort: 5 }).toBuffer(); q -= 8; } while (b.length > kb * 1024 && q > 40); fs.writeFileSync(dest + '.webp', b); let a = 58, ab; do { ab = await c.clone().avif({ quality: a, effort: 4 }).toBuffer(); a -= 8; } while (ab.length > kb * 1024 && a > 30); fs.writeFileSync(dest + '.avif', ab); };
const square = async (buf, s) => { let w = sharp(buf).flatten({ background: '#ffffff' }); try { w = sharp(await w.clone().trim({ background: '#ffffff', threshold: 14 }).toBuffer()); } catch {} const r = await w.resize({ width: Math.round(s * 0.9), height: Math.round(s * 0.9), fit: 'inside' }).toBuffer(); return sharp({ create: { width: s, height: s, channels: 3, background: '#ffffff' } }).composite([{ input: r, gravity: 'centre' }]); };
const unlinkAll = (img) => { for (const e of ['.webp', '.avif', '-600.webp', '-600.avif']) { try { fs.unlinkSync(path.join(ROOT, 'public' + img + e)); } catch {} } };

// 1) drop marked photos
const byImg = new Map(drops.map((d) => [d.img, d.reason]));
for (const p of L) {
  const keep = p.images.filter((i) => !byImg.has(i));
  for (const i of p.images.filter((i) => byImg.has(i))) { log.dropped.push({ product: p.slug, img: i, reason: byImg.get(i) }); unlinkAll(i); }
  p.images = keep;
}

// 2) carburettor: clean cut-out of the source photo replaces the screenshot-fragment photos
if (carbCut) {
  const p = L.find((x) => x.slug === 'carburettor-250cc-atv-with-cable-choke');
  const dest = path.join(ROOT, 'public/products', p.slug, '1');
  const buf = fs.readFileSync(carbCut);
  await enc(await square(buf, 1200), dest, 150); await enc(await square(buf, 600), dest + '-600', 70);
  p.images = [`/products/${p.slug}/1`];
  log.replaced.push({ product: p.slug, img: p.images[0], how: 'background removed from the supplier photo (screenshot fragments discarded)' });
}

// 3) placeholder card for products with no clean photo left
const cartIcon = `<g fill="none" stroke="#1c4d3b" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M330 330 H870"/><path d="M380 330 V560"/><path d="M820 330 V560"/><path d="M330 560 H880 L900 680 H300 Z"/><path d="M420 560 V470 H620 V560"/><circle cx="410" cy="720" r="58"/><circle cx="790" cy="720" r="58"/></g>`;
const buggyIcon = `<g fill="none" stroke="#1c4d3b" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M520 300 L640 640"/><path d="M500 300 H560"/><path d="M600 520 L460 700"/><path d="M640 640 L790 720"/><path d="M560 380 L720 470 L680 600"/><circle cx="440" cy="730" r="48"/><circle cx="800" cy="730" r="48"/><circle cx="660" cy="660" r="26"/></g>`;
const card = (icon, line1, line2) => Buffer.from(`<svg width="1200" height="1200" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="1200" fill="#ffffff"/>${icon}<text x="600" y="900" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#1c4d3b">${line1}</text><text x="600" y="970" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="38" fill="#4a5a52">${line2}</text></svg>`);
for (const p of L) {
  if (p.images.length) continue;
  const used = p.group === 'used-cart';
  const svg = card(used ? cartIcon : buggyIcon, 'Photos on request', used ? 'Real photos of this cart are emailed to you' : 'Call 0420 128 746 for product photos');
  const dir = path.join(ROOT, 'public/products', p.slug); fs.mkdirSync(dir, { recursive: true });
  const buf = await sharp(svg).png().toBuffer();
  await enc(sharp(buf), path.join(dir, '1'), 150); await enc(sharp(buf).resize(600, 600), path.join(dir, '1-600'), 70);
  p.images = [`/products/${p.slug}/1`];
  const key = `products/${p.slug}/1`; const e = sources.find((x) => x.file === key); if (e) e.source = 'own placeholder card (no watermark-free photo available)'; else sources.push({ file: key, source: 'own placeholder card (no watermark-free photo available)', product: p.name });
  log.placeholders.push({ product: p.slug, reason: used ? 'every supplier photo of this unit carries the Carts n Parts watermark' : 'every available photo carries a retailer watermark' });
}
fs.writeFileSync(catFile, JSON.stringify(cat, null, 1)); fs.writeFileSync(srcFile, JSON.stringify(sources, null, 1));
fs.writeFileSync(path.join(ROOT, 'data/image-audit.json'), JSON.stringify(log, null, 1));
console.log('dropped', log.dropped.length, '| placeholders', log.placeholders.length, '| replaced', log.replaced.length, '| products without images', L.filter((p) => !p.images.length).length);
