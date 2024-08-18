import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`container px-3' flex flex-col ${className}`}>
      {children}
    </div>
  );
}
