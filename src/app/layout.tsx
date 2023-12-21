import '@/app/styles/globals.css';
import c from 'clsx';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from './providers';
import Header from './components/ui/header';

export const metadata: Metadata = {
  title: {
    default: 'Paulo Lins',
    template: '%s'
  },
  metadataBase: new URL('https://pink.codes'),
  creator: 'Paulo Lins',
  description:
    'Crafting interfaces with a focus on design, human-computer interaction and architecture.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Paulo Lins',
    description:
      'Crafting interfaces with a focus on design, human-computer interaction and architecture.',
    url: 'https://pink.codes',
    siteName: 'Paulo Lins',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://pink.codes/og.jpeg',
        height: 1200,
        width: 1200,
        alt: 'Black background image'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Paulo Lins',
    site: '@pinkc0des',
    creator: '@pinkc0des',
    card: 'summary_large_image',
    description:
      'Crafting interfaces with a focus on design, human-computer interaction and architecture.'
  }
};

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={c('scroll-smooth', GeistMono.variable, GeistSans.variable)}>
      <body className="text-sm text-white md:text-base lg:text-base">
        <Providers>
          <main className="container mx-auto min-h-full max-w-3xl">
            <Header />
            <div className="pt-36">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
