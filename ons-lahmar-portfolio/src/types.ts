export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  firstName: string;
  headline: string;
  focus: string[];
  pitch: string;
  about: string[];
  location: string;
  school: string;
  availability: {
    short: string;
    detail: string;
  };
  languages: { name: string; level: string }[];
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  cvFileName: string;
}

export interface SkillItem {
  name: string;
  /**
   * Where the skill was actually applied (internships / projects listed on this site).
   * Leave empty when the technology has been studied but not yet used in a listed project.
   * This keeps the skills section evidence-based instead of using invented "levels".
   */
  usedIn?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: 'server' | 'brain' | 'layout' | 'database' | 'test' | 'chart';
  items: SkillItem[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
  featuredLabel?: string;
  /** Optional structured summary shown on featured cards (derived from the highlights). */
  facets?: { label: string; values: string[] }[];
}

/** One block of an architecture / pipeline diagram. */
export interface DiagramNode {
  label: string;
  detail?: string;
  accent?: boolean;
}

export interface DiagramGroup {
  title: string;
  nodes: DiagramNode[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  context?: string;
  /** Real repository URL. Leave undefined when the code is not public — no fake links. */
  githubUrl?: string;
  /** Shown instead of a link when githubUrl is undefined. */
  linkNote?: string;
  technologies: string[];
  highlights: string[];
  featured?: boolean;
  badge?: string;
  diagram?: {
    title: string;
    caption?: string;
    groups: DiagramGroup[];
  };
}

export interface EducationItem {
  id: string;
  school: string;
  program: string;
  period: string;
  location: string;
  current?: boolean;
}

export type CertificationStatus = 'obtained' | 'in-progress';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: CertificationStatus;
  /** Year obtained. Only set when known — never invented. */
  year?: string;
}
