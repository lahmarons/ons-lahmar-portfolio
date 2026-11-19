import { Award, CircleCheck, Hourglass } from 'lucide-react';
import { RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { certifications } from '@/data/education';
import type { Certification } from '@/types';
import { cn } from '@/lib/cn';

function StatusBadge({ cert }: { cert: Certification }) {
  const obtained = cert.status === 'obtained';
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
        obtained
          ? 'bg-emerald-600/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300'
          : 'bg-amber-500/10 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
      )}
    >
      {obtained ? <CircleCheck size={13} aria-hidden="true" /> : <Hourglass size={13} aria-hidden="true" />}
      {obtained ? `Obtained${cert.year ? ` · ${cert.year}` : ''}` : 'In progress'}
    </span>
  );
}

export function Certifications() {
  const sorted = [...certifications].sort((a, b) => (a.status === b.status ? 0 : a.status === 'obtained' ? -1 : 1));
  return (
    <Section
      id="certifications"
      index="06"
      eyebrow="Certifications"
      title="Certifications & training"
      className="pt-0 sm:pt-0"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {sorted.map((cert, i) => (
          <RevealItem key={cert.id} delay={i * 0.05} className="card flex items-start gap-4 p-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-mist-300">
              <Award size={19} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display text-[0.98rem] font-semibold leading-snug text-navy-900 dark:text-white">
                  {cert.name}
                </h3>
                <StatusBadge cert={cert} />
              </div>
              <p className="mt-1 text-sm text-navy-500 dark:text-mist-400">{cert.issuer}</p>
            </div>
          </RevealItem>
        ))}
      </ul>
    </Section>
  );
}
