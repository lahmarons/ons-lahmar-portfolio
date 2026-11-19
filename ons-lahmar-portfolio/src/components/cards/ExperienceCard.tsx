import { CalendarDays, MapPin, Sparkles } from 'lucide-react';
import { TagList } from '@/components/ui/Tag';
import type { Experience } from '@/types';
import { cn } from '@/lib/cn';

/** Reusable experience entry. Featured entries get an accent frame and a structured summary. */
export function ExperienceCard({ experience: e }: { experience: Experience }) {
  return (
    <article
      className={cn(
        'card relative p-6 sm:p-7',
        e.featured && 'border-electric-500/40 shadow-glow dark:border-electric-400/40',
      )}
      aria-labelledby={`exp-${e.id}`}
    >
      {e.featured && e.featuredLabel && (
        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-electric-500/10 px-2.5 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-electric-700 dark:bg-electric-400/15 dark:text-electric-300">
          <Sparkles size={12} aria-hidden="true" />
          {e.featuredLabel}
        </p>
      )}

      <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <h3 id={`exp-${e.id}`} className="font-display text-xl font-semibold text-navy-900 dark:text-white">
            {e.company}
          </h3>
          <p className="mt-0.5 text-[0.95rem] font-medium text-electric-700 dark:text-electric-300">
            {e.role}
            {e.type && <span className="font-normal text-navy-400 dark:text-mist-500"> · {e.type}</span>}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-x-4 gap-y-1 text-sm text-navy-500 sm:flex-col sm:items-end dark:text-mist-400">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={14} aria-hidden="true" />
            <time>{e.period}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} aria-hidden="true" />
            {e.location}
          </span>
        </div>
      </header>

      <ul className="mt-5 space-y-2.5">
        {e.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-[0.95rem] leading-relaxed text-navy-600 dark:text-mist-300">
            <span className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-electric-500/70" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      {e.facets && (
        <dl className="mt-6 grid gap-3 rounded-xl border border-mist-200 bg-paper/60 p-4 sm:grid-cols-3 dark:border-navy-700 dark:bg-navy-950/40">
          {e.facets.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[0.68rem] uppercase tracking-wider text-mist-500 dark:text-navy-300">
                {f.label}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {f.values.map((v) => (
                  <span
                    key={v}
                    className="rounded-md bg-white px-2 py-0.5 text-xs text-navy-700 ring-1 ring-mist-200 dark:bg-navy-800 dark:text-mist-200 dark:ring-navy-700"
                  >
                    {v}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-6">
        <TagList
          items={e.technologies}
          tone={e.featured ? 'accent' : 'neutral'}
          label={`Technologies used at ${e.company}`}
        />
      </div>
    </article>
  );
}
