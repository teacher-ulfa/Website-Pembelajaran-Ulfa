import { DocumentItem, GalleryItem, QuizQuestion, EducationalGame, TeacherProfile } from '../types';

/**
 * =========================================================================
 * DATA PROFIL PENDIDIK & SEKOLAH
 * =========================================================================
 */
export const teacherProfileData: TeacherProfile = {
  name: 'Ulfatul Husna, S.Ag., M.Pd.',
  titleHonorific: 'Guru Mata Pelajaran PAI & Budi Pekerti',
  nip: '197410101998022001',
  pangkatGolongan: 'Pembina Utama Muda / IV.c',
  schoolName: 'SMA Negeri 1 Krembung - Sidoarjo',
  schoolAddress: 'Jl. Raya Kecamatan No. 2 Krembung - Sidoarjo - Jawa Timur',
  /* LOGO RESMI SMANIKRE (SMA NEGERI 1 KREMBUNG) */
  schoolLogoUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjhEe7DsQaweQWtckuBY0QdRPB_J0RbHqfSXb0fFnNGOQYwfzbn9SyTV1WORteNpd7S3rcGj3FYpaCf0X7tjQpcXoDfErD-aWPD9kTf-6auJIoAZ3ETmXpvuoVydS7H87HO-vidqv4ECyayUG4dFJNZNMuVWD2lUyaMaF7ox5BYCfAksicgx7ryvy6V56Z/s1600/LOGO%20SMANIKRE%20(1).png',
  pedagogyApproachTagline: 'Pendekatan Pembelajaran Mendalam (PM) terintegrasi Moderasi Beragama (MB) dan Kurikulum Berbasis Cinta (KBC)',
  pedagogyPillars: [
    {
      shortCode: 'PM',
      name: 'Pembelajaran Mendalam (PM)',
      subtitle: 'Deep Learning & Nalar Kritis',
      description: 'Pembelajaran bermakna yang melampaui hafalan tekstual semata. Membimbing siswa SMA menautkan hakikat nilai-nilai ilahi dengan penalaran rasional, pemecahan masalah kontemporer (HOTS), serta aplikasi nyata dalam kehidupan sehari-hari.',
      keyPoints: [
        'Konseptual mendalam: memahami esensi dan hikmah syariat secara utuh',
        'Nalar kritis & saintifik: menautkan firman Allah dengan fenomena iptek modern',
        'Keterlibatan bermakna: peserta didik sebagai subjek aktif perancang karya kebaikan'
      ]
    },
    {
      shortCode: 'MB',
      name: 'Moderasi Beragama (MB)',
      subtitle: 'Wasathiyah & Kebhinekaan',
      description: 'Penanaman pemahaman dan pengamalan ajaran Islam yang adil, seimbang, dan santun (wasathiyah). Menumbuhkan cinta tanah air, penghargaan terhadap keragaman, anti-kekerasan, serta sikap toleransi di tengah kemajemukan bangsa.',
      keyPoints: [
        'Prinsip Wasathiyah: Tawasuth (moderat), Tawazun (seimbang), & Tasamuh (toleran)',
        'Komitmen kebangsaan: membentengi remaja dari ujaran kebencian & ekstremisme',
        'Akomodatif budaya luhur nusantara: dakwah santun meneladani kearifan para ulama'
      ]
    },
    {
      shortCode: 'KBC',
      name: 'Kurikulum Berbasis Cinta (KBC)',
      subtitle: 'Mahabbah & Ruang Belajar Ramah',
      description: 'Paradigma pendidikan humanis berlandaskan cinta kasih (mahabbah) dan ketulusan hati pendidik. Menjadikan ruang kelas sebagai lingkungan yang aman, ramah, dan membahagiakan, di mana hati murid disentuh terlebih dahulu sebelum pikirannya diasah.',
      keyPoints: [
        'Keteladanan & kelembutan (Uswah Hasanah): mendidik tanpa amarah dan diskriminasi',
        'Ibadah atas dasar cinta: mendirikan sholat dan tadarus dengan kesadaran rindu kepada Allah',
        'Relasi suportif: mendengarkan keluh kesah murid remaja dan menumbuhkan rasa percaya diri'
      ]
    }
  ],
  bio: 'Pendidik Pendidikan Agama Islam dan Budi Pekerti di SMA Negeri 1 Krembung Sidoarjo. Menerapkan Pendekatan Pembelajaran Mendalam (PM) terintegrasi Moderasi Beragama (MB) dan Kurikulum Berbasis Cinta (KBC) untuk menuntun siswa SMA memiliki keteguhan akidah, akhlak mulia, nalar kritis, dan berjiwa rahmatan lil \'alamin.',
  vision: 'Terwujudnya peserta didik SMA yang bertakwa kepada Allah SWT, berakhlak mulia, berwawasan rahmatan lil \'alamin, unggul dalam nalar kritis keilmuan melalui Pembelajaran Mendalam, berakar pada Moderasi Beragama, dan bermekaran dalam Kurikulum Berbasis Cinta.',
  missions: [
    'Menerapkan Pembelajaran Mendalam (PM) yang merangsang nalar kritis, riset kontekstual, dan refleksi batin peserta didik SMA.',
    'Mengintegrasikan Moderasi Beragama (MB) guna menumbuhkan sikap toleran (tasamuh), adil, dan cinta tanah air dalam bingkai NKRI.',
    'Mengimplementasikan Kurikulum Berbasis Cinta (KBC) dengan menciptakan iklim madrasah/sekolah yang aman, ramah, welas asih, dan menggembirakan.',
    'Membiasakan budaya religius di lingkungan SMANIKRE melalui sholat berjamaah, dhuha, tadarus Al-Qur\'an, dan pembinaan keputrian/Rohis SKIS.'
  ],
  philosophies: [
    {
      title: 'Pembelajaran Mendalam (Deep Learning) & Nalar Kritis',
      description: 'Pendidikan agama bukan sekadar mentransfer tumpukan dogma atau hafalan mekanis, melainkan menstimulasi pemahaman konseptual esensial, daya nalar kritis, dan koneksi spiritual yang bermakna bagi masa depan peserta didik.'
    },
    {
      title: 'Moderasi Beragama (Wasathiyah) & Cinta Tanah Air',
      description: 'Menanamkan pemahaman agama yang inklusif, menghormati hakikat kemanusiaan, menjunjung tinggi nilai-nilai kebangsaan, dan menolak segala bentuk ekstremisme maupun kekerasan atas nama agama.'
    },
    {
      title: 'Kurikulum Berbasis Cinta (KBC) & Uswah Hasanah',
      description: 'Menyentuh hati sebelum mengasah akal. Pendidik hadir dengan ketulusan mahabbah, menghadirkan atmosfer belajar yang memuliakan martabat siswa tanpa celaan, sehingga ilmu meresap menjadi budi pekerti luhur.'
    }
  ],
  credentials: [
    {
      year: 'Golongan Aktif',
      title: 'Pembina Utama Muda (Golongan IV.c)',
      institution: 'Pemerintah Provinsi Jawa Timur'
    },
    {
      year: 'Pendidik Profesional',
      title: 'Sertifikasi Guru Pendidik Profesional PAI',
      institution: 'Kementerian Agama / Kemendikbudristek'
    },
    {
      year: 'Magister Pendidikan',
      title: 'Magister Pendidikan (M.Pd)',
      institution: 'Program Pascasarjana Pendidikan'
    },
    {
      year: 'Sarjana Agama',
      title: 'Sarjana Agama (S.Ag)',
      institution: 'Fakultas Tarbiyah dan Ilmu Keguruan'
    }
  ],
  contact: {
    email: 'pembelajaranulfa@gmail.com',
    whatsapp: 'https://wa.me/6282232754232?text=Assalamu%27alaikum%20Ibu%20Ulfatul%20Husna%2C%20S.Ag.%2C%20M.Pd.',
    phoneDisplay: '0822-3275-4232',
    rawPhone: '082232754232',
    instagram: 'https://instagram.com/ulfa_h',
    youtube: 'https://youtube.com/@ulfatulhusna3704'
  }
};

