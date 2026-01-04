import '@/styles/globals.css';
import '@/styles/header.css';
import type { AppProps } from 'next/app';
import Providers from '@/providers';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { query } = useRouter();

  console.log(query);

  return (
    <Providers>
      <main className="relative mx-auto flex min-h-screen flex-col items-center justify-between">
        {/* <Header /> */}
        <Component className="container grow pt-20" {...pageProps} />
        {/* <Footer /> */}
      </main>
    </Providers>
  );
}
