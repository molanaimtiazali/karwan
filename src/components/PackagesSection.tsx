import React, { useState } from 'react';
import { Calendar, Clock, Check, Utensils, Bus, FileText, Building, Users, Sparkles, ArrowRight } from 'lucide-react';
import { PACKAGES, ZiyaratPackage } from '../data/pilgrimageData';

interface PackagesSectionProps {
  currency: 'PKR' | 'USD';
  onBookPackage: (pkg: ZiyaratPackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  currency,
  onBookPackage
}) => {
  const [filter, setFilter] = useState<'all' | 'iraq' | 'umrah' | 'iran' | 'combined'>('all');
  const [activeItineraryPackage, setActiveItineraryPackage] = useState<ZiyaratPackage | null>(null);

  const filteredPackages = PACKAGES.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const formatPrice = (pkg: ZiyaratPackage) => {
    if (currency === 'PKR') {
      return `Rs. ${pkg.pricePKR.toLocaleString('en-PK')}`;
    }
    return `$${pkg.priceUSD.toLocaleString('en-US')}`;
  };

  return (
    <section id="packages" className="py-20 bg-[#021811] text-amber-50 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 font-sans mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Confirmed Groups & Schedules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              Upcoming Ziyarat Packages
            </h2>
            <p className="text-emerald-200/80 text-sm sm:text-base leading-relaxed">
              Transparent all-inclusive rates covering certified airlines, group visas, air-conditioned transport, Pakistani halal meals, and personal leadership by Zulfiqar Ali.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#042419] border border-amber-500/25 rounded-xl self-start">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-amber-200/80 hover:text-white hover:bg-emerald-900/40'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setFilter('iraq')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'iraq'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-amber-200/80 hover:text-white hover:bg-emerald-900/40'
              }`}
            >
              Iraq
            </button>
            <button
              onClick={() => setFilter('umrah')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'umrah'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-amber-200/80 hover:text-white hover:bg-emerald-900/40'
              }`}
            >
              Executive Umrah
            </button>
            <button
              onClick={() => setFilter('iran')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'iran'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-amber-200/80 hover:text-white hover:bg-emerald-900/40'
              }`}
            >
              Iran
            </button>
            <button
              onClick={() => setFilter('combined')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'combined'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-amber-200/80 hover:text-white hover:bg-emerald-900/40'
              }`}
            >
              Combined Tour
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#042419] rounded-2xl border border-amber-500/25 overflow-hidden shadow-lg hover:border-amber-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Package Top Header */}
                <div className="p-6 border-b border-emerald-900/60 bg-[#031d14]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-amber-400 text-sm block font-bold mb-1">
                        {pkg.arabicTitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-emerald-300/80 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>{pkg.durationDays} Days / {pkg.durationDays - 1} Nights</span>
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>{pkg.departureDates}</span>
                        </span>
                      </div>
                    </div>

                    {/* Price Block */}
                    <div className="text-right shrink-0 bg-emerald-950/90 border border-amber-500/30 px-3.5 py-2 rounded-xl">
                      <div className="text-[11px] text-amber-300/80 uppercase tracking-wider font-bold">
                        Per Person
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 tabular-nums">
                        {formatPrice(pkg)}
                      </div>
                      <div className="text-[10px] text-emerald-300/70">
                        All-Inclusive (Flights & Visa)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotels & Distance Highlight */}
                <div className="px-6 py-4 bg-[#052b1e]/60 border-b border-emerald-900/60">
                  <div className="text-xs font-semibold text-amber-300 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-amber-400" />
                    <span>Verified Hotels Close to Harams</span>
                  </div>
                  <div className="space-y-1.5">
                    {pkg.hotels.map((hotel, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center justify-between text-xs text-emerald-100/90 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/40"
                      >
                        <span className="font-medium">{hotel.city}: {hotel.hotelName}</span>
                        <span className="text-amber-300 font-medium text-[11px]">{hotel.distanceToHaram}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Inclusions (Hotels, Transport, Visa, Food) */}
                <div className="p-6 space-y-4">
                  <div className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
                    Full Package Inclusions
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 text-emerald-100">
                      <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Group Visas & Document Clearances</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-100">
                      <Utensils className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>3 Hot Pakistani Buffet Meals Daily</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-100">
                      <Bus className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>VIP Luxury AC Transportation</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-100">
                      <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Led by Zulfiqar Ali & Religious Scholars</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-emerald-900/60">
                    <div className="text-xs text-emerald-300/80 mb-2">Highlights:</div>
                    <ul className="space-y-1 text-xs text-emerald-100/90">
                      {pkg.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Actions */}
              <div className="p-6 pt-3 border-t border-emerald-900/60 bg-[#031d14] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveItineraryPackage(pkg)}
                  className="text-xs font-medium text-amber-300 hover:text-white underline underline-offset-4 py-1"
                >
                  View Day-by-Day Schedule &rarr;
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-emerald-300/70 font-mono">
                    Only {pkg.seatsLeft} seats left
                  </span>
                  <button
                    onClick={() => onBookPackage(pkg)}
                    className="px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold rounded-lg text-xs hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Inquire / Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Day-by-Day Itinerary Modal */}
      {activeItineraryPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#032418] text-amber-50 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-amber-500/30 shadow-2xl p-6 space-y-6">
            <div className="flex items-start justify-between border-b border-emerald-800 pb-4">
              <div>
                <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase block">
                  Detailed Day-by-Day Schedule
                </span>
                <h3 className="text-2xl font-black text-white">
                  {activeItineraryPackage.title}
                </h3>
                <div className="text-xs text-emerald-300 mt-1">
                  {activeItineraryPackage.durationDays} Days · {activeItineraryPackage.departureDates}
                </div>
              </div>
              <button
                onClick={() => setActiveItineraryPackage(null)}
                className="w-8 h-8 rounded-full bg-emerald-900/60 text-amber-300 flex items-center justify-center hover:bg-emerald-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {activeItineraryPackage.itinerary.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#042d1f] rounded-xl border border-emerald-800/70 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                      {step.day}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed pt-1">
                    {step.activities}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-emerald-950/70 border border-amber-500/20 rounded-xl text-xs space-y-1 text-emerald-200">
              <div className="font-bold text-amber-300">Important Note on Itinerary:</div>
              <div>
                All timings are planned in synchronization with congregational prayers at the holy shrines. Spiritual lectures and Majalis led by Zulfiqar Ali and esteemed scholars take place every evening.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-emerald-800">
              <button
                onClick={() => setActiveItineraryPackage(null)}
                className="px-4 py-2 text-xs text-emerald-300 hover:text-white rounded-lg"
              >
                Close Schedule
              </button>
              <button
                onClick={() => {
                  const pkg = activeItineraryPackage;
                  setActiveItineraryPackage(null);
                  onBookPackage(pkg);
                }}
                className="px-5 py-2.5 bg-amber-400 text-slate-950 font-bold rounded-lg text-xs hover:bg-amber-300 shadow"
              >
                Proceed to Register for This Package
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
