import React, { useState } from 'react';
import { Folder, Image as ImageIcon, Video, Eye, X, ZoomIn, Share2, Sparkles, MapPin } from 'lucide-react';
import { GALLERY_FOLDERS } from '../data/pilgrimageData';

export const GallerySection: React.FC = () => {
  const [activeFolderId, setActiveFolderId] = useState<string>('karbala');
  const [lightboxPhoto, setLightboxPhoto] = useState<{
    title: string;
    subtitle: string;
    category: string;
    image: string;
    year: string;
  } | null>(null);

  const activeFolder = GALLERY_FOLDERS.find((f) => f.id === activeFolderId) || GALLERY_FOLDERS[0];

  return (
    <section id="folders" className="py-20 bg-[#032418] text-amber-50 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 font-sans mb-1 flex items-center gap-1.5">
            <Folder className="w-4 h-4 text-amber-400" />
            <span>Past Pilgrimage Archives & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
            Ziyarat Media Folders
          </h2>
          <p className="text-emerald-200/80 text-sm sm:text-base leading-relaxed">
            Browse authentic photographs and group memories captured during our past caravans across Najaf, Karbala, Kazmain, Makkah, and Madinah under the leadership of Zulfiqar Ali.
          </p>
        </div>

        {/* Tabbed Media Folders Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {GALLERY_FOLDERS.map((folder) => {
            const isSelected = folder.id === activeFolderId;
            return (
              <button
                key={folder.id}
                onClick={() => setActiveFolderId(folder.id)}
                className={`p-4 rounded-xl text-left border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#063725] border-amber-400/80 shadow-lg text-white'
                    : 'bg-[#021c13] border-emerald-900/60 hover:bg-[#042d1f] hover:border-amber-400/40 text-emerald-200/80'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                    <div className="bg-amber-400 text-slate-950 transform rotate-45 translate-x-3 -translate-y-1 w-10 text-[9px] font-bold text-center">
                      ★
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <Folder className={`w-5 h-5 ${isSelected ? 'text-amber-400' : 'text-emerald-500'}`} />
                  <span className="text-[11px] font-mono text-amber-300/80">
                    {folder.photoCount} Files
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading line-clamp-1">
                    {folder.name.replace(' Archive', '')}
                  </h4>
                  <div className="text-[11px] text-emerald-300/70 truncate flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{folder.location}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Folder Header */}
        <div className="p-4 bg-[#021810] rounded-xl border border-emerald-800/60 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/60 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-amber-400 uppercase tracking-wide">
                Current Folder: {activeFolder.location}
              </div>
              <h3 className="text-lg font-black text-white">
                {activeFolder.name} ({activeFolder.arabicName})
              </h3>
            </div>
          </div>

          <div className="text-xs text-emerald-300/80 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Click any photo to view full resolution with historical description</span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeFolder.photos.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxPhoto(item)}
              className="group bg-[#042419] rounded-2xl border border-emerald-900/70 overflow-hidden cursor-pointer hover:border-amber-400/60 transition-all shadow-md flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono text-amber-300 border border-white/10">
                  {item.year}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1">
                    {item.category}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-emerald-200/80 line-clamp-1 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover zoom icon */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-emerald-950/70 border border-amber-400/30 flex items-center justify-center text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="p-3 bg-[#021810] border-t border-emerald-900/50 flex items-center justify-between text-xs text-emerald-300/80">
                <span>Karwan-e-Sada-e-Najaf Archives</span>
                <span className="text-amber-400 hover:text-white flex items-center gap-1 font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Archive Callout Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#031d14] to-[#04281b] border border-amber-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-heading text-white">
                Recorded Majalis & Ziyarat Recitations
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
                Listen to recorded sermons, masaeb recitations, and du’a ceremonies by scholars delivered in Karbala and Najaf during our caravans.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/923148681093?text=Salam%20Zulfiqar%20Ali%20Sahab,%20please%20share%20the%20video%20and%20audio%20recordings%20of%20past%20Ziyarat%20tours."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-900/80 hover:bg-emerald-800 text-amber-300 hover:text-white rounded-lg text-xs font-semibold border border-emerald-700/60 whitespace-nowrap transition-colors"
          >
            Request Full Video Archives
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[#032015] border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxPhoto.image}
                alt={lightboxPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#021710] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-0.5">
                  {lightboxPhoto.category} · Season {lightboxPhoto.year}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {lightboxPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
                  {lightboxPhoto.subtitle}
                </p>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Photo details copied to clipboard!');
                }}
                className="px-3.5 py-2 bg-emerald-950 border border-amber-500/30 rounded-lg text-xs text-amber-300 hover:text-white flex items-center gap-1.5 shrink-0"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Photo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
