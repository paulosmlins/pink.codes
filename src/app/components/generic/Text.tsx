import { HTMLProps } from 'react';

interface TextProps
  extends Omit<HTMLProps<HTMLParagraphElement | HTMLDivElement | HTMLSpanElement>, 'size'> {
  as?: 'p' | 'div' | 'span';
  weight?: 'regular' | 'medium' | 'bold';
  colour?: 'primary' | 'secondary';
  size?: 'xsmall' | 'small' | 'normal' | 'large';
}

export default function Text({
  as: Tag = 'p',
  weight = 'regular',
  colour = 'primary',
  size = 'normal',
  className,
  children
}: TextProps) {
  return (
    <Tag
      className={`${
        (weight === 'regular' && 'font-normal') ||
        (weight === 'medium' && 'font-medium') ||
        (weight === 'bold' && 'font-bold')
      } ${
        (colour === 'primary' && 'text-primary') ||
        (colour === 'primary' && 'dark:text-primary-dark') ||
        (colour === 'secondary' && 'text-secondary') ||
        (colour === 'secondary' && 'dark:text-secondary-dark')
      } ${
        (size === 'xsmall' && 'text-xs') ||
        (size === 'small' && 'text-sm') ||
        (size === 'normal' && 'text-base') ||
        (size === 'large' && 'text-lg')
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
