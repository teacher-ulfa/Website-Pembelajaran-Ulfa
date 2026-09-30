import React, { useState } from 'react';
import { TeacherProfile } from '../types';
import { 
  UserCheck, 
  Compass, 
  HeartHandshake, 
  Award, 
  Mail, 
  Building2, 
  FileBadge,
  Sparkles,
  Quote,
  Brain,
  Heart,
  Scale,
  CheckCircle2,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';

interface ProfileSectionProps {
  profile: TeacherProfile;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<'pendekatan' | 'visi-misi' | 'filosofi' | 'kompetensi'>('pendekatan');
  
  // Custom image state to allow teacher to preview their own picture locally right away!
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const phoneToCopy = profile.contact.rawPhone || '082232754232';
    navigator.clipboard.writeText(phoneToCopy);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="profil" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 uppercase mb-2">
            <span>PROFIL PENDIDIK &amp; LEMBAGA</span>
            <span aria-hidden="true">·</span>
            <span>DEDIKASI EDUKASI ISLAMI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Mengenal Pendidik &amp; Nilai Pembelajaran PAI
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Profil guru mata pelajaran Pendidikan Agama Islam, visi misi pembentukan karakter mulia, 
            serta filosofi mendidik yang menuntun kodrat generasi berakhlakul karimah.
          </p>
        </div>

        {/* Profile Card & Detailed Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Teacher Identity Card (Col 4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            
            {/* Foto Profil Pendidik dengan Frame Profesional */}
            <div className="text-center space-y-3">
              <div className="relative mx-auto w-36 h-36 rounded-2xl overflow-hidden bg-gradient-to-tr from-emerald-800 to-teal-600 p-1 shadow-md">
                
                {/* Fallback & Real Photo Container */}
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center relative">
                  {customAvatar ? (
                    <img
                      src={customAvatar}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* PLACEHOLDER: Tampilan foto profil default berkarakter Islami & edukatif */
                    <div className="w-full h-full bg-gradient-to-b from-emerald-100 via-teal-50 to-emerald-200 flex flex-col items-center justify-center text-emerald-900 p-3">
                      <UserCheck className="w-14 h-14 text-emerald-700" />
                      <span className="text-[10px] font-semibold text-emerald-800 mt-1 uppercase tracking-wider">
                        Foto Pendidik
                      </span>
                    </div>
                  )}

                  {/* Subtle verified badge */}
                  <div className="absolute bottom-1 right-1 bg-emerald-600 text-white p-1 rounded-full shadow-sm" title="Pendidik Tersertifikasi">
                    <FileBadge className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Tombol Coba Ganti Foto Langsung di Browser */}
              <div className="pt-1">
                <label className="cursor-pointer text-[11px] font-medium text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1">
                  <span>+ Uji Coba Ganti Foto Profil</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Nama & Gelar Pendidik */}
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {profile.name}
                </h3>
                <p className="text-xs font-medium text-emerald-700 mt-0.5">
                  {profile.titleHonorific}
                </p>
                <p className="text-xs text-slate-600 font-mono mt-0.5">
                  NIP. {profile.nip}
                </p>
                {profile.pangkatGolongan && (
                  <div className="mt-1.5">
                    <span className="text-[11px] font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md inline-block">
                      Pangkat/Golongan: {profile.pangkatGolongan}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* School & Contact Meta with Official School Logo */}
            <div className="pt-4 border-t border-slate-100 space-y-3 text-xs">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-11 h-11 rounded-lg bg-white p-1 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
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
                  <span className="font-bold text-slate-900 block">{profile.schoolName}</span>
                  <span className="text-[11px] text-slate-500">{profile.schoolAddress}</span>
                </div>
              </div>

              {/* WhatsApp Row */}
              <div className="flex items-center justify-between gap-2 text-slate-600 px-1 py-0.5 bg-emerald-50/70 rounded-lg border border-emerald-100">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">WhatsApp Resmi</span>
                    <a 
                      href={profile.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-950 hover:text-emerald-700 hover:underline"
                      title="Buka Chat WhatsApp"
                    >
                      {profile.contact.phoneDisplay || '0822-3275-4232'}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  type="button"
                  title="Salin Nomor WhatsApp"
                  className="px-2 py-1 text-[11px] font-medium text-emerald-700 hover:text-emerald-900 bg-white hover:bg-emerald-100/60 border border-emerald-200 rounded-md transition-colors flex items-center gap-1 shrink-0"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-emerald-600" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Row */}
              <div className="flex items-center gap-2.5 text-slate-600 px-1">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a 
                  href={`mailto:${profile.contact.email}`} 
                  className="hover:text-emerald-700 hover:underline truncate text-xs"
                  title="Kirim Email"
                >
                  {profile.contact.email}
                </a>
              </div>
            </div>

            {/* Singkat Bio */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
              <p>{profile.bio}</p>
            </div>

            {/* Hubungi via WhatsApp Button */}
            <a
              href={profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>Hubungi via WhatsApp ({profile.contact.phoneDisplay || '0822-3275-4232'})</span>
            </a>
          </div>

          {/* Right Column: Visi Misi, Filosofi, & Riwayat (Col 8) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Interactive Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl max-w-xl overflow-x-auto">
              <button
                onClick={() => setActiveTab('pendekatan')}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'pendekatan'
                    ? 'bg-white text-emerald-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pendekatan PM, MB, KBC
              </button>
              <button
                onClick={() => setActiveTab('visi-misi')}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'visi-misi'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Visi &amp; Misi
              </button>
              <button
                onClick={() => setActiveTab('filosofi')}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'filosofi'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Filosofi Belajar
              </button>
              <button
                onClick={() => setActiveTab('kompetensi')}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'kompetensi'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Kompetensi Guru
              </button>
            </div>

            {/* TAB: PENDEKATAN PM, MB, KBC */}
            {activeTab === 'pendekatan' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="space-y-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>Paradigma Pedagogis Unggulan</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {profile.pedagogyApproachTagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sinergi harmonis tiga pilar pendidikan di SMA Negeri 1 Krembung yang mengintegrasikan kecerdasan intelektual, kematangan spiritual wasathiyah, dan ketulusan hati dalam proses belajar mengajar.
                  </p>
                </div>

                {/* 3 Pillars Cards */}
                <div className="space-y-4">
                  {profile.pedagogyPillars?.map((pillar, idx) => {
                    const iconMap: Record<string, React.ReactNode> = {
                      PM: <Brain className="w-5 h-5 text-emerald-700" />,
                      MB: <Scale className="w-5 h-5 text-teal-700" />,
                      KBC: <Heart className="w-5 h-5 text-rose-600" />
                    };

                    const badgeColorMap: Record<string, string> = {
                      PM: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                      MB: 'bg-teal-50 text-teal-800 border-teal-200',
                      KBC: 'bg-rose-50 text-rose-800 border-rose-200'
                    };

                    return (
                      <div
                        key={pillar.shortCode || idx}
                        className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all bg-slate-50/50 space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                              {iconMap[pillar.shortCode] || <Sparkles className="w-5 h-5 text-emerald-700" />}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900">{pillar.name}</h4>
                              <p className="text-xs text-slate-500 font-medium">{pillar.subtitle}</p>
                            </div>
                          </div>
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border self-start sm:self-auto uppercase tracking-wider ${badgeColorMap[pillar.shortCode] || 'bg-slate-100 text-slate-800 border-slate-200'}`}>
                            Pilar {idx + 1} · {pillar.shortCode}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {pillar.description}
                        </p>

                        <div className="pt-2 border-t border-slate-200/70">
                          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Prinsip &amp; Penerapan Nyata:</p>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {pillar.keyPoints.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200/80 flex items-start gap-3 text-xs sm:text-sm text-emerald-950">
                  <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Integrasi di Kelas:</strong> Guru bukan hanya pentransfer materi ajar, melainkan pembimbing rohani yang menuntun dengan welas asih (KBC), mendialogkan fenomena sosial dan keagamaan dengan nalar wasathiyah yang toleran (MB), serta mengasah pemahaman mendalam yang bermakna bagi masa depan siswa SMA (PM).
                  </p>
                </div>
              </div>
            )}

            {/* TAB 1: VISI & MISI */}
            {activeTab === 'visi-misi' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-7 shadow-xs">
                {/* Visi */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <Compass className="w-5 h-5 text-emerald-700" />
                    <h3 className="text-base font-bold text-slate-900">Visi Pembelajaran</h3>
                  </div>
                  <div className="p-4 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-xl">
                    <p className="text-sm sm:text-base font-medium text-emerald-950 italic leading-relaxed">
                      &ldquo;{profile.vision}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Misi */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <Sparkles className="w-5 h-5 text-emerald-700" />
                    <h3 className="text-base font-bold text-slate-900">Misi Operasional</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {profile.missions.map((mission, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{mission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: FILOSOFI PEMBELAJARAN */}
            {activeTab === 'filosofi' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <HeartHandshake className="w-5 h-5 text-emerald-700" />
                    <h3 className="text-base font-bold text-slate-900">Filosofi Pendidikan Islam &amp; Merdeka Belajar</h3>
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <div className="space-y-4">
                  {profile.philosophies.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 bg-white transition-all space-y-1.5"
                    >
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-500 italic">
                  * Mengacu pada semboyan Tut Wuri Handayani dan prinsip Tarbiyah Islamiyah: Menuntun dengan kasih, mengajar dengan hikmah, dan menilai dengan adil.
                </div>
              </div>
            )}

            {/* TAB 3: KOMPETENSI & REKAM JEJAK */}
            {activeTab === 'kompetensi' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 pb-2 border-b border-slate-100">
                  <Award className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-base font-bold text-slate-900">Sertifikasi &amp; Rekam Jejak Pendidik</h3>
                </div>

                <div className="space-y-3">
                  {profile.credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">{cred.title}</h4>
                        <p className="text-xs text-slate-500">{cred.institution}</p>
                      </div>
                      <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 self-start sm:self-auto">
                        {cred.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
