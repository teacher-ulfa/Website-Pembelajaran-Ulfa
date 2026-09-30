export type DocumentCategory = 
  | 'all'
  | 'rpm'
  | 'RPM'
  | 'modul_ajar'
  | 'cp_atp'
  | 'promes_prota'
  | 'lkpd'
  | 'bahan_tayang'
  | 'asesmen'
  | 'p5_ppra';

export type FaseKurikulum = 
  | 'Semua' 
  | 'Fase E (Kelas X)' 
  | 'Fase F (Kelas XI)' 
  | 'Fase F (Kelas XII)' 
  | 'Fase E & F (SMA)';

export interface DocumentItem {
  id: string;
  title: string;
  category: DocumentCategory;
  categoryLabel: string;
  fase: FaseKurikulum;
  kelas: string;
  semester: 'Semester 1 (Ganjil)' | 'Semester 2 (Genap)' | '1 Tahun Penuh';
  fileFormat: 'PDF' | 'DOCX' | 'XLSX' | 'ZIP' | 'PPTX';
  fileSize: string;
  /* PLACEHOLDER: Ganti tautan di bawah ini dengan tautan Google Drive / Cloud Storage dokumen asli Anda */
  downloadUrl: string;
  lastUpdated: string;
  description: string;
  learningObjectives?: string[];
  totalPages?: number;
}

export type GalleryCategory = 'all' | 'kbm' | 'ibadah' | 'masjid' | 'karya_siswa' | 'p5_ppra';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  date: string;
  classGrade: string;
  description: string;
  /* PLACEHOLDER: Ganti path gambar atau URL foto asli kegiatan belajar Anda */
  imageUrl: string;
  imageAlt: string;
  accentColor: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface EducationalGame {
  id: string;
  title: string;
  platform: 'Wordwall' | 'Quizizz' | 'Kahoot' | 'Educaplay' | 'Internal' | 'Google Sites';
  category: string;
  targetGrade: string;
  /* PLACEHOLDER: Tautan langsung ke game eksternal */
  playUrl: string;
  /* PLACEHOLDER: URL embed iframe (misal Wordwall embed) */
  embedUrl?: string;
  description: string;
  playCount?: string;
  badgeColor?: string;
}

export interface PedagogyPillar {
  shortCode: string; // e.g. 'PM', 'MB', 'KBC'
  name: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

export interface TeacherProfile {
  name: string;
  titleHonorific: string;
  nip: string;
  pangkatGolongan: string;
  schoolName: string;
  schoolAddress: string;
  schoolLogoUrl: string;
  photoUrl?: string;
  pedagogyApproachTagline: string;
  pedagogyPillars: PedagogyPillar[];
  bio: string;
  vision: string;
  missions: string[];
  philosophies: {
    title: string;
    description: string;
  }[];
  credentials: {
    year: string;
    title: string;
    institution: string;
  }[];
  contact: {
    email: string;
    whatsapp: string;
    phoneDisplay?: string;
    rawPhone?: string;
    instagram: string;
    youtube: string;
  };
}
