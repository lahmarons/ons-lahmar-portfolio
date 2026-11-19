import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Page section with a consistent numbered heading. */
export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn('py-14 sm:py-20', className)}>
      <div className="container-page">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow">
            <span className="text-mist-500 dark:text-navy-300">{index}</span>
            <span className="mx-2 text-mist-400 dark:text-navy-500">/</span>
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl dark:text-white"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-navy-500 dark:text-mist-400">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
