// scratch helper: node scripts/_tmp-dl.mjs <outDir> <list.json>   list: [{ name, url, referer }]
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const [out, listFile] = process.argv.slice(2); fs.mkdirSync(out, { recursive: true });
const list = JSON.parse(fs.readFileSync(listFile, 'utf8'));
const one = async (j) => {
  try {
    const r = await fetch(j.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36', Referer: j.referer || new URL(j.url).origin + '/' }, signal: AbortSignal.timeout(60000) });
    if (!r.ok) { console.log('HTTP', r.status, j.name); return; }
    const buf = Buffer.from(await r.arrayBuffer());
    const m = await sharp(buf, { limitInputPixels: false }).metadata();
    await sharp(buf, { limitInputPixels: false }).flatten({ background: '#ffffff' }).resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 84 }).toFile(path.join(out, j.name + '.jpg'));
    console.log('ok', j.name, m.width + 'x' + m.height);
  } catch (e) { console.log('ERR', j.name, e.message); }
};
const q = [...list]; await Promise.all(Array.from({ length: 5 }, async () => { while (q.length) await one(q.shift()); }));
