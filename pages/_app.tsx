import '../styles/globals.css';
import type { AppProps } from 'next/app';

type AppLayoutProps = AppProps & { Component: NPage };

export default function App({ Component, pageProps }: AppLayoutProps) {
  const render = Component.getLayout ?? ((page) => page);

  return render(<Component {...pageProps} />);
}
