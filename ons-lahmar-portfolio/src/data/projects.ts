import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'medirdv',
    name: 'MediRdv',
    tagline: 'Medical appointment management REST API',
    context: 'Academic project · Backend',
    // The repository exists but is not public-ready yet. Add the URL here once the code is pushed:
    // githubUrl: 'https://github.com/lahmarons/MediRdv',
    linkNote: 'Code available on request',
    featured: true,
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Flyway'],
    highlights: [
      'Designed a REST API using a layered architecture (Controller, Service, Repository).',
      'Implemented JWT authentication and role-based authorization with Spring Security.',
      'Used Spring Data JPA and Hibernate for persistence, with database schema versioning through Flyway.',
      'Implemented DTOs, pagination and transaction management.',
    ],
    diagram: {
      title: 'Layered architecture',
      caption:
        'Every request is authenticated before reaching the business layer; entities never leave the service layer — the API exposes DTOs only.',
      groups: [
        {
          title: 'Security',
          nodes: [
            { label: 'JWT filter', detail: 'Token validation' },
            { label: 'Role-based access', detail: 'Spring Security', accent: true },
          ],
        },
        {
          title: 'Application',
          nodes: [
            { label: 'Controller', detail: 'REST endpoints · DTOs' },
            { label: 'Service', detail: '@Transactional logic', accent: true },
            { label: 'Repository', detail: 'JPA · pagination' },
          ],
        },
        {
          title: 'Persistence',
          nodes: [
            { label: 'Hibernate', detail: 'ORM mapping' },
            { label: 'MySQL', detail: 'Flyway migrations', accent: true },
          ],
        },
      ],
    },
  },
  {
    id: 'rag-platform',
    name: 'Administrative Document RAG Platform',
    tagline: 'Intelligent search and question-answering over administrative documents',
    context: 'PFA · Team project (2 students)',
    githubUrl: 'https://github.com/lahmarons/PPlateforme-admin-RAG',
    featured: true,
    technologies: ['Angular', '.NET', 'Clean Architecture', 'REST API', 'RAG', 'LLM'],
    highlights: [
      'Developed an intelligent administrative document search platform.',
      'Designed a .NET backend based on Clean Architecture and REST APIs.',
      'Integrated an LLM into a RAG architecture to generate contextualized answers.',
      'Focused on the relevance and reliability of generated answers.',
    ],
    diagram: {
      title: 'Retrieval-Augmented Generation pipeline',
      caption:
        'Answers are generated from retrieved document passages rather than from the model alone — the basis for relevant, verifiable responses.',
      groups: [
        {
          title: 'Platform',
          nodes: [
            { label: 'Angular UI', detail: 'Search & Q&A' },
            { label: '.NET API', detail: 'Clean Architecture', accent: true },
          ],
        },
        {
          title: 'Retrieval',
          nodes: [
            { label: 'Documents', detail: 'PDF · DOCX' },
            { label: 'Embeddings', detail: 'Sentence Transformers' },
            { label: 'Vector search', detail: 'FAISS', accent: true },
          ],
        },
        {
          title: 'Generation',
          nodes: [
            { label: 'LLM', detail: 'Prompt + retrieved context', accent: true },
            { label: 'Contextualized answer', detail: 'Relevance evaluated' },
          ],
        },
      ],
    },
  },
  {
    id: 'gestion-cagnotte',
    name: 'GestionCagnotte',
    tagline: 'Backend of an online fundraising management platform',
    context: 'Academic project',
    githubUrl: 'https://github.com/lahmarons/GestionCagnotte',
    badge: 'Backend only',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'REST API', 'SQL Server'],
    highlights: [
      'Developed the backend of an online fundraising management platform.',
      'Implemented business logic and backend services with ASP.NET Core.',
      'Managed persistence using Entity Framework Core.',
      'Designed REST APIs.',
    ],
  },
];
