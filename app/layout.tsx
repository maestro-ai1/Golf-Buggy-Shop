import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ChatHub } from '@/components/ChatHub';
import { SITE, CONTACT } from '@/config/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: 'Buggies For Sale Australia | Off-Road UTVs, Golf Carts & Parts',
    template: `%s | ${SITE.name}`,
  },
  description:
    'Australia’s premier online store for off-road buggies for sale, 4x4 UTVs, electric and remote golf buggies, youth go-karts, parts, and accessories with nationwide freight.',
  keywords: [
    'buggies for sale',
    'golf buggies for sale',
    'off road buggies for sale',
    'side by side buggies australia',
    'kids buggies for sale australia',
    'electric golf buggy',
    'remote control golf buggy',
    'utv for sale australia',
  ],
  authors: [{ name: SITE.name, url: `https://${SITE.domain}` }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  alternates: {
    canonical: `https://${SITE.domain}/`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: `https://${SITE.domain}/`,
    siteName: SITE.name,
    title: 'Buggies For Sale Australia | Off-Road UTVs, Golf Carts & Parts',
    description:
      'Buy off-road buggies, 4x4 side-by-sides, motorized golf buggies, and youth go-karts online in Australia. Nationwide tailgate delivery and local warranty.',
    images: [
      {
        url: 'https://picsum.photos/seed/buggies-for-sale-australia-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'Buggies For Sale Australia — Off-Road, Golf and UTV Superstore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buggies For Sale Australia | Off-Road, Golf & UTV Superstore',
    description:
      'Shop 4x4 UTVs, dune buggies, remote golf carts, and lithium parts with Australia-wide delivery.',
    images: ['https://picsum.photos/seed/buggies-for-sale-australia-og/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
    'google-site-verification': SITE.gscVerification,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script src="/js/webmcp.js" defer></script>
      </head>
      <body className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#1A1A1A] antialiased selection:bg-[#E65F2B] selection:text-white">
        <CartProvider>
          {/* Top Announcement Bar */}
          <AnnouncementBar />

          {/* Sticky Nav with Mega Menu */}
          <Nav />

          {/* Main content landmark */}
          <main id="main" className="flex-1">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Interactive Drawers and Hubs */}
          <CartDrawer />
          <ChatHub />
        </CartProvider>
      </body>
    </html>
  );
}
