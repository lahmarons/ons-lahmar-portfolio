import type { Experience } from '@/types';

/** Professional experience, most recent first. */
export const experiences: Experience[] = [
  {
    id: 'creative-dms',
    company: 'Creative DMS',
    role: 'Full Stack Developer Intern',
    period: 'Jul 2026 – Sep 2026',
    location: 'Monastir, Tunisia',
    highlights: [
      'Developed a web application using Angular and Laravel 12.',
      'Designed and integrated REST APIs between the Angular frontend and the Laravel backend.',
      'Participated in the implementation of secure authentication.',
      'Developed a matching system between students and companies based on their profiles and search criteria.',
      'Performed unit and integration testing.',
    ],
    technologies: ['Angular', 'Laravel 12', 'PHP', 'TypeScript', 'MySQL', 'REST API', 'Git', 'GitLab'],
  },
  {
    id: 'proxym',
    company: 'Proxym',
    role: 'AI & LLM Intern',
    period: 'Aug 2025 – Sep 2025',
    location: 'Sousse, Tunisia',
    featured: true,
    featuredLabel: 'LLM reasoning & reliability',
    facets: [
      { label: 'Reasoning tasks', values: ['Logical', 'Mathematical', 'Common-sense'] },
      { label: 'Evaluation criteria', values: ['Quality', 'Consistency', 'Explainability', 'Reliability'] },
      { label: 'Use case explored', values: ['Credit file evaluation'] },
    ],
    highlights: [
      'Studied and compared Chain-of-Thought strategies applied to Large Language Models.',
      'Evaluated LLM performance on logical, mathematical and common-sense reasoning tasks.',
      'Analysed response quality, consistency, explainability and reliability.',
      'Explored the application of LLMs in credit file evaluation.',
      'Identified the limits of the studied approaches and the challenges related to model transparency.',
    ],
    technologies: ['Python', 'LangChain', 'Google Gemini', 'Streamlit', 'Pandas', 'RAG', 'Jupyter'],
  },
  {
    id: '3dwave',
    company: '3DWave',
    role: 'Software Development Intern',
    type: 'Introductory internship',
    period: 'Jun 2024 – Aug 2024',
    location: 'Sousse, Tunisia',
    highlights: [
      'Developed two Flutter interfaces for mobile and web applications.',
      'Participated in development within an Agile / Scrum team.',
      'Fixed bugs and improved existing functionalities.',
    ],
    technologies: ['Flutter', 'Dart', 'Android Studio', 'Git', 'Agile / Scrum'],
  },
];
