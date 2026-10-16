import React, { useState } from 'react';
import { CheckSquare, Square, ChevronDown, ChevronUp, BookMarked, HelpCircle, Heart, Sparkles } from 'lucide-react';
import { FAQS, PREPARATION_CHECKLIST } from '../data/pilgrimageData';

export const PilgrimToolsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'duas' | 'faq'>('checklist');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <section id="checklist" className="py-20 bg-[#021811] text-amber-50 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 font-sans mb-1 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Zaer Essentials & Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-2">
            Pilgrim Guidance & FAQ
          </h2>
          <p className="text-emerald-200/80 text-sm sm:text-base leading-relaxed">
            Essential preparation tools, sacred recitations, and practical questions to assist you before embarking on this journey of a lifetime.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#042419] border border-amber-500/30 rounded-xl mb-10 w-fit">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'checklist'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'text-amber-200/80 hover:text-white hover:bg-emerald-900/40'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Packing Checklist</span>
          </button>

          <button
            onClick={() => setActiveTab('duas')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'duas'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'text-amber-200/80 hover:text-white hover:bg-emerald-900/40'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Ziyarat Etiquettes & Duas</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'faq'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'text-amber-200/80 hover:text-white hover:bg-emerald-900/40'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </button>
        </div>

        {/* Tab 1: Interactive Packing Checklist */}
        {activeTab === 'checklist' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PREPARATION_CHECKLIST.map((category, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-[#042419] rounded-2xl border border-emerald-900/80 p-5 space-y-4"
                >
                  <h4 className="text-sm font-bold font-heading text-amber-300 border-b border-emerald-800 pb-2">
                    {category.category}
                  </h4>
                  <div className="space-y-2.5">
                    {category.items.map((item, iIdx) => {
                      const isChecked = !!checkedItems[item];
                      return (
                        <div
                          key={iIdx}
                          onClick={() => toggleCheck(item)}
                          className="flex items-start gap-2.5 cursor-pointer text-xs group"
                        >
                          <button
                            type="button"
                            className="mt-0.5 text-amber-400 hover:text-amber-300 shrink-0"
                            aria-label={`Toggle ${item}`}
                          >
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Square className="w-4 h-4 text-emerald-600 group-hover:text-amber-400" />
                            )}
                          </button>
                          <span
                            className={`leading-relaxed transition-all ${
                              isChecked
                                ? 'line-through text-emerald-400/60'
                                : 'text-emerald-100 group-hover:text-amber-200'
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl text-xs text-emerald-300/90 flex items-center justify-between">
              <span>
                Tip: Print or bookmark this checklist. Zulfiqar Ali and our operations team conduct a pre-departure orientation in Lahore for all registered pilgrims.
              </span>
              <button
                onClick={() => setCheckedItems({})}
                className="text-amber-400 hover:text-white underline font-semibold ml-4 shrink-0"
              >
                Reset Checklist
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Duas & Spiritual Etiquette */}
        {activeTab === 'duas' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#042419] rounded-2xl border border-emerald-900/80 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-800 pb-2">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Entering Holy Thresholds
                </span>
                <span className="text-xs text-emerald-400 font-mono">Dua Idhn al-Dukhul</span>
              </div>
              <div className="text-right text-xl sm:text-2xl text-amber-300 font-bold leading-loose py-2">
                اللَّهُمَّ إِنِّي وَقَفْتُ عَلَى بَابٍ مِنْ أَبْوَابِ بُيُوتِ نَبِيِّكَ صَلَوَاتُكَ عَلَيْهِ وَآلِهِ، وَقَدْ مَنَعْتَ النَّاسَ أَنْ يَدْخُلُوا إِلَّا بِإِذْنِهِ
              </div>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                <strong>Translation:</strong> "O Allah, I have stood at one of the doors of the houses of Your Prophet, may Your blessings be upon him and his family. I seek permission from You, Your Messenger, and the purified Imams to enter this sacred abode."
              </p>
              <div className="p-3 bg-emerald-950/60 rounded-lg text-xs text-emerald-300 italic">
                Recited before stepping foot inside the courtyard of Imam Ali (A.S), Imam Hussain (A.S), Hazrat Abbas (A.S), or Masjid-e-Nabvi.
              </div>
            </div>

            <div className="bg-[#042419] rounded-2xl border border-emerald-900/80 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-800 pb-2">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Greeting of Loyalty
                </span>
                <span className="text-xs text-emerald-400 font-mono">Ziyarat Waritha Excerpt</span>
              </div>
              <div className="text-right text-xl sm:text-2xl text-amber-300 font-bold leading-loose py-2">
                السَّلاَمُ عَلَيْكَ يَا وَارِثَ آدَمَ صَفْوَةِ اللَّهِ، السَّلاَمُ عَلَيْكَ يَا وَارِثَ نُوحٍ نَبِيِّ اللَّهِ، السَّلاَمُ عَلَيْكَ يَا أَبَا عَبْدِ اللَّهِ
              </div>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                <strong>Translation:</strong> "Peace be upon you, O inheritor of Adam the chosen of Allah! Peace be upon you, O inheritor of Noah the prophet of Allah! Peace be upon you, O Aba Abdillah al-Hussain!"
              </p>
              <div className="p-3 bg-emerald-950/60 rounded-lg text-xs text-emerald-300 italic">
                Recited at the sacred Zarih of Imam Hussain (A.S) in Karbala, led every Shab-e-Juma at Bain-ul-Haramain for our caravan.
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Frequently Asked Questions */}
        {activeTab === 'faq' && (
          <div className="space-y-4 max-w-4xl">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#042419] rounded-xl border border-emerald-900/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-amber-300"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-emerald-100/90 leading-relaxed border-t border-emerald-800/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
