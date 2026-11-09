import type { ReactNode } from 'react';
import { meta } from '@/lib/seo';

// The checkout page is a client component, so its metadata lives here. It is blocked in robots.txt and noindex,
// but still gets its own title, description and canonical so it never falls back to the home page copy.
export const metadata = meta({
  title: 'Checkout',
  description: 'Checkout for golf buggies, golf carts and parts. Pay by bank transfer, PayID or crypto. Free delivery over $1,000 to major metro areas and depots.',
  path: '/checkout/',
  noindex: true,
});

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return children;
}
