import { GraduationCap, MapPin } from 'lucide-react';
import { RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { education } from '@/data/education';
import { cn } from '@/lib/cn';

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Academic background">
      <ol className="grid gap-5 md:grid-cols-3">
        {education.map((ed, i) => (
          <RevealItem
            key={ed.id}
            delay={i * 0.06}
            className={cn('card flex h-full flex-col p-6', ed.current && 'border-navy-300 dark:border-navy-500')}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-medium text-electric-600 dark:text-electric-300">
                {ed.period}
              </span>
              {ed.current && (
                <span className="rounded-full bg-electric-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-electric-700 dark:bg-electric-400/15 dark:text-electric-300">
                  Current
                </span>
              )}
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900 dark:text-white">
              {ed.program}
            </h3>
            <p className="mt-2 flex items-start gap-2 text-sm text-navy-600 dark:text-mist-300">
              <GraduationCap size={15} className="mt-0.5 shrink-0 text-navy-400" aria-hidden="true" />
              {ed.school}
            </p>
            <p className="mt-auto flex items-center gap-2 pt-4 text-sm text-navy-400 dark:text-mist-500">
              <MapPin size={14} aria-hidden="true" />
              {ed.location}
            </p>
          </RevealItem>
        ))}
      </ol>
    </Section>
  );
}
