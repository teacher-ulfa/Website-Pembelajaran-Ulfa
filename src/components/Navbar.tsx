import React, { useState } from 'react';
import { BookOpen, Menu, X, HelpCircle, Code2, Download, MessageCircle } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenGuide: () => void;
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenGuide,
  onOpenExportModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#beranda', label: 'Beranda', id: 'beranda' },
    { href: '#profil', label: 'Profil', id: 'profil' },
    { href: '#perangkat', label: 'Perangkat PAI', id: 'perangkat' },
    { href: '#dokumentasi', label: 'Dokumentasi', id: 'dokumentasi' },
    { href: '#game-edukasi', label: 'Game Edukasi', id: 'game-edukasi' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single Brand Wordmark with SMANIKRE School Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-2.5 text-slate-900 focus-visible:outline-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          >
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjhEe7DsQaweQWtckuBY0QdRPB_J0RbHqfSXb0fFnNGOQYwfzbn9SyTV1WORteNpd7S3rcGj3FYpaCf0X7tjQpcXoDfErD-aWPD9kTf-6auJIoAZ3ETmXpvuoVydS7H87HO-vidqv4ECyayUG4dFJNZNMuVWD2lUyaMaF7ox5BYCfAksicgx7ryvy6V56Z/s1600/LOGO%20SMANIKRE%20(1).png"
                alt="Logo SMA Negeri 1 Krembung"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to icon if remote image is blocked
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 leading-tight">
                Ruang Belajar PAI
              </span>
              <span className="text-[10px] text-emerald-800 font-semibold tracking-wider uppercase">
                SMAN 1 Krembung
              </span>
            </div>
          </a>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors py-1 relative hover:text-slate-900 ${
                    isActive
                      ? 'text-emerald-700 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-700'
                      : ''
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenExportModal}
              title="Unduh template single-file HTML untuk kemudahan pengujian offline / cPanel"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <Code2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Kode HTML</span>
            </button>

            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>Panduan Ganti Data</span>
            </button>

            <a
              href="https://wa.me/6282232754232?text=Assalamu%27alaikum%20Ibu%20Ulfatul%20Husna%2C%20S.Ag.%2C%20M.Pd."
              target="_blank"
              rel="noopener noreferrer"
              title="Konsultasi WA: 0822-3275-4232"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>WA Guru</span>
            </a>

            <a
              href="#perangkat"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Modul</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenGuide}
              aria-label="Buka Panduan"
              className="p-1.5 text-slate-600 hover:text-slate-900 rounded-md"
            >
              <HelpCircle className="w-5 h-5 text-emerald-700" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg"
            >
              <Code2 className="w-4 h-4" />
              <span>Ekspor Kode HTML Mandiri</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg"
            >
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              <span>Panduan Ganti Tautan & Data Asli</span>
            </button>
            <a
              href="https://wa.me/6282232754232?text=Assalamu%27alaikum%20Ibu%20Ulfatul%20Husna%2C%20S.Ag.%2C%20M.Pd."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp Ibu Ulfa: 0822-3275-4232</span>
            </a>
            <a
              href="#perangkat"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-white bg-emerald-700 rounded-lg"
            >
              <Download className="w-4 h-4" />
              <span>Akses Direktori Perangkat PAI</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
