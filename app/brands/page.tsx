import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE, PRODUCTS } from '@/config/site';
import { ArrowRight, ShieldCheck, Award, Star, Truck, Check } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { VehicleSelector } from '@/components/VehicleSelector';

export const metadata: Metadata = {
  title: 'Buggy Brands Australia | Polaris, MGI, Can-Am & Club Car',
  description:
    'Explore leading off-road and golf buggy brands in Australia. Authorized retailer for MGI Golf, Polaris, Club Car, Motocaddy, and Segway with local warranty.',
  alternates: {
    canonical: `https://${SITE.domain}/brands/`,
  },
};

const BRANDS = [
  {
    name: 'MGI Golf',
    origin: 'Australian Designed & Engineered',
    badge: 'Fairway Caddy Leader',
    description:
      'Pioneers of patented Gyroscope Straight-Tracker technology and compact zip-fold motorised caddies engineered for undulating Australian fairways.',
    popularModels: ['MGI Zip Navigator AT', 'MGI Zip X3', 'MGI Quad Co-Pilot'],
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
    categoryLink: '/shop/golf-buggies',
  },
  {
    name: 'Club Car',
    origin: 'Augusta, Georgia / Global Fairway Standard',
    badge: 'Estate & Resort Luxury',
    description:
      'Renowned for corrosion-proof AlumiCore aluminium chassis, whisper-quiet lithium electric drivetrains, and unmatched luxury ride comfort.',
    popularModels: ['Tempo Lithium 2-Seater', 'Onward 4-Passenger', 'Carryall 500'],
    image: 'https://images.unsplash.com/photo-1593111774642-a164b711d95a?auto=format&fit=crop&w=800&q=80',
    categoryLink: '/shop/golf-buggies',
  },
  {
    name: 'Polaris & Apex Class',
    origin: 'Heavy-Duty 4x4 Off-Road Workhorses',
    badge: 'Commercial Ag & Trail',
    description:
      'Engineered for grueling station acreage and outback trails. High towing capacities, selectable 4WD diff locks, and heavy steel cargo dump beds.',
    popularModels: ['Apex 1000 Pro EPS', 'Ranger 1000', 'RZR Trail S'],
    image: 'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
    categoryLink: '/shop/off-road',
  },
  {
    name: 'Motocaddy',
    origin: 'United Kingdom / Global Tech Leader',
    badge: 'Touchscreen GPS Tech',
    description:
      'Award-winning electric golf buggies featuring integrated sunlight-readable touchscreen GPS units displaying over 40,000 worldwide golf courses.',
    popularModels: ['Motocaddy M7 GPS', 'M5 GPS DHC', 'S1 Electric'],
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    categoryLink: '/shop/golf-buggies',
  },
  {
    name: 'Segway Powersports & CFMOTO',
    origin: 'Smart Telemetry & Adrenaline',
    badge: 'Next-Gen Value',
    description:
      'Smartphone app telemetry, emergency rollover SOS messaging, and high-displacement EFI engines delivering incredible dollar-for-power ratios.',
    popularModels: ['Villain SX10', 'Fugleman UT10', 'UFORCE 1000'],
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    categoryLink: '/shop/off-road',
  },
  {
    name: 'Torq & Sandstorm Racing',
    origin: 'Recreational Trail & Youth Fun',
    badge: 'Family & Dune Buggies',
    description:
      'Specialised go-karts and youth buggies fitted with parent remote wireless engine kill fobs, speed limiters, and full roll cages.',
    popularModels: ['Sandstorm 200cc Buggy', 'Torq Junior 110cc', 'Torq 150cc Pro'],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    categoryLink: '/shop/off-road',
  },
];

export default function BrandsPage() {
  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://${SITE.domain}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Brand Hub',
        item: `https://${SITE.domain}/brands/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbsSchema} />
      <VehicleSelector />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-500 font-mono mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold">Brand Hub</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Authorized Australian Retailer
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight uppercase mt-1">
              Buggy Brand Hub Australia
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
              Every brand we stock is backed by local Australian spare parts support, full factory warranty, and technical mechanic service.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={brand.image}
                      alt={`${brand.name} Australia`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#D32F2F] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow">
                      {brand.badge}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="text-[11px] font-mono text-slate-500">
                      {brand.origin}
                    </div>
                    <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-tight group-hover:text-[#D32F2F] transition-colors">
                      {brand.name}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {brand.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                        Featured Lineup:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {brand.popularModels.map((m) => (
                          <span
                            key={m}
                            className="text-[10px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-mono"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={brand.categoryLink}
                    className="w-full py-2.5 px-4 rounded bg-[#0B2545] hover:bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
                  >
                    <span>View {brand.name} Buggies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
