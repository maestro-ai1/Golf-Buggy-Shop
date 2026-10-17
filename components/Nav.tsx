'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Phone,
  ChevronDown,
  Truck,
  ShieldCheck,
  Zap,
  Wrench,
  MessageCircle,
} from 'lucide-react';
import { useCart } from '@/lib/cart';
import { SITE, CONTACT, CATEGORIES, POPULAR_MAKES } from '@/config/site';
import { SearchModal } from './SearchModal';

export function Nav() {
  const router = useRouter();
  const { totalCount, subtotal, setIsOpen: openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [makeDropdownOpen, setMakeDropdownOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/shop');
    }
  };

  return (
    <>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        {/* Top Slider - Placeholder for future revolutionary slider */}
        <div className="bg-navy text-white text-[10px] py-1 text-center font-mono uppercase tracking-widest">
           Australia’s Premier Buggy, Golf Cart & Parts Superstore
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((o) => !o)}
                className="lg:hidden p-2 rounded text-navy hover:text-forest hover:bg-slate-100"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open mobile menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded bg-navy text-white flex items-center justify-center font-black tracking-tighter text-lg border-2 border-forest shadow-sm">
                  BFS
                </div>
                <div>
                  <span className="font-black text-xl sm:text-2xl tracking-tight text-navy uppercase block leading-none">
                    BUGGIES<span className="text-forest">FORSALE</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                    Australia’s Buggy Superstore
                  </span>
                </div>
              </Link>
            </div>

            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex flex-1 max-w-2xl items-center border-2 border-navy rounded-md overflow-hidden bg-white shadow-inner"
            >
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-forest hover:bg-forest/90 text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <button
                type="button"
                onClick={() => openCart(true)}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-colors text-left group"
                aria-label={`View Cart`}
              >
                <div className="relative">
                  <ShoppingBag className="w-6 h-6 text-navy group-hover:text-forest transition-colors" />
                  {totalCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-forest text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center font-mono border-2 border-white shadow">
                      {totalCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:block text-xs">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block -mb-0.5">My Cart</span>
                  <span className="font-mono font-bold text-forest">
                    {SITE.currencySymbol}{subtotal.toLocaleString()}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <nav className="bg-navy text-white hidden lg:block border-t border-navy/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <div
                className="relative"
                onMouseEnter={() => setMakeDropdownOpen(true)}
                onMouseLeave={() => setMakeDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="py-3 px-4 bg-forest text-white flex items-center gap-1.5 hover:bg-forest/90 transition-colors"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Shop by Cart Make</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {makeDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-900 border border-slate-200 shadow-xl rounded-b-md p-3 space-y-2 z-50 normal-case">
                    {POPULAR_MAKES.map((make) => (
                      <Link
                        key={make.id}
                        href={`/shop?q=${encodeURIComponent(make.name)}`}
                        onClick={() => setMakeDropdownOpen(false)}
                        className="font-bold text-xs text-navy hover:text-forest block py-1"
                      >
                        {make.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Link href="/shop/golf-buggies" className="py-3 px-3 hover:bg-navy/80 transition-colors">Golf Buggies</Link>
                <Link href="/shop/off-road" className="py-3 px-3 hover:bg-navy/80 transition-colors">Off-Road UTVs</Link>
                <Link href="/shop/parts-accessories" className="py-3 px-3 hover:bg-navy/80 transition-colors">Parts & Tech</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
