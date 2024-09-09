import '@/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import { TRPCReactProvider } from '@/trpc/react';

export const metadata: Metadata = {
  title: 'Health Link',
  description:
    'Your one stop solution for hospital appointments, health records, and more',
  manifest: '/manifest.json',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  authors: [{ name: 'Swaroop Patil', url: 'https://swarooppatilx.github.io' }],
  keywords:
    'health, hospital, appointments, health records, medical, health management',
  robots: 'index, follow',
  openGraph: {
    title: 'Health Link',
    description:
      'Your one stop solution for hospital appointments, health records, and more',
    url: 'https://health-link-v1.vercel.app',
    images: 'https://health-link-v1.vercel.app/og-image.jpg',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sasta.tony.stark',
    title: 'Health Link',
    description:
      'Your one stop solution for hospital appointments, health records, and more',
    images: 'https://health-link-v1.vercel.app/twitter-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
