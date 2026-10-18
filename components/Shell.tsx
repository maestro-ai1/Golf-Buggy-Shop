'use client';

import { useState } from 'react';
import { CartProvider } from '@/lib/cart';
import Header from '@/components/Header';
import SearchModal from '@/components/SearchModal';
import CartDrawer from '@/components/CartDrawer';
import ChatHub from '@/components/ChatHub';
import type { NavItem } from '@/lib/nav';

export default function Shell({ nav, top, footer, children }: { nav: NavItem[]; top: React.ReactNode; footer: React.ReactNode; children: React.ReactNode }) {
  const [search, setSearch] = useState(false);
  return (
    <CartProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold">Skip to content</a>
      {top}
      <Header nav={nav} onSearch={() => setSearch(true)} />
      <main id="main">{children}</main>
      {footer}
      <SearchModal open={search} onClose={() => setSearch(false)} />
      <CartDrawer />
      <ChatHub />
    </CartProvider>
  );
}
