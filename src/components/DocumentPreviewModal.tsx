import React, { useState } from 'react';
import { DocumentItem } from '../types';
import { 
  X, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Calendar, 
  Layers, 
  GraduationCap, 
  Info,
  ShieldCheck 
} from 'lucide-react';

interface DocumentPreviewModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentPreviewModal: React.FC<DocumentPreviewModalProps> = ({
  document,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!document) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(document.downloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                {document.categoryLabel} · {document.fase}
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {document.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Tutup jendela pratinjau"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metadata Details (Clean unboxed typography) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block">Tingkat Kelas</span>
            <span className="font-semibold text-slate-800">{document.kelas}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Semester</span>
            <span className="font-semibold text-slate-800">{document.semester}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Format &amp; Ukuran</span>
            <span className="font-semibold text-slate-800 font-mono">{document.fileFormat} · {document.fileSize}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Pembaruan</span>
            <span className="font-semibold text-slate-800">{document.lastUpdated}</span>
          </div>
        </div>

        {/* Deskripsi Dokumen */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Deskripsi &amp; Cakupan Materi
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {document.description}
          </p>
        </div>

        {/* Tujuan / Capaian Pembelajaran */}
        {document.learningObjectives && document.learningObjectives.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span>Capaian / Tujuan Pembelajaran Utama</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {document.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Box Tautan Google Drive (Jelas untuk guru) */}
        <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Tautan Dokumen Asli (Google Drive / Cloud)</span>
            </div>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 hover:text-emerald-950 bg-white px-2 py-1 rounded border border-emerald-300"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Tersalin!' : 'Salin Tautan'}</span>
            </button>
          </div>
          <p className="text-xs font-mono text-emerald-950/80 break-all bg-white/80 p-2 rounded border border-emerald-100">
            {document.downloadUrl}
          </p>
          <p className="text-[11px] text-emerald-800 italic">
            * Catatan Guru: Tautan ini dapat diganti di file data `src/data/mockData.ts` dengan link Google Drive file asli Anda.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Tutup Pratinjau
          </button>
          <a
            href={document.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Unduh / Buka Dokumen Asli</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
          </a>
        </div>

      </div>
    </div>
  );
};
