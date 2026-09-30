import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, Sparkles } from 'lucide-react';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Complete standalone single file HTML with Tailwind CDN, semantic HTML5, clean vanilla JS, and thorough comments
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ruang Belajar PAI - Portal Pembelajaran & Administrasi Guru</title>
  <meta name="description" content="Portal Pembelajaran Pendidikan Agama Islam modern: Administrasi perangkat ajar, galeri dokumentasi KBM, dan media game edukasi interaktif." />
  
  <!-- FRAMEWORK TAILWIND CSS VIA CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- GOOGLE FONTS: PLUS JAKARTA SANS -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  
  <!-- LUCIDE ICONS VIA CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">

  <!-- ========================================================================= -->
  <!-- 1. NAVBAR / HEADER (TOP BAR)                                              -->
  <!-- ========================================================================= -->
  <header class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Zone 1: Logo Sekolah & Nama Website -->
      <a href="#beranda" class="flex items-center gap-2.5 font-bold text-slate-900 text-lg">
        <!-- LOGO RESMI SMA NEGERI 1 KREMBUNG (SMANIKRE) -->
        <div class="w-9 h-9 rounded-lg bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjhEe7DsQaweQWtckuBY0QdRPB_J0RbHqfSXb0fFnNGOQYwfzbn9SyTV1WORteNpd7S3rcGj3FYpaCf0X7tjQpcXoDfErD-aWPD9kTf-6auJIoAZ3ETmXpvuoVydS7H87HO-vidqv4ECyayUG4dFJNZNMuVWD2lUyaMaF7ox5BYCfAksicgx7ryvy6V56Z/s1600/LOGO%20SMANIKRE%20(1).png" alt="Logo SMAN 1 Krembung" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col">
          <span class="leading-tight text-slate-900">Ruang Belajar PAI</span>
          <span class="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">SMAN 1 Krembung</span>
        </div>
      </a>

      <!-- Zone 2: Navigasi Teks -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
        <a href="#beranda" class="hover:text-emerald-700 transition-colors">Beranda</a>
        <a href="#profil" class="hover:text-emerald-700 transition-colors">Profil Guru</a>
        <a href="#perangkat" class="hover:text-emerald-700 transition-colors">Perangkat PAI</a>
        <a href="#dokumentasi" class="hover:text-emerald-700 transition-colors">Dokumentasi</a>
        <a href="#game-edukasi" class="hover:text-emerald-700 transition-colors">Game Edukasi</a>
      </nav>

      <!-- Zone 3: Tombol Aksi Utama -->
      <div class="flex items-center gap-3">
        <a href="#perangkat" class="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors">
          Unduh Modul
        </a>
      </div>
    </div>
  </header>

  <!-- ========================================================================= -->
  <!-- 1. KOP RESMI & COVER HEADER PORTAL SMANIKRE                               -->
  <!-- ========================================================================= -->
  <div class="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white border-b border-emerald-900/60 shadow-inner py-5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-4 text-center md:text-left">
        <div class="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-lg border border-emerald-400/40 flex items-center justify-center shrink-0">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjhEe7DsQaweQWtckuBY0QdRPB_J0RbHqfSXb0fFnNGOQYwfzbn9SyTV1WORteNpd7S3rcGj3FYpaCf0X7tjQpcXoDfErD-aWPD9kTf-6auJIoAZ3ETmXpvuoVydS7H87HO-vidqv4ECyayUG4dFJNZNMuVWD2lUyaMaF7ox5BYCfAksicgx7ryvy6V56Z/s1600/LOGO%20SMANIKRE%20(1).png" alt="Logo SMANIKRE" class="w-full h-full object-contain" />
        </div>
        <div>
          <span class="text-[10px] text-emerald-300 tracking-widest uppercase block font-semibold">PEMERINTAH PROVINSI JAWA TIMUR · CABANG DINAS SIDOARJO</span>
          <h2 class="text-xl font-black tracking-tight text-white uppercase">SMA NEGERI 1 KREMBUNG</h2>
          <p class="text-xs font-semibold text-emerald-100">✦ RUANG BELAJAR PENDIDIKAN AGAMA ISLAM & BUDI PEKERTI</p>
        </div>
      </div>
      <div class="text-xs text-slate-300 text-center md:text-right space-y-1">
        <p class="text-white font-semibold">Ulfatul Husna, S.Ag., M.Pd. <span class="text-emerald-400 font-normal">(Pembina Utama Muda / IV.c)</span></p>
        <p class="text-[11px] text-slate-400">Jl. Raya Kecamatan No. 2 Krembung - Sidoarjo - Jawa Timur</p>
        <span class="inline-block text-[10px] font-bold text-emerald-200 bg-emerald-900/80 px-2.5 py-0.5 rounded-full border border-emerald-700/60 uppercase">
          Kurikulum Merdeka · Fase E & F
        </span>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- 2. HERO SECTION                                                           -->
  <!-- ========================================================================= -->
  <section id="beranda" class="py-16 sm:py-24 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="text-xs font-semibold tracking-wide text-emerald-800 uppercase">
            PORTAL PAI SMA NEGERI 1 KREMBUNG · FASE E & F
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Pusat Administrasi Ajar, Dokumentasi KBM, & Media Interaktif PAI
          </h1>
          <!-- Trilogi Pedagogi Unggulan Banner -->
          <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1.5">
            <span class="text-[11px] font-bold uppercase text-emerald-900 tracking-wider block">Trilogi Pedagogi Unggulan</span>
            <p class="text-xs sm:text-sm font-semibold text-emerald-950">
              Pendekatan Pembelajaran Mendalam (PM) terintegrasi Moderasi Beragama (MB) dan Kurikulum Berbasis Cinta (KBC)
            </p>
          </div>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
            Portal pembelajaran Pendidikan Agama Islam dan Budi Pekerti diampu oleh <strong>Ulfatul Husna, S.Ag., M.Pd.</strong> (Pembina Utama Muda / IV.c) di SMA Negeri 1 Krembung (Jl. Raya Kecamatan No. 2 Krembung - Sidoarjo - Jawa Timur). 
            Menyediakan modul ajar Kurikulum Merdeka (Fase E & F), dokumentasi pembiasaan ibadah, dan media ajar interaktif untuk siswa SMA.
          </p>
          <div class="pt-2 flex flex-wrap gap-3.5">
            <a href="#perangkat" class="px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm">
              Jelajahi Perangkat Ajar
            </a>
            <a href="#game-edukasi" class="px-5 py-3 text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg">
              Mainkan Game Edukasi
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800 space-y-4">
          <div class="flex justify-between items-center pb-3 border-b border-slate-800">
            <span class="text-sm font-bold">Ringkasan Portal SMANIKRE</span>
            <span class="text-xs text-emerald-400 font-mono">Tahun 2026/2027</span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-slate-800 rounded-xl">
              <span class="text-slate-400 block">Perangkat Ajar</span>
              <span class="text-xl font-bold text-white mt-1 block">28+ Dokumen</span>
            </div>
            <div class="p-3 bg-slate-800 rounded-xl">
              <span class="text-slate-400 block">Tingkatan</span>
              <span class="text-xl font-bold text-white mt-1 block">Fase E & F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 3. PROFIL PENDIDIK & SEKOLAH                                             -->
  <!-- ========================================================================= -->
  <section id="profil" class="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <h2 class="text-3xl font-bold text-slate-900">Profil Pendidik & Nilai Pembelajaran</h2>
        <p class="text-sm text-slate-600">Dedikasi membentuk generasi muda SMA beriman, bertakwa, berakhlak mulia, dan bernalar kritis.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Kartu Guru -->
        <div class="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm text-center">
          
          <!-- PLACEHOLDER FOTO PROFIL GURU: Ganti src gambar di bawah dengan URL/path foto asli Anda -->
          <div class="w-32 h-32 rounded-2xl bg-emerald-100 mx-auto overflow-hidden flex items-center justify-center text-4xl shadow-inner border border-emerald-300">
            <!-- Ganti dengan: <img src="path-foto-ibu-ulfa.jpg" alt="Foto Profil Guru" class="w-full h-full object-cover"> -->
            👩‍🏫
          </div>

          <div>
            <!-- DATA GURU RESMI -->
            <h3 class="text-lg font-bold text-slate-900">Ulfatul Husna, S.Ag., M.Pd.</h3>
            <p class="text-xs font-semibold text-emerald-700 mt-0.5">Guru PAI & Budi Pekerti</p>
            <p class="text-xs text-slate-500 font-mono mt-0.5">NIP. 197410101998022001</p>
            <span class="inline-block mt-1 text-[11px] font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
              Pangkat/Golongan: Pembina Utama Muda / IV.c
            </span>
          </div>

          <div class="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2.5 text-left">
            <div class="flex items-start gap-2">
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjhEe7DsQaweQWtckuBY0QdRPB_J0RbHqfSXb0fFnNGOQYwfzbn9SyTV1WORteNpd7S3rcGj3FYpaCf0X7tjQpcXoDfErD-aWPD9kTf-6auJIoAZ3ETmXpvuoVydS7H87HO-vidqv4ECyayUG4dFJNZNMuVWD2lUyaMaF7ox5BYCfAksicgx7ryvy6V56Z/s1600/LOGO%20SMANIKRE%20(1).png" alt="Logo SMANIKRE" class="w-7 h-7 object-contain shrink-0 mt-0.5" />
              <div>
                <p class="font-semibold text-slate-800">SMA Negeri 1 Krembung</p>
                <p class="text-[11px] text-slate-500">Jl. Raya Kecamatan No. 2 Krembung - Sidoarjo - Jawa Timur</p>
              </div>
            </div>
            <!-- KONTAK RESMI GURU -->
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/6282232754232" target="_blank" class="text-emerald-700 font-bold hover:underline">082232754232 (0822-3275-4232)</a></p>
            <p><strong>Email:</strong> pembelajaranulfa@gmail.com</p>
            <div class="pt-1">
              <a href="https://wa.me/6282232754232" target="_blank" class="block text-center py-2 px-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg">
                Hubungi via WhatsApp (082232754232)
              </a>
            </div>
          </div>
        </div>

        <!-- Visi, Misi & Trilogi PM, MB, KBC -->
        <div class="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <!-- Trilogi Pedagogi -->
          <div class="space-y-3">
            <h4 class="text-sm font-bold text-emerald-800 uppercase tracking-wider">Trilogi Pedagogi: PM + MB + KBC</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1">
                <span class="font-bold text-emerald-900 block">1. Pembelajaran Mendalam (PM)</span>
                <p class="text-slate-600">Deep learning, nalar kritis (HOTS), penguasaan esensi konsep syariat di atas sekadar hafalan fakta.</p>
              </div>
              <div class="p-3.5 bg-teal-50 rounded-xl border border-teal-200 text-xs space-y-1">
                <span class="font-bold text-teal-900 block">2. Moderasi Beragama (MB)</span>
                <p class="text-slate-600">Sikap wasathiyah (tawasuth, tawazun, tasamuh), komitmen kebangsaan, dan merawat persatuan.</p>
              </div>
              <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-200 text-xs space-y-1">
                <span class="font-bold text-rose-900 block">3. Kurikulum Berbasis Cinta (KBC)</span>
                <p class="text-slate-600">Pendidikan humanis penuh mahabbah, uswah hasanah, ruang kelas ramah anak, dan ibadah atas kerinduan.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-2">Visi Pendidikan</h4>
            <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-600 text-slate-800 text-sm italic">
              "Terwujudnya peserta didik SMA yang bertakwa kepada Allah SWT, berakhlak mulia, berwawasan rahmatan lil 'alamin, unggul dalam nalar kritis keilmuan melalui Pembelajaran Mendalam, berakar pada Moderasi Beragama, dan bermekaran dalam Kurikulum Berbasis Cinta."
            </div>
          </div>

          <div>
            <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Misi Operasional</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
              <li>Menerapkan Pembelajaran Mendalam (PM) yang merangsang nalar kritis, riset kontekstual, dan refleksi batin peserta didik SMA.</li>
              <li>Mengintegrasikan Moderasi Beragama (MB) guna menumbuhkan sikap toleran (tasamuh), adil, dan cinta tanah air dalam bingkai NKRI.</li>
              <li>Mengimplementasikan Kurikulum Berbasis Cinta (KBC) dengan menciptakan iklim sekolah yang aman, ramah, welas asih, dan menggembirakan.</li>
              <li>Membiasakan budaya religius di lingkungan SMANIKRE melalui sholat berjamaah, dhuha, tadarus Al-Qur'an, dan pembinaan keputrian/Rohis SKIS.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 4. PERANGKAT PEMBELAJARAN PAI (DIREKTORI & TAUTAN UNDUH)                  -->
  <!-- ========================================================================= -->
  <section id="perangkat" class="py-16 sm:py-20 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="space-y-2">
        <h2 class="text-3xl font-bold text-slate-900">Direktori Perangkat Pembelajaran PAI</h2>
        <p class="text-sm text-slate-600">Unduh dokumen resmi Kurikulum Merdeka (RPM, Modul Ajar, Silabus/CP, LKPD Kelas X & XII, Bahan Tayang).</p>
      </div>

      <!-- BANNER FOLDER UTAMA GOOGLE DRIVE -->
      <div class="p-4 sm:p-5 bg-emerald-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-emerald-300 uppercase tracking-wider block">Google Drive Resmi SMANIKRE</span>
          <h3 class="text-base font-bold text-white">Folder Utama Perangkat Pembelajaran PAI</h3>
          <p class="text-xs text-emerald-100">Akses seluruh arsip RPM, Silabus, LKPD, dan Bahan Tayang dalam satu folder terpadu.</p>
        </div>
        <a href="https://drive.google.com/drive/folders/1gx1f_encJGxHOU6cS4Fc7_E7cDGmBuWy?usp=drive_link" target="_blank" class="px-4 py-2 text-xs font-bold text-emerald-950 bg-emerald-300 hover:bg-emerald-200 rounded-xl whitespace-nowrap">
          Buka Folder Utama Drive ↗
        </a>
      </div>

      <!-- Grid Cards Perangkat Ajar -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- CARD 1: RPM BAB 1 -->
        <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex justify-between text-xs text-slate-500">
              <span class="font-semibold text-emerald-800">RPM (Kelas XII)</span>
              <span class="font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">DOCX</span>
            </div>
            <h3 class="text-base font-bold text-slate-900">RPM Bab 1: Sabar Menghadapi Ujian & Musibah</h3>
            <p class="text-xs text-slate-600">Kajian QS. Al-Baqarah: 155-156 & QS. Ibrahim: 9 kurikulum Pembelajaran Mendalam Fase F.</p>
          </div>
          <a href="https://docs.google.com/document/d/1vSrLedCNF0HuRB0GQfSzx2ZOpQvTHQ252ReQav1QV48/edit?usp=drive_link" target="_blank" class="w-full text-center py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg">
            Buka Dokumen (Google Docs)
          </a>
        </div>

        <!-- CARD 2: RPM BAB 2 -->
        <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex justify-between text-xs text-slate-500">
              <span class="font-semibold text-emerald-800">RPM (Kelas XII)</span>
              <span class="font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">DOCX</span>
            </div>
            <h3 class="text-base font-bold text-slate-900">RPM Bab 2: Iman, Islam dan Ihsan</h3>
            <p class="text-xs text-slate-600">Kajian integratif Hadis Jibril dan pembentukan karakter insan kamil moderasi beragama.</p>
          </div>
          <a href="https://docs.google.com/document/d/1u_s3PFF2nr-cA3gRaHPQ9z-4tRUdHtpkB_QokSFb8JQ/edit?usp=drive_link" target="_blank" class="w-full text-center py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg">
            Buka Dokumen (Google Docs)
          </a>
        </div>

        <!-- CARD 3: LKPD KELAS X -->
        <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex justify-between text-xs text-slate-500">
              <span class="font-semibold text-emerald-800">LKPD (Kelas X)</span>
              <span class="font-mono bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">PDF · Drive</span>
            </div>
            <h3 class="text-base font-bold text-slate-900">Folder LKPD PAI Kelas X (Fase E)</h3>
            <p class="text-xs text-slate-600">Kumpulan lembar kerja siswa interaktif PAI & BP Fase E SMA Negeri 1 Krembung.</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1gOBfvwGowdmTcKy4ZlwyfgXsBy6uu7XH?usp=sharing" target="_blank" class="w-full text-center py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg">
            Buka Folder LKPD Kelas X
          </a>
        </div>

        <!-- CARD 4: LKPD KELAS XII -->
        <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex justify-between text-xs text-slate-500">
              <span class="font-semibold text-emerald-800">LKPD (Kelas XII)</span>
              <span class="font-mono bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">PDF · Drive</span>
            </div>
            <h3 class="text-base font-bold text-slate-900">Folder LKPD PAI Kelas XII (Fase F)</h3>
            <p class="text-xs text-slate-600">Kumpulan lembar kerja HOTS dan studi kasus kontekstual PAI Kelas XII Fase F.</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1OGTwBESvTrMSf3YIovcbx12q_XBrrvbx?usp=sharing" target="_blank" class="w-full text-center py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg">
            Buka Folder LKPD Kelas XII
          </a>
        </div>

        <!-- CARD 5: BAHAN TAYANG KELAS XII -->
        <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex justify-between text-xs text-slate-500">
              <span class="font-semibold text-amber-800">Bahan Tayang</span>
              <span class="font-mono bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-300">PPTX · Drive</span>
            </div>
            <h3 class="text-base font-bold text-slate-900">Bahan Tayang & Slide PPT Kelas XII</h3>
            <p class="text-xs text-slate-600">Slide presentasi PowerPoint ajar interaktif materi PAI Kelas XII untuk proyektor/kelas.</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1B3zuwMCiJDcCPCHoPU8ywbMDrAwBiAeZ?usp=sharing" target="_blank" class="w-full text-center py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg">
            Buka Bahan Tayang Kelas XII
          </a>
        </div>

        <!-- CARD 6: CAPAIAN PEMBELAJARAN (CP & ATP) -->
        <div class="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex justify-between text-xs text-slate-500">
              <span class="font-semibold text-emerald-800">CP & ATP</span>
              <span class="font-mono bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">PDF · Drive</span>
            </div>
            <h3 class="text-base font-bold text-slate-900">Capaian Pembelajaran (CP) & ATP SMA</h3>
            <p class="text-xs text-slate-600">Panduan lengkap capaian pembelajaran elemen Al-Qur'an, Hadis, Akidah, Akhlak, Fiqih SMA.</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1gx1f_encJGxHOU6cS4Fc7_E7cDGmBuWy?usp=drive_link" target="_blank" class="w-full text-center py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg">
            Unduh Dokumen (Google Drive)
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 5. DOKUMEN PEMBELAJARAN (GALERI FOTO KBM & KARYA SISWA)                   -->
  <!-- ========================================================================= -->
  <section id="dokumentasi" class="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 uppercase">
            <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>DOKUMENTASI KBM &amp; PEMBIASAAN RELIGIUS</span>
          </div>
          <h2 class="text-3xl font-bold text-slate-900">Galeri Foto Otentik Pembelajaran PAI</h2>
          <p class="text-sm text-slate-600">Dokumentasi kegiatan belajar mengajar PAI dan pembinaan karakter di SMA Negeri 1 Krembung.</p>
        </div>
        <span class="text-xs text-emerald-800 font-bold bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-300">
          12 Foto Otentik Terverifikasi (KBM &amp; Masjid)
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- FOTO 1: PEMBELAJARAN MENDALAM (PM) -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTHwCG4OYCtXduvj891IjmDUv52MTVKRaBpzpKg3z98yw9_v5G6t_lli2bCJixVqAdiwPaxLyGzXkgIiBPyWOX_smLBIr4UbMNoqolq27ZJeZZgbi4KnSq0khh6q793AEvk1ZRIKLpfnwh8Hz1wBOcIHLIXKban3KOG5tjobT1hGkVulfF6kio34cGOjnk/s1600/Image_20250730_111825_005.jpeg" alt="Pembelajaran Mendalam PM SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">PM: Deep Learning</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">30 Juli 2025 · Fase E &amp; F</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Implementasi Pembelajaran Mendalam (PM): Nalar Kritis &amp; Analisis Tematik PAI</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Peserta didik berdiskusi kelompok mendalami makna ayat Al-Qur'an dan isu keagamaan kontemporer dengan nalar kritis di ruang kelas SMA Negeri 1 Krembung.</p>
          </div>
        </div>

        <!-- FOTO 2: KURIKULUM BERBASIS CINTA (KBC) -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjck4L0StkjujtxeXw9oAV4Obs_9rtkmu8u5akCjvTlNCZNejg8h9s_sQ1il6_T5hpFz61v7oTBA0rQ3F21DXx1sP0joIK82tDIGQoiaSz_ewrWNkMGKq9HCAy-iYxZddWPrHuMjrYq7xf0iStI5wyJPowxap6YwCXtQxazrI_e206l0DK_VE2XlSH6mh-1/s1600/IMG_1324%20%281%29.jpeg" alt="Kurikulum Berbasis Cinta KBC SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-rose-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">KBC: Mahabbah</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">Tahun Ajaran 2025/2026 · Fase E &amp; F</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Kurikulum Berbasis Cinta (KBC): Ruang Belajar Ramah, Welas Asih, &amp; Penuh Mahabbah</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Suasana kelas PAI yang humanis bersama Ibu Ulfatul Husna, S.Ag., M.Pd. Guru membimbing dengan ketulusan mahabbah dan keteladanan (Uswah Hasanah).</p>
          </div>
        </div>

        <!-- FOTO 3: MODERASI BERAGAMA (MB) -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1jzOHZb8jQtfD3KL6IM8ecRNEDIxqFHsTys9nSwTfmk17Jb0wzvT4C24abUsImVixJ7zr-EtTtz5uJ2VLpeojHYCuTDu-FLXnKjEftJXfGFF0Olg8tmm6V_PQtlvIl9HSBZgGTtRfDDBiaEAoIZ7_lN6RBd1VNSl2KXITwuSNdmYD-pOhcB6Gv0Rf0s0H/s1600/IMG_1120%20%281%29.jpeg" alt="Moderasi Beragama MB SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">MB: Wasathiyah</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">Tahun Ajaran 2025/2026 · Lintas Kelas</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Integrasi Moderasi Beragama (MB) &amp; Pembiasaan Akhlak Mulia Sivitas SMANIKRE</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Penguatan nilai-nilai Wasathiyah (sikap adil, toleran, dan tawazun) serta pembiasaan budi pekerti islami di lingkungan SMA Negeri 1 Krembung.</p>
          </div>
        </div>

        <!-- FOTO 4: KBM KOLABORATIF -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqOa_I1igU3BRkCA4tBNFc8SGxyEXhkaZe7z1-eyXjG0a832yxaZxCx6ovSfY1nmLRP5TzmoU7ShzpN-q2GkQXxbLL_lcVK3l6fWQHj6Ie2F-nuoTekeSPT2OGbv3p_FLLoXO7k8OgFhy9848x1PqjgTIHpY44piicMWowLz1jz3AcY8AgjPZrc_RkK8gY/s1600/IMG_1143%20(1).HEIC" alt="KBM Kolaboratif SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">KBM: Kolaboratif</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">Semester Ganjil 2025/2026 · Kelas X</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">KBM Kolaboratif &amp; Eksplorasi Literasi Keagamaan Siswa di Kelas</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Peserta didik aktif berdiskusi dalam kelompok kerja kecil menelaah materi fiqih dan lembar aktivitas ajar secara mandiri dan bernalar kritis.</p>
          </div>
        </div>

        <!-- FOTO 5: PANORAMA SHOLAT BERJAMA'AH -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA1RXeSWnoHqA1uK3X2YotWuNKhz3X_wmcskVf4UAqoo1wBl1yWWEs9oVIFMWjS-z5AYw6BzhKV2JvzBCXFGt529iEqwMdd7QPfgY65x16WOhOF7u1-NzpYa0VaSKfuRo2S8-V3INmVd4vZF7OwxfFE3uFLNdBLvyQlEi5xB3IRuTYOSB2e3jdPV2LugbO/s1600/IMG_1157.HEIC" alt="Panorama Sholat Berjamaah SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">Ibadah: Panorama</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">Tahun Ajaran 2025/2026 · Fase E &amp; F</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Panorama Pembiasaan Sholat Berjama'ah &amp; Istighotsah Siswa SMANIKRE</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Pembiasaan ibadah sholat berjama'ah dan doa bersama menumbuhkan kedisiplinan spiritual serta ukhuwah islamiyah segenap sivitas sekolah.</p>
          </div>
        </div>

        <!-- FOTO 6: REFLEKSI & ADAB -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxGkLPchAcigsQeLl7QBprjp03W97kkjkwKWSBi58QhS5AcZZpK6g0onmgz8icTzczsFINR1YVgUOLGz6KaJTxju25DDKdtnwJ6ZAxNYdLyGRyBUUDetsxjqqsXBiIwlDxrud73l-qT4kadcFcDcBTN3kbOlgXJ4d77U00Ldwm4t7mzKwFwlU_9ixrttaA/s1600/IMG_1161.HEIC" alt="Bimbingan Adab dan Rohani SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">Ibadah: Adab &amp; Doa</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">Semester Ganjil 2025/2026 · Kelas XI</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Bimbingan Adab, Doa Bersama, &amp; Refleksi Nilai Keagamaan Bersama Pendidik</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Refleksi spiritual pendampingan adab oleh Ibu Ulfatul Husna, S.Ag., M.Pd. membimbing siswa mengamalkan nilai kejujuran dan ketakwaan.</p>
          </div>
        </div>

        <!-- FOTO 7: PRESENTASI PROYEK MODERASI BERAGAMA -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqbxfPFDYsky5IZ38LmetijMirAOYl_f_Gr8lpRjK3ht2R0RXRRFkVit3YNri_T6jfWRPzU7ucNByVn3hW0yRCkQAypy9Cefnwp9Ac-lk7K3ftgFQ0Cs8xHhQjWS1lZAf4gr9dpni0OGqoxhksOWc4KsSzbSgoTfNKw6NDSobHc__t45mxIOXipzs3VAcF/s1600/IMG_1172%20(1).HEIC" alt="Presentasi Proyek P5 SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-amber-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">P5: Moderasi</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">Semester Ganjil 2025/2026 · Kelas X &amp; XI</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Presentasi Proyek Moderasi Beragama &amp; Diskusi Sintesis Pemikiran Kritis</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Siswa memaparkan hasil telaah kontekstual tentang harmoni sosial, kerukunan umat beragama, dan penolakan sikap intoleransi.</p>
          </div>
        </div>

        <!-- FOTO 8: PENDAMPINGAN KBC -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-Wzt9swbkl80fED3xQA3_8oDlT_iC0yUhzx5oBwdme8Oi8h3ZZCx8JDuGaQz80E3UWjXrmXWpfG4vPgOGpfZGNP3Y26RzRaHvc1FcqORfC9IPNPzP-RVewPW0Q8aSV_FT-Iw0s0_ptN2gvmxfUrP3_QvIHQh7Fyp0ypt5FawZ2-Q1Mwp3zkiisCrs3jBU/s1600/IMG_1173%20(4).HEIC" alt="Pendampingan Kasih Sayang SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-rose-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">KBC: Kasih Sayang</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">Tahun Ajaran 2025/2026 · Fase E &amp; F</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Pendampingan Belajar Personal &amp; Dialog Hangat Berbasis Kasih Sayang (KBC)</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Interaksi langsung pendidik mendampingi proses belajar secara humanis sehingga memupuk antusiasme dan rasa aman belajar siswa.</p>
          </div>
        </div>

        <!-- FOTO 9: KAJIAN & PEMBINAAN MASJID SMANIKRE -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyEOiP7YO-1fFnPY4eJwLG3sHpYVAgeUMGGWKjwK9opSvAi2nbFWkao_0dbaMCEP6d-6RQe68mcWyXXw95JRqhuhvXURpZmwDq5YkEHI9zL7BbA4KziQ3nWXGjMqSMaq6mJX18ez8uo1L5jXj-733Mgi7ERplfX2MyadQc-6ataGgOPFLeHIGQNck9FrFB/s1600/WhatsApp%20Image%202026-09-07%20at%2019.39.24%20%282%29.jpeg" alt="Kajian Masjid SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">🕌 Masjid: Kajian Rohani</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">7 September 2026 · Lintas Kelas</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Kegiatan Pembinaan Kerohanian &amp; Kajian Keislaman di Masjid SMANIKRE</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Pembinaan kerohanian Islam (Rohis SKIS) dan penguatan akhlak mulia siswa di masjid sekolah dalam suasana yang asri, khusyuk, dan tertib.</p>
          </div>
        </div>

        <!-- FOTO 10: TADARUS AL-QUR'AN MASJID -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg83J05KSle9gIUEyZVtkRKSb1_NtPhp4YaL__pcBVFt9SWVXgm-_SZW4PccZZj9Z16KLD_gEp7qlz9EHCD5ehD923BlVX4LxuxdD8uE6bIM4NcMliN1NfsxEXOU1JvgD_ZvV9-crynD7jYOElC08KdGX7v_R4Zt7iboeUSS-e3-SWzqajkhIYEQ74ekSy/s1600/WhatsApp%20Image%202026-09-07%20at%2019.39.25%20%284%29.jpeg" alt="Tadarus Masjid SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">🕌 Masjid: Tadarus &amp; Tahsin</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">7 September 2026 · Fase E &amp; F</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Tadarus Al-Qur'an &amp; Bimbingan Tahsin Berjama'ah Siswa di Masjid Sekolah</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Aktivitas pembiasaan membaca ayat suci Al-Qur'an tartil serta bimbingan tajwid bersama menghidupkan budaya literasi Al-Qur'an di masjid SMANIKRE.</p>
          </div>
        </div>

        <!-- FOTO 11: SHOLAT BERJAMA'AH MASJID -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhpsF2e-Oxqkpe3FTYLonDzXrSh8KOQF71nuWHe-KUAKa9yKqtUYgTyafxp5AC6gTcN0iYuKVjH9ajhckFCAJMHfn5KAHR59awVKQxzvwEzMeCg4LFr8EH05GnPvrGK2kTz6Ny_npZV6XQpWzMba6Q0gsRXE70WQkKchEaNbrUPfdic0I7_0FXJfOMr_BM/s4000/WhatsApp%20Image%202026-09-07%20at%2019.42.07%20%281%29%20%282%29.jpeg" alt="Sholat Berjamaah Masjid SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">🕌 Masjid: Sholat Berjama'ah</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">7 September 2026 · Seluruh Siswa</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Pembiasaan Sholat Berjama'ah (Dzuhur &amp; Dhuha) serta Doa Bersama di Masjid</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Keteraturan barisan shaf dan kekhusyukan doa melatih integritas spiritual serta mempererat persaudaraan ukhuwah islamiyah segenap sivitas sekolah.</p>
          </div>
        </div>

        <!-- FOTO 12: PEMBINAAN KEPUTRIAN MASJID -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div class="h-52 overflow-hidden bg-slate-900 relative">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWlXZzGcQ_BNo6ZK7ZfKSxRGZjcdI39lSz9k6k_6GWR_vbsKJzbo7GgV8tTDzYEwecBndgcQntJ_YiRObgTNyBG-zvDS7lL0Dtx4tpAMXkF39uKyw4AINqCWZ0jEPVvKlstekjnP9MDWSp0HySk48m4D6-E4VsNkNjkb1UkXEjqXeRiVxPWq309XGe5yIk/s4000/WhatsApp%20Image%202026-09-07%20at%2019.42.06%20%282%29.jpeg" alt="Pembinaan Keputrian Masjid SMANIKRE" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 bg-teal-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">🕌 Masjid: Bimbingan Keputrian</span>
          </div>
          <div class="p-4 space-y-1.5">
            <div class="text-[11px] text-slate-500 font-medium">7 September 2026 · Fase E &amp; F</div>
            <h3 class="text-sm font-bold text-slate-900 leading-snug">Pembinaan Akhlak Mulia, Bimbingan Keputrian, &amp; Motivasi Spiritual di Masjid</h3>
            <p class="text-xs text-slate-600 line-clamp-3">Sesi motivasi dan pembinaan budi pekerti remaja muslimah/keputrian bersama pendidik di masjid sekolah membekali keteladanan akhlak islami.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 6. GAME EDUKASI & KUIS INTERAKTIF                                         -->
  <!-- ========================================================================= -->
  <section id="game-edukasi" class="py-16 sm:py-20 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="space-y-2 text-center max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-900">Game Edukasi & Media Ajar Interaktif</h2>
        <p class="text-sm text-slate-600">Tautan permainan edukatif Wordwall, Quizizz, serta kuis interaktif.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- GAME 1: WORDWALL -->
        <div class="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
          <span class="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">Wordwall</span>
          <h3 class="text-base font-bold text-slate-900">Cocokkan Huruf Hijaiyah & Harakat</h3>
          <p class="text-xs text-slate-600">Game kartu memori untuk melatih ingatan bentuk huruf hijaiyah dan bunyi harakat.</p>
          <!-- PLACEHOLDER TAUTAN WORDWALL: Ganti href di bawah -->
          <a href="https://wordwall.net" target="_blank" class="block text-center py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
            Buka di Wordwall
          </a>
        </div>

        <!-- GAME 2: QUIZIZZ -->
        <div class="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
          <span class="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">Quizizz</span>
          <h3 class="text-base font-bold text-slate-900">Petualangan Kisah Teladan Nabi</h3>
          <p class="text-xs text-slate-600">Live kuis seru berpoin tinggi untuk menguji pemahaman sejarah Islam.</p>
          <!-- PLACEHOLDER TAUTAN QUIZIZZ: Ganti href di bawah -->
          <a href="https://quizizz.com" target="_blank" class="block text-center py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg">
            Buka di Quizizz
          </a>
        </div>

        <!-- GAME 3: KAHOOT -->
        <div class="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
          <span class="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">Kahoot!</span>
          <h3 class="text-base font-bold text-slate-900">Tantangan Cepat Tanggap Rukun Iman</h3>
          <p class="text-xs text-slate-600">Tebak nama & tugas 10 malaikat Allah SWT secara cepat dan menyenangkan.</p>
          <!-- PLACEHOLDER TAUTAN KAHOOT: Ganti href di bawah -->
          <a href="https://kahoot.it" target="_blank" class="block text-center py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg">
            Buka di Kahoot
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 7. FOOTER                                                                 -->
  <!-- ========================================================================= -->
  <footer class="py-12 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400 space-y-2">
      <p class="font-bold text-white text-sm">Ruang Belajar PAI &copy; 2026 · Ulfatul Husna, S.Ag., M.Pd.</p>
      <p>Pusat Administrasi & Media Pembelajaran Pendidikan Agama Islam SMA Negeri 1 Krembung</p>
      <p class="text-slate-300">Kontak Resmi WA: <a href="https://wa.me/6282232754232" target="_blank" class="text-emerald-400 font-semibold hover:underline">0822-3275-4232</a> · Email: <a href="mailto:pembelajaranulfa@gmail.com" class="text-emerald-400 hover:underline">pembelajaranulfa@gmail.com</a></p>
    </div>
  </footer>

</body>
</html>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                SINGLE FILE HTML + TAILWIND CSS CDN
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Ekspor Kode Mandiri (Single HTML File)
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

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Sesuai permintaan Anda, seluruh struktur halaman ini juga telah dikemas dalam satu file HTML terpadu 
          yang menggunakan <strong>Tailwind CSS via CDN</strong> lengkap dengan komentar kode (code comments) 
          placeholder tautan &amp; gambar. Anda dapat menyalin atau mengunduh file ini dan membukanya langsung di browser tanpa instalasi apapun!
        </p>

        {/* Action Buttons Top */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopyCode}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Berhasil Disalin ke Clipboard!' : 'Salin Seluruh Kode HTML'}</span>
          </button>

          <button
            onClick={handleDownloadFile}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Unduh File index.html</span>
          </button>
        </div>

        {/* Code Box */}
        <div className="relative bg-slate-950 text-slate-200 p-4 rounded-xl border border-slate-800 text-xs font-mono max-h-96 overflow-y-auto">
          <pre>{standaloneHtmlCode}</pre>
        </div>

        <div className="pt-2 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Tutup Jendela
          </button>
        </div>

      </div>
    </div>
  );
};
