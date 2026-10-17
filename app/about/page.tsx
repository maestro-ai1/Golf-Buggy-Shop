import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE, CONTACT, BRAND } from '@/config/site';
import { ShieldCheck, Truck, Award, CheckCircle2, Phone, Mail, ArrowRight, Wrench } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Buggies For Sale Australia | Our Story, Quality & Mission',
  description:
    'Learn about Buggies For Sale Australia. Sydney logistics hub, nationwide heavy tailgate freight, 42-point pre-delivery inspection, and full Australian warranty.',
  alternates: {
    canonical: `https://${SITE.domain}/about/`,
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Buggies For Sale Australia',
    url: `https://${SITE.domain}/about/`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE.name,
      legalName: SITE.legalName,
      foundingDate: BRAND.foundingYear,
      foundingLocation: {
        '@type': 'Place',
        name: BRAND.foundingLocation,
      },
      description: BRAND.description,
      telephone: CONTACT.phone,
      email: CONTACT.email,
    },
  };

  return (
    <>
      <JsonLd data={aboutSchema} />

      <div className="bg-[#F8FAFC] min-h-screen py-10 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-500 font-mono mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold">About Us</span>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Australian Owned & Operated
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] uppercase tracking-tight mt-2">
              About Buggies For Sale Australia
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-4 max-w-3xl">
              Established in {BRAND.foundingYear} in {BRAND.foundingLocation}, Buggies For Sale was founded with one clear ambition: to supply Australian outdoor enthusiasts, agricultural stations, holiday resorts, and golfers with bulletproof buggies engineered for harsh local conditions.
            </p>
          </div>

          {/* Key Facts / Verification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="text-3xl font-black font-mono text-[#D32F2F]">1,000+</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase">Deliveries</div>
              <p className="text-[11px] text-slate-500 mt-1">
                Verified customer deliveries across regional stations, golf clubs, and acreage.
              </p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="text-3xl font-black font-mono text-[#D32F2F]">42-Point</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase">PDI Inspection</div>
              <p className="text-[11px] text-slate-500 mt-1">
                Every unit mechanically signed off by Aussie technicians before crating.
              </p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="text-3xl font-black font-mono text-[#D32F2F]">4.9 / 5</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase">Review Score</div>
              <p className="text-[11px] text-slate-500 mt-1">
                Documented customer satisfaction score on verified feedback platform.
              </p>
            </div>
            <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="text-3xl font-black font-mono text-[#D32F2F]">100%</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase">Parts Backing</div>
              <p className="text-[11px] text-slate-500 mt-1">
                Local stock of lithium batteries, chargers, tyres, and mechanical parts.
              </p>
            </div>
          </div>

          {/* Mission & Quality Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-3 shadow-sm">
              <h2 className="text-lg font-bold text-[#0B2545] uppercase flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D32F2F]" />
                Our Quality Philosophy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Too many imported recreational vehicles fail within months because they are not adapted for Australian heat, red dust, and rough corrugated tracks. We partner exclusively with factory-backed brands including Club Car, MGI Golf, and rugged UTV manufacturers, testing every machine in real-world Australian conditions before offering it to the public.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-3 shadow-sm">
              <h2 className="text-lg font-bold text-[#0B2545] uppercase flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#D32F2F]" />
                Logistics & Tailgate Delivery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Transporting a 400kg to 700kg buggy requires specialized freight. We operate with leading Australian heavy logistics carriers equipped with hydraulic tailgate lifters. Whether you are situated on a rural station in New South Wales or a private fairway villa in Queensland, your buggy is lowered gently to ground level at your delivery address.
              </p>
            </div>
          </div>

          {/* Milestones Timeline */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-[#0B2545] uppercase tracking-tight">
              Company Journey & Growth
            </h2>
            <div className="space-y-4">
              {BRAND.milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <div className="px-3 py-1 bg-[#0B2545] text-white font-mono font-bold text-xs rounded shrink-0">
                    {milestone.year}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed pt-0.5">
                    {milestone.event}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#0B2545] text-white rounded-xl p-8 shadow-md text-center space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-tight">
              Ready to Discuss Your Buggy Requirements?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Our Sydney technical advisors are available Monday to Saturday to guide you through vehicle selection, battery runtimes, and freight logistics.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${CONTACT.phoneInternational}`}
                className="px-6 py-3 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shadow flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CONTACT.phone}</span>
              </a>
              <Link
                href="/shop"
                className="px-6 py-3 bg-white text-[#0B2545] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded transition-colors shadow flex items-center gap-2"
              >
                <span>Browse Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