/**
 * =========================================================================
 * DIREKTORI PERANGKAT PEMBELAJARAN PAI TINGKAT SMA (KURIKULUM MERDEKA)
 * =========================================================================
 * Fase E (Kelas X) & Fase F (Kelas XI - XII) SMA Negeri 1 Krembung
 */
export const GOOGLE_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1gx1f_encJGxHOU6cS4Fc7_E7cDGmBuWy?usp=drive_link';
export const DRIVE_LKPD_KELAS_X_URL = 'https://drive.google.com/drive/folders/1gOBfvwGowdmTcKy4ZlwyfgXsBy6uu7XH?usp=sharing';
export const DRIVE_LKPD_KELAS_XII_URL = 'https://drive.google.com/drive/folders/1OGTwBESvTrMSf3YIovcbx12q_XBrrvbx?usp=sharing';
export const DRIVE_BAHAN_TAYANG_KELAS_XII_URL = 'https://drive.google.com/drive/folders/1B3zuwMCiJDcCPCHoPU8ywbMDrAwBiAeZ?usp=sharing';
export const APLIKASI_GAME_IQRA_URL = 'https://sites.google.com/guru.sma.belajar.id/iqra-sman1kre/iqra-4';

export const documentItemsData: DocumentItem[] = [
  {
    id: 'doc-sma-01',
    title: 'Capaian Pembelajaran (CP) & Alur Tujuan Pembelajaran (ATP) PAI SMA Fase E & F',
    category: 'cp_atp',
    categoryLabel: 'CP & ATP',
    fase: 'Fase E & F (SMA)',
    kelas: 'Kelas X, XI, XII SMA',
    semester: '1 Tahun Penuh',
    fileFormat: 'PDF',
    fileSize: '2.8 MB',
    downloadUrl: GOOGLE_DRIVE_FOLDER_URL,
    lastUpdated: 'Juli 2026',
    description: 'Panduan Capaian Pembelajaran resmi PAI & BP jenjang SMA (Fase E Kelas X dan Fase F Kelas XI-XII) meliputi Al-Qur\'an Hadis, Akidah, Akhlak, Fiqih, dan Sejarah Peradaban Islam.',
    totalPages: 34,
    learningObjectives: [
      'Menganalisis ayat Al-Qur\'an tentang berpikir kritis, iptek, dan memelihara kehidupan manusia',
      'Memahami cabang-cabang iman (Syu\'abul Iman) dan dampaknya dalam pencegahan pergaulan bebas',
      'Menganalisis ketentuan fiqih muamalah kontemporer: bank syariah, asuransi syariah, munakahat dan mawaris',
      'Mengapresiasi perkembangan peradaban Islam dan peran ulama nusantara dalam merawat kebhinekaan'
    ]
  },
  {
    id: 'doc-sma-02',
    title: 'RPM Bab 1: Sabar dalam Menghadapi Ujian dan Musibah',
    category: 'rpm',
    categoryLabel: 'RPM (Rencana Pembelajaran Mendalam)',
    fase: 'Fase F (Kelas XII)',
    kelas: 'Kelas XII SMA',
    semester: 'Semester 1 (Ganjil)',
    fileFormat: 'DOCX',
    fileSize: '1.9 MB',
    downloadUrl: 'https://docs.google.com/document/d/1vSrLedCNF0HuRB0GQfSzx2ZOpQvTHQ252ReQav1QV48/edit?usp=drive_link',
    lastUpdated: 'Agustus 2026',
    description: 'Rencana Pembelajaran Mendalam kelas XII SMA kajian QS. Al-Baqarah : 155-156 dan QS. Ibrahim : 9 tentang sabar dalam menghadapi ujian dan musibah.',
    totalPages: 22,
    learningObjectives: [
      'Peserta Didik mampu melafalkan dan menghafalkan Q.S. al-Baqarah/2: 155-156 dan Q.S. Ibrahim/14: 9 secara fasih sesuai kaidah tajwid.',
      'Menganalisis substansi teologis dan historis ayat.',
      'Serta mengaitkan dan mengaktualisasikannya dalam penyelesaian realitas sosial kemasyarakatan yang majemuk menggunakan prinsip Tawassuth (moderat), Tawazun (seimbang), dan Tasamuh (toleran).'
    ]
  },
  {
    id: 'doc-sma-03',
    title: 'RPM Bab 2: Iman, Islam dan Ihsan',
    category: 'rpm',
    categoryLabel: 'RPM (Rencana Pembelajaran Mendalam)',
    fase: 'Fase F (Kelas XII)',
    kelas: 'Kelas XII SMA',
    semester: 'Semester 1 (Ganjil)',
    fileFormat: 'DOCX',
    fileSize: '2.3 MB',
    downloadUrl: 'https://docs.google.com/document/d/1u_s3PFF2nr-cA3gRaHPQ9z-4tRUdHtpkB_QokSFb8JQ/edit?usp=drive_link',
    lastUpdated: 'September 2026',
    description: 'Rencana Pembelajaran Mendalam (RPM) kajian Hadis Jibril tentang keterkaitan integratif antara rukun iman, rukun Islam, dan ihsan serta pembentukan karakter insan kamil yang berimbang spiritual dan sosial.',
    totalPages: 20,
    learningObjectives: [
      'Peserta didik mampu menjelaskan dan menganalisis pengertian serta dalil keterkaitan antara iman, Islam, dan ihsan secara komprehensif berdasarkan Hadis Jibril.',
      'Mendemonstrasikan karakter insan kamil dalam kehidupan sehari-hari melalui aksi nyata yang berlandaskan keseimbangan spiritual dan sosial (Moderasi Beragama).'
    ]
  },
  {
    id: 'doc-sma-04',
    title: 'Modul Ajar Fiqih: Ekonomi Syariah (Bank Syariah, Asuransi Syariah, & Koperasi Syariah)',
    category: 'modul_ajar',
    categoryLabel: 'Modul Ajar / RPP',
    fase: 'Fase F (Kelas XI)',
    kelas: 'Kelas XI SMA',
    semester: 'Semester 1 (Ganjil)',
    fileFormat: 'DOCX',
    fileSize: '2.5 MB',
    downloadUrl: GOOGLE_DRIVE_FOLDER_URL,
    lastUpdated: 'Agustus 2026',
    description: 'Pembelajaran kontekstual fiqih muamalah kontemporer mengenai prinsip bagi hasil (mudharabah & musyarakah), akad takaful asuransi syariah, dan penghindaran riba.',
    totalPages: 24,
    learningObjectives: [
      'Membedakan prinsip operasional lembaga keuangan konvensional vs syariah',
      'Menganalisis praktik transaksi jual beli daring (e-commerce) menurut tinjauan hukum Islam',
      'Menumbuhkan kesadaran berwirausaha mandiri yang halal dan berkah'
    ]
  },
  {
    id: 'doc-sma-05',
    title: 'Modul Ajar Fiqih Ibadah Sosial: Praktik Perawatan Jenazah (Tajhizul Janaiz)',
    category: 'modul_ajar',
    categoryLabel: 'Modul Ajar / RPP',
    fase: 'Fase F (Kelas XI)',
    kelas: 'Kelas XI SMA',
    semester: 'Semester 2 (Genap)',
    fileFormat: 'DOCX',
    fileSize: '3.1 MB',
    downloadUrl: GOOGLE_DRIVE_FOLDER_URL,
    lastUpdated: 'September 2026',
    description: 'Panduan demonstrasi dan simulasi 4 kewajiban terhadap jenazah muslim (memandikan, mengkafani, mensholati, dan menguburkan) lengkap dengan lembar rubrik performa.',
    totalPages: 26,
    learningObjectives: [
      'Menganalisis dalil syar\'i hukum fardhu kifayah perawatan jenazah',
      'Mempraktikkan secara berkelompok tata cara sholat jenazah 4 takbir',
      'Mengambil ibrah dan hikmah kematian untuk meningkatkan kualitas ketakwaan'
    ]
  },
  {
    id: 'doc-sma-06',
    title: 'Modul Ajar Munakahat & Mawaris: Membangun Mahligai Rumah Tangga Islami & Waris',
    category: 'modul_ajar',
    categoryLabel: 'Modul Ajar / RPP',
    fase: 'Fase F (Kelas XII)',
    kelas: 'Kelas XII SMA',
    semester: 'Semester 1 (Ganjil)',
    fileFormat: 'DOCX',
    fileSize: '2.7 MB',
    downloadUrl: GOOGLE_DRIVE_FOLDER_URL,
    lastUpdated: 'September 2026',
    description: 'Kajian hukum perkawinan dalam Islam, UU Perkawinan No. 1 Tahun 1974, asas keadilan hukum waris Islam (faraidh), dan perhitungan bagian ahli waris.',
    totalPages: 28,
    learningObjectives: [
      'Menelaah hikmah dan rukun pernikahan menurut hukum Islam dan perundang-undangan RI',
      'Menghitung porsi pembagian harta waris ashabul furudh dalam studi kasus keluarga',
      'Menghindarkan perselisihan keluarga melalui kesadaran syariat waris yang adil'
    ]
  },
  {
    id: 'doc-sma-07',
    title: 'Program Tahunan (PROTA) & Program Semester (PROMES) PAI SMA SMANIKRE',
    category: 'promes_prota',
    categoryLabel: 'Promes & Prota',
    fase: 'Fase E & F (SMA)',
    kelas: 'Kelas X, XI, XII SMA',
    semester: '1 Tahun Penuh',
    fileFormat: 'XLSX',
    fileSize: '950 KB',
    downloadUrl: GOOGLE_DRIVE_FOLDER_URL,
    lastUpdated: 'Juli 2026',
    description: 'Spreadsheet pemetaan alokasi jam pelajaran (108 JP/tahun), kalender akademik SMAN 1 Krembung, jadwal sumatif tengah semester, dan proyek P5.',
    totalPages: 12,
    learningObjectives: [
      'Pemetaan pekan efektif semester ganjil dan genap tahun ajaran 2026/2027',
      'Sinkronisasi jadwal kokurikuler proyek P5 dengan intrakurikuler PAI'
    ]
  },
  {
    id: 'doc-sma-08',
    title: 'Lembar Kerja Peserta Didik (LKPD) Nalar Kritis: Isu-Isu Fiqih Kontemporer',
    category: 'lkpd',
    categoryLabel: 'LKPD Siswa',
    fase: 'Fase F (Kelas XI)',
    kelas: 'Kelas XI SMA',
    semester: 'Semester 1 (Ganjil)',
    fileFormat: 'PDF',
    fileSize: '3.8 MB',
    downloadUrl: GOOGLE_DRIVE_FOLDER_URL,
    lastUpdated: 'September 2026',
    description: 'Lembar kerja analisis studi kasus etika kecerdasan buatan (AI) dalam pandangan syariah, fenomena pinjaman online (pinjol), dan etika bermedia sosial.',
    totalPages: 16,
    learningObjectives: [
      'Melatih siswa berpikir analitis terhadap fatwa ulama (MUI) mengenai transaksi keuangan digital',
      'Menyusun argumen hukum Islam berbasis maqashid syariah'
    ]
  },
  {
    id: 'doc-sma-lkpd-x',
    title: 'Folder LKPD PAI & Budi Pekerti Kelas X (Fase E)',
    category: 'lkpd',
    categoryLabel: 'LKPD Siswa',
    fase: 'Fase E (Kelas X)',
    kelas: 'Kelas X SMA',
    semester: '1 Tahun Penuh',
    fileFormat: 'PDF',
    fileSize: 'Folder Google Drive',
    downloadUrl: DRIVE_LKPD_KELAS_X_URL,
    lastUpdated: 'September 2026',
    description: 'Kumpulan Lembar Kerja Peserta Didik (LKPD) PAI & Budi Pekerti Kelas X (Fase E) Kurikulum Merdeka di Google Drive resmi SMAN 1 Krembung. Terdiri dari modul tugas, analisis dalil, dan evaluasi formatif.',
    totalPages: 32,
    learningObjectives: [
      'Lembar kerja analisis kajian Al-Qur\'an, Hadis, dan Akidah Islam Fase E',
      'Penugasan mandiri & kolaboratif berorientasi nalar kritis dan HOTS',
      'Format siap cetak dan lembar refleksi pembiasaan akhlak mulia'
    ]
  },
  {
    id: 'doc-sma-lkpd-xii',
    title: 'Folder LKPD PAI & Budi Pekerti Kelas XII (Fase F)',
    category: 'lkpd',
    categoryLabel: 'LKPD Siswa',
    fase: 'Fase F (Kelas XII)',
    kelas: 'Kelas XII SMA',
    semester: '1 Tahun Penuh',
    fileFormat: 'PDF',
    fileSize: 'Folder Google Drive',
    downloadUrl: DRIVE_LKPD_KELAS_XII_URL,
    lastUpdated: 'September 2026',
    description: 'Kumpulan Lembar Kerja Peserta Didik (LKPD) PAI & Budi Pekerti Kelas XII (Fase F) Pembelajaran Mendalam (PM) terintegrasi Moderasi Beragama di Google Drive resmi Ibu Ulfa.',
    totalPages: 38,
    learningObjectives: [
      'Lembar kerja studi kasus sabar menghadapi ujian dan musibah (QS. Al-Baqarah: 155-156 & QS. Ibrahim: 9)',
      'Analisis integrasi konsep Iman, Islam, dan Ihsan dalam kehidupan bermasyarakat majemuk',
      'Evaluasi pemahaman kontekstual fiqih munakahat dan waris keluarga'
    ]
  },
  {
    id: 'doc-sma-bt-xii',
    title: 'Bahan Tayang Presentasi & Media Ajar PAI Kelas XII (Fase F)',
    category: 'bahan_tayang',
    categoryLabel: 'Bahan Tayang / PPT',
    fase: 'Fase F (Kelas XII)',
    kelas: 'Kelas XII SMA',
    semester: '1 Tahun Penuh',
    fileFormat: 'PPTX',
    fileSize: 'Folder Google Drive',
    downloadUrl: DRIVE_BAHAN_TAYANG_KELAS_XII_URL,
    lastUpdated: 'September 2026',
    description: 'Koleksi slide presentasi PowerPoint (PPT/Canva) bahan tayang ajar interaktif PAI & Budi Pekerti Kelas XII Fase F di Google Drive. Siap digunakan untuk pemaparan di kelas dan proyektor sekolah.',
    totalPages: 48,
    learningObjectives: [
      'Slide presentasi visual materi esensial PAI Kelas XII kurikulum Pembelajaran Mendalam',
      'Dilengkapi bagan konsep, dalil Al-Qur\'an hadis berharakat, dan studi kasus kontekstual',
      'Dapat diunduh dan disesuaikan untuk media ajar proyektor/LCD di ruang kelas SMANIKRE'
    ]
  },
  {
    id: 'doc-sma-09',
    title: 'Bank Soal Asesmen Sumatif Akhir Semester (SAS) PAI Tingkat SMA Berbasis AKM',
    category: 'asesmen',
    categoryLabel: 'Asesmen & Kisi-kisi',
    fase: 'Fase E & F (SMA)',
    kelas: 'Kelas X & XI SMA',
    semester: 'Semester 1 (Ganjil)',
    fileFormat: 'DOCX',
    fileSize: '1.6 MB',
    downloadUrl: GOOGLE_DRIVE_FOLDER_URL,
    lastUpdated: 'September 2026',
    description: 'Instrumen evaluasi standar asesmen nasional (Pilihan Ganda Kompleks, Benar/Salah, Menjodohkan, Studi Kasus Esai) lengkap dengan rubrik penilaian kisi-kisi.',
    totalPages: 18,
    learningObjectives: [
      'Mengukur kemampuan literasi numerasi dan penalaran studi kasus keagamaan siswa SMA',
      'Kunci jawaban komprehensif dan panduan skoring konversi nilai rapor Kurikulum Merdeka'
    ]
  },
  {
    id: 'doc-sma-10',
    title: 'Modul Proyek P5-PPRA SMA: "Suara Demokrasi & Moderasi Beragama dalam Bingkai NKRI"',
    category: 'p5_ppra',
    categoryLabel: 'Modul Proyek P5',
    fase: 'Fase E & F (SMA)',
    kelas: 'Lintas Kelas (X & XI)',
    semester: '1 Tahun Penuh',
    fileFormat: 'PDF',
    fileSize: '4.8 MB',
    downloadUrl: GOOGLE_DRIVE_FOLDER_URL,
    lastUpdated: 'Juli 2026',
    description: 'Panduan fasilitator proyek penguatan karakter Profil Pelajar Pancasila & Rahmatan Lil \'Alamin: Pemilihan Ketua OSIS beradab, toleransi antar umat beragama di Sidoarjo, dan anti hoaks.',
    totalPages: 36,
    learningObjectives: [
      'Memupuk musyawarah mufakat (Syura) dalam penentuan keputusan bersama',
      'Menumbuhkan komitmen kebangsaan dan persaudaraan sesama anak bangsa (Ukhuwah Wathaniyah)'
    ]
  }
];

