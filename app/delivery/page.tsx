import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE, CONTACT, SHOP } from '@/config/site';
import { Truck, ShieldCheck, MapPin, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Delivery & Freight Information | Buggies For Sale Australia',
  description:
    'Australia-wide heavy vehicle freight for off-road buggies and golf carts. Hydraulic tailgate transport to Sydney, Brisbane, Melbourne, Adelaide, and regional corridors.',
  alternates: {
    canonical: `https://${SITE.domain}/delivery/`,
  },
};

export default function DeliveryPage() {
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
        name: 'Delivery Information',
        item: `https://${SITE.domain}/delivery/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbsSchema} />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-mono mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold">Delivery & Freight</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Logistics & Nationwide Freight
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] uppercase tracking-tight">
              Delivery Information & Freight Policies
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Australia-wide crated tailgate transport for off-road buggies, golf carts, and lithium conversion battery systems.
            </p>
          </div>

          {/* Core Freight Standards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 shadow-sm">
              <Truck className="w-6 h-6 text-[#D32F2F]" />
              <h3 className="font-bold text-xs uppercase text-[#0B2545]">
                Tailgate Lift Transport
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every vehicle shipment is booked with a hydraulic tailgate loader, ensuring safe lowering straight onto your driveway or depot floor.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#D32F2F]" />
              <h3 className="font-bold text-xs uppercase text-[#0B2545]">
                100% Transit Insured
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full comprehensive marine transit insurance covers every machine against accidental freight damage from crate departure to sign-off.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 shadow-sm">
              <MapPin className="w-6 h-6 text-[#D32F2F]" />
              <h3 className="font-bold text-xs uppercase text-[#0B2545]">
                Regional Depots
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pick up directly from partner logistics freight hubs in Sydney, Melbourne, Brisbane, Adelaide, or Perth to save freight charges.
              </p>
            </div>
          </div>

          {/* Delivery Policy Breakdown */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-tight">
              Detailed Freight Schedules & Thresholds
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="block text-slate-900 font-bold mb-1">
                  1. Dispatch Lead Times
                </strong>
                In-stock machines are pre-delivery inspected, crated, and scheduled with our freight carriers within 24 to 48 business hours from payment receipt.
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="block text-slate-900 font-bold mb-1">
                  2. Free Delivery Eligibility
                </strong>
                Orders exceeding <strong>${SHOP.freeShippingThreshold} AUD</strong> receive free standard depot delivery to major metropolitan hubs (Sydney, Melbourne, Brisbane). Regional and remote delivery may incur a nominal regional carrier surcharge calculated via postcode.
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="block text-slate-900 font-bold mb-1">
                  3. Driveway Access Requirements
                </strong>
                Delivery trucks range from rigid medium vehicles to semi-trailers. The delivery site must have clear, level ground with no overhanging low powerlines or impassable steep mud tracks. If driveway access is obstructed, delivery can be arranged to the nearest local transport depot.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-mono">
                Questions about delivery to your station or property?
              </div>
              <a
                href={`tel:${CONTACT.phoneInternational}`}
                className="px-5 py-2.5 bg-[#0B2545] hover:bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Call Freight Desk {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
