import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, ChevronDown, Menu, X, Sparkles, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../data/pilgrimageData';

interface HeaderProps {
  currency: 'PKR' | 'USD';
  onToggleCurrency: () => void;
  onOpenRegisterModal: (preselectedPackageId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onToggleCurrency,
  onOpenRegisterModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#042016]/95 backdrop-blur-md border-b border-amber-600/30 text-amber-50">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#021710] border-b border-amber-900/40 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-emerald-200/90">
            <span className="text-amber-400 font-bold tracking-wide">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="hidden sm:inline text-amber-500/40">|</span>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-amber-300 transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-medium px-2 py-0.5 rounded transition-colors"
                aria-label="Call phones"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>Call Numbers</span>
                <ChevronDown className="w-3 h-3 text-amber-400/80" />
              </button>

              {callDropdownOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-56 bg-[#042419] border border-amber-500/30 rounded-lg shadow-xl p-2 z-50 text-xs"
                  onMouseLeave={() => setCallDropdownOpen(false)}
                >
                  <div className="px-2 py-1 text-[11px] uppercase tracking-wider text-amber-400/70 border-b border-emerald-800/60 font-semibold">
                    Direct Contact Lines
                  </div>
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.clean}`}
                      className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-emerald-900/40 text-amber-100 hover:text-amber-300 transition-colors"
                      onClick={() => setCallDropdownOpen(false)}
                    >
                      <span className="font-mono">{phone.number}</span>
                      <span className="text-[10px] text-emerald-300/80">{phone.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <span className="text-amber-500/40">|</span>

            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>

            <span className="text-amber-500/40">|</span>

            {/* Currency Switcher */}
            <button
              onClick={onToggleCurrency}
              className="flex items-center gap-1 text-[11px] font-semibold tracking-wider text-amber-400 hover:text-amber-300 transition-colors px-1.5 py-0.5 rounded hover:bg-emerald-900/30"
              title="Click to toggle PKR / USD"
            >
              <Globe className="w-3 h-3 text-amber-400/80" />
              <span>{currency}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Following strict Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single Brand element - Large, bold, simple style */}
          <a href="#" className="flex flex-col whitespace-nowrap shrink-0 group">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-amber-400 group-hover:text-amber-300 transition-colors">
              {CONTACT_INFO.agencyName}
            </span>
            <span className="text-sm sm:text-base text-emerald-300 font-bold tracking-wider group-hover:text-emerald-200 transition-colors">
              {CONTACT_INFO.agencyUrdu}
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-amber-100/90">
            <a href="#destinations" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Destinations
            </a>
            <a href="#packages" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Packages
            </a>
            <a href="#folders" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Media Folders
            </a>
            <a href="#leadership" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Leadership
            </a>
            <a href="#reviews" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Pilgrim Reviews
            </a>
            <a href="#checklist" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Checklist & FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phones[0].clean}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-200 hover:text-white border border-emerald-700/60 rounded-md hover:bg-emerald-900/50 transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenRegisterModal()}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 rounded-md hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-950/40 transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-emerald-950" />
              <span>Inquire / Register</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-amber-200 hover:text-white rounded-md hover:bg-emerald-900/40"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#021710] border-b border-amber-600/30 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-emerald-800/40">
            <a
              href={`tel:${CONTACT_INFO.phones[0].clean}`}
              className="flex items-center justify-center gap-2 py-2 px-3 bg-emerald-950/80 border border-emerald-700/50 rounded-lg text-xs font-semibold text-emerald-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Now</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-[#0d3f28] border border-emerald-600/50 rounded-lg text-xs font-semibold text-emerald-200"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="space-y-1 text-sm font-medium text-amber-100">
            <a
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-900/30 hover:text-amber-300"
            >
              Destinations (Iraq, Umrah, Iran)
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-900/30 hover:text-amber-300"
            >
              Upcoming Packages & Dates
            </a>
            <a
              href="#folders"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-900/30 hover:text-amber-300"
            >
              Past Trip Media Folders
            </a>
            <a
              href="#leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-900/30 hover:text-amber-300"
            >
              About Zulfiqar Ali & Leadership
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-900/30 hover:text-amber-300"
            >
              Pilgrim Reviews & Experiences
            </a>
            <a
              href="#checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-900/30 hover:text-amber-300"
            >
              Preparation Checklist & FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-900/30 hover:text-amber-300"
            >
              Contact & Registration Form
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegisterModal();
              }}
              className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold rounded-lg text-sm shadow text-center"
            >
              Register for Ziyarat Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