/**
 * =========================================================================
 * GALERI DOKUMENTASI PEMBELAJARAN SMA NEGERI 1 KREMBUNG (SMANIKRE)
 * =========================================================================
 */
export const galleryItemsData: GalleryItem[] = [
  {
    id: 'gal-sma-01',
    title: 'Implementasi Pembelajaran Mendalam (PM): Diskusi Nalar Kritis & Analisis Tematik PAI',
    category: 'kbm',
    categoryLabel: 'Pembelajaran Mendalam (PM)',
    date: '30 Juli 2025',
    classGrade: 'Kelas X & XI SMA (Fase E & F)',
    description: 'Dokumentasi pembelajaran kontekstual tata cara mendalami esensi ayat Al-Qur\'an dan hadis di ruang kelas SMA Negeri 1 Krembung. Peserta didik aktif berdiskusi kelompok, menganalisis isu keagamaan kontemporer dengan nalar kritis, serta merumuskan aksi nyata dalam kehidupan sehari-hari.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTHwCG4OYCtXduvj891IjmDUv52MTVKRaBpzpKg3z98yw9_v5G6t_lli2bCJixVqAdiwPaxLyGzXkgIiBPyWOX_smLBIr4UbMNoqolq27ZJeZZgbi4KnSq0khh6q793AEvk1ZRIKLpfnwh8Hz1wBOcIHLIXKban3KOG5tjobT1hGkVulfF6kio34cGOjnk/s1600/Image_20250730_111825_005.jpeg',
    imageAlt: 'Dokumentasi Pembelajaran Mendalam (PM) PAI SMA Negeri 1 Krembung',
    accentColor: 'from-emerald-700 to-teal-900',
    tags: ['Pembelajaran Mendalam', 'Deep Learning', 'Diskusi Kelas', 'SMANIKRE']
  },
  {
    id: 'gal-sma-02',
    title: 'Kurikulum Berbasis Cinta (KBC): Ruang Belajar Ramah, Welas Asih, & Penuh Mahabbah',
    category: 'kbm',
    categoryLabel: 'Kurikulum Berbasis Cinta (KBC)',
    date: 'Tahun Ajaran 2025/2026',
    classGrade: 'Fase E & F (Kelas X & XI SMA)',
    description: 'Suasana kelas Pendidikan Agama Islam dan Budi Pekerti yang humanis di SMA Negeri 1 Krembung bersama Ibu Ulfatul Husna, S.Ag., M.Pd. Menerapkan Kurikulum Berbasis Cinta (KBC) di mana pendidik menyentuh kalbu siswa dengan keteladanan (Uswah Hasanah), menghargai setiap keunikan peserta didik, serta mewujudkan iklim belajar yang aman dan membahagiakan.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjck4L0StkjujtxeXw9oAV4Obs_9rtkmu8u5akCjvTlNCZNejg8h9s_sQ1il6_T5hpFz61v7oTBA0rQ3F21DXx1sP0joIK82tDIGQoiaSz_ewrWNkMGKq9HCAy-iYxZddWPrHuMjrYq7xf0iStI5wyJPowxap6YwCXtQxazrI_e206l0DK_VE2XlSH6mh-1/s1600/IMG_1324%20%281%29.jpeg',
    imageAlt: 'Dokumentasi Kurikulum Berbasis Cinta PAI SMAN 1 Krembung',
    accentColor: 'from-rose-700 to-emerald-900',
    tags: ['Kurikulum Berbasis Cinta', 'KBC', 'Uswah Hasanah', 'Ramah Siswa']
  },
  {
    id: 'gal-sma-03',
    title: 'Integrasi Moderasi Beragama (MB) & Pembiasaan Akhlak Mulia Sivitas SMANIKRE',
    category: 'p5_ppra',
    categoryLabel: 'Moderasi Beragama (MB)',
    date: 'Tahun Ajaran 2025/2026',
    classGrade: 'Fase E & F (Lintas Kelas SMA)',
    description: 'Penguatan nilai-nilai Wasathiyah (sikap toleransi / tasamuh, keadilan, dan keseimbangan) di lingkungan SMA Negeri 1 Krembung. Bimbingan langsung Ibu Ulfatul Husna, S.Ag., M.Pd. dalam menanamkan cinta tanah air (Hubbul Wathan), menghargai keberagaman, dan menumbuhkan karakter Profil Pelajar Pancasila.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1jzOHZb8jQtfD3KL6IM8ecRNEDIxqFHsTys9nSwTfmk17Jb0wzvT4C24abUsImVixJ7zr-EtTtz5uJ2VLpeojHYCuTDu-FLXnKjEftJXfGFF0Olg8tmm6V_PQtlvIl9HSBZgGTtRfDDBiaEAoIZ7_lN6RBd1VNSl2KXITwuSNdmYD-pOhcB6Gv0Rf0s0H/s1600/IMG_1120%20%281%29.jpeg',
    imageAlt: 'Dokumentasi Moderasi Beragama dan Budi Pekerti SMAN 1 Krembung',
    accentColor: 'from-teal-700 to-slate-900',
    tags: ['Moderasi Beragama', 'Wasathiyah', 'Karakter Pelajar', 'SMANIKRE']
  },
  {
    id: 'gal-sma-04',
    title: 'KBM Kolaboratif & Eksplorasi Literasi Keagamaan Siswa di Ruang Kelas',
    category: 'kbm',
    categoryLabel: 'Kegiatan Belajar (KBM)',
    date: 'Semester Ganjil 2025/2026',
    classGrade: 'Kelas X Fase E SMA',
    description: 'Dokumentasi dinamika interaksi belajar peserta didik dalam kelompok belajar aktif saat menelaah materi fiqih dan modul LKPD PAI. Pendekatan student-centered learning membangkitkan keaktifan, kemandirian berpikir kritis, dan kemampuan komunikasi santun antar siswa.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqOa_I1igU3BRkCA4tBNFc8SGxyEXhkaZe7z1-eyXjG0a832yxaZxCx6ovSfY1nmLRP5TzmoU7ShzpN-q2GkQXxbLL_lcVK3l6fWQHj6Ie2F-nuoTekeSPT2OGbv3p_FLLoXO7k8OgFhy9848x1PqjgTIHpY44piicMWowLz1jz3AcY8AgjPZrc_RkK8gY/s1600/IMG_1143%20(1).HEIC',
    imageAlt: 'Dokumentasi KBM Kolaboratif PAI SMA Negeri 1 Krembung',
    accentColor: 'from-blue-700 to-emerald-900',
    tags: ['KBM Kolaboratif', 'LKPD PAI', 'Fase E', 'Student-Centered']
  },
  {
    id: 'gal-sma-05',
    title: 'Panorama Pembiasaan Ibadah Sholat Berjama\'ah & Istighotsah Warga SMANIKRE',
    category: 'ibadah',
    categoryLabel: 'Pembiasaan Ibadah',
    date: 'Tahun Ajaran 2025/2026',
    classGrade: 'Seluruh Siswa (Fase E & F)',
    description: 'Potret lanskap panorama pembiasaan ibadah sholat dzuhur berjama\'ah, doa bersama, dan pembinaan spiritual bagi segenap siswa-siswi SMA Negeri 1 Krembung. Menumbuhkan kedisiplinan beribadah, kekhusyukan batin, serta solidaritas ukhuwah islamiyah di lingkungan sekolah.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA1RXeSWnoHqA1uK3X2YotWuNKhz3X_wmcskVf4UAqoo1wBl1yWWEs9oVIFMWjS-z5AYw6BzhKV2JvzBCXFGt529iEqwMdd7QPfgY65x16WOhOF7u1-NzpYa0VaSKfuRo2S8-V3INmVd4vZF7OwxfFE3uFLNdBLvyQlEi5xB3IRuTYOSB2e3jdPV2LugbO/s1600/IMG_1157.HEIC',
    imageAlt: 'Panorama Pembiasaan Ibadah dan Sholat Berjamaah SMANIKRE',
    accentColor: 'from-emerald-800 to-slate-900',
    tags: ['Sholat Berjamaah', 'Istighotsah', 'Spiritualitas', 'SMANIKRE Religius']
  },
  {
    id: 'gal-sma-06',
    title: 'Bimbingan Adab, Doa Bersama, & Refleksi Nilai Keagamaan Bersama Pendidik',
    category: 'ibadah',
    categoryLabel: 'Bimbingan Adab & Rohani',
    date: 'Semester Ganjil 2025/2026',
    classGrade: 'Kelas XI Fase F SMA',
    description: 'Momen refleksi batiniah dan pendampingan adab islami oleh Ibu Ulfatul Husna, S.Ag., M.Pd. Peserta didik dibimbing menginternalisasi nilai-nilai kejujuran, ketundukan spiritual, serta etika mulia pergaulan remaja muslim sehari-hari.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxGkLPchAcigsQeLl7QBprjp03W97kkjkwKWSBi58QhS5AcZZpK6g0onmgz8icTzczsFINR1YVgUOLGz6KaJTxju25DDKdtnwJ6ZAxNYdLyGRyBUUDetsxjqqsXBiIwlDxrud73l-qT4kadcFcDcBTN3kbOlgXJ4d77U00Ldwm4t7mzKwFwlU_9ixrttaA/s1600/IMG_1161.HEIC',
    imageAlt: 'Bimbingan Adab dan Refleksi Keagamaan Siswa SMAN 1 Krembung',
    accentColor: 'from-teal-700 to-emerald-900',
    tags: ['Bimbingan Rohani', 'Refleksi Spiritual', 'Adab Islami', 'Uswah Hasanah']
  },
  {
    id: 'gal-sma-07',
    title: 'Presentasi Proyek Moderasi Beragama & Diskusi Sintesis Pemikiran Kritis',
    category: 'p5_ppra',
    categoryLabel: 'Proyek P5 / PPRA',
    date: 'Semester Ganjil 2025/2026',
    classGrade: 'Kelas X & XI SMA',
    description: 'Siswa mempresentasikan hasil telaah kontekstual tentang keberagaman tradisi, penguatan harmoni sosial, dan penolakan terhadap sikap ekstremisme. Melatih keberanian berpendapat, menghargai perspektif orang lain, dan berdialog santun.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqbxfPFDYsky5IZ38LmetijMirAOYl_f_Gr8lpRjK3ht2R0RXRRFkVit3YNri_T6jfWRPzU7ucNByVn3hW0yRCkQAypy9Cefnwp9Ac-lk7K3ftgFQ0Cs8xHhQjWS1lZAf4gr9dpni0OGqoxhksOWc4KsSzbSgoTfNKw6NDSobHc__t45mxIOXipzs3VAcF/s1600/IMG_1172%20(1).HEIC',
    imageAlt: 'Presentasi Proyek Moderasi Beragama Pelajar SMAN 1 Krembung',
    accentColor: 'from-amber-700 to-teal-900',
    tags: ['Presentasi Proyek', 'P5-PPRA', 'Harmoni Sosial', 'Nalar Kritis']
  },
  {
    id: 'gal-sma-08',
    title: 'Pendampingan Belajar Personal & Dialog Hangat Berbasis Kasih Sayang (KBC)',
    category: 'kbm',
    categoryLabel: 'Kurikulum Berbasis Cinta (KBC)',
    date: 'Tahun Ajaran 2025/2026',
    classGrade: 'Fase E & F SMANIKRE',
    description: 'Interaksi langsung guru dalam membimbing pemahaman konsep agama secara personal di meja belajar peserta didik. Membangun kedekatan emosional pendidik-peserta didik (Mahabbah) sehingga menumbuhkan rasa percaya diri dan antusiasme belajar yang tinggi.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-Wzt9swbkl80fED3xQA3_8oDlT_iC0yUhzx5oBwdme8Oi8h3ZZCx8JDuGaQz80E3UWjXrmXWpfG4vPgOGpfZGNP3Y26RzRaHvc1FcqORfC9IPNPzP-RVewPW0Q8aSV_FT-Iw0s0_ptN2gvmxfUrP3_QvIHQh7Fyp0ypt5FawZ2-Q1Mwp3zkiisCrs3jBU/s1600/IMG_1173%20(4).HEIC',
    imageAlt: 'Pendampingan Belajar Kasih Sayang KBC Guru dan Siswa SMANIKRE',
    accentColor: 'from-rose-700 to-teal-900',
    tags: ['Kurikulum Berbasis Cinta', 'Dialog Personal', 'Motivasi Belajar', 'Peduli Siswa']
  },
  {
    id: 'gal-sma-09',
    title: 'Kegiatan Pembinaan Kerohanian & Kajian Keislaman di Masjid SMANIKRE',
    category: 'masjid',
    categoryLabel: 'Kegiatan di Masjid',
    date: '7 September 2026',
    classGrade: 'Lintas Kelas (Fase E & F)',
    description: 'Dokumentasi kegiatan pembinaan kerohanian Islam (Rohis SKIS) dan penguatan akhlak mulia di masjid sekolah SMA Negeri 1 Krembung. Peserta didik menyimak bimbingan keagamaan dalam suasana masjid yang khusyuk, asri, dan tertib.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyEOiP7YO-1fFnPY4eJwLG3sHpYVAgeUMGGWKjwK9opSvAi2nbFWkao_0dbaMCEP6d-6RQe68mcWyXXw95JRqhuhvXURpZmwDq5YkEHI9zL7BbA4KziQ3nWXGjMqSMaq6mJX18ez8uo1L5jXj-733Mgi7ERplfX2MyadQc-6ataGgOPFLeHIGQNck9FrFB/s1600/WhatsApp%20Image%202026-09-07%20at%2019.39.24%20%282%29.jpeg',
    imageAlt: 'Kajian Pembinaan Kerohanian di Masjid SMA Negeri 1 Krembung',
    accentColor: 'from-emerald-700 to-teal-950',
    tags: ['Masjid SMANIKRE', 'Rohis SKIS', 'Pembinaan Karakter', 'Ibadah']
  },
  {
    id: 'gal-sma-10',
    title: 'Tadarus Al-Qur\'an & Bimbingan Tahsin Berjama\'ah Siswa di Masjid Sekolah',
    category: 'masjid',
    categoryLabel: 'Kegiatan di Masjid',
    date: '7 September 2026',
    classGrade: 'Siswa SMANIKRE (Fase E & F)',
    description: 'Aktivitas pembiasaan membaca ayat-ayat suci Al-Qur\'an secara tartil serta bimbingan tajwid dan tahsin bersama di serambi masjid SMA Negeri 1 Krembung. Menghidupkan budaya literasi Al-Qur\'an dan kecintaan pada kalam ilahi.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg83J05KSle9gIUEyZVtkRKSb1_NtPhp4YaL__pcBVFt9SWVXgm-_SZW4PccZZj9Z16KLD_gEp7qlz9EHCD5ehD923BlVX4LxuxdD8uE6bIM4NcMliN1NfsxEXOU1JvgD_ZvV9-crynD7jYOElC08KdGX7v_R4Zt7iboeUSS-e3-SWzqajkhIYEQ74ekSy/s1600/WhatsApp%20Image%202026-09-07%20at%2019.39.25%20%284%29.jpeg',
    imageAlt: 'Tadarus Al-Quran Berjamaah di Masjid SMA Negeri 1 Krembung',
    accentColor: 'from-teal-700 to-emerald-950',
    tags: ['Masjid SMANIKRE', 'Tadarus Al-Quran', 'Tahsin', 'Budaya Religius']
  },
  {
    id: 'gal-sma-11',
    title: 'Pembiasaan Sholat Berjama\'ah (Dzuhur & Dhuha) serta Doa Bersama di Masjid',
    category: 'masjid',
    categoryLabel: 'Kegiatan di Masjid',
    date: '7 September 2026',
    classGrade: 'Seluruh Siswa (Fase E & F)',
    description: 'Pelaksanaan sholat fardhu berjama\'ah dzuhur dan sholat dhuha bagi peserta didik SMA Negeri 1 Krembung. Keteraturan barisan shaf, kedisiplinan wudhu, dan kekhusyukan doa melatih integritas spiritual serta mempererat persaudaraan ukhuwah islamiyah.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhpsF2e-Oxqkpe3FTYLonDzXrSh8KOQF71nuWHe-KUAKa9yKqtUYgTyafxp5AC6gTcN0iYuKVjH9ajhckFCAJMHfn5KAHR59awVKQxzvwEzMeCg4LFr8EH05GnPvrGK2kTz6Ny_npZV6XQpWzMba6Q0gsRXE70WQkKchEaNbrUPfdic0I7_0FXJfOMr_BM/s4000/WhatsApp%20Image%202026-09-07%20at%2019.42.07%20%281%29%20%282%29.jpeg',
    imageAlt: 'Sholat Berjamaah dan Doa Bersama di Masjid SMANIKRE',
    accentColor: 'from-emerald-800 to-slate-900',
    tags: ['Masjid SMANIKRE', 'Sholat Berjamaah', 'Disiplin Ibadah', 'Dhuha & Dzuhur']
  },
  {
    id: 'gal-sma-12',
    title: 'Pembinaan Akhlak Mulia, Bimbingan Keputrian, & Motivasi Spiritual di Masjid',
    category: 'masjid',
    categoryLabel: 'Kegiatan di Masjid',
    date: '7 September 2026',
    classGrade: 'Fase E & F SMANIKRE',
    description: 'Sesi motivasi dan pembinaan budi pekerti remaja muslimah/keputrian bersama pendidik di masjid sekolah. Membahas thaharah, adab pergaulan islami, dan keteladanan akhlak perempuan muslimah berintegritas.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWlXZzGcQ_BNo6ZK7ZfKSxRGZjcdI39lSz9k6k_6GWR_vbsKJzbo7GgV8tTDzYEwecBndgcQntJ_YiRObgTNyBG-zvDS7lL0Dtx4tpAMXkF39uKyw4AINqCWZ0jEPVvKlstekjnP9MDWSp0HySk48m4D6-E4VsNkNjkb1UkXEjqXeRiVxPWq309XGe5yIk/s4000/WhatsApp%20Image%202026-09-07%20at%2019.42.06%20%282%29.jpeg',
    imageAlt: 'Pembinaan Keputrian dan Akhlak di Masjid SMAN 1 Krembung',
    accentColor: 'from-teal-800 to-emerald-950',
    tags: ['Masjid SMANIKRE', 'Keputrian', 'Akhlak Mulia', 'Motivasi Spiritual']
  },
  {
    id: 'gal-sma-13',
    title: 'Pameran Karya Kaligrafi Kontemporer & Infografis Dakwah Digital Siswa',
    category: 'karya_siswa',
    categoryLabel: 'Karya Siswa',
    date: 'September 2026',
    classGrade: 'Kelas X Fase E SMA',
    description: 'Apresiasi hasil karya poster digital kampanye moderasi beragama, lukisan kaligrafi khat naskhi & tsuluts, serta infografis hikmah zakat karya peserta didik SMAN 1 Krembung.',
    imageUrl: '',
    imageAlt: 'Pameran poster dan kaligrafi karya siswa SMANIKRE',
    accentColor: 'from-amber-600 to-emerald-800',
    tags: ['Karya Siswa', 'Dakwah Digital', 'Kaligrafi Islam', 'Kreativitas']
  }
];

