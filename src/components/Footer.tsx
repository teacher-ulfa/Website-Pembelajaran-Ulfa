import React from 'react';
import { BookOpen, Heart, Mail, ExternalLink, MessageCircle, FileText } from 'lucide-react';
import { TeacherProfile } from '../types';

interface FooterProps {
  profile: TeacherProfile;
  onOpenGuide?: () => void;
  onOpenExportModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenGuide,
  onOpenExportModal
}) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Upper Footer: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3 text-white font-semibold text-base">
              <div className="w-9 h-9 rounded-lg bg-white p-0.5 border border-slate-700 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={profile.schoolLogoUrl}
                  alt={profile.schoolName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="block leading-tight">Ruang Belajar PAI</span>
                <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">SMAN 1 Krembung</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Portal administrasi pembelajaran Pendidikan Agama Islam dan Budi Pekerti Kurikulum Merdeka diampu oleh <strong>{profile.name}</strong> ({profile.pangkatGolongan}). 
              Menerapkan <strong>Pendekatan Pembelajaran Mendalam (PM)</strong> terintegrasi <strong>Moderasi Beragama (MB)</strong> dan <strong>Kurikulum Berbasis Cinta (KBC)</strong>.
            </p>
            {profile.photoUrl && (
              <div className="flex items-center gap-2.5 pt-1">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-emerald-500/60 shrink-0 shadow-xs">
                  <img
                    src={profile.photoUrl}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="font-semibold text-slate-200 block">{profile.name}</span>
                  <span className="text-emerald-400 text-[10px]">Guru PAI SMAN 1 Krembung</span>
                </div>
              </div>
            )}
            <div className="text-slate-400 text-[11px] pt-1">
              <span className="font-semibold text-slate-300">{profile.schoolName}</span>
              <span className="block text-slate-500">{profile.schoolAddress}</span>
            </div>
          </div>

          {/* Nav Links Col (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 block">
              Navigasi Halaman
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#beranda" className="hover:text-emerald-400 transition-colors">Beranda Utama</a>
              </li>
              <li>
                <a href="#profil" className="hover:text-emerald-400 transition-colors">Profil Pendidik &amp; Visi-Misi</a>
              </li>
              <li>
                <a href="#perangkat" className="hover:text-emerald-400 transition-colors">Perangkat Pembelajaran PAI (Modul Ajar / CP / LKPD)</a>
              </li>
              <li>
                <a href="#dokumentasi" className="hover:text-emerald-400 transition-colors">Dokumentasi KBM &amp; Karya Siswa</a>
              </li>
              <li>
                <a href="#game-edukasi" className="hover:text-emerald-400 transition-colors">Game Edukasi &amp; Kuis Interaktif</a>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Academic Portal (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 block">
              Portal Akademik
            </span>
            <div className="space-y-2">
              <a
                href="#perangkat"
                className="w-full text-left inline-flex items-center gap-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direktori Modul &amp; LKPD</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1gx1f_encJGxHOU6cS4Fc7_E7cDGmBuWy?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left inline-flex items-center gap-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Google Drive Cloud PAI</span>
              </a>
            </div>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <span className="block font-semibold text-slate-300">Kontak Pendidik:</span>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WA: </span>
                <a 
                  href={profile.contact.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 font-semibold hover:underline"
                  title="Hubungi via WhatsApp"
                >
                  {profile.contact.phoneDisplay || '0822-3275-4232'}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Email: </span>
                <a href={`mailto:${profile.contact.email}`} className="text-emerald-400 hover:underline">
                  {profile.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer: Clean Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Ruang Belajar PAI · Dikelola oleh {profile.name}. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Didedikasikan untuk kemajuan Pendidikan Agama Islam di Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
