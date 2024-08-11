import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from '@/app/providers';

export const metadata: Metadata = {
  title: {
    default: '🎈 Bio - Paulo Lins',
    template: '%s'
  },
  metadataBase: new URL('https://pink.codes/bio'),
  creator: 'Paulo Lins Bio',
  description: 'Bio com rede sociais e links uteis',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Paulo Lins Bio',
    description: 'Bio com rede sociais e links uteis',
    url: 'https://pink.codes',
    siteName: 'Paulo Lins Bio',
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
    title: 'Paulo Lins Bio',
    site: '@pinkc0des',
    creator: '@pinkc0des',
    card: 'summary_large_image',
    description: 'Bio com rede sociais e links uteis'
  }
};

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="text-sm text-white md:text-base lg:text-base">
        <Providers>
          <main className="containerBio relative mx-auto min-h-full max-w-3xl">
            <div className="">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
