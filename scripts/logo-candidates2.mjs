// Dev helper: Commons SVG/PNG logo search for brands the site-scrape missed. Usage: node scripts/logo-candidates2.mjs <outDir> slug="query" ...
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const OUT = process.argv[2]; fs.mkdirSync(OUT, { recursive: true });
const UA = { 'User-Agent': 'BuggiesForSaleImageBot/1.0 (sales@buggiesforsale.com.au)' };
const get = async (u, bin) => { for (let i = 0; i < 2; i++) { try { const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(25000) }); if (r.ok) return bin ? Buffer.from(await r.arrayBuffer()) : await r.json(); } catch {} } return null; };
const tiles = [], rec = [];
for (const arg of process.argv.slice(3)) {
  const [slug, q] = arg.split('='); let n = 0;
  const j = await get('https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|mime&iiurlwidth=400&gsrsearch=' + encodeURIComponent(q + ' logo'));
  for (const p of Object.values(j?.query?.pages || {})) {
    const ii = p.imageinfo?.[0]; if (!ii || !/svg|png/.test(ii.mime)) continue;
    const b = await get(ii.thumburl, true); if (!b) continue;
    try { const png = await sharp(b).flatten({ background: '#fff' }).resize(260, 120, { fit: 'contain', background: '#fff' }).png().toBuffer(); n++; tiles.push({ slug, n, png }); rec.push({ id: `${slug}#${n}`, title: p.title, url: ii.url, thumb: ii.thumburl, page: ii.descriptionurl }); } catch {}
  }
  console.log(slug, n);
}
const cols = 5, W = 270, H = 150, comp = [];
tiles.forEach((t, k) => { const l = (k % cols) * W, tp = Math.floor(k / cols) * H; comp.push({ input: t.png, left: l + 5, top: tp + 22 }, { input: Buffer.from(`<svg width="${W}" height="20"><text x="6" y="15" font-size="14" font-family="Arial">${t.slug}#${t.n}</text></svg>`), left: l, top: tp }); });
await sharp({ create: { width: cols * W, height: Math.ceil(tiles.length / cols) * H, channels: 3, background: '#eee' } }).composite(comp).jpeg({ quality: 80 }).toFile(path.join(OUT, 'sheet2.jpg'));
fs.writeFileSync(path.join(OUT, 'candidates2.json'), JSON.stringify(rec, null, 1));
