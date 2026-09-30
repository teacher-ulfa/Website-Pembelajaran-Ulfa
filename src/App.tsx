/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileSection } from './components/ProfileSection';
import { PerangkatPAI } from './components/PerangkatPAI';
import { DokumentasiGaleri } from './components/DokumentasiGaleri';
import { GameEdukasi } from './components/GameEdukasi';
import { Footer } from './components/Footer';
import { DocumentPreviewModal } from './components/DocumentPreviewModal';
import { GalleryLightboxModal } from './components/GalleryLightboxModal';
import { CustomizationGuideModal } from './components/CustomizationGuideModal';
import { ExportHtmlModal } from './components/ExportHtmlModal';

import { 
  teacherProfileData, 
  documentItemsData, 
  galleryItemsData, 
  educationalGamesData 
} from './data/mockData';
import { DocumentItem, GalleryItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  // Modal States
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Active section observer on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'profil', 'perangkat', 'dokumentasi', 'game-edukasi'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 100;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* 1. TOP BAR NAVBAR */}
      <Navbar
        activeSection={activeSection}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* MAIN CONTENT RUNNING ON SINGLE PAGE APPLICATION */}
      <main className="flex-1">
        {/* 2. HERO SECTION DENGAN COVER & ETALASE FOTO OTENTIK */}
        <Hero
          onOpenPerangkat={() => {
            const el = document.getElementById('perangkat');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenGame={() => {
            const el = document.getElementById('game-edukasi');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenDokumentasi={() => {
            const el = document.getElementById('dokumentasi');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenLightbox={(item) => setSelectedGalleryItem(item)}
          featuredItems={galleryItemsData.filter((item) => Boolean(item.imageUrl))}
          teacherProfile={teacherProfileData}
        />

        {/* 3. PROFIL PENDIDIK & SEKOLAH */}
        <ProfileSection profile={teacherProfileData} />

        {/* 4. PERANGKAT PEMBELAJARAN PAI (DIREKTORI RPP, CP/SILABUS, LKPD) */}
        <PerangkatPAI
          documents={documentItemsData}
          onPreviewDocument={(doc) => setSelectedDocument(doc)}
        />

        {/* 5. DOKUMEN PEMBELAJARAN (GALERI FOTO KBM & KARYA SISWA) */}
        <DokumentasiGaleri
          items={galleryItemsData}
          onOpenLightbox={(item) => setSelectedGalleryItem(item)}
        />

        {/* 6. GAME EDUKASI & KUIS INTERAKTIF PAI */}
        <GameEdukasi games={educationalGamesData} />
      </main>

      {/* 7. QUIET FOOTER */}
      <Footer
        profile={teacherProfileData}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* MODALS */}
      <DocumentPreviewModal
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
      />

      <GalleryLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      <CustomizationGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      <ExportHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
