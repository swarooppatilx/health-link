'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname(); // Get the current route

  // List of routes that should not use the layout
  const noLayoutRoutes = ['/login', '/intro'];

  // Check if the current route should not use the layout
  if (noLayoutRoutes.includes(pathname)) {
    return <>{children}</>; // Render only the children without the layout
  }

  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>{children}</div>
      <Footer />
    </div>
  );
}
