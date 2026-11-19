import type { Certification, EducationItem } from '@/types';

export const education: EducationItem[] = [
  {
    id: 'epi-engineering',
    school: 'EPI — École Pluridisciplinaire Internationale',
    program: 'Engineering Cycle in Software Engineering · 5th year',
    period: '2024 – 2027',
    location: 'Sousse, Tunisia',
    current: true,
  },
  {
    id: 'epi-prep',
    school: 'EPI — École Pluridisciplinaire Internationale',
    program: 'Integrated Preparatory Cycle',
    period: '2022 – 2024',
    location: 'Sousse, Tunisia',
  },
  {
    id: 'bac',
    school: 'Lycée de Teboulba',
    program: 'Scientific Baccalaureate',
    period: '2022',
    location: 'Monastir, Tunisia',
  },
];

/**
 * Certifications with their real status.
 * Only set `year` when it is known. Switch `status` to 'obtained' (and add the year)
 * when an in-progress certification is completed.
 */
export const certifications: Certification[] = [
  {
    id: 'ccna',
    name: 'CCNA 1 & 2',
    issuer: 'Cisco Networking Academy',
    status: 'obtained',
    year: '2024',
  },
  {
    id: 'azure',
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    status: 'obtained',
    year: '2026',
  },
  {
    id: 'nvidia',
    name: 'Introduction to Deep Learning',
    issuer: 'NVIDIA',
    status: 'obtained',
    year: '2026',
  },
  {
    id: 'powerbi',
    name: 'Diploma in Microsoft Power BI for Beginners',
    issuer: 'Alison',
    status: 'in-progress',
  },
];