/**
 * =========================================================================
 * DAFTAR PERMAINAN EDUKATIF (GAME EDUKASI PAI TINGKAT SMA)
 * =========================================================================
 */
export const educationalGamesData: EducationalGame[] = [
  {
    id: 'game-sma-iqra-4',
    title: 'Aplikasi Game IQRA 4 (Inovasi Quiz Religi Asyik SMANIKRE)',
    platform: 'Google Sites',
    category: 'Gamifikasi PAI & Tahfizh Interaktif',
    targetGrade: 'Kelas X, XI, XII (Fase E & F)',
    playUrl: APLIKASI_GAME_IQRA_URL,
    embedUrl: APLIKASI_GAME_IQRA_URL,
    description: 'Aplikasi web pembelajaran interaktif IQRA 4 resmi SMAN 1 Krembung yang dirancang oleh Ibu Ulfatul Husna, S.Ag., M.Pd. di platform Google Sites Belajar.id.',
    playCount: 'Edisi Resmi SMANIKRE',
    badgeColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'game-sma-01',
    title: 'Kuis Cerdas Cermat PAI Tingkat SMA (Internal Game)',
    platform: 'Internal',
    category: 'Akidah, Fiqih & Akhlak Remaja',
    targetGrade: 'Kelas X, XI, XII (Fase E-F)',
    playUrl: '#kuis-internal',
    description: 'Kuis interaktif langsung di portal dengan soal nalar kritis kurikulum merdeka SMA, hitung mundur, audio responsif, dan sertifikat nilai akhir!',
    playCount: '2.180x Dimainkan',
    badgeColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'game-sma-02',
    title: 'Wordwall: Tebak Istilah Akad Fiqih Muamalah & Perbankan Syariah',
    platform: 'Wordwall',
    category: 'Fiqih Muamalah Kontemporer',
    targetGrade: 'Kelas XI (Fase F)',
    playUrl: 'https://wordwall.net/resource/example-muamalah-sma',
    embedUrl: 'https://wordwall.net/embed/example-muamalah-sma',
    description: 'Permainan anagram dan tebak definisi istilah Mudharabah, Musyarakah, Murabahah, Ijarah, dan Riba secara interaktif.',
    playCount: '1.120x Dimainkan',
    badgeColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'game-sma-03',
    title: 'Quizizz Challenge: Analisis Ayat Berpikir Kritis & Ulil Albab',
    platform: 'Quizizz',
    category: 'Al-Qur\'an Hadis SMA',
    targetGrade: 'Kelas X (Fase E)',
    playUrl: 'https://quizizz.com/join?gc=example-pai-sma-krembung',
    embedUrl: 'https://quizizz.com/embed/example-pai-sma',
    description: 'Tantangan live kuis seru menganalisis hukum tajwid dan pesan substansi QS. Ali \'Imran: 190-191 bersaing dengan teman sekelas.',
    playCount: '1.450x Dimainkan',
    badgeColor: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'game-sma-04',
    title: 'Kahoot Battle: Fiqih Munakahat & Syariat Waris Islam',
    platform: 'Kahoot',
    category: 'Fiqih Keluarga & Mawaris',
    targetGrade: 'Kelas XII (Fase F)',
    playUrl: 'https://kahoot.it/challenge/example-munakahat-sma',
    description: 'Ajang lomba kecepatan dan ketepatan menjawab studi kasus rukun nikah dan rumus bagian pembagian harta waris (faraidh).',
    playCount: '980x Dimainkan',
    badgeColor: 'bg-rose-100 text-rose-800'
  }
];

