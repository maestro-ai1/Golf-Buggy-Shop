import { PAGES, childrenOf } from '@/config/site';

export interface NavItem { name: string; url: string; children?: NavItem[] }
const clean = (n: string) => n.replace(/ \(Hub\)$/, '').replace(/ \(LOW DEMAND\)$/, '');
const short: Record<string, string> = {
  'Golf Buggies For Sale - Locations': 'Locations & Delivery',
  'Motorised / Electric Golf Buggies': 'Electric Golf Buggies',
  'Push & Pull Golf Buggies / Trolleys': 'Push & Pull Buggies',
  'Golf Caddies & Electric Trolleys': 'Caddies & Trolleys',
  'Ride-On / Seated Golf Buggies': 'Ride-On Buggies',
  'Utility Carts & 4-Seater Golf Carts': 'Utility & 4-Seater Carts',
  'Used & Second-Hand Golf Carts': 'Used Golf Carts',
  'Mini & Junior Golf Carts': 'Mini & Junior Carts',
  'Electric Off-Road Buggies & UTVs': 'Electric Off-Road & UTVs',
  'Side-by-Sides (SSV) & UTVs': 'Side-by-Sides & UTVs',
  'Mini Quads & Small ATVs': 'Mini Quads & ATVs',
  'Youth & Kids Buggies': 'Kids Buggies',
  'Phone, Umbrella & Drink Holders': 'Phone, Umbrella & Drink Holders',
  'Golf Buggy Bags, Rain Covers & Eskies': 'Bags, Covers & Eskies',
  'Battery Chargers & Conversion Kits': 'Chargers & Conversion Kits',
  'Replacement Engines & Carburetors': 'Engines & Carburetors',
  'Off-Road Parts & Upgrades': 'Off-Road Parts',
  'Golf Buggy Repairs & Servicing': 'Repairs & Servicing',
  'Cheap & Clearance Golf Carts': 'Clearance & Cheap Carts',
  'Off-Road & Recreational Buggies': 'Off-Road Buggies',
};
const label = (n: string) => short[clean(n)] || clean(n);
const item = (name: string, depth = 1): NavItem => {
  const p = PAGES.find((x) => x.name === name)!;
  const kids = depth > 0 ? childrenOf(p.name).filter((c) => !c.lowDemand) : [];
  return { name: label(p.name), url: p.url, children: kids.length ? kids.map((k) => item(k.name, depth - 1)) : undefined };
};

export function buildNav(): NavItem[] {
  const brandKids = PAGES.filter((p) => p.level === 'brand').map((p) => ({ name: clean(p.name).replace(/ Buggies$/, ''), url: p.url }));
  return [
    { ...item('Golf Buggies (Hub)'), name: 'Golf Buggies' },
    { ...item('Golf Carts (Hub)'), name: 'Golf Carts' },
    { ...item('Off-Road & Recreational Buggies'), name: 'Off-Road' },
    { ...item('Parts & Accessories', 2), name: 'Parts & Accessories' },
    { name: 'Brands', url: '/brands/', children: brandKids },
    { name: 'Clearance', url: '/clearance/' },
    { name: 'Blog', url: '/blog/' },
  ];
}
export { label as navLabel };
