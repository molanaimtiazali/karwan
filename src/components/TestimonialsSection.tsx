import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS } from '../data/pilgrimageData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#fbfaf5] text-slate-800 border-b border-amber-900/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800 font-sans mb-1 flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-emerald-700" />
            <span>Honest Reflections from Blessed Zaireen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-emerald-950 mb-2">
            Pilgrim Testimonials & Experiences
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read heartfelt reflections from families, elders, and young zaireen who traveled with Karwan-e-Sada-e-Najaf to the sacred sanctuaries of Iraq, Iran, and the Holy Land of Hijaz.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-amber-900/15 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              {/* Quote Mark Watermark */}
              <div className="absolute top-6 right-6 text-emerald-900/10 pointer-events-none">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              <div className="space-y-4">
                {/* 5-Star Rating & Pilgrimage Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {t.pilgrimage} · {t.year}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-emerald-950 text-base">
                    {t.name}
                  </div>
                  {t.urduName && (
                    <div className="text-amber-800 text-sm font-bold">
                      {t.urduName}
                    </div>
                  )}
                  <div className="text-xs text-slate-500 mt-0.5">
                    {t.city}, {t.country} · {t.travelGroup}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-700 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Zaer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video feedback reminder */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Want to speak directly to a past pilgrim from your city (Karachi, Lahore, Islamabad, Multan, or Quetta) before booking? Call our helpline at <a href="tel:+923148681093" className="text-emerald-800 font-bold underline">0314-8681093</a> and we will gladly connect you.
        </div>
      </div>
    </section>
  );
};
