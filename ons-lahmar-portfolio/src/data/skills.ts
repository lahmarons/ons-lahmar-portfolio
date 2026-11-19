import type { SkillCategory } from '@/types';

/**
 * Skills grouped by category.
 * `usedIn` only lists places where the technology was actually applied
 * (internships and projects shown on this site). No self-rated percentages.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Architecture',
    icon: 'server',
    items: [
      { name: 'Java', usedIn: ['MediRdv'] },
      { name: 'Spring Boot', usedIn: ['MediRdv'] },
      { name: 'Spring Security', usedIn: ['MediRdv'] },
      { name: 'Spring Data JPA', usedIn: ['MediRdv'] },
      { name: 'Hibernate', usedIn: ['MediRdv'] },
      { name: 'ASP.NET Core', usedIn: ['GestionCagnotte', 'RAG Platform'] },
      { name: 'Laravel', usedIn: ['Creative DMS'] },
      { name: 'REST API', usedIn: ['MediRdv', 'RAG Platform', 'GestionCagnotte', 'Creative DMS'] },
      { name: 'Clean Architecture', usedIn: ['RAG Platform'] },
      { name: 'MVC' },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: 'brain',
    items: [
      { name: 'LLM', usedIn: ['Proxym', 'RAG Platform'] },
      { name: 'RAG', usedIn: ['Proxym', 'RAG Platform'] },
      { name: 'LangChain', usedIn: ['Proxym'] },
      { name: 'Google Gemini', usedIn: ['Proxym'] },
      { name: 'Prompt Engineering', usedIn: ['Proxym'] },
      { name: 'LLM Evaluation', usedIn: ['Proxym', 'RAG Platform'] },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    items: [
      { name: 'Angular', usedIn: ['Creative DMS', 'RAG Platform'] },
      { name: 'TypeScript', usedIn: ['Creative DMS'] },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'PrimeNG' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    items: [
      { name: 'MySQL', usedIn: ['MediRdv', 'Creative DMS'] },
      { name: 'SQL Server', usedIn: ['GestionCagnotte'] },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & DevOps',
    icon: 'test',
    items: [
      { name: 'Unit Testing', usedIn: ['Creative DMS'] },
      { name: 'Integration Testing', usedIn: ['Creative DMS'] },
      { name: 'Jest' },
      { name: 'PHPUnit' },
      { name: 'Postman' },
      { name: 'Swagger' },
      { name: 'Docker' },
      { name: 'Git', usedIn: ['Proxym', 'Creative DMS', '3DWave'] },
      { name: 'GitHub', usedIn: ['Proxym', 'Creative DMS'] },
      { name: 'GitLab', usedIn: ['Creative DMS'] },
      { name: 'Maven' },
      { name: 'GitHub Actions' },
    ],
  },
  {
    id: 'data',
    title: 'Data & BI',
    icon: 'chart',
    items: [
      { name: 'Python', usedIn: ['Proxym'] },
      { name: 'Pandas', usedIn: ['Proxym'] },
      { name: 'Streamlit', usedIn: ['Proxym'] },
      { name: 'Power BI' },
    ],
  },
];
