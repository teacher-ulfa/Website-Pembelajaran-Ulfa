import React from 'react';
import { GalleryItem } from '../types';
import { X, Calendar, Users, Tag, Image as ImageIcon, ExternalLink, CheckCircle2 } from 'lucide-react';

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  item,
  onClose
}) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-7 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase flex-wrap">
              <span>{item.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{item.classGrade}</span>
              {item.imageUrl && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Dokumentasi Otentik SMANIKRE</span>
                  </span>
                </>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Tutup jendela galeri"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Box (Photo/Video Visual) */}
        <div className="w-full h-80 sm:h-[460px] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center relative shadow-inner">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          ) : (
            /* Styled CSS Fallback Container with domain SVG (Zero-Broken-Image Policy) */
            <div className={`w-full h-full bg-gradient-to-tr ${item.accentColor} flex flex-col items-center justify-center text-white p-6 text-center space-y-3`}>
              <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white shadow-inner">
                <ImageIcon className="w-8 h-8 opacity-90" />
              </div>
              <div className="space-y-1 max-w-md">
                <p className="text-xs uppercase tracking-widest text-emerald-200 font-semibold">
                  Dokumentasi Pembelajaran PAI
                </p>
                <p className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-white/80">
                  {item.classGrade} · {item.date}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Metadata Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Tanggal Pelaksanaan: <strong className="text-slate-800">{item.date}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Sasaran Peserta Didik: <strong className="text-slate-800">{item.classGrade}</strong></span>
          </div>
        </div>

        {/* Narrative Description */}
        <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Ulasan Kegiatan &amp; Capaian Karakter
          </h4>
          <p>{item.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
          <Tag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {item.tags.map((tag, idx) => (
            <span key={idx} className="text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Note & Actions */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
          {item.imageUrl ? (
            <a
              href={item.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Buka Foto Ukuran Asli</span>
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Tutup Tampilan
          </button>
        </div>
      </div>
    </div>
  );
};
