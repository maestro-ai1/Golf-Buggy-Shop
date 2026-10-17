import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
  Lock,
  Truck,
  CreditCard,
  Zap,
} from 'lucide-react';
import { SITE, CONTACT, CATEGORIES } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F4F1EA] pt-16 pb-12 border-t-4 border-[#E65F2B]">
      {/* Top Value Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#2D2A26]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#24211E] border border-[#332E29]">
            <Truck className="w-6 h-6 text-[#E65F2B] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Australia-Wide Delivery</h4>
              <p className="text-xs text-stone-400 mt-1">
                Insured freight with hydraulic tailgate delivery direct to your property.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#24211E] border border-[#332E29]">
            <ShieldCheck className="w-6 h-6 text-[#E65F2B] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">42-Point PDI Inspection</h4>
              <p className="text-xs text-stone-400 mt-1">
                Tested by certified Australian mechanics before crating & dispatch.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#24211E] border border-[#332E29]">
            <Lock className="w-6 h-6 text-[#E65F2B] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Direct & Crypto Options</h4>
              <p className="text-xs text-stone-400 mt-1">
                Direct EFT, PayID instant settlement, or save 5% with BTC/USDT.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#24211E] border border-[#332E29]">
            <Star className="w-6 h-6 text-[#E65F2B] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">4.9 / 5 Verified Rating</h4>
              <p className="text-xs text-stone-400 mt-1">
                Over 1,000+ verified Australian customer deliveries since 2023.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded bg-forest text-white flex items-center justify-center font-black text-base">
                BFS
              </div>
              <span className="font-black text-xl text-white uppercase tracking-tight">
                Buggies For Sale
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Australia’s premier heavy-duty superstore for off-road UTVs, dune buggies, remote control golf buggies, youth go-karts, and genuine performance parts with nationwide depot dispatch.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div>
                <strong>Warehouse Hub:</strong> Sydney & Regional Freight Depots
              </div>
            </div>
          </div>

          {/* Column 2: Shop Categories */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-sand mb-4">
              Shop Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300 font-medium">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/shop/${cat.slug}`}
                    className="hover:text-sand transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care & Info */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-sand mb-4">
              Customer Care & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300 font-medium">
              <li>
                <Link href="/delivery" className="hover:text-sand transition-colors">
                  Australia-Wide Delivery & Freight
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-sand transition-colors">
                  Returns, Refunds & Warranty
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-sand transition-colors">
                  Frequently Asked Questions (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-sand mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <a
                href={`tel:${CONTACT.phoneInternational}`}
                className="flex items-center gap-2 hover:text-sand transition-colors"
              >
                <Phone className="w-4 h-4 text-sand shrink-0" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-sand transition-colors"
              >
                <Mail className="w-4 h-4 text-sand shrink-0" />
                <span>{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-sand shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#2D2A26] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
        <div>
          © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
