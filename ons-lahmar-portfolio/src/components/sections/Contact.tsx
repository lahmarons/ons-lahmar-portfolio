import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { label: 'LinkedIn', value: 'in/lahmarons', href: profile.linkedin, icon: <LinkedinIcon size={18} /> },
    { label: 'GitHub', value: 'github.com/lahmarons', href: profile.github, icon: <GithubIcon size={18} /> },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-paper sm:px-12 sm:py-16 dark:bg-navy-900 dark:ring-1 dark:ring-navy-700">
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-electric-500/25 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-electric-300">
                <span className="text-navy-300">07</span>
                <span className="mx-2 text-navy-500">/</span>
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                Looking for a 6-month PFE internship from February 2027
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-mist-300">
                I would be glad to discuss backend engineering, RAG or LLM reliability topics — including application
                modernization projects. The fastest way to reach me is by email.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink
                  href={`mailto:${profile.email}?subject=${encodeURIComponent('PFE internship opportunity')}`}
                  variant="accent"
                  icon={<Mail size={16} aria-hidden="true" />}
                >
                  {profile.email}
                </ButtonLink>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-600 px-4 py-2.5 text-sm text-mist-200 transition-colors hover:border-navy-400 hover:text-white"
                >
                  {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? 'Email address copied to clipboard' : ''}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-navy-700 bg-navy-800/50 px-5 py-4 transition-colors hover:border-navy-500 hover:bg-navy-800"
                >
                  <span className="text-mist-200">{l.icon}</span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-white">{l.label}</span>
                    <span className="block font-mono text-xs text-mist-400">{l.value}</span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-mist-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
              <a
                href={profile.cvUrl}
                download={profile.cvFileName}
                className="group flex items-center gap-4 rounded-2xl bg-paper px-5 py-4 text-navy-900 transition-colors hover:bg-white"
              >
                <Download size={18} aria-hidden="true" />
                <span className="flex-1">
                  <span className="block text-sm font-semibold">Download CV</span>
                  <span className="block font-mono text-xs text-navy-500">PDF · French version</span>
                </span>
                <ArrowUpRight size={17} className="rotate-90 text-navy-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
