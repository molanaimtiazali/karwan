import React, { useState } from 'react';
import { MapPin, Clock, Building2, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { DESTINATIONS, DestinationItem } from '../data/pilgrimageData';

interface DestinationsFolderProps {
  onSelectDestinationForInquiry: (destinationName: string) => void;
}

export const DestinationsFolder: React.FC<DestinationsFolderProps> = ({
  onSelectDestinationForInquiry
}) => {
  const [activeTab, setActiveTab] = useState<'iraq' | 'umrah' | 'iran'>('iraq');
  const [selectedDestination, setSelectedDestination] = useState<DestinationItem | null>(null);

  const currentList = DESTINATIONS[activeTab];

  return (
    <section id="destinations" className="py-20 bg-[#fbfaf6] text-slate-800 border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 font-sans mb-1 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-emerald-700" />
            <span>Sacred Sanctuaries & Holy Cities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-emerald-950 mb-3">
            Holy Destinations & Ziyarat Circuits
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Explore the historical shrines, blessed sanctuaries, and sacred maqams in Iraq, Saudi Arabia, and Iran. Every circuit is planned with optimal pacing, walking-distance accommodations, and comprehensive theological accompaniment.
          </p>
        </div>

        {/* Tab Controls (Functional Buttons with Segmented Background) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-emerald-950/5 border border-emerald-900/15 rounded-xl mb-10 w-fit">
          <button
            onClick={() => setActiveTab('iraq')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'iraq'
                ? 'bg-emerald-900 text-amber-200 shadow-sm'
                : 'text-slate-700 hover:text-emerald-900 hover:bg-emerald-900/10'
            }`}
          >
            <span>Iraq</span>
            <span className="text-[11px] opacity-75 font-mono">4 Cities</span>
          </button>

          <button
            onClick={() => setActiveTab('umrah')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'umrah'
                ? 'bg-emerald-900 text-amber-200 shadow-sm'
                : 'text-slate-700 hover:text-emerald-900 hover:bg-emerald-900/10'
            }`}
          >
            <span>Saudi Arabia (Umrah)</span>
            <span className="text-[11px] opacity-75 font-mono">Makkah & Madinah</span>
          </button>

          <button
            onClick={() => setActiveTab('iran')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'iran'
                ? 'bg-emerald-900 text-amber-200 shadow-sm'
                : 'text-slate-700 hover:text-emerald-900 hover:bg-emerald-900/10'
            }`}
          >
            <span>Iran</span>
            <span className="text-[11px] opacity-75 font-mono">Mashhad & Qom</span>
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentList.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl border border-amber-900/15 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Card Image Header */}
              <div className="relative h-60 w-full overflow-hidden bg-emerald-950">
                <img
                  src={dest.image}
                  alt={`${dest.name} sacred pilgrimage destination`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Text overlays on photo */}
                <div className="absolute top-4 right-4 bg-emerald-950/85 backdrop-blur-sm border border-amber-400/30 px-3 py-1 rounded text-right">
                  <span className="text-amber-300 text-sm font-bold block">
                    {dest.arabicName}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-amber-300 font-semibold tracking-wide uppercase">
                    {dest.country} · {dest.city}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="p-3.5 bg-emerald-50/70 border border-emerald-900/10 rounded-xl space-y-1">
                    <div className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">
                      Spiritual Significance
                    </div>
                    <div className="text-xs text-slate-700 italic">
                      "{dest.significance}"
                    </div>
                  </div>

                  {/* Proximity & Duration Badges (unboxed clean metadata) */}
                  <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-100 text-xs">
                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400 block text-[11px]">Hotel Proximity</span>
                        <span className="font-medium text-slate-800">{dest.hotelProximity}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400 block text-[11px]">Recommended Stay</span>
                        <span className="font-medium text-slate-800 tabular-nums">{dest.recommendedDays} Days / Nights</span>
                      </div>
                    </div>
                  </div>

                  {/* Sacred Landmarks */}
                  <div>
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Sacred Landmarks & Maqams
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.landmarks.map((landmark, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 bg-slate-100/90 text-slate-700 rounded-md font-medium"
                        >
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group py-1"
                  >
                    <span>View Itinerary Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectDestinationForInquiry(dest.name)}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                  >
                    Inquire for {dest.city}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-900/20 shadow-2xl">
            <div className="relative h-56 w-full">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="font-arabic text-amber-300 text-lg font-bold block mb-1">
                  {selectedDestination.arabicName}
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  {selectedDestination.name} ({selectedDestination.country})
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-sm font-semibold uppercase text-emerald-900 mb-1">
                  Spiritual Overview & Pilgrimage Context
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedDestination.description}
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1">
                  Historical & Spiritual Merits
                </h4>
                <p className="text-sm text-emerald-900 italic">
                  "{selectedDestination.significance}"
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase text-emerald-900 mb-2">
                  All Included Ziyarats & Sacred Stations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDestination.landmarks.map((lm, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 p-2 bg-slate-50 rounded-lg border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{lm}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500">
                  Accompanied by Zulfiqar Ali & religious scholars
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedDestination(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const name = selectedDestination.name;
                      setSelectedDestination(null);
                      onSelectDestinationForInquiry(name);
                    }}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow"
                  >
                    Register for {selectedDestination.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
