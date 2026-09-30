import React, { useState } from 'react';
import { GalleryItem, GalleryCategory } from '../types';
import { Camera, Calendar, ArrowUpRight, Sparkles, Image as ImageIcon, Video } from 'lucide-react';

interface DokumentasiGaleriProps {
  items: GalleryItem[];
  onOpenLightbox: (item: GalleryItem) => void;
}

export const DokumentasiGaleri: React.FC<DokumentasiGaleriProps> = ({
  items,
  onOpenLightbox
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: `Semua Dokumentasi (${items.length})` },
    { id: 'masjid', label: `🕌 Kegiatan Masjid (${items.filter(i => i.category === 'masjid').length})` },
    { id: 'kbm', label: `Kegiatan Belajar (${items.filter(i => i.category === 'kbm').length})` },
    { id: 'ibadah', label: `Pembiasaan Ibadah (${items.filter(i => i.category === 'ibadah').length})` },
    { id: 'p5_ppra', label: `Proyek P5 / MB (${items.filter(i => i.category === 'p5_ppra').length})` },
    { id: 'karya_siswa', label: `Karya Siswa (${items.filter(i => i.category === 'karya_siswa').length})` }
  ];

  const filteredItems = items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const authenticCount = items.filter(i => Boolean(i.imageUrl)).length;

  return (
    <section id="dokumentasi" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>DOKUMENTASI KBM &amp; APRESIASI KARYA</span>
              <span aria-hidden="true">·</span>
              <span>SMAN 1 KREMBUNG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Galeri Kegiatan Pembelajaran &amp; Pembiasaan Religius
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Publikasi dokumentasi foto otentik implementasi Pembelajaran Mendalam (PM), Kurikulum Berbasis Cinta (KBC), 
              Moderasi Beragama (MB), serta kegiatan peribadatan dan kajian kerohanian di masjid sekolah bersama siswa-siswi SMA Negeri 1 Krembung.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-200/70 rounded-xl scrollbar-none self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Authentic Photos Banner */}
        <div className="p-4 sm:p-5 bg-emerald-950 text-white rounded-2xl border border-emerald-900 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-700">
              Dokumentasi Foto Nyata SMANIKRE
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Potret Langsung Aktivitas Kelas &amp; Kegiatan di Masjid SMAN 1 Krembung
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Menampilkan kegiatan diskusi kelompok nalar kritis (PM), pendampingan penuh kasih sayang (KBC), pembiasaan karakter wasathiyah (MB), hingga tadarus, sholat berjama\'ah, dan bimbingan keputrian di masjid sekolah.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-emerald-200 font-mono bg-emerald-900/60 px-3 py-1 rounded-lg border border-emerald-700/60">
              {authenticCount} Foto Otentik Terverifikasi (KBM &amp; Masjid)
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Media Thumbnail Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  /* Styled CSS/SVG Visual Fallback Frame (Zero-Broken-Image Policy) */
                  <div className={`w-full h-full bg-gradient-to-tr ${item.accentColor} flex flex-col items-center justify-center p-6 text-white text-center group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center mb-2">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-200">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-white/80 font-mono mt-0.5">
                      {item.classGrade}
                    </span>
                  </div>
                )}

                {/* Top overlay category badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md backdrop-blur-xs ${
                    item.category === 'masjid' 
                      ? 'bg-emerald-900/90 text-emerald-100 ring-1 ring-emerald-400/50' 
                      : 'bg-slate-900/80 text-white'
                  }`}>
                    {item.category === 'masjid' ? '🕌 ' + item.categoryLabel : item.categoryLabel}
                  </span>
                  {item.imageUrl && (
                    <span className="bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Foto Otentik</span>
                    </span>
                  )}
                </div>

                {/* Hover trigger hint */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-slate-700">{item.classGrade}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Tag & Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold group-hover:underline inline-flex items-center gap-1">
                    <span>Lihat Dokumentasi Lengkap</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    {item.tags[0] || 'PAI'}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
