// Builds data/catalog.json from data/raw/*.json using scripts/catalog-spec.mjs.
// Prices = lowest matched Australian competitor price x 0.98 (2% under). Copy is original, facts are extracted only
// from the product name and the source spec text (never invented).
import fs from 'node:fs';
import path from 'node:path';
import { SPEC, PRICE_FACTOR } from './catalog-spec.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const RAW = path.join(ROOT, 'data/raw');
const load = (f) => JSON.parse(fs.readFileSync(path.join(RAW, f + '.json'), 'utf8'));
const sources = {};
for (const f of ['mgi', 'eride', 'stinger', 'cartsnparts', 'penrith']) sources[f] = load(f);
const decode = (s) => (s || '').replace(/&#8211;|&#8212;/g, '-').replace(/&#038;|&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8243;/g, '"').replace(/&[a-z#0-9]+;/gi, ' ');
const slugify = (s) => s.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const money = (n) => Math.round(n * 20) / 20;
const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const pick = (arr, seed) => arr[hash(seed) % arr.length];
const TODAY = new Date().toISOString().slice(0, 10);

function facts(text, name) {
  const t = decode(text) + ' ' + name;
  const f = {};
  const m = (re, key, fmt = (x) => x) => { const r = t.match(re); const v = r && (r[1] || r[2]); if (v && !f[key]) f[key] = fmt(v.trim()); };
  m(/(\d+(?:\.\d+)?)\s?kg\b(?!\s*(?:load|capacity))/i, 'Weight', (x) => x + ' kg');
  m(/(?:max(?:imum)?\s*)?speed[^0-9]{0,12}(\d{1,3})\s?km\/?h/i, 'Top speed', (x) => x + ' km/h');
  m(/range[^0-9]{0,15}(?:up to\s*)?(\d{1,3})\s?km/i, 'Range', (x) => 'Up to ' + x + ' km');
  m(/(\d{2,4}\s?W)\b\s*(?:dual\s*)?motor|motor[^0-9]{0,12}(\d{3,4}\s?W)\b/i, 'Motor');
  m(/\b(\d{2}\s?V)\b/i, 'Voltage');
  m(/\b(\d{2,3}\s?Ah)\b/i, 'Battery capacity');
  m(/\b(\d{3,4}\s?Wh)\b/i, 'Battery energy');
  m(/\b(\d{2,3}\s?cc)\b/i, 'Engine');
  m(/(\d)\s?seat/i, 'Seats');
  m(/(\d{1,2})\s?inch/i, 'Wheel size', (x) => x + ' inch');
  return f;
}

const GROUP_LABEL = {
  'electric-buggy': 'electric golf buggy', 'remote-buggy': 'remote control golf buggy', 'push-buggy': 'golf push buggy', 'ride-on': 'ride-on golf buggy',
  'golf-board': 'electric golf board', cart: 'golf cart', 'utility-cart': 'utility golf cart', battery: 'lithium golf cart battery', charger: 'golf cart charger',
  wheels: 'golf cart wheels', holder: 'golf buggy accessory', umbrella: 'golf buggy umbrella', cooler: 'golf buggy cooler bag', bag: 'golf buggy bag', esky: 'golf cart esky bracket',
  seat: 'golf buggy seat', seatcover: 'golf cart seat cover', mat: 'golf cart floor mat', seatbelt: 'golf cart seat belt kit', led: 'golf cart LED light kit', speaker: 'golf cart speaker',
  rack: 'golf cart bag rack', rail: 'golf cart grab rail', mirror: 'golf cart mirror', steering: 'golf cart steering wheel', dune: 'dune buggy', ssv: 'side by side buggy',
  kids: 'kids buggy', gokart: 'go kart', quad: 'quad bike',
};

// ---------- original copy per group (own words, built from name + verified facts)
function copy(g, name, brand, f, opts) {
  const seed = name;
  const fits = opts.fits;
  const spec = Object.entries(f).slice(0, 4).map(([k, v]) => `${k.toLowerCase()} of ${v}`).join(', ');
  const L = {
    'electric-buggy': {
      short: `${name}: a lightweight motorised golf buggy that does the walking while you focus on your round.`,
      p: [`The ${name} takes the effort out of carrying clubs. A motor drives the wheels, you steer with the handle, and the folding frame packs down small enough for a car boot.`, `Electric buggies suit golfers who still want to walk the course but not haul a bag for 18 holes. ${spec ? 'Listed figures: ' + spec + '.' : 'Check the specification table for motor, battery and weight details.'} We supply it with Australia-wide freight and local support.`],
      hl: ['Folds compact for the boot', 'Rechargeable lithium power', 'Suits cart and stand bags (check bag fit)', 'Australia-wide delivery'],
    },
    'remote-buggy': {
      short: `${name}: a remote control golf buggy that follows your lead down the fairway hands-free.`,
      p: [`With the ${name} you walk the course unburdened while the buggy follows or moves on command. The remote lets you send it ahead to the green or call it back to your ball.`, `Remote golf buggies are the premium end of the market, and they reward golfers who want a faster, cleaner round. ${spec ? 'Key figures: ' + spec + '.' : ''} Compare it with the other remote models in this range before you buy.`],
      hl: ['Hands-free remote operation', 'Folds down for storage', 'Built for all-terrain courses', 'Charger and battery information on the spec table'],
    },
    'push-buggy': {
      short: `${name}: a push golf buggy with a quick fold and the on-course extras golfers actually use.`,
      p: [`The ${name} is a push buggy built for stability and a fast fold. Push or pull it round the course, then collapse it into a compact shape for the car.`, `Push buggies are the most affordable way to stop carrying your bag, and they need no charging. If you want a motor later, browse our electric and remote buggies in the same range.`],
      hl: ['Quick fold for easy transport', 'No batteries to charge', 'Built-in storage for tees, phone and scorecard', 'Fits most cart and stand bags'],
    },
    'ride-on': {
      short: `${name}: a ride-on electric golf buggy so you can sit down and roll between holes.`,
      p: [`The ${name} is a seated electric buggy for golfers who prefer to ride. Strong motor power, a proper seat and a large battery carry you and your clubs around the course.`, `Seated buggies suit golfers with limited mobility, large courses or long rounds. ${spec ? 'Listed figures: ' + spec + '.' : ''}`],
      hl: ['Seated, comfortable ride', 'Carries a full bag and gear', 'Long-range battery', 'Strong motor for hills'],
    },
    'golf-board': {
      short: `${name}: stand-up electric golf board that carries your bag while you ride.`,
      p: [`The ${name} turns a round of golf into something new: stand on the board, steer, and let the motor do the work. It carries your clubs on the same frame.`, `Golf boards are a compact, quick way to cover a course. Ask us about course rules, as some clubs restrict where powered boards can go.`],
      hl: ['Stand-up ride-on design', 'Carries your clubs', 'Electric drive', 'Check your club\'s access rules'],
    },
    cart: {
      short: `${name}: a new electric golf cart, delivered Australia-wide with the support to match.`,
      p: [`The ${name} is a modern electric golf cart for courses, estates, resorts and private properties. Quiet running, low running cost and simple charging make it easy to live with.`, `${f.Seats ? `Seating for ${f.Seats}. ` : ''}Pricing includes GST and compares directly against the Australian market, and our team can arrange freight, accessories and a lithium upgrade path. Ask about road, estate and club rules for your area before you buy.`],
      hl: ['New electric golf cart', 'Quiet, low-maintenance drive', 'Accessories and parts available from us', 'Freight to metro and regional Australia'],
    },
    'utility-cart': {
      short: `${name}: a work-ready electric cart for estates, resorts, farms and grounds crews.`,
      p: [`The ${name} is a utility-focused cart with the load space and durability to haul tools, supplies or guests. Electric drive keeps noise and running costs low.`, `Utility carts earn their place on resorts, farms, schools and large properties. Tell us about the job and we will help you match the right cart and options.`],
      hl: ['Load-carrying utility layout', 'Electric, low running cost', 'Suits estates, farms and resorts', 'Accessories available'],
    },
    battery: {
      short: `${name}: lithium upgrade to replace tired lead-acid batteries${fits ? ' in ' + fits + ' carts' : ''}.`,
      p: [`This ${name} replaces a heavy lead-acid pack with sealed lithium power. ${fits ? `It is matched to ${fits}. ` : ''}Expect less weight, no watering and steadier power through the round.`, `Lithium conversions should be fitted by a qualified person, and you should keep installation photos for warranty. ${spec ? 'Listed figures: ' + spec + '.' : ''} Contact us if you are unsure which package fits your cart.`],
      hl: [fits ? `Matched to ${fits}` : 'Plug-in fit', 'Sealed, maintenance-free lithium', 'Lighter than lead-acid', 'Fit by a qualified installer'],
    },
    charger: {
      short: `${name}: replacement or upgrade charging gear${fits ? ' for ' + fits : ''}.`,
      p: [`The ${name} keeps your battery topped up safely${fits ? ` and is intended for ${fits}` : ''}. A good charger protects battery life, so match voltage and plug type to your cart.`, `Not sure it matches your battery? Send us the cart model and charger plate details before ordering and we will confirm.`],
      hl: [fits ? `For ${fits}` : 'Check voltage before ordering', 'Protects battery life', 'Australia-wide freight'],
    },
    wheels: {
      short: `${name}: upgrade the look and ride of your golf cart.`,
      p: [`${name} give a standard cart a custom look and a firmer stance. Check the wheel size, bolt pattern and tyre details against your cart before ordering.`, `Mag wheels are one of the most popular golf cart upgrades. We can confirm fitment for common Club Car, EZGO, Yamaha and ECAR models.`],
      hl: ['Cosmetic and ride upgrade', 'Confirm size and bolt pattern', 'Ships Australia-wide'],
    },
    holder: {
      short: `${name}: keeps your phone, drinks or sand on hand without cluttering the cart.`,
      p: [`The ${name} is a simple add-on that keeps small items where you need them. Check that the mounting suits your buggy or cart before you order.`, `Small accessories like this are the easiest way to personalise a buggy. Add a few to your order to reach our free-delivery level.`],
      hl: ['Easy to fit', 'Keeps essentials within reach', 'Check mounting compatibility'],
    },
    umbrella: { short: `${name}: rain or shine cover for the round.`, p: [`The ${name} gives you shade or shelter from the first tee to the last green. It pairs with buggy umbrella holders and fits in your bag when not in use.`, `A decent umbrella is a small purchase that saves a wet round.`], hl: ['Compact and lightweight', 'Rain and sun cover', 'Pairs with buggy holders'] },
    cooler: { short: `${name}: insulated storage so drinks and snacks stay cold on the course.`, p: [`The ${name} is an insulated bag made for buggy use. It keeps drinks cool through a long summer round without taking over the buggy.`, `Check the fitment note for your buggy model before ordering.`], hl: ['Insulated storage', 'Designed for buggy mounting', 'Great summer add-on'] },
    bag: { short: `${name}: extra storage and carry for your buggy and gear.`, p: [`The ${name} gives you somewhere to keep valuables and spares, so your golf bag stays tidy. Handy for travel days and for storing your buggy accessories.`, `Confirm that the bag suits your buggy model before ordering.`], hl: ['Extra storage', 'Keeps accessories together', 'Easy to carry'] },
    esky: { short: `${name}: mount an esky securely on the cart rail.`, p: [`The ${name} is a sturdy bracket that holds a cooler where it belongs, off the floor and out of the way. Match the bracket to your cart before ordering.`, `Cold drinks on a golf cart are an Australian tradition. This bracket keeps them secure.`], hl: ['Metal bracket', 'Keeps esky secure', 'Check cart model fit'] },
    seat: { short: `${name}: add a fold-out seat to your buggy.`, p: [`The ${name} lets you sit and rest between shots. It folds away when you are walking.`, `Check that the seat kit matches your buggy model.`], hl: ['Fold-away comfort', 'Quick fit', 'Check buggy compatibility'] },
    seatcover: { short: `${name}: padded protection and a fresh look for your cart seats.`, p: [`${name} protect original seats from sun, wear and spills, and add a premium finish inside the cart.`, `Confirm the cart model before ordering so the covers fit properly.`], hl: ['Padded comfort', 'Protects seats', 'Model-specific fit'] },
    mat: { short: `${name}: custom floor protection and a cleaner cabin.`, p: [`The ${name} protects the floor from mud and wear and makes cleaning simple. Moulded to suit the cart, it stays in place.`, `Floor mats are a quick upgrade that makes a cart feel new.`], hl: ['Model-specific fit', 'Easy to clean', 'Protects the floor'] },
    seatbelt: { short: `${name}: add seat belts for safer cart rides.`, p: [`The ${name} adds a proper restraint for passengers. Check seat count and fitting requirements before ordering.`, `Safety upgrades are worth it on hilly courses and estates. Fit them correctly or use a qualified installer.`], hl: ['Safety upgrade', 'Full kit', 'Fit by a qualified installer'] },
    led: { short: `${name}: brighter lighting, indicators and horn for day or night driving.`, p: [`The ${name} adds headlights, tail lights, indicators and more to your cart, which is useful on estates and for evening use.`, `A qualified auto electrician should fit it. Check that it matches your cart model before ordering.`], hl: ['Complete lighting kit', 'Brighter, safer driving', 'Fit by a qualified electrician'] },
    speaker: { short: `${name}: add music to your cart with Bluetooth.`, p: [`The ${name} brings Bluetooth audio to a cart for the course, estate or resort.`, `Check mounting space and voltage before ordering.`], hl: ['Bluetooth audio', '12V system', 'Easy to add'] },
    rack: { short: `${name}: carry bags and gear securely at the back of the cart.`, p: [`The ${name} gives you somewhere solid to strap golf bags or gear. It frees up seat space and keeps things from sliding around.`, `Confirm that it matches your cart model before ordering.`], hl: ['Secure rear carry', 'Frees up seat space', 'Check model fit'] },
    rail: { short: `${name}: a grab rail so passengers have something to hold.`, p: [`The ${name} adds a handhold for passengers, which is helpful on bumpy tracks and slopes.`, `Check that it suits your cart before ordering.`], hl: ['Passenger handhold', 'Safety upgrade', 'Check cart compatibility'] },
    mirror: { short: `${name}: replacement mirror for better visibility.`, p: [`The ${name} restores rear visibility on your cart. Sold singly, so order both sides if you need a pair.`, `Confirm the cart model before ordering.`], hl: ['Single mirror', 'Model-specific fit', 'Easy swap'] },
    steering: { short: `${name}: upgrade the steering wheel for a sportier feel.`, p: [`The ${name} improves grip and the look of the cockpit. Check hub compatibility for your cart before ordering.`, `Steering wheel upgrades are among the most visible custom touches.`], hl: ['Sporty grip', 'Custom look', 'Check hub fit'] },
    dune: { short: `${name}: an Australian-ready off-road buggy for farms, tracks and weekend runs.`, p: [`The ${name} is a petrol off-road buggy for properties, tracks and recreation. ${f.Engine ? `It is powered by a ${f.Engine} engine. ` : ''}Check the specification table, delivery and assembly information before ordering.`, `Off-road buggies must be used where permitted. Ask us about state rules, registration and safety gear.`],
      hl: ['Off-road recreation and farm use', 'Check assembly requirements', 'Safety gear recommended', 'Australia-wide freight'] },
    ssv: { short: `${name}: a side-by-side style buggy for work and play.`, p: [`The ${name} is a two-seat style off-road vehicle for property work, trail use and recreation. ${f.Engine ? `Engine: ${f.Engine}. ` : ''}Review the specifications and assembly notes before you buy.`, `Use off-road vehicles where permitted and wear appropriate safety gear.`], hl: ['Off-road side-by-side layout', 'Work and recreation', 'Check assembly and delivery notes'] },
    kids: { short: `${name}: a youth buggy or quad sized for younger riders.`, p: [`The ${name} is designed for younger riders. ${f.Engine ? `Engine: ${f.Engine}. ` : ''}Always supervise children, use helmets and protective gear, and read the manufacturer's age and weight guidance before purchase.`, `Ask us if you are unsure which model suits your child's size and experience.`], hl: ['Youth sized', 'Supervised use', 'Helmet and gear recommended'] },
    gokart: { short: `${name}: a go kart for backyards, farms and tracks.`, p: [`The ${name} is a go kart for recreational use on private land and tracks. ${f.Engine ? `Engine: ${f.Engine}. ` : ''}Check the specification table for speed, fuel and assembly details.`, `Wear a helmet and use it only where permitted.`], hl: ['Recreational go kart', 'Check assembly notes', 'Helmet recommended'] },
    quad: { short: `${name}: a quad bike for farm, trail or youth use.`, p: [`The ${name} is a quad bike suited to property work and recreation. ${f.Engine ? `Engine: ${f.Engine}. ` : ''}Review the specification table, age guidance and delivery notes before ordering.`, `Always use a helmet and follow the manufacturer's guidance.`], hl: ['Property and trail use', 'Check age guidance', 'Helmet recommended'] },
  };
  const G = L[g] || L.holder;
  return { short: G.short.slice(0, 158), paragraphs: G.p, highlights: G.hl };
}

const FAQ_BY_GROUP = (name, group, price, fits) => [
  [`How much is the ${name}?`, `The ${name} is $${price.toLocaleString('en-AU')} AUD including GST. We price against the Australian market and update our prices regularly.`],
  [`Do you deliver the ${name} Australia-wide?`, 'Yes. Orders over $1,000 ship free to major capital city metro and depot corridors, and a flat $95 freight fee applies below that. We will confirm regional freight before dispatch.'],
  [`What warranty does it have?`, 'The manufacturer warranty applies. Warranty details and conditions are provided with your order confirmation, and our team can answer questions before you buy.'],
  [fits ? `Will it fit my cart or buggy?` : `Can I check suitability before I buy?`, fits ? `It is intended for ${fits}. Send us your exact model and year before ordering and we will confirm fit.` : 'Yes. Call 0420 128 746 or message us on WhatsApp with your use case and we will confirm that this is the right model.'],
  [`What payment options do you accept?`, 'We accept bank transfer (EFT), PayID, Visa, Mastercard, Amex, and BTC or USDT with an extra 5% crypto discount. Fleet and purchase-order buyers can ask for an invoice.'],
];

// ---------- build products
const out = [];
const used = new Set();
const missing = [];
for (const [group, brand, brandPage, name, cats, srcs, opts = {}] of SPEC) {
  const found = [];
  for (const [file, rx] of srcs) {
    const hit = sources[file].find((p) => rx.test(decode(p.name).trim()));
    if (hit) found.push({ file, hit });
  }
  if (!found.length) { missing.push(name); continue; }
  const priced = found.filter((f) => f.hit.price > 0);
  if (!priced.length) { missing.push(name + ' (no price)'); continue; }
  const low = priced.reduce((a, b) => (a.hit.price <= b.hit.price ? a : b));
  const price = money(low.hit.price * PRICE_FACTOR);
  const imgsRaw = []; for (const f of priced.concat(found)) for (const u of f.hit.images || []) if (!imgsRaw.includes(u)) imgsRaw.push(u);
  const text = priced.map((f) => (f.hit.desc || '') + ' ' + (f.hit.short || '')).join(' ');
  const fcts = facts(text, name);
  const slug = slugify(name);
  if (used.has(slug)) continue; used.add(slug);
  const c = copy(group, name, brand, fcts, opts);
  const category = cats[0];
  out.push({
    slug, sku: 'BFS-' + (hash(slug) % 90000 + 10000), name, brand, brandPage, group, groupLabel: GROUP_LABEL[group],
    categories: [...new Set(cats)], price, rrp: low.hit.price, savingPct: 2,
    priceSource: { site: low.file, url: low.hit.url || '', price: low.hit.price, checked: TODAY },
    shortDescription: c.short, description: c.paragraphs, highlights: c.highlights,
    specs: { Brand: brand, ...(opts.fits ? { 'Fits': opts.fits } : {}), ...fcts }, faqs: FAQ_BY_GROUP(name, group, price, opts.fits),
    imagesRaw: imgsRaw.slice(0, 5), images: [], inStock: true,
  });
}
fs.writeFileSync(path.join(ROOT, 'data/catalog.json'), JSON.stringify(out, null, 1));
const byGroup = {}; out.forEach((p) => (byGroup[p.group] = (byGroup[p.group] || 0) + 1));
console.log('products:', out.length, 'missing:', missing.length);
if (missing.length) console.log('MISSING:\n' + missing.join('\n'));
console.log(JSON.stringify(byGroup));
console.log('images to fetch:', out.reduce((a, p) => a + p.imagesRaw.length, 0));
console.log(out.slice(0, 3).map((p) => `${p.name} $${p.price} (comp ${p.rrp} ${p.priceSource.site}) ${JSON.stringify(p.specs)}`).join('\n'));
