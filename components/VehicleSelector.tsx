'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wrench, ArrowRight, Check } from 'lucide-react';
import { POPULAR_MAKES } from '@/config/site';

export function VehicleSelector() {
  const router = useRouter();
  const [selectedMake, setSelectedMake] = useState(POPULAR_MAKES[0].id);
  const [selectedModel, setSelectedModel] = useState(POPULAR_MAKES[0].models[0]);

  const currentMakeObj = POPULAR_MAKES.find((m) => m.id === selectedMake) || POPULAR_MAKES[0];

  const handleMakeChange = (makeId: string) => {
    setSelectedMake(makeId);
    const mObj = POPULAR_MAKES.find((m) => m.id === makeId);
    if (mObj && mObj.models.length > 0) {
      setSelectedModel(mObj.models[0]);
    }
  };

  const handleSearchVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/shop?q=${encodeURIComponent(selectedModel)}`);
  };

  return (
    <div className="bg-[#0B2545] border-b-4 border-[#D32F2F] text-white py-6 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearchVehicle}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D32F2F] flex items-center justify-center shrink-0 shadow">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-wider text-white">
                SELECT YOUR CART TO FIND EXACT FIT PARTS
              </div>
              <div className="text-xs text-slate-300">
                Guaranteed fitment for Club Car, E-Z-GO, Yamaha, Polaris & MGI
              </div>
            </div>
          </div>

          {/* Selectors Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-1 max-w-2xl">
            {/* Make */}
            <div className="w-full sm:w-1/2">
              <label className="text-[10px] uppercase font-bold text-slate-300 block mb-1">
                1. Select Make
              </label>
              <select
                value={selectedMake}
                onChange={(e) => handleMakeChange(e.target.value)}
                className="w-full bg-white text-slate-900 px-3 py-2 text-xs font-bold rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
              >
                {POPULAR_MAKES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Model */}
            <div className="w-full sm:w-1/2">
              <label className="text-[10px] uppercase font-bold text-slate-300 block mb-1">
                2. Select Model / Year
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-white text-slate-900 px-3 py-2 text-xs font-bold rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
              >
                {currentMakeObj.models.map((mod) => (
                  <option key={mod} value={mod}>
                    {mod}
                  </option>
                ))}
              </select>
            </div>

            {/* Go Button */}
            <div className="w-full sm:w-auto pt-4 sm:pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-black text-xs uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-colors shadow"
              >
                <span>Find Parts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
