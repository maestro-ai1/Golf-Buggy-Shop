import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  typescript: { ignoreBuildErrors: false },
  // Product, hero and blog images are pre-optimised (AVIF + WebP, square white, <=150KB) and served from /public via <picture>.
  images: { unoptimized: true },
  transpilePackages: ['motion'],
  // Markdown for Agents: requests that ask for text/markdown get a Markdown version of the page; browsers keep getting HTML.
  async rewrites() {
    return { beforeFiles: [{ source: '/:slug((?!api/|_next/|.well-known/)[^.]*)', has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }], destination: '/api/md/:slug' }, { source: '/', has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }], destination: '/api/md/' }] };
  },
  async headers() {
    return [
      // Content-Security-Policy: everything is first-party (no third-party scripts, fonts or images). Inline script/style are needed by Next.js.
      { source: '/:path*', headers: [{ key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'" }] },
      { source: '/products/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/blog/:file(.+\\.webp)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    ];
  },
};

export default nextConfig;
