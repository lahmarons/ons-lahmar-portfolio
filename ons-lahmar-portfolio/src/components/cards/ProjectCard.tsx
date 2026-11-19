import { ArrowUpRight, Lock } from 'lucide-react';
import { FlowDiagram } from '@/components/diagrams/FlowDiagram';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { TagList } from '@/components/ui/Tag';
import type { Project } from '@/types';
import { cn } from '@/lib/cn';

function RepoLink({ project }: { project: Project }) {
  if (project.githubUrl) {
    return (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-full border border-navy-200 px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-navy-400 hover:bg-white dark:border-navy-600 dark:text-mist-100 dark:hover:border-navy-400 dark:hover:bg-navy-800"
      >
        <GithubIcon size={16} />
        View repository
        <ArrowUpRight
          size={15}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  if (project.linkNote) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-mist-100 px-4 py-2 text-sm text-navy-500 dark:bg-navy-800 dark:text-mist-400">
        <Lock size={14} aria-hidden="true" />
        {project.linkNote}
      </span>
    );
  }
  return null;
}

/** Reusable project card. Featured projects get a two-column layout with an architecture diagram. */
export function ProjectCard({ project: p }: { project: Project }) {
  const wide = p.featured && p.diagram;
  return (
    <article
      aria-labelledby={`project-${p.id}`}
      className={cn('card p-6 sm:p-8', wide && 'grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start')}
    >
      <div className="flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-2">
          {p.context && (
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-mist-500 dark:text-navy-300">
              {p.context}
            </span>
          )}
          {p.badge && (
            <span className="rounded-full bg-navy-800 px-2.5 py-0.5 text-[0.7rem] font-medium text-paper dark:bg-mist-200 dark:text-navy-900">
              {p.badge}
            </span>
          )}
        </div>

        <h3
          id={`project-${p.id}`}
          className={cn(
            'mt-3 font-display font-semibold tracking-tight text-navy-900 dark:text-white',
            p.featured ? 'text-2xl sm:text-[1.7rem]' : 'text-xl',
          )}
        >
          {p.name}
        </h3>
        <p className="mt-1.5 text-[0.95rem] text-navy-500 dark:text-mist-400">{p.tagline}</p>

        <ul className="mt-5 space-y-2.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[0.93rem] leading-relaxed text-navy-600 dark:text-mist-300">
              <span className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-electric-500/70" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <TagList
            items={p.technologies}
            tone={p.featured ? 'accent' : 'neutral'}
            label={`Technologies used in ${p.name}`}
          />
        </div>

        <div className="mt-6 pt-1 lg:mt-auto lg:pt-6">
          <RepoLink project={p} />
        </div>
      </div>

      {wide && p.diagram && <FlowDiagram diagram={p.diagram} />}
    </article>
  );
}
