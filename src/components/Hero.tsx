import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Gamepad2, 
  CheckCircle2, 
  Sparkles, 
  FolderDown, 
  Camera, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  GraduationCap, 
  MapPin, 
  Brain, 
  Heart, 
  Scale,
  Calendar,
  Layers,
  MessageCircle
} from 'lucide-react';
import { GalleryItem, TeacherProfile } from '../types';

export interface HeroProps {
  onOpenPerangkat: () => void;
  onOpenGame: () => void;
  onOpenDokumentasi?: () => void;
  onOpenLightbox?: (item: GalleryItem) => void;
  featuredItems?: GalleryItem[];
  teacherProfile?: TeacherProfile;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenPerangkat, 
  onOpenGame,
  onOpenDokumentasi,
  onOpenLightbox,
  featuredItems = [],
  teacherProfile
}) => {
  // Carousel state for authentic classroom & masjid documentation photos
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [heroFilter, setHeroFilter] = useState<'all' | 'masjid' | 'pm' | 'kbc' | 'mb'>('all');

  // If featuredItems passed from props, use them, otherwise fallback to default definitions
  const photoList = featuredItems.length > 0 ? featuredItems : [
    {
      id: 'gal-sma-01',
      title: 'Implementasi Pembelajaran Mendalam (PM): Diskusi Nalar Kritis & Analisis Tematik PAI',
      category: 'kbm' as const,
      categoryLabel: 'Pembelajaran Mendalam (PM)',
      date: '30 Juli 2025',
      classGrade: 'Kelas X & XI SMA (Fase E & F)',
      description: 'Peserta didik aktif berdiskusi kelompok mendalami makna ayat Al-Qur\'an dan isu keagamaan kontemporer dengan nalar kritis di ruang kelas SMA Negeri 1 Krembung.',
      imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTHwCG4OYCtXduvj891IjmDUv52MTVKRaBpzpKg3z98yw9_v5G6t_lli2bCJixVqAdiwPaxLyGzXkgIiBPyWOX_smLBIr4UbMNoqolq27ZJeZZgbi4KnSq0khh6q793AEvk1ZRIKLpfnwh8Hz1wBOcIHLIXKban3KOG5tjobT1hGkVulfF6kio34cGOjnk/s1600/Image_20250730_111825_005.jpeg',
      imageAlt: 'Dokumentasi Pembelajaran Mendalam (PM) PAI SMAN 1 Krembung',
      accentColor: 'from-emerald-700 to-teal-900',
      tags: ['Pembelajaran Mendalam', 'Deep Learning', 'SMANIKRE']
    },
    {
      id: 'gal-sma-02',
      title: 'Kurikulum Berbasis Cinta (KBC): Ruang Belajar Ramah, Welas Asih, & Penuh Mahabbah',
      category: 'kbm' as const,
      categoryLabel: 'Kurikulum Berbasis Cinta (KBC)',
      date: 'Tahun Ajaran 2025/2026',
      classGrade: 'Fase E & F (Kelas X & XI SMA)',
      description: 'Suasana kelas PAI yang humanis bersama Ibu Ulfatul Husna, S.Ag., M.Pd. Guru membimbing dengan ketulusan mahabbah dan keteladanan (Uswah Hasanah).',
      imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjck4L0StkjujtxeXw9oAV4Obs_9rtkmu8u5akCjvTlNCZNejg8h9s_sQ1il6_T5hpFz61v7oTBA0rQ3F21DXx1sP0joIK82tDIGQoiaSz_ewrWNkMGKq9HCAy-iYxZddWPrHuMjrYq7xf0iStI5wyJPowxap6YwCXtQxazrI_e206l0DK_VE2XlSH6mh-1/s1600/IMG_1324%20%281%29.jpeg',
      imageAlt: 'Dokumentasi Kurikulum Berbasis Cinta PAI SMAN 1 Krembung',
      accentColor: 'from-rose-700 to-emerald-900',
      tags: ['Kurikulum Berbasis Cinta', 'KBC', 'Uswah Hasanah']
    },
    {
      id: 'gal-sma-03',
      title: 'Integrasi Moderasi Beragama (MB) & Pembiasaan Akhlak Mulia Sivitas SMANIKRE',
      category: 'p5_ppra' as const,
      categoryLabel: 'Moderasi Beragama (MB)',
      date: 'Tahun Ajaran 2025/2026',
      classGrade: 'Fase E & F (Lintas Kelas SMA)',
      description: 'Penguatan nilai-nilai Wasathiyah (toleransi, keadilan, cinta tanah air) serta pembiasaan budi pekerti islami di lingkungan SMA Negeri 1 Krembung.',
      imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1jzOHZb8jQtfD3KL6IM8ecRNEDIxqFHsTys9nSwTfmk17Jb0wzvT4C24abUsImVixJ7zr-EtTtz5uJ2VLpeojHYCuTDu-FLXnKjEftJXfGFF0Olg8tmm6V_PQtlvIl9HSBZgGTtRfDDBiaEAoIZ7_lN6RBd1VNSl2KXITwuSNdmYD-pOhcB6Gv0Rf0s0H/s1600/IMG_1120%20%281%29.jpeg',
      imageAlt: 'Dokumentasi Moderasi Beragama dan Budi Pekerti SMAN 1 Krembung',
      accentColor: 'from-teal-700 to-slate-900',
      tags: ['Moderasi Beragama', 'Wasathiyah', 'Karakter Pelajar']
    }
  ];

  // Filtered photos based on user selection in hero showcase
  const displayedPhotos = photoList.filter((item) => {
    if (heroFilter === 'all') return true;
    if (heroFilter === 'masjid') {
      return item.category === 'masjid' || item.tags.some(t => t.toLowerCase().includes('masjid')) || item.title.toLowerCase().includes('masjid');
    }
    if (heroFilter === 'pm') {
      return item.categoryLabel.includes('Mendalam') || item.tags.some(t => t.toLowerCase().includes('mendalam'));
    }
    if (heroFilter === 'kbc') {
      return item.categoryLabel.includes('Cinta') || item.tags.some(t => t.toLowerCase().includes('cinta'));
    }
    if (heroFilter === 'mb') {
      return item.categoryLabel.includes('Moderasi') || item.tags.some(t => t.toLowerCase().includes('moderasi'));
    }
    return true;
  });

  const safeActiveIndex = activePhotoIndex < displayedPhotos.length ? activePhotoIndex : 0;
  const currentPhoto = displayedPhotos[safeActiveIndex] || photoList[0];

  const handleFilterChange = (filter: 'all' | 'masjid' | 'pm' | 'kbc' | 'mb') => {
    setHeroFilter(filter);
    setActivePhotoIndex(0);
  };

  // Dynamic badge helper for any authentic photo item
  const getItemBadge = (item: GalleryItem, index: number) => {
    if (item.category === 'masjid' || item.categoryLabel.toLowerCase().includes('masjid') || item.tags.some(t => t.toLowerCase().includes('masjid')) || item.title.toLowerCase().includes('masjid')) {
      return {
        code: 'MASJID',
        label: 'Aktivitas Masjid SMANIKRE',
        color: 'bg-emerald-600 text-white',
        desc: 'Ibadah & Pembiasaan di Masjid Sekolah'
      };
    }
    if (item.categoryLabel.includes('Mendalam') || item.tags.some(t => t.toLowerCase().includes('mendalam'))) {
      return {
        code: 'PM',
        label: 'Pilar 1: Pembelajaran Mendalam (PM)',
        color: 'bg-emerald-600 text-white',
        desc: 'Nalar Kritis & Deep Learning'
      };
    }
    if (item.categoryLabel.includes('Cinta') || item.tags.some(t => t.toLowerCase().includes('cinta'))) {
      return {
        code: 'KBC',
        label: 'Pilar 2: Kurikulum Berbasis Cinta (KBC)',
        color: 'bg-rose-600 text-white',
        desc: 'Mahabbah & Ruang Ramah Murid'
      };
    }
    if (item.categoryLabel.includes('Moderasi') || item.tags.some(t => t.toLowerCase().includes('moderasi'))) {
      return {
        code: 'MB',
        label: 'Pilar 3: Moderasi Beragama (MB)',
        color: 'bg-teal-600 text-white',
        desc: 'Wasathiyah & Nilai Kebangsaan'
      };
    }
    if (item.category === 'ibadah') {
      return {
        code: 'IBADAH',
        label: 'Pembiasaan Ibadah & Doa',
        color: 'bg-emerald-700 text-white',
        desc: 'Sholat Berjama\'ah & Istighotsah'
      };
    }
    return {
      code: 'KBM',
      label: item.categoryLabel || 'KBM Interaktif',
      color: 'bg-blue-600 text-white',
      desc: 'Dinamika Belajar Siswa'
    };
  };

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % displayedPhotos.length);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + displayedPhotos.length) % displayedPhotos.length);
  };

  return (
    <section id="beranda" className="relative overflow-hidden bg-white border-b border-slate-200">
      
      {/* =========================================================================
          1. OFFICIAL INSTITUTIONAL COVER / HEADER BANNER (KOP PORTAL SMANIKRE)
          ========================================================================= */}
      <div className="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white border-b border-emerald-900/60 shadow-inner relative overflow-hidden">
        {/* Subtle decorative Islamic geometric pattern overlay */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" 
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left: School Crest + Official Hierarchy */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 shadow-lg border border-emerald-400/40 flex items-center justify-center shrink-0">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjhEe7DsQaweQWtckuBY0QdRPB_J0RbHqfSXb0fFnNGOQYwfzbn9SyTV1WORteNpd7S3rcGj3FYpaCf0X7tjQpcXoDfErD-aWPD9kTf-6auJIoAZ3ETmXpvuoVydS7H87HO-vidqv4ECyayUG4dFJNZNMuVWD2lUyaMaF7ox5BYCfAksicgx7ryvy6V56Z/s1600/LOGO%20SMANIKRE%20(1).png"
                  alt="Logo Resmi SMANIKRE"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] sm:text-[11px] font-medium tracking-widest text-emerald-300 uppercase">
                  <span>PEMERINTAH PROVINSI JAWA TIMUR</span>
                  <span aria-hidden="true">·</span>
                  <span>CABANG DINAS SIDOARJO</span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-white uppercase drop-shadow-xs">
                  SMA NEGERI 1 KREMBUNG
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-emerald-100 flex items-center justify-center md:justify-start gap-1.5">
                  <span className="text-amber-400">✦</span>
                  <span>RUANG BELAJAR PENDIDIKAN AGAMA ISLAM &amp; BUDI PEKERTI</span>
                </p>
              </div>
            </div>

            {/* Right: Institutional Credentials & Address */}
            <div className="flex flex-col items-center md:items-end text-xs text-slate-300 space-y-1 text-center md:text-right border-t md:border-t-0 border-emerald-900/60 pt-3 md:pt-0 w-full md:w-auto">
              <div className="flex items-center gap-2 text-slate-200">
                {teacherProfile?.photoUrl && (
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0 shadow-xs bg-slate-800">
                    <img
                      src={teacherProfile.photoUrl}
                      alt={teacherProfile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">Ulfatul Husna, S.Ag., M.Pd.</span>
                <span className="text-emerald-400 font-normal">(Pembina Utama Muda / IV.c)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Jl. Raya Kecamatan No. 2 Krembung - Sidoarjo - Jawa Timur</span>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 pt-0.5">
                <a
                  href={teacherProfile?.contact?.whatsapp || 'https://wa.me/6282232754232'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-200 bg-emerald-900/90 hover:bg-emerald-800 hover:text-white px-2.5 py-0.5 rounded-full border border-emerald-600/70 transition-colors uppercase tracking-wider shadow-xs"
                  title="Konsultasi WhatsApp: 082232754232"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>WA: 0822-3275-4232</span>
                </a>
                <span className="text-[10px] font-bold text-emerald-200 bg-emerald-900/80 px-2.5 py-0.5 rounded-full border border-emerald-700/60 uppercase tracking-wider">
                  Kurikulum Merdeka · Fase E &amp; F
                </span>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-600/60 uppercase tracking-wider">
                  {photoList.length} Foto Otentik KBM &amp; Masjid
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          2. MAIN HERO CONTENT & INTERACTIVE PHOTO COVER SHOWCASE
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Col 6): Headline, Framework & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quiet Unboxed Metadata Kicker (Anti-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>PORTAL ADMINISTRASI &amp; MEDIA AJAR SMANIKRE</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">TAHUN AJARAN 2026/2027</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]" style={{ textWrap: 'balance' }}>
              Pusat Administrasi Ajar, Dokumentasi KBM, &amp; Media Interaktif PAI
            </h1>

            {/* Pedagogical Framework Indicator (Trilogi PM + MB + KBC) */}
            <div className="p-4 bg-emerald-50/90 rounded-2xl border border-emerald-200/90 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Trilogi Pedagogi Unggulan</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 font-medium">PM · MB · KBC</span>
              </div>

              <p className="text-xs sm:text-sm font-bold text-emerald-950 leading-snug">
                Pendekatan Pembelajaran Mendalam (PM) terintegrasi Moderasi Beragama (MB) dan Kurikulum Berbasis Cinta (KBC)
              </p>

              {/* 3 Pillars Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded-lg bg-white border border-emerald-200/80 text-left space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                    <Brain className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Deep Learning</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Nalar kritis, pemecahan masalah kontekstual syariat.</p>
                </div>

                <div className="p-2 rounded-lg bg-white border border-teal-200/80 text-left space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900">
                    <Scale className="w-3.5 h-3.5 text-teal-700" />
                    <span>Wasathiyah</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Toleransi, komitmen kebangsaan &amp; persatuan.</p>
                </div>

                <div className="p-2 rounded-lg bg-white border border-rose-200/80 text-left space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900">
                    <Heart className="w-3.5 h-3.5 text-rose-600" />
                    <span>Mahabbah</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Ruang belajar ramah anak &amp; Uswah Hasanah.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Selamat datang di portal resmi pembelajaran Pendidikan Agama Islam dan Budi Pekerti SMA Negeri 1 Krembung. 
              Menyediakan perangkat kurikulum lengkap Fase E &amp; F, galeri dokumentasi KBM otentik, pembiasaan karakter religius, serta media game ajar interaktif.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href="#perangkat"
                onClick={onOpenPerangkat}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <FolderDown className="w-4 h-4" />
                <span>Unduh Perangkat PAI</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="#dokumentasi"
                onClick={onOpenDokumentasi}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 hover:text-emerald-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-emerald-300 rounded-xl transition-all whitespace-nowrap"
              >
                <Camera className="w-4 h-4 text-emerald-700" />
                <span>Lihat Galeri Foto KBM</span>
              </a>

              <a
                href="#game-edukasi"
                onClick={onOpenGame}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors whitespace-nowrap"
              >
                <Gamepad2 className="w-4 h-4 text-emerald-700" />
                <span>Game Edukasi</span>
              </a>
            </div>

            {/* Trust Values */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-600 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Format DOCX &amp; PDF</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fase E &amp; F Kurikulum Merdeka</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{photoList.length} Foto Otentik KBM &amp; Masjid</span>
              </div>
            </div>

          </div>

          {/* Right Column (Col 6): Interactive Cover Showcase with Authentic Photos */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Photo Showcase Container */}
            <div className="relative bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-800 overflow-hidden">
              
              {/* Header inside Showcase */}
              <div className="space-y-2.5 px-2 pb-3 border-b border-slate-800/80 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                      Etalase Dokumentasi SMANIKRE
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                    <span>Foto {safeActiveIndex + 1} dari {displayedPhotos.length}</span>
                  </div>
                </div>

                {/* Interactive Filter Pills inside Cover Showcase */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  <button
                    onClick={() => handleFilterChange('all')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      heroFilter === 'all'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Semua ({photoList.length})
                  </button>
                  <button
                    onClick={() => handleFilterChange('masjid')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1 ${
                      heroFilter === 'masjid'
                        ? 'bg-emerald-600 text-white shadow-xs ring-1 ring-emerald-400'
                        : 'bg-slate-800 text-emerald-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>🕌 Kegiatan Masjid</span>
                    <span className="bg-emerald-800 text-white text-[9px] px-1 rounded-sm">
                      {photoList.filter(i => i.category === 'masjid' || i.tags.some(t => t.toLowerCase().includes('masjid'))).length}
                    </span>
                  </button>
                  <button
                    onClick={() => handleFilterChange('pm')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      heroFilter === 'pm'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    PM (Deep Learning)
                  </button>
                  <button
                    onClick={() => handleFilterChange('kbc')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      heroFilter === 'kbc'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-slate-800 text-rose-300 hover:bg-slate-700'
                    }`}
                  >
                    KBC (Kasih Sayang)
                  </button>
                  <button
                    onClick={() => handleFilterChange('mb')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      heroFilter === 'mb'
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-slate-800 text-teal-300 hover:bg-slate-700'
                    }`}
                  >
                    MB (Moderasi)
                  </button>
                </div>
              </div>

              {/* Main Photo Viewport */}
              <div className="relative mt-3 rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3] group">
                <img
                  src={currentPhoto.imageUrl}
                  alt={currentPhoto.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider ${getItemBadge(currentPhoto, safeActiveIndex).color}`}>
                    {getItemBadge(currentPhoto, safeActiveIndex).label}
                  </span>

                  {/* Lightbox / Zoom Action Button */}
                  {onOpenLightbox && (
                    <button
                      onClick={() => onOpenLightbox(currentPhoto)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/60 hover:bg-black/90 text-white rounded-md text-xs font-semibold backdrop-blur-xs transition-colors shadow-sm cursor-pointer"
                      title="Perbesar Foto (Resolusi Penuh)"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Perbesar</span>
                    </button>
                  )}
                </div>

                {/* Carousel Arrows */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Foto Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Foto Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1 text-white">
                  <div className="flex items-center gap-2 text-[11px] text-emerald-300 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentPhoto.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{currentPhoto.classGrade}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                    {currentPhoto.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {currentPhoto.description}
                  </p>
                </div>
              </div>

              {/* Interactive Thumbnail Switcher Cards (Authentic Photos) */}
              <div className="mt-3 pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                    Dokumentasi Pilihan ({displayedPhotos.length} Foto):
                  </p>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    Geser &amp; Klik Foto
                  </span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
                  {displayedPhotos.map((item, idx) => {
                    const isSelected = safeActiveIndex === idx;
                    const badge = getItemBadge(item, idx);
                    return (
                      <button
                        key={item.id || idx}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`relative rounded-xl overflow-hidden border p-1 transition-all text-left shrink-0 w-24 sm:w-28 cursor-pointer ${
                          isSelected
                            ? 'border-emerald-400 bg-slate-800 shadow-md ring-2 ring-emerald-400/80'
                            : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="h-14 sm:h-16 w-full rounded-lg overflow-hidden bg-slate-950 mb-1">
                          <img
                            src={item.imageUrl}
                            alt={item.imageAlt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="space-y-0.5 px-0.5">
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded text-white inline-block ${badge.color}`}>
                            {badge.code}
                          </span>
                          <p className="text-[10px] text-slate-300 font-medium line-clamp-1">
                            {item.title.includes(':') ? item.title.split(':')[0] : item.title}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Statistical Footer inside Card */}
              <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-slate-800/60 rounded-lg">
                  <p className="text-[10px] text-slate-400">Total Berkas</p>
                  <p className="text-base font-bold text-white font-mono">28+</p>
                </div>
                <div className="p-2 bg-slate-800/60 rounded-lg">
                  <p className="text-[10px] text-slate-400">Jenjang</p>
                  <p className="text-base font-bold text-emerald-400 font-mono">SMA</p>
                </div>
                <div className="p-2 bg-slate-800/60 rounded-lg">
                  <p className="text-[10px] text-slate-400">Keaslian Foto</p>
                  <p className="text-base font-bold text-emerald-400 font-mono">100% Asli</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
