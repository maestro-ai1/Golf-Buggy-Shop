// Brand page hero banners (colour 2:1, master 2400x1200) from locally downloaded brand photos, same composition as make-category-heroes.mjs.
// Usage: node scripts/make-brand-heroes.mjs <jobs.json>   jobs: [{ brand, src, alt, page, license }]
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public/images/hero'); fs.mkdirSync(OUT, { recursive: true });
const jobs = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const mapFile = path.join(ROOT, 'data/category-heroes.json');
const map = JSON.parse(fs.readFileSync(mapFile, 'utf8')); const csv = [];
for (const j of jobs) {
  const name = 'brand-' + j.brand; const buf = fs.readFileSync(j.src);
  for (const [w, sfx] of [[2400, ''], [1200, '-1200']]) {
    const H = w / 2, fgW = Math.round(w * 0.64);
    const bg = await sharp(buf).rotate().flatten({ background: '#10261d' }).resize(w, H, { fit: 'cover' }).blur(28).modulate({ brightness: 0.45, saturation: 1.1 }).toBuffer();
    // mode "band": wide banners are shown whole across the width, centred over the blurred copy (no heavy upscaling)
    const band = j.mode === 'band';
    const fg = band
      ? await sharp(buf).rotate().flatten({ background: '#10261d' }).resize({ width: w, kernel: 'lanczos3' }).toBuffer()
      : await sharp(buf).rotate().flatten({ background: '#10261d' }).resize(fgW, H, { fit: 'cover', position: j.position || 'attention', kernel: 'lanczos3' }).toBuffer();
    const fgMeta = await sharp(fg).metadata();
    let fgOut = fg;
    if (band) { // feather the top and bottom edges of the strip so it blends into the blurred background
      const mask = Buffer.from('<svg width="' + w + '" height="' + fgMeta.height + '"><defs><linearGradient id="m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.3" stop-color="#fff" stop-opacity="1"/><stop offset="0.7" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#m)"/></svg>');
      fgOut = await sharp(fg).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
    }
    const fade = Buffer.from('<svg width="' + w + '" height="' + H + '"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0b2e22" stop-opacity="0.96"/><stop offset="0.38" stop-color="#0b2e22" stop-opacity="0.78"/><stop offset="0.62" stop-color="#0b2e22" stop-opacity="0"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>');
    const img = sharp(bg).composite([{ input: fgOut, left: band ? 0 : w - fgW, top: band ? Math.max(0, Math.round((H - fgMeta.height) / 2)) : 0 }, { input: fade, left: 0, top: 0 }]);
    fs.writeFileSync(path.join(OUT, name + sfx + '.webp'), await img.clone().webp({ quality: 78, effort: 5 }).toBuffer());
    fs.writeFileSync(path.join(OUT, name + sfx + '.avif'), await img.clone().avif({ quality: 52, effort: 4 }).toBuffer());
  }
  map['/brands/' + j.brand + '/'] = { base: '/images/hero/' + name, alt: j.alt };
  csv.push(`"hero/${name}.webp","${j.page}","${j.license || 'brand/retailer supplied'}","${j.brand}"`);
  console.log('ok', name);
}
fs.writeFileSync(mapFile, JSON.stringify(map, null, 1));
fs.appendFileSync(path.join(ROOT, 'images/_sources.csv'), csv.join('\n') + '\n');