/**
 * =========================================================================
 * BANK SOAL KUIS CERDAS CERMAT PAI TINGKAT SMA (8 SOAL NALAR KRITIS)
 * =========================================================================
 */
export const quizQuestionsData: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Al-Qur\'an & Berpikir Kritis',
    question: 'Dalam QS. Ali \'Imran: 190-191, orang-orang yang senantiasa berdzikir mengingat Allah dalam segala keadaan dan memikirkan penciptaan langit dan bumi dijuluki sebagai...',
    options: ['Al-Muqarrabun', 'Ulil Albab', 'Ahlus Sunnah', 'Al-Muhsinun'],
    correctIndex: 1,
    explanation: 'Ulil Albab adalah orang yang memiliki akal budi mendalam, mengintegrasikan dzikir (hati) dan fikir (akal) dalam meneliti fenomena alam ciptaan Allah SWT.'
  },
  {
    id: 2,
    topic: 'Fiqih Muamalah Syariah',
    question: 'Akad kerja sama usaha antara pemilik modal (shahibul mal) dan pengelola dana (mudharib) dengan kesepakatan bagi hasil sesuai nisbah di awal disebut akad...',
    options: ['Akad Ijarah', 'Akad Wadiah', 'Akad Mudharabah', 'Akad Rahn'],
    correctIndex: 2,
    explanation: 'Mudharabah adalah kemitraan usaha di mana satu pihak menyediakan modal 100% dan pihak lain mengelola usaha, dengan keuntungan dibagi berdasarkan kesepakatan nisbah.'
  },
  {
    id: 3,
    topic: 'Fiqih Jenazah',
    question: 'Bagi jenazah laki-laki muslim, kain kafan yang disunnahkan untuk membungkus jenazah berjumlah...',
    options: ['3 lapis kain kafan', '5 lapis kain kafan', '2 lapis kain kafan', '7 lapis kain kafan'],
    correctIndex: 0,
    explanation: 'Sunnah kain kafan bagi jenazah laki-laki adalah 3 lapis kain putih, sedangkan untuk jenazah wanita disunnahkan 5 lapis kain.'
  },
  {
    id: 4,
    topic: 'Akhlak Remaja SMA',
    question: 'Perintah dalam QS. Al-Isra\': 32 berbunyi "Wa la taqrabuz-zina..." mengandung hikmah dan makna mendalam bahwa...',
    options: [
      'Hanya perbuatan zina berat yang dilarang',
      'Mendekati hal-hal yang menjadi perantara menuju zina saja sudah dilarang',
      'Larangan hanya berlaku bagi orang yang sudah menikah',
      'Zina diperbolehkan jika didasari rasa suka sama suka'
    ],
    correctIndex: 1,
    explanation: 'Larangan "mendekati" (la taqrabu) bersifat preventif (saddu adz-dzari\'ah), melarang segala pintu gerbang seperti pornografi, khalwat, dan pergaulan bebas tanpa batas.'
  },
  {
    id: 5,
    topic: 'Moderasi Beragama',
    question: 'Prinsip mengambil jalan tengah, tidak berlebih-lebihan (ekstrem kanan) dan tidak mengabaikan syariat (ekstrem kiri) dalam moderasi beragama dikenal dengan istilah...',
    options: ['Tasamuh (Toleransi)', 'Tawasuth (Moderat)', 'Tawazun (Keseimbangan)', 'I\'tidal (Keadilan)'],
    correctIndex: 1,
    explanation: 'Tawasuth bermakna sikap tengah-tengah dan menjauhi paham radikalisme/ekstremisme maupun liberalisme yang merusak nilai agama.'
  },
  {
    id: 6,
    topic: 'Fiqih Munakahat',
    question: 'Salah satu rukun pernikahan yang sah dalam Islam menurut jumhur ulama adalah adanya...',
    options: [
      'Pesta walimah megah di gedung',
      'Wali nikah bagi calon mempelai wanita serta 2 saksi adil',
      'Surat izin dari instansi kepolisian',
      'Mahar berupa logam mulia minimal 50 gram'
    ],
    correctIndex: 1,
    explanation: 'Rukun nikah meliputi: calon mempelai pria, calon mempelai wanita, wali nikah bagi wanita, 2 orang saksi laki-laki yang adil, serta ijab dan qabul.'
  },
  {
    id: 7,
    topic: 'Hukum Waris (Mawaris)',
    question: 'Seorang suami berhak mendapatkan bagian harta warisan sebesar 1/2 (setengah) jika istri yang meninggal dunia...',
    options: [
      'Memiliki anak laki-laki atau cucu',
      'Tidak meninggalkan anak atau cucu',
      'Meninggalkan saudara kandung lebih dari dua',
      'Masih memiliki ayah dan ibu kandung'
    ],
    correctIndex: 1,
    explanation: 'Menurut QS. An-Nisa: 12, bagian waris suami adalah 1/2 apabila pewaris (istri) tidak memiliki anak/cucu, dan menjadi 1/4 jika memiliki anak/cucu.'
  },
  {
    id: 8,
    topic: 'Sejarah Islam Nusantara',
    question: 'Metode dakwah para Wali Songo di Pulau Jawa yang mengakulturasi kearifan budaya lokal seperti tembang, wayang, dan gamelan dipelopori terutama oleh...',
    options: ['Sunan Giri', 'Sunan Kalijaga', 'Sunan Ampel', 'Sunan Gunung Jati'],
    correctIndex: 1,
    explanation: 'Raden Mas Said (Sunan Kalijaga) terkenal piawai memanfaatkan kesenian wayang kulit purwa dan gending Ilir-Ilir untuk menanamkan akidah Islam secara bijak dan damai.'
  }
];

export const rukunIslamPuzzle = [
  { id: 'ri-1', order: 1, label: '1. Mengucapkan Dua Kalimah Syahadat' },
  { id: 'ri-2', order: 2, label: '2. Mendirikan Sholat Lima Waktu' },
  { id: 'ri-3', order: 3, label: '3. Menunaikan Zakat' },
  { id: 'ri-4', order: 4, label: '4. Berpuasa di Bulan Ramadhan' },
  { id: 'ri-5', order: 5, label: '5. Menunaikan Ibadah Haji bagi yang Mampu' }
];

export const rukunImanPuzzle = [
  { id: 'rm-1', order: 1, label: '1. Iman kepada Allah SWT' },
  { id: 'rm-2', order: 2, label: '2. Iman kepada Malaikat-Malaikat Allah' },
  { id: 'rm-3', order: 3, label: '3. Iman kepada Kitab-Kitab Allah' },
  { id: 'rm-4', order: 4, label: '4. Iman kepada Rasul-Rasul Allah' },
  { id: 'rm-5', order: 5, label: '5. Iman kepada Hari Kiamat' },
  { id: 'rm-6', order: 6, label: '6. Iman kepada Qada dan Qadar' }
];
