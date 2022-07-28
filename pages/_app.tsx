import type { AppProps } from 'next/app';
import Layout from '@lib/views/Layout';
import '../global.styles.css';

type AppLayoutProps = AppProps & { Component: NPage };

export default function App({ Component, pageProps }: AppLayoutProps) {
  const render = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return render(<Component {...pageProps} />);
}
