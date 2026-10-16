import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data/pilgrimageData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02150e] text-amber-100 border-t border-amber-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-amber-400 block tracking-tight">
                {CONTACT_INFO.agencyName}
              </span>
              <span className="text-sm sm:text-base text-emerald-300 font-bold block mt-0.5">
                {CONTACT_INFO.agencyUrdu}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              Dedicated religious pilgrimage organization providing premier Ziyarat journeys to Iraq, Iran, and Executive Umrah under the dedicated leadership of Zulfiqar Ali.
            </p>
            <div className="text-xs text-amber-300/80 font-bold pt-1">
              اَللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَآلِ مُحَمَّدٍ
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Najaf Ashraf</a></li>
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Karbala Moalla</a></li>
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Kazmain & Samarra</a></li>
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Makkah & Madinah</a></li>
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Mashhad & Qom</a></li>
            </ul>
          </div>

          {/* Caravan Features */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Zaer Services
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li><a href="#packages" className="hover:text-amber-300 transition-colors">Upcoming Ziyarat Packages</a></li>
              <li><a href="#leadership" className="hover:text-amber-300 transition-colors">Caravan Guidance by Zulfiqar Ali</a></li>
              <li><a href="#folders" className="hover:text-amber-300 transition-colors">Trip Photo & Video Folders</a></li>
              <li><a href="#checklist" className="hover:text-amber-300 transition-colors">Pilgrim Checklist & Ziyarat Duas</a></li>
              <li><a href="#reviews" className="hover:text-amber-300 transition-colors">Pilgrim Feedback & Reviews</a></li>
            </ul>
          </div>

          {/* Direct Contact Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Direct Contact Lines
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-200/90">
              {CONTACT_INFO.phones.map((p, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <a href={`tel:${p.clean}`} className="font-mono hover:text-white transition-colors">
                    {p.number}
                  </a>
                  <span className="text-[10px] text-emerald-400/70">({p.label})</span>
                </div>
              ))}

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.officeAddress}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Karwan-e-Sada-e-Najaf (کاروانِ صدائے نجف). All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-emerald-400">
              <span>Service to Zaireen with devotion</span>
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-amber-400 hover:text-white transition-colors p-1"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
