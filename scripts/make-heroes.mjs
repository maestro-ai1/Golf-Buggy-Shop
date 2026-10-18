// Hero banners (Golden Image Rule: heroes are full colour 2:1, master 2400x1200) from chosen lifestyle photos. Local, no API.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public/images/hero'); fs.mkdirSync(OUT, { recursive: true });
const UA = { 'User-Agent': 'Mozilla/5.0 Chrome/124' };
const HEROES = [
  { name: 'home-golf-cart-fairway', url: 'https://cartsnparts.com.au/wp-content/uploads/2024/12/Compass-4S.jpg', pos: 'attention', alt: 'Black ECAR Compass 4 seat golf cart parked on a green fairway' },
  { name: 'golf-carts-fairway', url: 'https://cartsnparts.com.au/wp-content/uploads/2024/12/Magnum-2S-2025-Navy.jpg', pos: 'attention', alt: 'Navy ECAR Magnum 2 seat lithium golf cart on a golf course' },
  { name: 'golf-buggies-course', url: 'https://cdn.shopify.com/s/files/1/0046/7419/1432/files/x3.png', pos: 'attention', alt: 'MGI electric golf buggy carrying a golf bag on a course' },
  { name: 'off-road-desert', url: 'https://www.penrithpitbike.com.au/wp-content/uploads/2023/02/Trailmaster-Cheetah-175CC-Dune-Buggy-2022-IN-STOCK.jpg', pos: 'attention', alt: 'Trailmaster Cheetah dune buggy driving across sand' },
];
const meta = [];
for (const h of HEROES) {
  const r = await fetch(h.url, { headers: UA }); if (!r.ok) { console.log('fail', h.name, r.status); continue; }
  const buf = Buffer.from(await r.arrayBuffer());
    // Composite: blurred brand-green backdrop + sharp photo on the right + left gradient for headline space (keeps the whole vehicle visible).
  for (const [w, sfx] of [[2400, ''], [1200, '-1200']]) {
    const H = w / 2, fgW = Math.round(w * 0.64);
    const bg = await sharp(buf).rotate().flatten({ background: '#10261d' }).resize(w, H, { fit: 'cover' }).blur(28).modulate({ brightness: 0.45, saturation: 1.1 }).toBuffer();
    const fg = await sharp(buf).rotate().flatten({ background: '#10261d' }).resize(fgW, H, { fit: 'cover', position: 'attention', kernel: 'lanczos3' }).toBuffer();
    const fade = Buffer.from('<svg width="' + w + '" height="' + H + '"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0b2e22" stop-opacity="0.96"/><stop offset="0.38" stop-color="#0b2e22" stop-opacity="0.78"/><stop offset="0.62" stop-color="#0b2e22" stop-opacity="0"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>');
    const img = sharp(bg).composite([{ input: fg, left: w - fgW, top: 0 }, { input: fade, left: 0, top: 0 }]);
    fs.writeFileSync(path.join(OUT, h.name + sfx + '.webp'), await img.clone().webp({ quality: 78, effort: 5 }).toBuffer());
    fs.writeFileSync(path.join(OUT, h.name + sfx + '.avif'), await img.clone().avif({ quality: 52, effort: 4 }).toBuffer());
  }
  const m = await sharp(buf).metadata();
  meta.push({ name: h.name, source: h.url, alt: h.alt, sourceWidth: m.width, sourceHeight: m.height });
  console.log(h.name, m.width + 'x' + m.height);
}
fs.writeFileSync(path.join(ROOT, 'data/hero-sources.json'), JSON.stringify(meta, null, 1));
