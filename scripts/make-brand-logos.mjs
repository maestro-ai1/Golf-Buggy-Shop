// Brand logo pipeline (local, no API): download the brand's own logo, trim, fit into 400x160 transparent WebP -> public/brands/<slug>/logo.webp + data/brand-logos.json.
// Brands without a verified logo are omitted on purpose: components/BrandLogo.tsx falls back to a clean wordmark.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const ROOT = path.resolve(import.meta.dirname, '..');
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36' };
const LOGOS = {
  'can-am': 'https://can-am.brp.com/content/dam/global/logos/brands/logo-can-am.svg',
  motocaddy: 'https://www.motocaddy.com/media/logo/default/logo-bk.png',
  yamaha: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yamaha%20Motor%20logo.svg?width=800',
  kubota: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kubota%20Logo.svg?width=800',
  hammerhead: 'https://www.hammerheadoffroad.com/wp-content/uploads/2015/08/hammer-head-logo.png',
  'john-deere': 'https://commons.wikimedia.org/wiki/Special:FilePath/John%20Deere%20text%20only.png?width=800',
  cfmoto: 'https://commons.wikimedia.org/wiki/Special:FilePath/CFMOTO%20Logo.svg?width=800',
  honda: 'https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Canada.webp?width=800',
  powakaddy: 'https://www.powakaddy.com/wp-content/uploads/2025/02/PK_Master_Logo_LC_Landscape_Black_161219-CC.png',
  kawasaki: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kawasaki%20Logo%20vert.svg?width=800',
  ezgo: 'https://ezgo.com/themes/custom/ezergo/assets/favicon/ezgo-badge.svg',
  'club-car': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Club_Car_logo.svg',
  segway: 'https://au.segway.com/content/dam/segway-ninebot/general/general/icon/segway_logo_new.png',
  mgi: 'https://mgigolf.com/cdn/shop/files/MGIG_Logo_COL-COMPASS.png?v=1653288543&width=680',
  clicgear: 'https://www.clicgearusa.com/cdn/shop/files/Clicgear-logo-website_5a5cbbfe-491e-4574-8269-1b3b9a176773.png?v=1765502101&width=600',
  caddytek: 'https://caddytek.com/cdn/shop/files/caddytek_Logo.png?v=1749201189&width=360',
  'bag-boy': 'https://bagboy.com/cdn/shop/files/Bag_Boy_Logo_-_Full_Color_-_Light_BG.png?v=1755807227&width=600',
  polaris: 'https://www.freepnglogos.com/uploads/polaris-png-logo/polaris-logo-motorcycle-brands-png-7.png',
  rovic: 'https://i0.wp.com/golfcitysports.com/wp-content/uploads/2017/01/Optimized-rovic-logo.jpg?ssl=1',
  trailmaster: 'https://gotrailmaster.com/wp-content/uploads/2024/06/77d3c33c4f974b37b11306c049f2df7a.w1000.h512._CR001000512_SX200_-768x392.png',
  'big-max': 'https://uk.bigmaxgolf.com/cdn/shop/files/BigMax_Logo_black_frame.png?v=1690888381&width=1000',
  ecar: 'https://ecargolfparts.com.au/cdn/shop/files/ECAR_Tagline_GreenBlack_155x@2x.png?v=1700453777',
  stinger:'https://www.stingergolf.com.au/cdn/shop/files/stinger-logo.png?v=1702015474&width=392',
};
const only = process.argv.slice(2);
const mapFile = path.join(ROOT, 'data/brand-logos.json');
const map = fs.existsSync(mapFile) ? JSON.parse(fs.readFileSync(mapFile, 'utf8')) : {};
const srcs = [];
for (const [slug, url] of Object.entries(LOGOS)) {
  if (only.length && !only.includes(slug)) continue;
  let buf = null;
  for (let i = 0; i < 3 && !buf; i++) { try { const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(30000), redirect: 'follow' }); if (r.ok) buf = Buffer.from(await r.arrayBuffer()); } catch {} }
  if (!buf) { console.log('FAIL', slug); continue; }
  try {
    const trimmed = await sharp(buf, { density: 300 }).trim({ threshold: 8 }).toBuffer();
    const out = await sharp(trimmed).resize({ width: 400, height: 160, fit: 'inside', withoutEnlargement: false }).webp({ quality: 90, alphaQuality: 100 }).toBuffer({ resolveWithObject: true });
    const dir = path.join(ROOT, 'public/brands', slug); fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'logo.webp'), out.data);
    map[slug] = { file: `/brands/${slug}/logo.webp`, w: out.info.width, h: out.info.height };
    srcs.push(`${slug},logo,${url}`);
    console.log('ok', slug, out.info.width + 'x' + out.info.height);
  } catch (e) { console.log('ERR', slug, e.message); }
}
fs.writeFileSync(mapFile, JSON.stringify(map, null, 1));
if (srcs.length) fs.appendFileSync(path.join(ROOT, 'images/_sources.csv'), srcs.join('\n') + '\n');
