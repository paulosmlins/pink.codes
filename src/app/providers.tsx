'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Pointers from './pointers';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      {children}
      <SpeedInsights />
      <Analytics />
      <Pointers />
    </ThemeProvider>
  );
}
