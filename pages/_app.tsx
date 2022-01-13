import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-7xl md:py-24">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
