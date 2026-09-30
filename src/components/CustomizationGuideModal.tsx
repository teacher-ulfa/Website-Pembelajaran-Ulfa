import React, { useState } from 'react';
import { X, Check, Copy, Code, FileText, Image, Gamepad2, User, HelpCircle } from 'lucide-react';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'profil' | 'dokumen' | 'galeri' | 'game'>('dokumen');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                PANDUAN PENGEMBANG &amp; GURU PAI
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Cara Mengganti Data &amp; Tautan Asli
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('dokumen')}
            className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'dokumen' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>1. Link Perangkat Ajar</span>
          </button>
          <button
            onClick={() => setActiveTab('profil')}
            className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'profil' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>2. Data Profil Guru</span>
          </button>
          <button
            onClick={() => setActiveTab('galeri')}
            className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'galeri' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>3. Foto Dokumentasi</span>
          </button>
          <button
            onClick={() => setActiveTab('game')}
            className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'game' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>4. Game Edukasi</span>
          </button>
        </div>

        {/* Tab 1: Dokumen */}
        {activeTab === 'dokumen' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <h4 className="font-bold text-slate-900 text-sm">
              Langkah Mengganti Link Google Drive untuk Modul Ajar, Silabus, &amp; LKPD:
            </h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Folder Utama:</strong> Untuk mengganti link folder Google Drive keseluruhan, cukup ubah nilai variabel <code className="px-1.5 py-0.5 bg-slate-100 rounded text-emerald-800 font-mono">GOOGLE_DRIVE_FOLDER_URL</code> di baris atas <code className="font-mono">src/data/mockData.ts</code>.</li>
              <li><strong>Dokumen / RPM Spesifik:</strong> Unggah file DOCX/PDF ke Google Drive, atur akses &quot;Siapa saja yang memiliki link&quot;, lalu masukkan link file atau Google Docs ke properti <code className="font-mono">downloadUrl</code> pada objek modul terkait.</li>
              <li><strong>Perhatikan Koma &amp; Tanda Petik:</strong> Pastikan setiap baris teks di dalam tanda kurung siku <code className="font-mono">[ ]</code> dipisahkan tanda koma di luar tanda petik tunggal (contoh: <code className="font-mono">'kalimat 1', 'kalimat 2'</code>).</li>
            </ol>

            <div className="relative bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
              <pre>{`// Contoh konfigurasi di src/data/mockData.ts:
export const GOOGLE_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/...';

// Contoh RPM per bab:
{
  id: 'doc-sma-02',
  title: 'RPM Bab 1: Sabar dalam Menghadapi Ujian dan Musibah',
  category: 'rpm',
  fase: 'Fase F (Kelas XII)',
  downloadUrl: 'https://docs.google.com/document/d/.../edit?usp=drive_link',
  // ...
}`}</pre>
            </div>
          </div>
        )}

        {/* Tab 2: Profil */}
        {activeTab === 'profil' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <h4 className="font-bold text-slate-900 text-sm">
              Langkah Mengubah Profil Pendidik, Alamat, &amp; Pendekatan PM-MB-KBC:
            </h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Buka file <code className="px-1.5 py-0.5 bg-slate-100 rounded text-emerald-800 font-mono">src/data/mockData.ts</code>.</li>
              <li>Temukan objek <code className="px-1.5 py-0.5 bg-slate-100 rounded text-emerald-800 font-mono">teacherProfileData</code> di baris paling atas.</li>
              <li>Ganti properti <code className="font-mono">name</code>, <code className="font-mono">nip</code>, <code className="font-mono">schoolName</code>, <code className="font-mono">schoolAddress</code> (&quot;Jl. Raya Kecamatan No. 2 Krembung - Sidoarjo - Jawa Timur&quot;), <code className="font-mono">pedagogyApproachTagline</code>, dan kontak WhatsApp resmi (<code className="font-mono">0822-3275-4232</code>) / Email.</li>
            </ol>

            <div className="p-3 bg-emerald-50 rounded-xl text-xs text-emerald-800 border border-emerald-200">
              💡 <strong>Tips Foto Profil:</strong> Anda dapat langsung mencoba mengunggah foto secara instan melalui tombol &quot;+ Uji Coba Ganti Foto Profil&quot; di bagian Profil pada halaman web!
            </div>
          </div>
        )}

        {/* Tab 3: Galeri */}
        {activeTab === 'galeri' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <h4 className="font-bold text-slate-900 text-sm">
              Langkah Mengunggah Foto Dokumentasi Kelas &amp; Hasil Karya:
            </h4>
            <p className="leading-relaxed">
              Foto kegiatan dapat disimpan di folder <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">public/assets/</code> atau menggunakan URL foto hosting Anda.
            </p>
            <div className="relative bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
              <pre>{`// Edit di src/data/mockData.ts pada galleryItemsData:
{
  id: 'gal-01',
  title: 'Praktik Bersuci & Gerakan Sholat Berjamaah',
  category: 'ibadah',
  date: '20 September 2026',
  imageUrl: '/assets/foto-kegiatan-sholat.jpg', // path foto asli
  imageAlt: 'Foto murid sholat dhuha berjamaah',
  // ...
}`}</pre>
            </div>
          </div>
        )}

        {/* Tab 4: Game */}
        {activeTab === 'game' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <h4 className="font-bold text-slate-900 text-sm">
              Langkah Menghubungkan Game Wordwall, Quizizz, atau Kahoot:
            </h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Buat atau cari aktivitas pembelajaran di <a href="https://wordwall.net" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-semibold">Wordwall.net</a> atau <a href="https://quizizz.com" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-semibold">Quizizz.com</a>.</li>
              <li>Klik tombol <strong>Bagikan (Share)</strong> &gt; Pilih &quot;Dapatkan Tautan Publik&quot; atau &quot;Sematkan (Embed)&quot;.</li>
              <li>Tempel tautan tersebut ke properti <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">playUrl</code> pada file <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">src/data/mockData.ts</code>.</li>
            </ol>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
          >
            Saya Mengerti, Tutup Panduan
          </button>
        </div>

      </div>
    </div>
  );
};
