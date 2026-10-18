// Dev helper: contact sheet of a product's raw gallery to pick hero/lifestyle images.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const ROOT = path.resolve(import.meta.dirname, '..');
const cat = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
const raw = (n) => { const d = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/raw', n + '.json'), 'utf8')); return d; };
const want = process.argv.slice(2);
const UA = { 'User-Agent': 'Mozilla/5.0 Chrome/124' };
const tiles = []; const lines = [];
let idx = 0;
for (const w of want) {
  const [file, rx] = w.split('::');
  const hit = raw(file).find((p) => new RegExp(rx, 'i').test(p.name));
  if (!hit) { console.log('no', w); continue; }
  const imgs = (hit.images || []).slice(0, 12);
  for (const u of imgs) {
    try {
      const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(25000) }); if (!r.ok) continue;
      const b = Buffer.from(await r.arrayBuffer());
      const t = await sharp(b).resize(300, 200, { fit: 'cover' }).jpeg({ quality: 70 }).toBuffer();
      tiles.push({ t, i: ++idx }); lines.push(`${idx}\t${hit.name}\t${u}`);
    } catch {}
  }
}
const cols = 6, rows = Math.ceil(tiles.length / cols);
const comp = tiles.map((x, k) => ({ input: x.t, left: (k % cols) * 304, top: Math.floor(k / cols) * 224 }));
const labels = tiles.map((x, k) => ({ input: Buffer.from(`<svg width="60" height="26"><rect width="60" height="26" fill="#000" opacity=".75"/><text x="8" y="19" font-size="18" fill="#fff" font-family="Arial">${x.i}</text></svg>`), left: (k % cols) * 304, top: Math.floor(k / cols) * 224 }));
await sharp({ create: { width: cols * 304, height: rows * 224, channels: 3, background: '#fff' } }).composite([...comp, ...labels]).jpeg({ quality: 78 }).toFile('C:/Users/UsER/AppData/Local/Temp/claude/C--Users-UsER-Downloads-truckbedshop-v35-final/76f89ac2-afd6-4fd6-aeb1-92537d5789eb/scratchpad/cs/sheet.jpg');
fs.writeFileSync('C:/Users/UsER/AppData/Local/Temp/claude/C--Users-UsER-Downloads-truckbedshop-v35-final/76f89ac2-afd6-4fd6-aeb1-92537d5789eb/scratchpad/cs/sheet.txt', lines.join('\n'));
console.log(tiles.length, 'tiles');
