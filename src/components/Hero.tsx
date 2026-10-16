import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Users, HeartHandshake, ArrowRight, MessageCircle, Play, Pause, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { CONTACT_INFO, HERO_SLIDES } from '../data/pilgrimageData';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="relative overflow-hidden bg-[#032015] text-amber-50">
      {/* Background Animated Motion Visual Carousel */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center">
        {/* Layered Cross-Fading Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlideIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`${slide.title} - ${slide.city}`}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out brightness-110 contrast-105 saturate-110 ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
            );
          })}

          {/* Ultra-light, crystal-clear gradient scrim allowing the holy sanctuary photos to shine bright and vivid */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#021710]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/45 via-black/15 to-transparent max-w-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 w-full">
          <div className="max-w-3xl space-y-5 p-6 sm:p-8 rounded-3xl bg-black/40 backdrop-blur-[4px] border border-amber-400/25 shadow-2xl">
            {/* Spiritual Calligraphy Kicker */}
            {/* Karwan Name Prominent, Large, Simple and Bold */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/85 border border-amber-500/40 text-xs text-amber-300 font-bold uppercase tracking-wider">
                <span>Official Pilgrimage Caravan</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-400 tracking-tight leading-none pt-1">
                Karwan-e-Sada-e-Najaf
              </h1>
              <div className="text-2xl sm:text-3xl text-emerald-200 font-bold tracking-wide">
                کاروانِ صدائے نجف
              </div>
            </div>

            {/* Sub-headline with simple bold font */}
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug"
              style={{ textWrap: 'balance' }}
            >
              Sacred Journeys of Faith & Devotion to Iraq, Iran & Umrah
            </h2>

            {/* Motion Live Slide Information Banner */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-amber-400/35 backdrop-blur-md max-w-xl transition-all">
              <div className="flex items-center justify-between gap-3 text-xs text-amber-300 mb-1">
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
                  <span>Viewing Holy Sanctuary:</span>
                </span>
                <span className="font-bold text-sm text-amber-300">
                  {activeSlide.arabicTitle}
                </span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                {activeSlide.title}
              </div>
              <div className="text-xs text-emerald-100/90 mt-0.5">
                {activeSlide.caption}
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
              Specialized pilgrimage packages for <strong className="text-amber-300 font-semibold">Iraq</strong>, <strong className="text-amber-300 font-semibold">Iran</strong>, and <strong className="text-amber-300 font-semibold">Executive Umrah</strong>. Travel with complete peace of mind, luxury hotels near the Harams, and personal guidance under <strong className="text-amber-300 font-semibold">Zulfiqar Ali</strong>.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#packages"
                className="px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-bold text-sm sm:text-base rounded-lg shadow-lg shadow-amber-900/40 hover:from-amber-300 hover:to-yellow-300 transition-all flex items-center gap-2 group"
              >
                <span>Explore Ziyarat Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 font-semibold text-sm sm:text-base rounded-lg border border-emerald-600/60 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>WhatsApp Direct Consultation</span>
              </a>

              <button
                onClick={onOpenRegister}
                className="px-5 py-3.5 text-amber-300 hover:text-white text-sm font-semibold hover:underline underline-offset-4 transition-colors"
              >
                Register Online &rarr;
              </button>
            </div>

            {/* Quick banner notice */}
            <div className="pt-2 text-xs text-amber-200/75 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Group Visas, Walking-Distance Star Hotels & 3-Time Authentic Pakistani Meals Included.</span>
            </div>
          </div>

          {/* Interactive Slide Switcher & Motion Controls (Bottom Bar of Hero) */}
          <div className="mt-10 pt-4 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
            {/* Quick Holy Sanctuary Switcher Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-amber-400/80 font-semibold mr-1 hidden sm:inline">
                Holy Sanctuaries:
              </span>
              {HERO_SLIDES.map((slide, sIdx) => {
                const isActive = sIdx === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setCurrentSlideIndex(sIdx);
                      setIsPlaying(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-950/50 scale-105'
                        : 'bg-emerald-950/70 border border-emerald-800/60 text-emerald-200/90 hover:text-white hover:bg-emerald-900/70'
                    }`}
                  >
                    <span>{slide.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* Slide Navigation & Play/Pause Controls */}
            <div className="flex items-center gap-2 bg-[#021810]/80 border border-amber-500/30 rounded-xl px-2.5 py-1">
              <button
                onClick={prevSlide}
                className="p-1.5 text-amber-300 hover:text-white rounded hover:bg-emerald-900/60 transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 text-amber-400 hover:text-white rounded hover:bg-emerald-900/60 transition-colors flex items-center gap-1 text-[11px] font-mono"
                title={isPlaying ? 'Pause Motion Carousel' : 'Play Motion Carousel'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isPlaying ? 'Auto-Rotating' : 'Paused'}</span>
              </button>

              <button
                onClick={nextSlide}
                className="p-1.5 text-amber-300 hover:text-white rounded hover:bg-emerald-900/60 transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="text-[11px] font-mono text-emerald-300/80 ml-1">
                {currentSlideIndex + 1}/{HERO_SLIDES.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Proof Strip in a Full-Width Row Below the Hero */}
      <div className="border-t border-amber-600/30 bg-[#02150e]/95 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/60 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-amber-400 tabular-nums">
                12,000+
              </div>
              <div className="text-xs text-emerald-200/80">
                Blessed Zaireen Facilitated
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/60 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-amber-400 tabular-nums">
                18+ Years
              </div>
              <div className="text-xs text-emerald-200/80">
                Caravan Leadership & Trust
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/60 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-amber-400">
                150m - 250m
              </div>
              <div className="text-xs text-emerald-200/80">
                Average Distance to Shrines
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/60 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-amber-400">
                100% Scholarly
              </div>
              <div className="text-xs text-emerald-200/80">
                Daily Aamal & Majalis Classes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
