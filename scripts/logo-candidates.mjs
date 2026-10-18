// Dev helper (local, keyless): gather candidate brand logos from each brand's own website and Wikimedia Commons, then build a labelled contact sheet.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const OUT = process.argv[2]; fs.mkdirSync(OUT, { recursive: true });
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36' };
const BRANDS = {
  polaris: ['polaris.com', 'Polaris Inc logo'], mgi: ['mgigolf.com', 'MGI golf logo'], 'can-am': ['can-am.brp.com', 'Can-Am logo BRP'], clicgear: ['clicgear.com', 'Clicgear logo'],
  motocaddy: ['motocaddy.com', 'Motocaddy logo'], yamaha: ['yamaha-motor.com.au', 'Yamaha Motor logo'], rovic: ['rovicgolf.com', 'Rovic golf logo'], trailmaster: ['trailmasterusa.com', 'Trailmaster logo'],
  triumph: ['', 'Triumph golf buggy logo'], 'club-car': ['clubcar.com', 'Club Car logo'], kubota: ['kubota.com.au', 'Kubota logo'], hammerhead: ['hammerheadoffroad.com', 'Hammerhead Off-Road logo'],
  ezgo: ['ezgo.com', 'E-Z-GO logo'], caddytek: ['caddytek.com', 'Caddytek logo'], 'john-deere': ['deere.com.au', 'John Deere logo'], cfmoto: ['cfmoto.com.au', 'CFMOTO logo'],
  segway: ['segway.com', 'Segway logo'], 'bag-boy': ['bagboy.com', 'Bag Boy logo'], 'big-max': ['bigmax.com', 'Big Max golf logo'], honda: ['honda.com.au', 'Honda logo'],
  powakaddy: ['powakaddy.com', 'PowaKaddy logo'], ecar: ['ecar.com.au', 'ECAR golf logo'], kawasaki: ['kawasaki.com.au', 'Kawasaki logo'], stinger: ['stingergolf.com.au', 'Stinger golf logo'],
  'tri-lite': ['trilitegolf.com', 'Tri-Lite golf logo'], smoothy: ['', 'Smoothy golf logo'], thomson: ['', 'Thomson golf logo'], parmaker: ['parmaker.com', 'Parmaker logo'],
};
async function get(url, binary = false) { try { const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(20000), redirect: 'follow' }); if (!r.ok) return null; return binary ? Buffer.from(await r.arrayBuffer()) : await r.text(); } catch { return null; } }
const abs = (u, base) => { try { return new URL(u, base).href; } catch { return null; } };
const tiles = [], lines = [];
for (const [slug, [domain, q]] of Object.entries(BRANDS)) {
  const cands = [];
  if (domain) {
    const html = await get('https://' + domain + '/') || await get('https://www.' + domain + '/');
    if (html) {
      const base = 'https://' + domain + '/';
      for (const m of html.matchAll(/<img[^>]+(?:logo)[^>]*>/gi)) { const s = (m[0].match(/\bsrc=["']([^"']+)/i) || [])[1]; if (s && !/\.(gif|svg\+xml)$/.test(s)) cands.push(abs(s, base)); }
      for (const m of html.matchAll(/<link[^>]+rel=["'](?:apple-touch-icon|icon)[^>]*>/gi)) { const s = (m[0].match(/href=["']([^"']+)/i) || [])[1]; if (s) cands.push(abs(s, base)); }
      const og = (html.match(/property=["']og:image["'][^>]*content=["']([^"']+)/i) || [])[1]; if (og) cands.push(abs(og, base));
    }
  }
  const api = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=4&format=json&srsearch=${encodeURIComponent(q)}`;
  const j = await get(api);
  if (j) { try { for (const s of JSON.parse(j).query.search) cands.push(`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(s.title.replace(/^File:/, ''))}?width=500`); } catch {} }
  const uniq = [...new Set(cands.filter(Boolean))].slice(0, 6);
  let n = 0;
  for (const u of uniq) {
    const b = await get(u, true); if (!b || b.length < 400) continue;
    try { const png = await sharp(b, { density: 200 }).flatten({ background: '#ffffff' }).resize(260, 120, { fit: 'contain', background: '#ffffff' }).png().toBuffer(); n++; tiles.push({ slug, n, png }); lines.push(`${slug}#${n}\t${u}`); fs.writeFileSync(path.join(OUT, `${slug}-${n}.src`), u); } catch {}
  }
  console.log(slug, n);
}
const cols = 5, W = 270, H = 150;
const rows = Math.ceil(tiles.length / cols);
const comp = [], lab = [];
tiles.forEach((t, k) => { const left = (k % cols) * W, top = Math.floor(k / cols) * H; comp.push({ input: t.png, left: left + 5, top: top + 22 }); lab.push({ input: Buffer.from(`<svg width="${W}" height="20"><text x="6" y="15" font-size="14" font-family="Arial" fill="#000">${t.slug}#${t.n}</text></svg>`), left, top }); });
await sharp({ create: { width: cols * W, height: rows * H, channels: 3, background: '#eee' } }).composite([...comp, ...lab]).jpeg({ quality: 80 }).toFile(path.join(OUT, 'sheet.jpg'));
fs.writeFileSync(path.join(OUT, 'candidates.txt'), lines.join('\n'));
console.log('tiles', tiles.length);
