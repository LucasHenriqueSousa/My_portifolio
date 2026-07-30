import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { useReveal } from '../hooks/useReveal';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function App({ Component, pageProps }: AppProps) {
  // initialize global UX hooks
  useReveal();
  useSmoothScroll();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
