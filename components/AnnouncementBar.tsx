'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, Phone, ShieldCheck, Zap } from 'lucide-react';
import { SITE, CONTACT, SHOP } from '@/config/site';

export function AnnouncementBar() {
  return (
    <div className="bg-[#07172C] text-slate-200 text-[11px] py-1.5 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
        {/* Left: Free Freight & Promo */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-semibold text-white">
            <Truck className="w-3.5 h-3.5 text-[#D32F2F]" />
            <span>FREE AUSTRALIA-WIDE FREIGHT ON ORDERS OVER ${SHOP.freeShippingThreshold.toLocaleString()} AUD</span>
          </span>
          <span className="hidden md:inline-block text-slate-500">|</span>
          <span className="hidden md:inline-flex items-center gap-1 text-amber-400 font-medium">
            <Zap className="w-3 h-3" />
            <span>Pay with Crypto & Save 5% Instantly</span>
          </span>
        </div>

        {/* Right: Phone, Support, ABN */}
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <a
            href={`tel:${CONTACT.phoneInternational}`}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-[#D32F2F]" />
            <span className="font-bold">{CONTACT.phone}</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-slate-400">
            ABN: {CONTACT.abn}
          </span>
          <span className="text-slate-600 hidden lg:inline">|</span>
          <Link href="/delivery" className="hidden lg:inline hover:text-white">
            Delivery Areas
          </Link>
          <Link href="/contact" className="hidden lg:inline hover:text-white">
            Support Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
