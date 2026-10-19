import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Shell from '@/components/Shell';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/Bits';
import { buildNav } from '@/lib/nav';
import { orgSchema, siteSchema } from '@/lib/seo';
import { SITE } from '@/config/site';

// Self-hosted variable fonts: no network call at build time (next/font/google failed on Vercel when Google Fonts was unreachable).
const outfit = localFont({ src: './fonts/outfit-latin-wght-normal.woff2', weight: '100 900', variable: '--font-outfit', display: 'swap' });
const inter = localFont({ src: './fonts/inter-latin-wght-normal.woff2', weight: '100 900', variable: '--font-inter', display: 'swap' });

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0F3D2E' };
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Golf Buggies, Golf Carts & Off-Road Buggies for Sale Australia | Buggies For Sale', template: '%s | Buggies For Sale' },
  description: 'Buy golf buggies, electric and remote control buggies, golf carts, lithium batteries and off-road buggies online in Australia. Free delivery over $1,000.',
  // Google is verified by the HTML file in /public; Bing Webmaster Tools by this meta tag (msvalidate.01).
  verification: { other: { 'msvalidate.01': 'ED04A0517174266DEB977A65D448A32D' } },
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
