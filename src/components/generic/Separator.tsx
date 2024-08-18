interface SeparatorProps {
  className?: string;
}

export default function Separator({ className }: SeparatorProps) {
  return <hr className={`h-px border-0 dark:bg-neutral-800 ${className}`} />;
}
