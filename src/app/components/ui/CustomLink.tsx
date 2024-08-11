import Link from 'next/link';
import { Icon } from './Icon';

export interface CustomLinkProps {
  href?: any;
  children?: React.ReactNode;
  ariaLabel?: string;
  arrowIcon?: boolean;
  hideUnderline?: boolean;
  className?: string;
}

export default function CustomLink({
  href,
  children,
  ariaLabel,
  arrowIcon,
  hideUnderline,
  className
}: CustomLinkProps) {
  const isInternalLink = href.startsWith('/');

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={`${className} ${
          !hideUnderline &&
          'underline decoration-neutral-300 decoration-1 underline-offset-[2.5px] dark:decoration-[#505050]'
        } transition-colors hover:text-secondary dark:hover:text-secondary-dark`}
        aria-label={ariaLabel}
      >
        {arrowIcon && (
          <Icon
            name="arrow-top-left"
            className="mr-1 inline-flex items-center"
            aria-label="Arrow Top Left icon"
            width={15}
            height={15}
          />
        )}
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`${className} ${
        !hideUnderline &&
        'underline decoration-neutral-300 decoration-1 underline-offset-[2.5px] dark:decoration-[#505050]'
      } transition-colors hover:text-secondary dark:hover:text-secondary-dark`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
