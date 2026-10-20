import fs from 'node:fs';
import crypto from 'node:crypto';
// Run before EVERY push: node scripts/audit-images.mjs  (must print problems: 0)
import sharp from 'sharp';
import path from 'node:path';
const ROOT = path.resolve(import.meta.dirname, '..');
const cat = JSON.parse(fs.readFileSync(ROOT + '/data/catalog.json', 'utf8')); const L = Array.isArray(cat) ? cat : cat.products;
const bad = []; const hashes = new Map(); let imgCount = 0;
const edgeWhite = async (file) => {
  const { data, info } = await sharp(file).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height; let n = 0, w = 0;
  const px = (x, y) => { const i = (y * W + x) * 3; n++; if (data[i] >= 240 && data[i + 1] >= 240 && data[i + 2] >= 240) w++; };
  for (let x = 0; x < W; x++) { px(x, 0); px(x, H - 1); } for (let y = 0; y < H; y++) { px(0, y); px(W - 1, y); }
  return w / n;
};
for (const p of L) {
  if (!p.images || !p.images.length) { bad.push([p.slug, 'no images array']); continue; }
  const srcs = JSON.parse(fs.readFileSync(ROOT + '/data/image-sources.json', 'utf8')); if ((!p.imagesRaw || !p.imagesRaw.length) && !p.images.every((i) => srcs.some((s) => s.file === i.slice(1)))) bad.push([p.slug, 'imagesRaw empty (source not recorded)']);
  for (const img of p.images) {
    imgCount++;
    for (const [suffix, size, kb] of [['', 1200, 150], ['-600', 600, 70]]) {
      for (const ext of ['webp', 'avif']) {
        const f = `${ROOT}/public${img}${suffix}.${ext}`;
        if (!fs.existsSync(f)) { bad.push([p.slug, 'missing ' + img + suffix + '.' + ext]); continue; }
        const st = fs.statSync(f); if (st.size > kb * 1024) bad.push([p.slug, `${img}${suffix}.${ext} ${Math.round(st.size / 1024)}KB > ${kb}KB`]);
        if (ext === 'webp') {
          const m = await sharp(f).metadata(); if (m.width !== size || m.height !== size) bad.push([p.slug, `${img}${suffix} is ${m.width}x${m.height}`]);
          if (!suffix) {
            const ew = await edgeWhite(f); if (ew < 0.97) bad.push([p.slug, `${img} edge not white (${ew.toFixed(2)})`]);
            const h = crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex'); (hashes.get(h) || hashes.set(h, []).get(h)).push(p.slug + img.slice(-2));
          }
        }
      }
    }
  }
  const dir = `${ROOT}/public/products/${p.slug}`; const onDisk = fs.readdirSync(dir).filter((f) => /^(v\d+-)?\d+\.webp$/.test(f)).length;
  if (onDisk !== p.images.length) bad.push([p.slug, `files on disk ${onDisk} vs catalog ${p.images.length}`]);
}
// placeholder detection: any image shared by many products, or the known "Photos on request" hash
const dupGroups = [...hashes.values()].filter((v) => v.length > 1);
console.log(JSON.stringify({ products: L.length, imagesChecked: imgCount, problems: bad.length, duplicateImageGroups: dupGroups.length }));
console.log('PROBLEMS', bad);
console.log('DUP GROUPS (same pixels used by >1 product/slot)', dupGroups.map((g) => g.join(' | ')));
