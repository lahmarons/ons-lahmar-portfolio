import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/cn';

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Professional experience"
      title="Internships"
      intro="From mobile interfaces to full-stack web applications and LLM evaluation research."
    >
      <ol className="relative space-y-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-mist-300 sm:pl-0 dark:before:bg-navy-700">
        {experiences.map((exp, i) => (
          <li key={exp.id} className="relative pl-8 sm:pl-10">
            <span
              aria-hidden="true"
              className={cn(
                'absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 bg-paper dark:bg-navy-950',
                exp.featured ? 'border-electric-500' : 'border-navy-300 dark:border-navy-500',
              )}
            >
              {exp.featured && <span className="absolute inset-[3px] rounded-full bg-electric-500" />}
            </span>
            <Reveal delay={i * 0.05}>
              <ExperienceCard experience={exp} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
