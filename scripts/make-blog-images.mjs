// Blog cover images 1600x900 (16:9): brand gradient + 1-3 product cards (white, rounded). Local, no API.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public/blog'); fs.mkdirSync(OUT, { recursive: true });
const cat = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
const find = (rx) => cat.find((p) => rx.test(p.name) && p.images.length);
const POSTS = {
  'road-rules': [/Magnum 2S 2 Seat/],
  'cart-price': [/IKON HD 4S/, /Magnum 2S Platinum/],
  'electric-vs-push': [/MGI ZIP X3/, /Stinger SG-5/],
  'lithium-batteries': [/PRO-Li Plus 48V 150Ah Lithium Battery Package for Club Car/, /MGI Zip 24V 299Wh/],
  'utv-guide': [/Kayo S150/, /Cheetah 175/],
  'remote-buggy': [/Ai Navigator GPS/, /QOD Q2/],
  'go-kart-electric-go-karts': [/Drifta/, /GMX Drift/],
  'electric-buggy': [/MGI ZIP X3/, /Segway Villain/],
  'offroad-buggy': [/Cheetah 175/, /Kayo S150/],
  'golf-e-scooter': [/Golf Skate Caddy/, /IM4/],
  'beach-buggy-for-sale-au': [/Cheetah 300/],
  'trailering-a-golf-cart': [/Loading Ramps 2.4m/, /ATV Folding Ramp/],
  'atv-buggy': [/Kayo Bull 125/, /Apollo Commander 110/],
  'trailmaster-dune-buggies': [/Cheetah 175/, /Challenger 200/],
  'kids-ride-on-buggy': [/Can-Am Maverick 24V/, /John Deere 12V/],
  'ninebot-go-kart': [/Segway Ninebot GoKart Pro 2/, /Drifta/],
  'golf-cars-vs-carts': [/IKON HD 4S/, /MGI ZIP X3/],
  'trailmaster-cheetah-australia': [/Cheetah 175/, /Cheetah 300/],
  'single-seat-golf-cart': [/IM4/, /Parmaker Spirit/],
  '150cc-buggy': [/Kayo S150/],
  'polaris-rzr-170': [/RZR 200 EFI Youth Buggy/],
  'push-trolley': [/Stinger SG-5 V2 Golf Push Buggy$/, /Tri-Lite Deluxe/],
  'caddies-for-golf': [/PowaKaddy CT6/, /Motocaddy M7/],
  '2nd-hand-golf-carts': [/2018 EZGO RXV/, /2023 ECAR 627/],
  'electric-carts': [/Compass 2S 2 Seat/, /Tempo 2\+2/],
  'what-is-the-best-electric-golf-buggy-australia': [/MGI ZIP X3/, /PowaKaddy CT6/],
  'how-much-is-a-go-kart': [/HelmetKarts HA-270X/, /Segway Ninebot GoKart Pro 2/],
  'electric-go-kart-for-adults-australia': [/Segway Ninebot GoKart Pro 2/, /Crazy Kart/],
  'off-road-dune-buggy': [/Cheetah 175/, /Cheetah 300/],
  'childs-off-road-buggy': [/Kayo S70/, /Can-Am Maverick 24V/],
  'atv-vs-utv': [/Apollo RFZ Falcon/, /Kayo S150/],
  'lithium-batteries-for-golf-carts': [/PRO-Li Plus 48V 150Ah Lithium Battery Package for EZGO RXV/, /Lester Summit/],
  'golf-buggy-size': [/PowerBug NX Lithium Electric Golf Buggy$/, /Thomson E5000/],
  '12v-golf-buggy-battery': [/MGI Lithium 12V 20Ah/, /MGI Lithium 12V 299Wh/],
  'utv-accessories': [/Polaris RZR Youth Full Windshield/, /Polaris RZR 170 Front Brushguard/],
  'used-golf-carts-on-sale': [/Tempo Refurbished/, /2015 Club Car Precedent/],
};
const W = 1600, H = 900;
const bg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b2e22"/><stop offset="1" stop-color="#1c7a55"/></linearGradient><pattern id="d" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#ffffff" fill-opacity=".10"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#d)"/><circle cx="1420" cy="120" r="260" fill="#f07a1f" fill-opacity=".16"/><path d="M0 760 C 400 700 900 820 1600 700 V900 H0Z" fill="#082418" fill-opacity=".55"/><path d="M110 120v150" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M110 120l86 42-86 42z" fill="#f07a1f"/></svg>`);
for (const [name, rxs] of Object.entries(POSTS)) {
  const items = rxs.map(find).filter(Boolean);
  const size = items.length === 1 ? 640 : 520;
  const layers = [];
  for (let i = 0; i < items.length; i++) {
    const src = path.join(ROOT, 'public' + items[i].images[0] + '.webp');
    const img = await sharp(src).resize(size - 40, size - 40).toBuffer();
    const card = await sharp({ create: { width: size, height: size, channels: 4, background: '#ffffff' } })
      .composite([{ input: img, left: 20, top: 20 }, { input: Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="34" fill="none"/></svg>`), left: 0, top: 0 }])
      .png().toBuffer();
    const rounded = await sharp(card).composite([{ input: Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="34"/></svg>`), blend: 'dest-in' }]).png().toBuffer();
    const x = items.length === 1 ? 760 : 560 + i * 430, y = items.length === 1 ? 130 : 120 + i * 90;
    layers.push({ input: Buffer.from(`<svg width="${size + 80}" height="${size + 80}"><defs><filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000" flood-opacity=".38"/></filter></defs><rect x="40" y="40" width="${size}" height="${size}" rx="34" fill="#fff" filter="url(#s)"/></svg>`), left: x - 40, top: y - 40 });
    layers.push({ input: rounded, left: x, top: y });
  }
  await sharp(bg).composite(layers).webp({ quality: 82 }).toFile(path.join(OUT, name + '-v2.webp'));
  console.log(name, items.map((p) => p.name).join(' + '));
}
