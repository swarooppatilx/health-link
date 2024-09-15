'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const noLayoutRoutes = ['/login', '/intro', '/dashboard'];

  if (noLayoutRoutes.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>{children}</div>
      <Footer />
    </div>
  );
}
