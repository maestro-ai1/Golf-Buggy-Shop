// Golden Image Rule: product photos on pure white. Photos shot outdoors or on busy backdrops are cut out with a local background-removal model (no API, no key),
// then placed on #fff in the same square-1200 layout as process-images.mjs. Sources come from data/image-sources.json.
// The model package is NOT a project dependency (361 MB) and crashes if it shares a process with WebP/AVIF encoding, so the work is two phases:
//   1) cut  : cd <toolfolder> && BGTOOL=<toolfolder> node <project>/scripts/whiten-images.mjs cut [slug-fragment] [--threshold 0.4]
//             (toolfolder = any folder where `npm i @imgly/background-removal-node` was run; writes <toolfolder>/cuts/*.png)
//   2) place: CUTS=<toolfolder>/cuts node scripts/whiten-images.mjs place
//             (rewrites public/products/<slug>/<n>(-600).webp|avif and records data/whitened-images.json)
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = path.resolve(import.meta.dirname, '..');
const phase = process.argv[2];
const arg = (n, d) => { const i = process.argv.indexOf('--' + n); return i > -1 ? process.argv[i + 1] : d; };
const THRESHOLD = +arg('threshold', 0.4);
const only = process.argv.slice(3).find((a) => !a.startsWith('--') && isNaN(+a));
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36' };
const cat = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
const srcMap = new Map(JSON.parse(fs.readFileSync(path.join(ROOT, 'data/image-sources.json'), 'utf8')).map((e) => [e.file, e.source]));
const logFile = path.join(ROOT, 'data/whitened-images.json');
const done = fs.existsSync(logFile) ? JSON.parse(fs.readFileSync(logFile, 'utf8')) : {};
const fname = (key) => key.replace(/^products\//, '').replace(/\//g, '__') + '.png';

if (phase === 'cut') {
  const BGTOOL = process.env.BGTOOL; if (!BGTOOL) throw new Error('Set BGTOOL to the folder with @imgly/background-removal-node installed');
  const { removeBackground } = await import(pathToFileURL(path.join(BGTOOL, 'node_modules/@imgly/background-removal-node/dist/index.mjs')).href);
  const sharp = createRequire(pathToFileURL(path.join(BGTOOL, 'package.json')))('sharp');
  const outDir = path.join(BGTOOL, 'cuts'); fs.mkdirSync(outDir, { recursive: true });
  const whiteShare = async (file) => { const { data } = await sharp(file).resize(120, 120).removeAlpha().raw().toBuffer({ resolveWithObject: true }); let w = 0; for (let i = 0; i < data.length; i += 3) if (Math.min(data[i], data[i + 1], data[i + 2]) >= 245) w++; return w / (120 * 120); };
  const fetchBuf = async (url) => { for (let i = 0; i < 3; i++) { try { const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(30000) }); if (r.ok) return Buffer.from(await r.arrayBuffer()); } catch { /* retry */ } await new Promise((r) => setTimeout(r, 700 * (i + 1))); } return null; };
  const jobs = [];
  for (const p of cat) {
    if (only && !p.slug.includes(only)) continue;
    for (const img of p.images) {
      const key = img.replace('/products/', 'products/');
      if (done[key] || fs.existsSync(path.join(outDir, fname(key)))) continue;
      const f = path.join(ROOT, 'public' + img + '.webp'); if (!fs.existsSync(f)) continue;
      const share = await whiteShare(f);
      if (share < THRESHOLD && srcMap.get(key)) jobs.push({ key, src: srcMap.get(key), share });
    }
  }
  console.log('images to cut out:', jobs.length);
  let n = 0, fail = 0;
  for (const j of jobs) {
    try {
      const raw = await fetchBuf(j.src); if (!raw) throw new Error('download');
      const png = await sharp(raw, { failOn: 'none' }).rotate().png().toBuffer();
      const blob = await removeBackground(new Blob([png], { type: 'image/png' }), { model: 'medium', output: { format: 'image/png' } });
      fs.writeFileSync(path.join(outDir, fname(j.key)), Buffer.from(await blob.arrayBuffer()));
    } catch (e) { fail++; console.log('FAIL', j.key, String(e.message || e).slice(0, 80)); }
    n++; if (n % 10 === 0) console.log(n + '/' + jobs.length);
  }
  console.log('cut done', n, 'failed', fail);
} else if (phase === 'place') {
  const sharp = (await import('sharp')).default;
  const CUTS = process.env.CUTS; if (!CUTS) throw new Error('Set CUTS to the cuts folder');
  const writeSafe = async (file, buf) => { for (let i = 0; i < 6; i++) { try { fs.writeFileSync(file, buf); return; } catch { try { fs.unlinkSync(file); } catch { /* ignore */ } await new Promise((r) => setTimeout(r, 400 * (i + 1))); } } throw new Error('cannot write ' + file); };
  const encode = async (canvas, dest, kb) => {
    let q = 84, buf; do { buf = await canvas.clone().webp({ quality: q, effort: 5 }).toBuffer(); q -= 8; } while (buf.length > kb * 1024 && q > 40);
    await writeSafe(dest + '.webp', buf);
    let a = 58, ab; do { ab = await canvas.clone().avif({ quality: a, effort: 4 }).toBuffer(); a -= 8; } while (ab.length > kb * 1024 && a > 30);
    await writeSafe(dest + '.avif', ab);
  };
  const square = async (cutPng, size) => {
    // tight crop from the alpha mask (faint model haze would otherwise keep the crop loose and shrink the product), then flatten onto white
    let src = cutPng;
    try {
      const mask = await sharp(cutPng).ensureAlpha().extractChannel('alpha').threshold(110).toBuffer();
      const { info } = await sharp(mask).trim({ background: '#000000', threshold: 10 }).toBuffer({ resolveWithObject: true });
      src = await sharp(cutPng).extract({ left: Math.max(0, -info.trimOffsetLeft), top: Math.max(0, -info.trimOffsetTop), width: info.width, height: info.height }).toBuffer();
    } catch { /* keep uncropped */ }
    const work = sharp(src).flatten({ background: '#ffffff' });
    const resized = await work.resize({ width: Math.round(size * 0.9), height: Math.round(size * 0.9), fit: 'inside', kernel: 'lanczos3' }).toBuffer();
    return sharp({ create: { width: size, height: size, channels: 3, background: '#ffffff' } }).composite([{ input: resized, gravity: 'centre' }]);
  };
  let n = 0;
  for (const f of fs.readdirSync(CUTS).filter((x) => x.endsWith('.png'))) {
    const key = 'products/' + f.replace(/\.png$/, '').replace(/__/g, '/');
    if (done[key] && !process.argv.includes('--force')) continue;
    const dest = path.join(ROOT, 'public/' + key);
    if (!fs.existsSync(dest + '.webp')) continue;
    const cut = fs.readFileSync(path.join(CUTS, f));
    await encode(await square(cut, 1200), dest, 150);
    await encode(await square(cut, 600), dest + '-600', 70);
    done[key] = { at: new Date().toISOString().slice(0, 10) }; n++;
    if (n % 20 === 0) fs.writeFileSync(logFile, JSON.stringify(done, null, 1));
  }
  fs.writeFileSync(logFile, JSON.stringify(done, null, 1));
  console.log('placed', n);
} else console.log('usage: whiten-images.mjs cut|place');
