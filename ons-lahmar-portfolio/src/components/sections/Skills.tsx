import { BarChart3, BrainCircuit, Database, LayoutTemplate, Server, TestTubes, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { skillCategories } from '@/data/skills';
import type { SkillCategory, SkillItem } from '@/types';
import { cn } from '@/lib/cn';

const icons: Record<SkillCategory['icon'], LucideIcon> = {
  server: Server,
  brain: BrainCircuit,
  layout: LayoutTemplate,
  database: Database,
  test: TestTubes,
  chart: BarChart3,
};

function SkillChip({ skill }: { skill: SkillItem }) {
  const applied = Boolean(skill.usedIn?.length);
  const usage = applied
    ? `Applied in: ${skill.usedIn!.join(', ')}`
    : 'Studied / practised outside the projects listed here';
  return (
    <li>
      <span
        title={usage}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[0.8rem] ring-1 ring-inset transition-colors',
          applied
            ? 'bg-white text-navy-800 ring-mist-300 dark:bg-navy-800 dark:text-mist-100 dark:ring-navy-600'
            : 'bg-transparent text-navy-500 ring-mist-200 dark:text-mist-400 dark:ring-navy-700',
        )}
      >
        {applied && <span className="h-1.5 w-1.5 rounded-full bg-electric-500" aria-hidden="true" />}
        {skill.name}
        <span className="sr-only">. {usage}</span>
      </span>
    </li>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Technical skills"
      title="Tools I build with"
      intro={
        <>
          No self-rated percentages. Technologies marked with{' '}
          <span className="inline-flex translate-y-[-1px] items-center">
            <span className="mx-1 h-1.5 w-1.5 rounded-full bg-electric-500" aria-hidden="true" />
          </span>
          were applied in the internships or projects shown below — hover one to see where.
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = icons[cat.icon];
          return (
            <Reveal key={cat.id} delay={(i % 3) * 0.06} className="card p-6">
              <h3 className="flex items-center gap-2.5 font-display text-base font-semibold text-navy-900 dark:text-white">
                <Icon size={18} className="text-electric-500" aria-hidden="true" />
                {cat.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <SkillChip key={s.name} skill={s} />
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
