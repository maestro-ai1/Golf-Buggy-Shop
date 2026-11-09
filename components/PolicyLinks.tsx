import Link from 'next/link';

// Contextual links between the information pages (delivery, returns, terms, privacy, cookies, FAQ, wholesale, about, contact), so none is an orphan
// and every one has descriptive anchor text. The current page is left out of its own list.
const LINKS: [string, string][] = [
  ['/delivery/', 'Delivery and freight across Australia'],
  ['/returns/', 'Returns, refunds and warranty'],
  ['/terms/', 'Terms and conditions'],
  ['/privacy/', 'Privacy policy'],
  ['/cookies/', 'Cookie policy'],
  ['/faq/', 'Golf buggy and golf cart FAQs'],
  ['/wholesale/', 'Wholesale and fleet enquiries'],
  ['/about/', 'About Buggies For Sale'],
  ['/contact/', 'Contact our Sydney team'],
  ['/shop/', 'Shop golf buggies, golf carts and parts'],
];

export default function PolicyLinks({ current }: { current: string }) {
  const items = LINKS.filter(([href]) => href !== current);
  return (
    <aside aria-labelledby="helpful-pages" className="mt-12 rounded-2xl border border-line bg-fw-50 p-6">
      <h2 id="helpful-pages" className="font-display text-lg font-extrabold">Helpful pages</h2>
      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {items.map(([href, label]) => <li key={href}><Link href={href} className="font-semibold text-fw-700 underline hover:text-fw-900">{label}</Link></li>)}
      </ul>
    </aside>
  );
}
