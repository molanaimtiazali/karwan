import React, { useState, useEffect, useRef } from 'react';
import { Award, BookOpen, Heart, Shield, Phone, Mail, Camera, RotateCcw, Upload } from 'lucide-react';
import { CONTACT_INFO } from '../data/pilgrimageData';

export const LeadershipSection: React.FC = () => {
  const [leaderPhoto, setLeaderPhoto] = useState<string>(() => {
    return localStorage.getItem('karwan_leader_photo') || CONTACT_INFO.leaderImage;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('karwan_leader_photo', leaderPhoto);
  }, [leaderPhoto]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setLeaderPhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setLeaderPhoto(CONTACT_INFO.leaderImage);
    localStorage.removeItem('karwan_leader_photo');
  };

  return (
    <section id="leadership" className="py-20 bg-[#fbfaf5] text-slate-800 border-b border-amber-900/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/40 to-emerald-700/40 rounded-3xl blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 bg-emerald-950 aspect-square shadow-xl group">
                <img
                  src={leaderPhoto}
                  alt="Zulfiqar Ali, Leader and Director of Karwan-e-Sada-e-Najaf"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={() => {
                    // Fallback to local high-res portrait if external link or blob fails
                    setLeaderPhoto('/src/assets/images/zulfiqar_ali_leader.jpg');
                  }}
                />

                {/* Quick Photo Upload & Customization Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <p className="text-xs font-semibold text-amber-300">Zulfiqar Ali — Leader Photo</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Picture</span>
                  </button>
                  {leaderPhoto !== CONTACT_INFO.leaderImage && (
                    <button
                      onClick={handleResetPhoto}
                      className="px-2.5 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Original</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                aria-label="Upload leader photo"
              />

              {/* Dignified floating badge */}
              <div className="mt-4 p-3.5 bg-white rounded-xl border border-amber-900/15 shadow-sm text-center">
                <div className="text-2xl font-black text-emerald-950 tracking-tight">
                  {CONTACT_INFO.leader}
                </div>
                <div className="text-lg text-amber-800 font-bold -mt-0.5">
                  {CONTACT_INFO.leaderUrdu}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Caravan Director & Organizer · 18+ Years Pilgrimage Service
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[11px] text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Camera className="w-3 h-3" />
                    <span>Change / Upload Photo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Leadership Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold tracking-wider uppercase text-emerald-800 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Caravan Leadership & Stewardship</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 leading-tight">
                About Karwan-e-Sada-e-Najaf
              </h2>
              <div className="text-base text-amber-800 font-bold">
                زائرینِ آلِ محمد (ص) کی مخلصانہ خدمت ہمارا افتخار ہے
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Founded under the dedicated stewardship of <strong className="text-emerald-950 font-bold">Zulfiqar Ali</strong>, <strong className="font-extrabold text-emerald-950">Karwan-e-Sada-e-Najaf (کاروانِ صدائے نجف)</strong> has guided over 12,000 pilgrims on life-transforming spiritual journeys across Iraq, Iran, and Saudi Arabia.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Unlike commercial tour operators, our caravan is built upon sincere devotion to holy pilgrimage: treating every Zaer as an esteemed guest of the Holy Prophet (P.B.U.H) and the Ahlulbayt (A.S). Zulfiqar Ali personally oversees all ground operations, VIP transportation, walking-distance hotels, and religious scholars who lead daily Aamal and prayers at every sacred threshold.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-amber-900/10 shadow-xs flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-emerald-950 mb-0.5">
                    Daily Aamal & Ahkam Sessions
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Comprehensive step-by-step guidance for Tawaf, Umrah, Kufa, Sahla, and Bain-ul-Haramain rituals.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-900/10 shadow-xs flex items-start gap-3">
                <Heart className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-emerald-950 mb-0.5">
                    Elderly & Family First Care
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Walking-distance hotels, wheelchair escorts, and dedicated medical support for senior zaireen.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-900/10 shadow-xs flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-emerald-950 mb-0.5">
                    Transparent & Honest Operations
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Zero surprise costs. Certified airline tickets, verified hotels, and seamless visa processing.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-900/10 shadow-xs flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-emerald-950 mb-0.5">
                    Pakistani Halal Cuisine
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Three fresh buffet meals cooked daily by dedicated caravan Pakistani chefs during all stays.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Leader Contact Strip */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs">
              <div className="text-slate-500">
                Direct Consultation with Zulfiqar Ali Sahab:
              </div>
              <a
                href={`tel:${CONTACT_INFO.phones[0].clean}`}
                className="inline-flex items-center gap-1.5 font-mono text-emerald-900 font-bold hover:text-emerald-700"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>{CONTACT_INFO.phones[0].number}</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-emerald-900 font-medium hover:text-emerald-700"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-700" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
