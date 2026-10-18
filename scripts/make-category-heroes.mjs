// Category hero banners (Golden Image Rule: full colour 2:1, master 2400x1200) from free-licence photos listed in data/category-hero-sources.json. Local, no API.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public/images/hero'); fs.mkdirSync(OUT, { recursive: true });
const UA = { 'User-Agent': 'BuggiesForSaleImageBot/1.0 (sales@buggiesforsale.com.au)' };
const list = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/category-hero-sources.json'), 'utf8'));
const only = process.argv.slice(2);
const mapFile = path.join(ROOT, 'data/category-heroes.json');
const map = fs.existsSync(mapFile) ? JSON.parse(fs.readFileSync(mapFile, 'utf8')) : {}, csv = [];
for (const h of list) {
  if (only.length && !only.includes(h.name)) continue;
  let buf = null;
  for (let i = 0; i < 3 && !buf; i++) { try { const r = await fetch(h.url, { headers: UA, signal: AbortSignal.timeout(60000) }); if (r.ok) buf = Buffer.from(await r.arrayBuffer()); } catch {} }
  if (!buf) { console.log('FAIL', h.name); continue; }
  for (const [w, sfx] of [[2400, ''], [1200, '-1200']]) {
    const H = w / 2, fgW = Math.round(w * 0.64);
    const bg = await sharp(buf).rotate().flatten({ background: '#10261d' }).resize(w, H, { fit: 'cover' }).blur(28).modulate({ brightness: 0.45, saturation: 1.1 }).toBuffer();
    const fg = await sharp(buf).rotate().flatten({ background: '#10261d' }).resize(fgW, H, { fit: 'cover', position: 'attention', kernel: 'lanczos3' }).toBuffer();
    const fade = Buffer.from('<svg width="' + w + '" height="' + H + '"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0b2e22" stop-opacity="0.96"/><stop offset="0.38" stop-color="#0b2e22" stop-opacity="0.78"/><stop offset="0.62" stop-color="#0b2e22" stop-opacity="0"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>');
    const img = sharp(bg).composite([{ input: fg, left: w - fgW, top: 0 }, { input: fade, left: 0, top: 0 }]);
    fs.writeFileSync(path.join(OUT, h.name + sfx + '.webp'), await img.clone().webp({ quality: 78, effort: 5 }).toBuffer());
    fs.writeFileSync(path.join(OUT, h.name + sfx + '.avif'), await img.clone().avif({ quality: 52, effort: 4 }).toBuffer());
  }
  map[h.pageUrl] = { base: '/images/hero/' + h.name, alt: h.alt };
  csv.push(`"hero/${h.name}.webp","${h.page}","${h.license}","${h.author.replace(/"/g, '')}"`);
  console.log('ok', h.name);
}
fs.writeFileSync(mapFile, JSON.stringify(map, null, 1));
fs.appendFileSync(path.join(ROOT, 'images/_sources.csv'), csv.join('\n') + '\n');
