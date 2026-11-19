import { BrainCircuit, CalendarDays, Languages, Server, ShieldCheck } from 'lucide-react';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { profile } from '@/data/profile';

const pillars = [
  {
    icon: Server,
    title: 'Backend engineering',
    text: 'REST APIs with Java / Spring Boot and .NET, layered and Clean Architecture, security with JWT and role-based access.',
  },
  {
    icon: BrainCircuit,
    title: 'Applied generative AI',
    text: 'Integrating LLMs into applications through RAG architectures, LangChain and prompt engineering.',
  },
  {
    icon: ShieldCheck,
    title: 'LLM reliability',
    text: 'Evaluating reasoning, consistency, explainability and reliability of generated answers.',
  },
];

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About me" title="Software engineering, with AI where it adds value">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-navy-600 sm:text-[1.05rem] dark:text-mist-300">
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <dl className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="card p-4">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-mist-500 dark:text-navy-300">
                <CalendarDays size={14} aria-hidden="true" /> Availability
              </dt>
              <dd className="mt-2 text-sm text-navy-700 dark:text-mist-200">{profile.availability.detail}</dd>
            </div>
            <div className="card p-4">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-mist-500 dark:text-navy-300">
                <Languages size={14} aria-hidden="true" /> Languages
              </dt>
              <dd className="mt-2 text-sm text-navy-700 dark:text-mist-200">
                {profile.languages.map((l, i) => (
                  <span key={l.name} className="whitespace-nowrap">
                    {i > 0 && <span className="mx-1.5 text-mist-400">·</span>}
                    {l.name} <span className="text-navy-400 dark:text-mist-500">({l.level})</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <ul className="space-y-4">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <RevealItem key={title} delay={i * 0.08} className="card flex gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-electric-500/10 text-electric-600 dark:bg-electric-400/10 dark:text-electric-300">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-navy-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-500 dark:text-mist-400">{text}</p>
              </div>
            </RevealItem>
          ))}
        </ul>
      </div>
    </Section>
  );
}
