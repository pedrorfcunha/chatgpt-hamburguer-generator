import '../styles/globals.css';

import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Hamburguer Generator!</title>
      </Head>
      <main className={`${montserrat.variable} font-sans`}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}
