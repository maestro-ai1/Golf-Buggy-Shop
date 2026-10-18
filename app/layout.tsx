import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Shell from '@/components/Shell';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/Bits';
import { buildNav } from '@/lib/nav';
import { orgSchema, siteSchema } from '@/lib/seo';
import { SITE } from '@/config/site';

const outfit = Outfit({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'], variable: '--font-outfit', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0F3D2E' };
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Golf Buggies, Golf Carts & Off-Road Buggies for Sale Australia | Buggies For Sale', template: '%s | Buggies For Sale' },
  description: 'Buy golf buggies, electric and remote control buggies, golf carts, lithium batteries and off-road buggies online in Australia. Prices set 2% below the market, free delivery over $1,000.',
  verification: { google: SITE.gscVerification },
  other: { 'indexnow-key': SITE.indexNowKey },
  applicationName: SITE.name,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const nav = buildNav();
  return (
    <html lang="en-AU" className={`${outfit.variable} ${inter.variable}`}>
      <head><JsonLd data={[orgSchema(), siteSchema()]} /><script src="/js/webmcp.js" defer /></head>
      <body>
        <Shell nav={nav} top={<AnnouncementBar />} footer={<Footer />}>{children}</Shell>
      </body>
    </html>
  );
}
