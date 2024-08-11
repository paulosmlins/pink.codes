import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from '@/app/providers';
import Header from '@/app/components/ui/header';
import Footer from '@/app/components/ui/footer';
import Separator from '@/app/components/generic/Separator';

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
    <html lang="pt">
      <body className="text-sm text-white md:text-base lg:text-base">
        <Providers>
          <main className="relative mx-auto flex min-h-screen flex-col items-center">
            <Header />
            <div className="container grow pt-20">{children}</div>
            <Separator className="w-full" />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
