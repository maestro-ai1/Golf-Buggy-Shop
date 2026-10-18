import { COPY, type PageCopy } from '@/content/pages';
import { SITE, money, type Product, type SitePage } from '@/config/site';
import { clampDesc } from '@/lib/seo';

const BRAND_FAQ = (brand: string): [string, string][] => [
  [`Do you sell ${brand} products?`, `We list the ${brand} models shown on this page. If you are after another ${brand} model or part, tell us and we will check availability.`],
  [`How much does ${brand} cost in Australia?`, `Prices are shown on each listing and include GST.`],
  [`Do you deliver ${brand} products Australia-wide?`, 'Yes. Orders over $1,000 ship free to major metro and depot corridors, and a flat $95 freight fee applies below that.'],
  [`Is there a warranty on ${brand} products?`, 'The manufacturer warranty applies. Warranty details and conditions are provided with your order confirmation.'],
  ['How can I pay?', 'We accept bank transfer (Osko or EFT), PayID, and Bitcoin or USDT with an extra 10% off.'],
];

const stem = (w: string) => w.replace(/ies$/, 'y').replace(/ses$/, 's').replace(/([^s])s$/, '$1');
const toks = (t: string) => t.toLowerCase().replace(/[^a-z0-9s]/g, ' ').split(/s+/).filter(Boolean).map(stem);
export const hasPhrase = (text: string, phrase: string) => { const T = toks(text), P = toks(phrase); if (!P.length) return false; for (let i = 0; i + P.length <= T.length; i++) if (P.every((p, j) => T[i + j] === p)) return true; return false; };
const list = (a: string[]) => (a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]);
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Keyword-map rule: every mapped secondary keyword appears naturally on its page. Unused ones are woven into one short guide and, at most, two FAQs.
function weave(page: SitePage, c: PageCopy & { fallback: boolean }): PageCopy & { fallback: boolean } {
  const sec = (page.secondary || []).map((s) => s.keyword);
  const text = [c.intro.join(' '), ...c.guides.flatMap((g) => [g.h2, ...g.p]), ...c.faqs.flat()].join(' ');
  const pk = toks(page.primary?.keyword || '').join(' ');
  const missing = sec.filter((k) => !hasPhrase(text, k) && toks(k).join(' ') !== pk && !/[&]/.test(k));
  if (!missing.length) return c;
  const name = page.name.replace(/ (Hub)$/, '').replace(/ (LOW DEMAND)$/, '');
  const primary = page.primary?.keyword || name.toLowerCase();
  const take = missing.slice(0, 4);
  const v = [...page.url].reduce((a, ch) => a + ch.charCodeAt(0), 0) % 2;
  const isBrand = page.level === 'brand';
  const brand = name.replace(/ Buggies$/, '');
  const guide = isBrand
    ? { h2: `Popular ${brand} searches`, p: [`Australian buyers look for ${brand} in many ways, from ${list(take)}. Whatever you search for, the checks are the same: confirm the model and specification, compare the delivered price including GST and ask us if you want a second opinion. We list what we can supply and will check availability for models that are not on this page.`] }
    : { h2: 'Related searches and buying tips', p: [v ? `People researching ${primary} often use terms such as ${list(take)}. The advice is similar for all of them: compare specifications and warranty, check the delivered cost and confirm that the product suits how and where you will use it.` : `You might have found this page by searching for ${list(take)}. Either way, this is a good place to compare options, and our team can help with fitment, freight and the best choice for your budget.`] };
  const extra: [string, string][] = missing.slice(0, 2).map((k) => [`Where can I find ${k} in Australia?`, `You can browse ${k} on this page with Australian prices including GST. If you cannot see the exact model you want, message us and we will check availability and freight to your postcode.`] as [string, string]);
  return { ...c, guides: [...c.guides, guide], faqs: [...c.faqs, ...extra] };
}

