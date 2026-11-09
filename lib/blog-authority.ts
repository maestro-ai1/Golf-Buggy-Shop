import type { BlogPost } from '@/config/site';

// Every guide carries at least two high-authority outbound links. Posts that already link out in their text keep those links; where a post has fewer
// than two, a short "Further reading" list adds topic-matched references (each URL was checked and returns 200). Wikipedia, government and standards sites only.
export interface Authority { url: string; label: string }

const A = {
  golfEquipment: { url: 'https://en.wikipedia.org/wiki/Golf_equipment', label: 'Golf equipment overview (Wikipedia)' },
  caddie: { url: 'https://en.wikipedia.org/wiki/Caddie', label: 'What a golf caddie does (Wikipedia)' },
  golfCart: { url: 'https://en.wikipedia.org/wiki/Golf_cart', label: 'Golf cart overview (Wikipedia)' },
  deepCycle: { url: 'https://en.wikipedia.org/wiki/Deep-cycle_battery', label: 'Deep-cycle batteries explained (Wikipedia)' },
  lfp: { url: 'https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery', label: 'Lithium iron phosphate batteries (Wikipedia)' },
  leadAcid: { url: 'https://en.wikipedia.org/wiki/Lead%E2%80%93acid_battery', label: 'Lead-acid batteries explained (Wikipedia)' },
  lithiumIon: { url: 'https://en.wikipedia.org/wiki/Lithium-ion_battery', label: 'Lithium-ion batteries (Wikipedia)' },
  dune: { url: 'https://en.wikipedia.org/wiki/Dune_buggy', label: 'Dune buggies (Wikipedia)' },
  atv: { url: 'https://en.wikipedia.org/wiki/All-terrain_vehicle', label: 'All-terrain vehicles (Wikipedia)' },
  utv: { url: 'https://en.wikipedia.org/wiki/Utility_terrain_vehicle', label: 'Utility terrain vehicles (Wikipedia)' },
  goKart: { url: 'https://en.wikipedia.org/wiki/Go-kart', label: 'Go karts (Wikipedia)' },
  trailer: { url: 'https://en.wikipedia.org/wiki/Trailer_(vehicle)', label: 'Vehicle trailers (Wikipedia)' },
  quadSafety: { url: 'https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes', label: 'Quad bike safety (Safe Work Australia)' },
  productSafety: { url: 'https://www.productsafety.gov.au/', label: 'Product safety (Australian Government)' },
  secondHand: { url: 'https://www.fairtrading.nsw.gov.au/buying-products-and-services/second-hand-goods', label: 'Buying second-hand goods (NSW Fair Trading)' },
} satisfies Record<string, Authority>;

const FAMILIES: [RegExp, Authority[]][] = [
  [/used|2nd|second hand|second-hand|refurb/, [A.secondHand, A.golfCart, A.deepCycle]],
  [/battery|batteries|lithium|volt|charger/, [A.lfp, A.deepCycle, A.leadAcid, A.lithiumIon]],
  [/kid|child|youth/, [A.productSafety, A.goKart, A.atv]],
  [/trailer|trailering|ramp|tow/, [A.trailer, A.golfCart, A.quadSafety]],
  [/go kart|go-kart|kart|drift/, [A.goKart, A.quadSafety, A.atv]],
  [/beach|dune|dirt|150cc|offroad|off-road|off road|trailmaster|side by side|side-by-side|utv|atv|quad|farm|4x4/, [A.quadSafety, A.dune, A.utv, A.atv]],
  [/golf cart|golf car|electric cart|single seat|cart/, [A.golfCart, A.golfEquipment, A.deepCycle]],
  [/trolley|caddy|caddie|push|scooter|buggy/, [A.golfEquipment, A.caddie, A.golfCart]],
];
const FALLBACK = [A.golfCart, A.golfEquipment, A.caddie];

const linked = (content: string[]) => new Set([...content.join(' ').matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]).filter((u) => !/wa\.me/.test(u)));

export function furtherReading(post: BlogPost): Authority[] {
  const have = linked(post.content);
  const need = Math.max(0, 2 - have.size);
  if (!need) return [];
  const text = `${post.slug} ${post.title} ${post.targetKeyword} ${(post.tags || []).join(' ')}`.toLowerCase();
  const pool: Authority[] = [];
  for (const [re, list] of FAMILIES) if (re.test(text)) for (const a of list) if (!pool.includes(a)) pool.push(a);
  for (const a of FALLBACK) if (!pool.includes(a)) pool.push(a);
  return pool.filter((a) => !have.has(a.url)).slice(0, need);
}
