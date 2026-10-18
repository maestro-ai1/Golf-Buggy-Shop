import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  typescript: { ignoreBuildErrors: false },
  // Product, hero and blog images are pre-optimised (AVIF + WebP, square white, <=150KB) and served from /public via <picture>.
  images: { unoptimized: true },
  transpilePackages: ['motion'],
  async headers() {
    return [
      { source: '/products/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/blog/:file(.+\\.webp)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    ];
  },
};

export default nextConfig;
