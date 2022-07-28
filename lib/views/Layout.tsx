import { ReactNode } from 'react';
import Header from './Header';
import Providers from './Providers';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
}
