import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import type { Theme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';
import { ThemeToggle } from './ThemeToggle';

const sectionIds = navItems.map((n) => n.id);

export function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape and when resizing to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  // On mobile, scroll only once the menu has finished collapsing — the height animation
  // would otherwise cancel the smooth scroll.
  const pendingTarget = useRef<string | null>(null);
  const goTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    pendingTarget.current = id;
    setOpen(false);
  };
  const scrollToPending = () => {
    const id = pendingTarget.current;
    pendingTarget.current = null;
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-mist-200/80 bg-paper/85 backdrop-blur-md dark:border-navy-800 dark:bg-navy-950/85'
          : 'border-b border-transparent',
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main navigation">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-[0.95rem] font-semibold tracking-tight text-navy-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-800 text-xs font-bold text-paper dark:bg-electric-500 dark:text-white">
            OL
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-3 py-1.5 text-sm transition-colors',
                    isActive
                      ? 'text-navy-900 dark:text-white'
                      : 'text-navy-500 hover:text-navy-900 dark:text-mist-400 dark:hover:text-white',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-navy-50 dark:bg-navy-800"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.45 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="hidden items-center gap-1.5 rounded-full border border-navy-200 px-3.5 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-navy-400 hover:text-navy-900 lg:inline-flex dark:border-navy-700 dark:text-mist-200 dark:hover:border-navy-500 dark:hover:text-white"
          >
            <Download size={15} aria-hidden="true" />
            CV
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-navy-700 hover:bg-navy-50 md:hidden dark:text-mist-200 dark:hover:bg-navy-800"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence onExitComplete={scrollToPending}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pb-5 pt-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => goTo(e, item.id)}
                    className={cn(
                      'block rounded-xl px-3 py-2.5 text-base',
                      active === item.id
                        ? 'bg-navy-50 text-navy-900 dark:bg-navy-800 dark:text-white'
                        : 'text-navy-600 dark:text-mist-300',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={profile.cvUrl}
                  download={profile.cvFileName}
                  className="flex items-center justify-center gap-2 rounded-xl bg-navy-800 px-3 py-2.5 text-base font-medium text-paper dark:bg-electric-500 dark:text-white"
                >
                  <Download size={17} aria-hidden="true" />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
