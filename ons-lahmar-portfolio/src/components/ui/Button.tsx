import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-navy-800 text-paper hover:bg-navy-700 dark:bg-electric-500 dark:text-white dark:hover:bg-electric-400 shadow-sm',
  secondary:
    'border border-navy-200 bg-white/60 text-navy-800 hover:border-navy-400 hover:bg-white dark:border-navy-600 dark:bg-navy-900/60 dark:text-mist-100 dark:hover:border-navy-400',
  accent: 'bg-electric-500 text-white hover:bg-electric-400 shadow-sm',
  ghost:
    'text-navy-600 hover:text-navy-900 hover:bg-navy-50 dark:text-mist-300 dark:hover:bg-navy-800 dark:hover:text-white',
};

/** Link styled as a button. Used for CTAs, downloads and social links. */
export function ButtonLink({
  variant = 'primary',
  icon,
  iconPosition = 'left',
  external,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200',
        variants[variant],
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </a>
  );
}
