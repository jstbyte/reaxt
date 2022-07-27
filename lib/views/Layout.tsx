import { ReactNode } from 'react';
import Providers from './Providers';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <Providers>{children}</Providers>;
}
