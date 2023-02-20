import { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { Caveat } from '@next/font/google';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

const albatros = localFont({
  src: '../../public/fonts/212.woff2',
  variable: '--font-albatros',
  preload: true,
});
const albatrosItalic = localFont({
  src: '../../public/fonts/213.woff2',
  variable: '--font-albatros-italic',
  preload: true,
});
const cassandre = localFont({
  src: '../../public/fonts/206.woff2',
  variable: '--font-cassandre',
  preload: true,
});
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  preload: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${albatros.variable} ${albatrosItalic.variable} ${cassandre.variable} ${caveat.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
