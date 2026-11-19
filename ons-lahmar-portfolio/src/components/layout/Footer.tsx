import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-mist-200 py-10 dark:border-navy-800">
      <div className="container-page flex flex-col items-center justify-between gap-5 text-sm text-navy-500 sm:flex-row dark:text-mist-400">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript & Tailwind CSS
        </p>
        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-navy-50 hover:text-navy-900 dark:hover:bg-navy-800 dark:hover:text-white"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-navy-50 hover:text-navy-900 dark:hover:bg-navy-800 dark:hover:text-white"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-full border border-mist-200 hover:border-navy-300 hover:text-navy-900 dark:border-navy-700 dark:hover:text-white"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
