import React, { useState, useMemo } from 'react';
import { DocumentItem, DocumentCategory, FaseKurikulum } from '../types';
import { 
  Search, 
  FolderDown, 
  FileText, 
  Download, 
  Eye, 
  LayoutGrid, 
  Table as TableIcon, 
  Filter, 
  CheckCircle,
  Sparkles,
  ExternalLink,
  FolderOpen,
  Presentation
} from 'lucide-react';

interface PerangkatPAIProps {
  documents: DocumentItem[];
  onPreviewDocument: (doc: DocumentItem) => void;
}

export const PerangkatPAI: React.FC<PerangkatPAIProps> = ({
  documents,
  onPreviewDocument
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DocumentCategory>('all');
  const [selectedFase, setSelectedFase] = useState<FaseKurikulum>('Semua');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Filtered documents calculation
  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      const matchSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.kelas.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        selectedCategory === 'all' || 
        doc.category === selectedCategory ||
        (selectedCategory === 'rpm' && (doc.category === 'rpm' || doc.category === 'RPM'));

      const matchFase =
        selectedFase === 'Semua' || doc.fase === selectedFase;

      return matchSearch && matchCategory && matchFase;
    });
  }, [documents, searchQuery, selectedCategory, selectedFase]);

  const categories: { id: DocumentCategory; label: string }[] = [
    { id: 'all', label: 'Semua Dokumen' },
    { id: 'rpm', label: 'RPM (Pembelajaran Mendalam)' },
    { id: 'modul_ajar', label: 'Modul Ajar / RPP' },
    { id: 'lkpd', label: 'LKPD Siswa' },
    { id: 'bahan_tayang', label: 'Bahan Tayang / PPT' },
    { id: 'cp_atp', label: 'Silabus / CP & ATP' },
    { id: 'promes_prota', label: 'Promes & Prota' },
    { id: 'asesmen', label: 'Asesmen & Kisi-kisi' },
    { id: 'p5_ppra', label: 'Modul P5-PPRA' },
  ];

  const fases: FaseKurikulum[] = [
    'Semua',
    'Fase E (Kelas X)',
    'Fase F (Kelas XI)',
    'Fase F (Kelas XII)',
    'Fase E & F (SMA)'
  ];

  const getFormatBadge = (format: string) => {
    switch (format) {
      case 'PDF':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'DOCX':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'PPTX':
        return 'text-amber-800 bg-amber-50 border-amber-300';
      case 'XLSX':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <section id="perangkat" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 uppercase mb-2">
              <span>ADMINISTRASI GURU PAI</span>
              <span aria-hidden="true">·</span>
              <span>KURIKULUM MERDEKA LENGKAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Direktori Perangkat Pembelajaran PAI
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Unduh modul ajar, silabus (CP &amp; ATP), program tahunan, program semester, LKPD, 
              serta kisi-kisi penilaian resmi. Format siap cetak dan mudah disesuaikan.
            </p>
          </div>

          {/* View Mode Toggle Button */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start md:self-auto shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Tampilan Kartu (Grid)"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Kartu</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                viewMode === 'table'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Tampilan Tabel Rapi (Tabel Administrasi)"
            >
              <TableIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Tabel</span>
            </button>
          </div>
        </div>

        {/* Google Drive Repository Banner */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 rounded-2xl text-white shadow-lg border border-emerald-700/60 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-700 text-white rounded-md border border-emerald-500/40">
                  Cloud Repository Resmi
                </span>
                <span className="text-xs text-emerald-300 font-semibold">
                  Google Drive Terpadu PAI SMANIKRE
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Pusat Unduhan Berkas &amp; Arsip Google Drive
              </h3>
              <p className="text-xs text-emerald-100/90 max-w-3xl leading-relaxed">
                Akses instan ke seluruh arsip Google Drive Ibu Ulfatul Husna, S.Ag., M.Pd. Meliputi Rencana Pembelajaran Mendalam (RPM), Modul Ajar, Silabus, LKPD Kelas X &amp; XII, serta Bahan Tayang Slide Presentasi.
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1gx1f_encJGxHOU6cS4Fc7_E7cDGmBuWy?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-950 bg-emerald-300 hover:bg-emerald-200 active:bg-emerald-400 rounded-xl transition-all shadow-md shrink-0 whitespace-nowrap self-start md:self-auto"
            >
              <FolderOpen className="w-4 h-4 text-emerald-900" />
              <span>Buka Folder Utama Drive</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-900 ml-0.5" />
            </a>
          </div>

          {/* Quick Drive Sub-Folders Links */}
          <div className="pt-3 border-t border-emerald-800/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <a
              href="https://drive.google.com/drive/folders/1gOBfvwGowdmTcKy4ZlwyfgXsBy6uu7XH?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-900/60 hover:bg-emerald-850 border border-emerald-700/60 hover:border-emerald-500 rounded-xl transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center shrink-0 text-emerald-300 group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block group-hover:text-emerald-200 truncate">
                    Drive LKPD Kelas X
                  </span>
                  <span className="text-[10px] text-emerald-300/80 block">Fase E · Kurikulum Merdeka</span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1.5 opacity-70 group-hover:opacity-100" />
            </a>

            <a
              href="https://drive.google.com/drive/folders/1OGTwBESvTrMSf3YIovcbx12q_XBrrvbx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-900/60 hover:bg-emerald-850 border border-emerald-700/60 hover:border-emerald-500 rounded-xl transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center shrink-0 text-emerald-300 group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block group-hover:text-emerald-200 truncate">
                    Drive LKPD Kelas XII
                  </span>
                  <span className="text-[10px] text-emerald-300/80 block">Fase F · HOTS &amp; Studi Kasus</span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1.5 opacity-70 group-hover:opacity-100" />
            </a>

            <a
              href="https://drive.google.com/drive/folders/1B3zuwMCiJDcCPCHoPU8ywbMDrAwBiAeZ?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-teal-900/60 hover:bg-teal-850 border border-teal-700/60 hover:border-teal-500 rounded-xl transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-teal-800 flex items-center justify-center shrink-0 text-amber-300 group-hover:scale-105 transition-transform">
                  <Presentation className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block group-hover:text-amber-200 truncate">
                    Bahan Tayang Kls XII
                  </span>
                  <span className="text-[10px] text-teal-300/80 block">Slide Presentasi / PPT</span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-amber-300 shrink-0 ml-1.5 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            {/* Realtime Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama modul, topik (misal: Hijaiyah, Asmaul Husna, Sholat, LKPD)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
              />
            </div>

            {/* Fase Selector Dropdown */}
            <div className="md:col-span-4 flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500 shrink-0">Fase:</span>
              <select
                value={selectedFase}
                onChange={(e) => setSelectedFase(e.target.value as FaseKurikulum)}
                aria-label="Pilih Fase Kurikulum"
                className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
              >
                {fases.map((fase) => (
                  <option key={fase} value={fase}>
                    {fase}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Total Result Count (Quiet unboxed metadata) */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <div className="flex items-center gap-2">
            <span>Menampilkan <strong className="text-slate-800 font-mono tabular-nums">{filteredDocs.length}</strong> perangkat pembelajaran</span>
            {searchQuery && (
              <>
                <span aria-hidden="true">·</span>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-emerald-700 hover:underline"
                >
                  Reset Pencarian
                </button>
              </>
            )}
          </div>
          <span className="hidden sm:inline">Kurikulum Merdeka 2026/2027</span>
        </div>

        {/* ZERO RESULTS EMPTY STATE */}
        {filteredDocs.length === 0 && (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">Tidak ada perangkat ditemukan</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Coba gunakan kata kunci lain atau pilih kategori &quot;Semua Dokumen&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedFase('Semua');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 rounded-lg hover:bg-emerald-100"
            >
              Tampilkan Semua Perangkat
            </button>
          </div>
        )}

        {/* 1. GRID CARDS VIEW */}
        {viewMode === 'grid' && filteredDocs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all p-5 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  
                  {/* Top unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-emerald-800">{doc.categoryLabel}</span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold border ${getFormatBadge(doc.fileFormat)}`}>
                      {doc.fileFormat}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                    {doc.title}
                  </h3>

                  {/* Detail specs */}
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>{doc.fase}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.kelas}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{doc.fileSize}</span>
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onPreviewDocument(doc)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>Pratinjau</span>
                  </button>

                  <a
                    href={doc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs whitespace-nowrap"
                    title="Buka / Unduh tautan Google Drive"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh File</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* 2. TABLE VIEW (Sangat disukai untuk administrasi) */}
        {viewMode === 'table' && filteredDocs.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                <tr>
                  <th scope="col" className="py-3 px-4">Nama Perangkat Ajar</th>
                  <th scope="col" className="py-3 px-4 hidden md:table-cell">Kategori</th>
                  <th scope="col" className="py-3 px-4 hidden sm:table-cell">Fase / Kelas</th>
                  <th scope="col" className="py-3 px-4 hidden lg:table-cell">Format</th>
                  <th scope="col" className="py-3 px-4 hidden xl:table-cell">Pembaruan</th>
                  <th scope="col" className="py-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-900 max-w-xs sm:max-w-md">
                      <div className="font-semibold text-slate-900">{doc.title}</div>
                      <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{doc.description}</div>
                    </td>
                    <td className="py-3.5 px-4 hidden md:table-cell text-xs text-slate-600 whitespace-nowrap">
                      {doc.categoryLabel}
                    </td>
                    <td className="py-3.5 px-4 hidden sm:table-cell text-xs text-slate-600 whitespace-nowrap">
                      <div>{doc.fase}</div>
                      <div className="text-[11px] text-slate-400">{doc.kelas}</div>
                    </td>
                    <td className="py-3.5 px-4 hidden lg:table-cell text-xs font-mono whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${getFormatBadge(doc.fileFormat)}`}>
                        {doc.fileFormat} · {doc.fileSize}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 hidden xl:table-cell text-xs text-slate-500 whitespace-nowrap">
                      {doc.lastUpdated}
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => onPreviewDocument(doc)}
                          className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                          title="Pratinjau Rincian"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <a
                          href={doc.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md shadow-xs transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Unduh</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Petunjuk Komentar Kode untuk Guru */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-800">Petunjuk Penggantian Tautan Unduh:</span> Semua tautan dokumen disimpan di 
            <code className="mx-1 px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono">src/data/mockData.ts</code> pada variabel <code className="px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono">documentItemsData</code>. Cukup ganti nilai <code className="px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono">downloadUrl</code> dengan tautan Google Drive / Cloud publik milik Anda.
          </div>
        </div>

      </div>
    </section>
  );
};
