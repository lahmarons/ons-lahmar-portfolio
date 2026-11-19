import { motion } from 'framer-motion';
import { ArrowRight, Download, GraduationCap, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { ButtonLink } from '@/components/ui/Button';
import { profile } from '@/data/profile';

const ease = [0.22, 1, 0.36, 1] as const;
const item = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Background: faint engineering grid + soft electric glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-electric-500/10 blur-3xl dark:bg-electric-500/15" />
      </div>

      <div className="container-page grid items-center gap-14 pb-12 lg:grid-cols-[1.25fr_1fr] lg:pb-16">
        <div>
          <motion.p
            {...item(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-electric-500/25 bg-electric-500/[0.07] px-3.5 py-1.5 text-xs font-medium text-electric-700 sm:text-sm dark:border-electric-400/30 dark:bg-electric-400/10 dark:text-electric-300"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-500" />
            </span>
            {profile.availability.short}
          </motion.p>

          <motion.h1
            {...item(0.08)}
            className="mt-6 font-display text-5xl font-semibold tracking-tight text-navy-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.p {...item(0.16)} className="mt-4 text-xl font-medium text-navy-600 sm:text-2xl dark:text-mist-200">
            {profile.headline}
          </motion.p>

          <motion.ul
            {...item(0.22)}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-navy-500 dark:text-mist-400"
            aria-label="Areas of focus"
          >
            {profile.focus.map((f, i) => (
              <li key={f} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-electric-500" aria-hidden="true">
                    |
                  </span>
                )}
                {f}
              </li>
            ))}
          </motion.ul>

          <motion.p
            {...item(0.3)}
            className="mt-6 max-w-xl text-base leading-relaxed text-navy-500 sm:text-lg dark:text-mist-400"
          >
            {profile.pitch}
          </motion.p>

          <motion.div {...item(0.38)} className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href="#projects"
              icon={
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              }
              iconPosition="right"
            >
              View My Projects
            </ButtonLink>
            <ButtonLink
              href={profile.cvUrl}
              download={profile.cvFileName}
              variant="secondary"
              icon={<Download size={16} aria-hidden="true" />}
            >
              Download CV
            </ButtonLink>
            <div className="flex items-center gap-1 sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="grid h-10 w-10 place-items-center rounded-full text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900 dark:text-mist-300 dark:hover:bg-navy-800 dark:hover:text-white"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="grid h-10 w-10 place-items-center rounded-full text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900 dark:text-mist-300 dark:hover:bg-navy-800 dark:hover:text-white"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.email}`}
                className="grid h-10 w-10 place-items-center rounded-full text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900 dark:text-mist-300 dark:hover:bg-navy-800 dark:hover:text-white"
              >
                <Mail size={19} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.ul
            {...item(0.46)}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-500 dark:text-mist-400"
          >
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-electric-500" aria-hidden="true" />
              {profile.location}
            </li>
            <li className="flex items-center gap-2">
              <GraduationCap size={15} className="text-electric-500" aria-hidden="true" />
              {profile.school}
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="hidden lg:block"
        >
          <CodeCard />
        </motion.div>
      </div>
    </section>
  );
}

/** Decorative "profile as code" card — a nod to the Java background. */
function CodeCard() {
  const k = 'text-electric-600 dark:text-electric-300'; // keyword
  const t = 'text-navy-800 dark:text-white'; // type
  const s = 'text-emerald-700 dark:text-emerald-300'; // string
  const c = 'text-mist-500 dark:text-navy-300'; // comment
  return (
    <figure className="card overflow-hidden" aria-label="Profile summary written as Java code">
      <div className="flex items-center gap-2 border-b border-mist-200 px-4 py-3 dark:border-navy-700/70">
        <span className="h-2.5 w-2.5 rounded-full bg-mist-300 dark:bg-navy-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist-300 dark:bg-navy-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist-300 dark:bg-navy-600" />
        <span className="ml-3 font-mono text-xs text-mist-500 dark:text-navy-300">Engineer.java</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-7 text-navy-600 dark:text-mist-300">
        <code>
          <span className={k}>public record</span> <span className={t}>Engineer</span>({'\n  '}
          <span className={t}>String</span> name,
          {'\n  '}
          <span className={t}>List</span>&lt;<span className={t}>String</span>&gt; stack,
          {'\n  '}
          <span className={t}>String</span> focus
          {'\n'}) {'{}'}
          {'\n\n'}
          <span className={k}>var</span> ons = <span className={k}>new</span> <span className={t}>Engineer</span>(
          {'\n  '}
          <span className={s}>"Ons Lahmar"</span>,{'\n  '}
          <span className={t}>List</span>.of(<span className={s}>"Spring Boot"</span>, <span className={s}>"RAG"</span>,
          {'\n          '}
          <span className={s}>"LLM evaluation"</span>),
          {'\n  '}
          <span className={s}>"Reliable AI in real software"</span>
          {'\n'});
          {'\n\n'}
          <span className={c}>// Next step: 6-month PFE · Feb 2027</span>
        </code>
      </pre>
    </figure>
  );
}
