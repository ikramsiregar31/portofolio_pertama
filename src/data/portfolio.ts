export interface SkillItem {
  code: string;
  name: string;
  level: number;
}

export interface LanguageItem {
  name: string;
  level: number;
}

export interface PathwayItem {
  badge: string;
  active?: boolean;
  title: string;
  subtitle: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  period: string;
  isCurrent?: boolean;
  program: string;
  detail: string;
}

export interface InterestItem {
  id: string;
  label: string;
  icon: 'book' | 'briefcase' | 'laptop' | 'chart';
  note: string;
}

export const PROFILE = {
  firstName: 'MUHAMMAD IKRAM',
  lastNameLine1: 'MANGARAJA',
  lastNameLine2: 'SIREGAR',
  fullName: 'Muhammad Ikram Mangaraja Siregar',
  shortName: 'M. Ikram Mangaraja Siregar',
  role: 'MAHASISWA BARU · TEKNIK INFORMATIKA · INSTITUT TEKNOLOGI PLN',
  badgeRole: 'Teknik Informatika · Institut Teknologi PLN',
  email: 'ikramsiregar31@gmail.com',
  location: 'Kisaran, Sumatera Utara / Indonesia',
  footerLocation: 'Kisaran · Jakarta',
  university: 'Institut Teknologi PLN',
  programStudy: 'Teknik Informatika',
  workspaceImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPUgqMFTsoarL7Ad29r_SHzozWKqEECVPvFH92vxBQF7ysRmEqLaXNLyRTgRrn6P8W-AOLmlC5_jxMlwxJ1lRpVEB_N1AmEDKIFbn11HLoeePnbfuWNHw3Va2mfflsMJGMbi2-5RstHeIY8yGD3StbYUWiYSkOxBmgSt9zStkEmvbIOf_q1ph0WB51i9m2oSHscFD7OY1ZVTzmJMe6qdczAVnKnS4-abu_IcoG6cw',
  portraitImageUrl: '/src/assets/images/ikram_portrait_clean_1795245654619.jpg',
  socials: {
    email: 'mailto:ikramsiregar31@gmail.com',
    linkedin: 'https://www.linkedin.comhttps://www.linkedin.com/in/ikram-siregar-336b62433?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com',
    instagram: 'https://www.instagram.com/mangaraja.srg?lqvp=OHFiNHZnM3J2Z213',
    whatsapp: 'https://wa.me/6282282653106',
  },
  highlights: [
    { value: '2026', label: 'Angkatan Kuliah', accent: true },
    { value: '90.0', label: 'Nilai Rata-rata SMA', accent: false },
  ],
};

export const CORE_SKILLS: SkillItem[] = [
  { code: 'AI', name: 'AI Development & Exploration', level: 82 },
  { code: 'PY', name: 'Python Programming', level: 85 },
  { code: 'C+', name: 'C++ Programming & Algorithms', level: 80 },
  { code: 'FL', name: 'Fast Learner & Adaptability', level: 90 },
  { code: 'MS', name: 'Microsoft Office (Word, PPT, Excel)', level: 82 },
  { code: 'PS', name: 'Analytical & Problem Solving', level: 84 },
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Bahasa Indonesia (Native)', level: 95 },
  { name: 'English (Academic / Technical)', level: 70 },
];

export const PERSONAL_ATTRIBUTES =
  'Eager to Learn · High Discipline · Collaborative Teamwork · Adaptive Mindset · Strong Curiosity';

export const PATHWAY_ITEMS: PathwayItem[] = [
  {
    badge: '26+',
    active: true,
    title: 'MAHASISWA BARU (FRESHMAN)',
    subtitle: 'Teknik Informatika · Institut Teknologi PLN',
    description:
      'Fokus adaptasi kurikulum Teknik Informatika, pengembangan Artificial Intelligence (AI), pengkodean Python & C++, serta aktif mengasah kemampuan rekayasa perangkat lunak.',
  },
  {
    badge: 'GOAL',
    active: false,
    title: 'PERSIAPAN IKATAN KERJA',
    subtitle: 'Target & Pengembangan Kompetensi',
    description:
      'Menyiapkan sertifikasi pendukung, menjaga capaian IPK prima, dan membangun portofolio proyek terapan untuk siap bersaing pada rekrutmen ikatan kerja.',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Institut Teknologi PLN',
    period: '2026 - Sekarang',
    isCurrent: true,
    program: 'Program Sarjana (S1) · Teknik Informatika',
    detail: 'Mempelajari fundamental ilmu komputer, pemrograman, dan rekayasa perangkat lunak.',
  },
  {
    institution: 'SMAN 1 Kisaran',
    period: '2023 - 2026',
    isCurrent: false,
    program: 'Jurusan MIPA / IPA',
    detail: 'Lulus dengan nilai rata-rata 90.0 dan rekam jejak kedisiplinan yang baik.',
  },
];

export const FOCUS_AREAS: string[] = [
  'Pengembangan Artificial Intelligence (AI)',
  'Pengkodean Python & Eksplorasi Data / Otomasi',
  'Pemrograman C++ — Struktur Data & Algoritma',
  'Academic Foundation — Teknik Informatika',
  'Building Initial Academic & Practical Projects',
];

export const INTERESTS: InterestItem[] = [
  {
    id: 'learning',
    label: 'Belajar Hal Baru',
    icon: 'book',
    note: 'Membiasakan pembelajaran mandiri lintas disiplin sains, rekayasa, dan literasi digital.',
  },
  {
    id: 'career',
    label: 'Ikatan Kerja',
    icon: 'briefcase',
    note: 'Mempersiapkan kompetensi teknis, disiplin akademik, dan sertifikasi untuk seleksi ikatan kerja.',
  },
  {
    id: 'tech',
    label: 'AI, Python & C++',
    icon: 'laptop',
    note: 'Mendalami pengembangan kecerdasan buatan (AI), pengkodean Python, serta logika algoritma dengan C++.',
  },
  {
    id: 'growth',
    label: 'Pengembangan Diri',
    icon: 'chart',
    note: 'Mengasah komunikasi tim, kepemimpinan, dan manajemen waktu sejak tahun pertama perkuliahan.',
  },
];