// Helpful, keyword-free buying advice per section of the site. It is added only when the page's primary keyword would otherwise be repeated too densely,
// which keeps on-page SEO natural (no stuffing) and gives buyers more to read.
const ADVICE: Record<string, { h2: string; p: string }[]> = {
  buggies: [
    { h2: 'Folding, weight and storage', p: 'Check how small the frame folds, how much it weighs with the battery fitted and whether it fits your boot with your clubs. A frame that opens and closes in two steps is easier to live with than one that needs wrestling, and a carry handle helps on stairs.' },
    { h2: 'Battery, charging and range', p: 'Lithium packs are lighter and charge faster than lead-acid, and a pack sized for 27 holes means you never think about it mid-round. Charge after every round, store the pack somewhere cool and dry, and ask about spare batteries and chargers.' },
    { h2: 'Bag fit and accessories', p: 'Straps, brackets and saddles decide how steady your bag feels. Try cart bags and stand bags if you can, and look at umbrella holders, drink holders and scorecard holders that suit the frame you choose.' },
    { h2: 'Course rules and support', p: 'Most clubs welcome powered units, but some set limits on wet days or on certain models, so ask first. Check the warranty, who services it in Australia and how long spare wheels and brake parts take to arrive.' },
  ],
  carts: [
    { h2: 'Seating, power and layout', p: 'Match seating to the people you carry most days, then check the drive system and battery or engine for the hills and loads you expect. Two-seaters suit couples and light property work, while four to eight seats suit resorts, schools and large estates.' },
    { h2: 'Roof, windscreen and options', p: 'A roof and windscreen make a cart usable in rain and sun, and lights, mirrors and seat belts add comfort and safety. Decide which options you need now and which can wait, because accessories can be added later.' },
    { h2: 'Freight, storage and charging', p: 'Delivery to your postcode is a real cost, so ask for a delivered price. Plan a dry, ventilated space for charging, and check that the cart fits through your gates and in your shed before you order.' },
    { h2: 'Warranty and aftercare', p: 'Ask how long the warranty runs on the battery, motor and controller, who services the vehicle and how quickly parts arrive. A strong support network matters more than a small saving on the sticker price.' },
  ],
  offroad: [
    { h2: 'Match the machine to your ground', p: 'Sand, mud, rocks and farm tracks each reward different tyres, ground clearance and engine power. Describe your terrain to us and we will suggest models, and remember that more power adds cost, weight and fuel use.' },
    { h2: 'Safety gear and training', p: 'Helmets, eye protection, gloves and sturdy boots should be worn on every ride, seat belts done up and passengers kept to the number of seats. Supervise young riders, start slowly and keep to private land and permitted areas.' },
    { h2: 'Assembly, transport and storage', p: 'Check what assembly is needed and what tools you will want. Plan how the machine will be unloaded, stored and moved, and use rated ramps and tie-downs for transport.' },
    { h2: 'Parts and maintenance', p: 'Keep a spare filter, spark plug and basic tools, wash off mud and salt after rides and follow the service schedule. Ask where spares come from and how long they take to arrive.' },
  ],
  parts: [
    { h2: 'Check fitment first', p: 'Confirm the make, model and year, compare dimensions or part numbers and send us your details if you are unsure. Many items are universal, but voltage, mounting points and connectors vary between models.' },
    { h2: 'Fitting and safety', p: 'Use the right tools and follow the manual. High-current electrical work and brake or steering parts are best left to a qualified installer, and photos of the finished job help with warranty claims.' },
    { h2: 'Genuine and compatible options', p: 'Genuine parts match the original specification, and good compatible parts can offer value. Compare warranty, materials and reviews, and keep your old part until the new one is working.' },
    { h2: 'Delivery and returns', p: 'Orders over $1,000 ship free and a flat $95 applies below that, with a $250 minimum order. Bundle several items into one order to reach free delivery, and ask us about freight for large or heavy parts.' },
  ],
  brands: [
    { h2: 'Choosing the right model', p: 'Start with how you will use it, then compare specifications, warranty and the delivered price including GST. If a model you want is not listed, tell us the details and we will check availability and freight.' },
    { h2: 'Warranty and support', p: 'The manufacturer warranty applies to new products, and the conditions are provided with your order. Ask us about servicing, spare parts and accessories before you buy so there are no surprises later.' },
    { h2: 'Delivery and payment', p: 'We deliver Australia-wide, free over $1,000 and a flat $95 below that. You can pay by bank transfer (Osko or EFT) or PayID, or choose Bitcoin or USDT for an extra 10% off at checkout.' },
    { h2: 'Talk to our team', p: 'Our Sydney team can compare models, confirm fitment and quote freight. Call 0420 128 746, message us on WhatsApp or email sales@buggiesforsale.com.au and we will reply as quickly as we can.' },
  ],
};
const adviceFamily = (url: string) => (/^\/golf-buggies\//.test(url) ? 'buggies' : /^\/golf-carts\/|^\/clearance\//.test(url) ? 'carts' : /^\/off-road-buggies\//.test(url) ? 'offroad' : /^\/parts-accessories\//.test(url) ? 'parts' : 'brands');
const countPhrase = (text: string, phrase: string) => { const T = toks(text), P = toks(phrase); let n = 0; for (let i = 0; i + P.length <= T.length; i++) if (P.every((p, j) => T[i + j] === p)) n++; return n; };

function dilute(page: SitePage, c: PageCopy & { fallback: boolean }): PageCopy & { fallback: boolean } {
  const kw = page.primary?.keyword;
  if (!kw) return c;
  const body = (cc: PageCopy) => [cc.intro.join(' '), ...cc.guides.flatMap((g) => g.p), ...cc.faqs.map((f) => f[1])].join(' ');
  const density = (cc: PageCopy) => { const t = body(cc); const w = t.split(/\s+/).filter(Boolean).length; return (countPhrase(t, kw) * 100) / Math.max(w, 1); };
  let out = c; const pool = [...ADVICE[adviceFamily(page.url)]];
  while (density(out) > 1.3 && pool.length) { const a = pool.shift()!; out = { ...out, guides: [...out.guides, { h2: a.h2, p: [a.p] }] }; }
  return out;
}

export function copyFor(page: SitePage, products: Product[]): PageCopy & { fallback: boolean } {
  return dilute(page, weave(page, baseCopy(page, products)));
}

function baseCopy(page: SitePage, products: Product[]): PageCopy & { fallback: boolean } {
  const c = COPY[page.url];
  if (c) return { ...c, fallback: false };
  const name = page.name.replace(/ \(Hub\)$/, '');
  const primary = page.primary?.keyword || name.toLowerCase();
  const prices = products.map((p) => p.price).sort((a, b) => a - b);
  const range = prices.length ? `from ${money(prices[0])} to ${money(prices[prices.length - 1])}` : '';
  if (page.level === 'brand') {
    const brand = name.replace(/ Buggies$/, '');
    const n = products.length;
    return {
      fallback: true,
      intro: n
        ? [`Shop ${brand} online in Australia. We list ${n} ${brand} product${n === 1 ? '' : 's'} ${range}.`, `Every order ships Australia-wide with free delivery over $1,000. Compare specifications below, or message us if you need help choosing the right ${brand} model for your cart or course.`]
        : [`Looking for ${primary}? ${brand} is one of the brands Australian buyers ask us about. We do not list a ${brand} model online yet, but we can check availability and quote you.`, 'Tell us the model you want and your location, and we will confirm price, stock and delivery. In the meantime, browse our related ranges below.'],
      guides: [{ h2: `Before you buy ${brand}`, p: ['Check compatibility with your cart or course, confirm warranty terms and ask about delivery to your postcode. Our team can answer questions on 0420 128 746.'] }],
      faqs: BRAND_FAQ(brand),
    };
  }
  const isParts = /parts-accessories/.test(page.url);
  return {
    fallback: true,
    intro: [
      `Shop ${primary} at ${SITE.name}${range ? `, with ${products.length} option${products.length === 1 ? '' : 's'} ${range}` : ''}. Free delivery over $1,000.`,
      `Delivery is Australia-wide, free over $1,000. ${isParts ? 'Check compatibility with your cart or buggy model before ordering, and message us if you are unsure.' : 'Compare specifications below, or contact us for help choosing.'}`,
    ],
    guides: [{ h2: `Choosing ${name.toLowerCase()}`, p: ['Compare price, specifications and warranty. Check the delivered cost, not just the sticker price.', 'If you cannot find what you need, tell us and we will source it.'] }],
    faqs: [
      [`Where can I buy ${primary} in Australia?`, `You can buy ${primary} online from ${SITE.name} with Australia-wide delivery.`],
      ['Do prices include GST?', 'Yes. All prices are in Australian dollars and include 10% GST.'],
      ['How much is delivery?', 'Free over $1,000 to major metro and depot corridors, otherwise a flat $95 freight fee.'],
      ['Is there a warranty?', 'The manufacturer warranty applies. Details come with your order confirmation.'],
      ['Can you help me choose?', 'Yes. Call 0420 128 746 or message us on WhatsApp.'],
    ],
  };
}

export const descFor = (page: SitePage, intro: string) => {
  let base = intro.replace(/s+/g, ' ');
  const kw = page.primary?.keyword;
  if (kw && !hasPhrase(base, kw)) base = cap(kw) + ': ' + base;
  const tail = ' Free delivery over $1,000 across Australia.';
  return clampDesc(base.length < 112 ? base + tail : base);
};
