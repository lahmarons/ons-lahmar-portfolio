import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface TagProps {
  children: ReactNode;
  tone?: 'neutral' | 'accent';
  className?: string;
  title?: string;
}

/** Small technology / keyword chip. */
export function Tag({ children, tone = 'neutral', className, title }: TagProps) {
  return (
    <span
      title={title}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[0.72rem] leading-none',
        tone === 'neutral' &&
          'bg-mist-100 text-navy-600 ring-1 ring-inset ring-mist-200 dark:bg-navy-800/80 dark:text-mist-300 dark:ring-navy-700',
        tone === 'accent' &&
          'bg-electric-500/10 text-electric-700 ring-1 ring-inset ring-electric-500/25 dark:bg-electric-400/10 dark:text-electric-300 dark:ring-electric-400/30',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({ items, tone, label }: { items: string[]; tone?: TagProps['tone']; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag tone={tone}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
