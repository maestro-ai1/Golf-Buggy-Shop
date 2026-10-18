// For each brand, reads the brand's own site and collects og:image / twitter:image / large hero-like image URLs, downloads landscape candidates to a scratch folder.
// Usage: node scripts/scan-brand-sites.mjs <outDir>
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const OUT = process.argv[2]; fs.mkdirSync(OUT, { recursive: true });
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36', Accept: 'text/html,application/xhtml+xml', 'Accept-Language': 'en-AU,en;q=0.9' };
const SITES = {
  polaris: ['https://www.polaris.com/en-au/', 'https://www.polaris.com/en-au/off-road/'],
  'can-am': ['https://can-am.brp.com/off-road/au/en/'],
  'club-car': ['https://www.clubcar.com/', 'https://www.clubcar.com/au/'],
  ezgo: ['https://www.ezgo.com/'],
  yamaha: ['https://yamaha-motor.com.au/', 'https://www.yamahagolfcar.com/'],
  segway: ['https://au.segway.com/', 'https://powersports.segway.com/'],
  kawasaki: ['https://www.kawasaki.com.au/'],
  cfmoto: ['https://www.cfmoto.com.au/'],
  'john-deere': ['https://www.deere.com.au/en/gator-utility-vehicles/'],
  honda: ['https://www.honda.com.au/', 'https://www.honda.com.au/powerequipment/'],
  hammerhead: ['https://www.hammerheadoffroad.com/'],
  'bag-boy': ['https://bagboy.com/'],
  'big-max': ['https://uk.bigmaxgolf.com/'],
  caddytek: ['https://caddytek.com/'],
  clicgear: ['https://www.clicgearusa.com/'],
  motocaddy: ['https://www.motocaddy.com/', 'https://www.motocaddy.com.au/'],
  powakaddy: ['https://www.powakaddy.com/'],
  rovic: ['https://rovicgolf.com/', 'https://golfcitysports.com/'],
  ecar: ['https://ecargolfparts.com.au/', 'https://www.ecar.com.au/'],
  parmaker: ['https://www.parmaker.com/'],
  mgi: ['https://mgigolf.com/'],
  stinger: ['https://www.stingergolf.com.au/'],
  trailmaster: ['https://gotrailmaster.com/'],
  kubota: ['https://kubota.com.au/products/agriculture/utility-vehicles'],
};
const abs = (u, base) => { try { return new URL(u.replace(/&amp;/g, '&'), base).href; } catch { return null; } };
const rows = [];
async function grab(brand, page) {
  let html = ''; try { const r = await fetch(page, { headers: UA, signal: AbortSignal.timeout(25000), redirect: 'follow' }); if (!r.ok) { console.log('HTTP', r.status, brand, page); return; } html = await r.text(); } catch (e) { console.log('ERR ', brand, page, e.message); return; }
  const urls = new Set();
  for (const m of html.matchAll(/<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)[^>]*content=["']([^"']+)["']/gi)) urls.add(abs(m[1], page));
  for (const m of html.matchAll(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|twitter:image)["']/gi)) urls.add(abs(m[1], page));
  for (const m of html.matchAll(/(?:src|data-src|srcset|data-srcset|content|url\()[=("' ]+([^"' ,)]+\.(?:jpg|jpeg|png|webp)[^"' ,)]*)/gi)) { const u = abs(m[1], page); if (u && /hero|banner|slide|header|cover|lifestyle|feature|masthead|home/i.test(u) && !/logo|icon|sprite|thumb/i.test(u)) urls.add(u); }
  let k = 0;
  for (const u of [...urls].filter(Boolean).slice(0, 14)) {
    try {
      const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(25000) }); if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer()); const m = await sharp(buf).metadata();
      if (!m.width || m.width < 900 || m.width / m.height < 1.3) continue;
      const f = path.join(OUT, `${brand}__${++k}.jpg`);
      await sharp(buf).resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 85 }).toFile(f);
      rows.push({ brand, file: path.basename(f), w: m.width, h: m.height, url: u, page });
    } catch { /* skip */ }
  }
}
const q = Object.entries(SITES).flatMap(([b, ps]) => ps.map((p) => [b, p]));
await Promise.all(Array.from({ length: 6 }, async () => { while (q.length) { const [b, p] = q.shift(); await grab(b, p); } }));
const by = {}; rows.forEach((r) => (by[r.brand] = by[r.brand] || []).push(r));
for (const b of Object.keys(SITES)) console.log(b.padEnd(12), (by[b] || []).map((r) => `${r.file.split('__').pop()}:${r.w}x${r.h}`).join(' ') || '-');
fs.writeFileSync(path.join(OUT, '_sites.json'), JSON.stringify(rows, null, 1));
