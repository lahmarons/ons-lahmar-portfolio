import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronDown, ChevronRight } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/cn';

type Diagram = NonNullable<Project['diagram']>;

/**
 * Lightweight architecture / pipeline diagram built with HTML + CSS
 * (crisp at any size, themeable, and read by screen readers as an ordered list).
 * Groups flow top → bottom; nodes inside a group flow left → right (top → bottom on phones).
 */
export function FlowDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="rounded-2xl border border-mist-200 bg-paper/70 p-4 sm:p-5 dark:border-navy-700 dark:bg-navy-950/50">
      <figcaption className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-mist-500 dark:text-navy-300">
          {diagram.title}
        </span>
        <span className="h-px flex-1 bg-mist-200 dark:bg-navy-700" aria-hidden="true" />
      </figcaption>

      <ol className="flex flex-col gap-1">
        {diagram.groups.map((group, gi) => (
          <Fragment key={group.title}>
            {gi > 0 && (
              <li aria-hidden="true" className="flex justify-center py-0.5 text-electric-500">
                <ArrowDown size={15} />
              </li>
            )}
            <li>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: gi * 0.12 }}
                className="rounded-xl border border-dashed border-mist-300 p-2.5 dark:border-navy-600"
              >
                <p className="mb-2 px-1 text-[0.66rem] font-semibold uppercase tracking-wider text-navy-400 dark:text-mist-500">
                  {group.title}
                </p>
                <ol className="flex flex-col gap-1.5 sm:flex-row sm:items-stretch sm:gap-1">
                  {group.nodes.map((node, ni) => (
                    <Fragment key={node.label}>
                      {ni > 0 && (
                        <li
                          aria-hidden="true"
                          className="flex items-center justify-center text-mist-400 dark:text-navy-400"
                        >
                          <ChevronDown size={13} className="sm:hidden" />
                          <ChevronRight size={13} className="hidden sm:block" />
                        </li>
                      )}
                      <li className="flex-1">
                        <div
                          className={cn(
                            'h-full rounded-lg px-3 py-2 ring-1 ring-inset',
                            node.accent
                              ? 'bg-electric-500/10 ring-electric-500/30 dark:bg-electric-400/10 dark:ring-electric-400/35'
                              : 'bg-white ring-mist-200 dark:bg-navy-800/80 dark:ring-navy-700',
                          )}
                        >
                          <p
                            className={cn(
                              'text-[0.82rem] font-semibold leading-tight',
                              node.accent
                                ? 'text-electric-700 dark:text-electric-300'
                                : 'text-navy-800 dark:text-mist-100',
                            )}
                          >
                            {node.label}
                          </p>
                          {node.detail && (
                            <p className="mt-1 font-mono text-[0.66rem] leading-snug text-navy-400 dark:text-mist-500">
                              {node.detail}
                            </p>
                          )}
                        </div>
                      </li>
                    </Fragment>
                  ))}
                </ol>
              </motion.div>
            </li>
          </Fragment>
        ))}
      </ol>

      {diagram.caption && (
        <p className="mt-4 text-xs leading-relaxed text-navy-500 dark:text-mist-400">{diagram.caption}</p>
      )}
    </figure>
  );
}
