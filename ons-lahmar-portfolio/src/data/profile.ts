import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'Ons Lahmar',
  firstName: 'Ons',
  headline: 'Software Engineering Student',
  focus: ['Java / Spring Boot', 'Generative AI', 'RAG', 'Software Engineering'],
  pitch:
    'Fifth-year engineering student building secure, well-structured backends with Java and Spring Boot, and integrating LLMs into real applications — with a strong focus on the reliability of what they generate.',
  about: [
    'I am a Software Engineering student in the final year of the engineering cycle at EPI Sousse. I am interested in backend development, software architecture and the integration of artificial intelligence into applications.',
    'My experience covers REST API design with Java / Spring Boot, application security, and LLM work — from RAG architectures to the evaluation of model reasoning. During my internship at Proxym, I studied Chain-of-Thought strategies and analysed the quality, consistency and explainability of LLM answers.',
    'I am particularly interested in AI agents, software modernization and improving the quality of existing applications.',
  ],
  location: 'Sousse, Tunisia',
  school: 'EPI — École Pluridisciplinaire Internationale',
  availability: {
    short: 'Open to a 6-month PFE internship · from February 2027',
    detail: 'End-of-studies internship (PFE), 6 months, starting February 2027 — France & Europe.',
  },
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Intermediate' },
  ],
  email: 'lahmarons8@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lahmarons/',
  github: 'https://github.com/lahmarons',
  cvUrl: '/cv/Ons-Lahmar-CV.pdf',
  cvFileName: 'Ons-Lahmar-CV.pdf',
};
