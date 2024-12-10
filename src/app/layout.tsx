import '@/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Link',
  description:
    'Your one-stop solution for hospital appointments, health records, and more.',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/icon.png', sizes: '180x180' },
    { rel: 'apple-touch-startup-image', url: '/icon.png', sizes: '180x180' },
  ],
  authors: [{ name: 'Swaroop Patil', url: 'https://swarooppatilx.github.io' }],
  keywords:
    'health, hospital, appointments, health records, medical, health management',
  robots: 'index, follow',
  openGraph: {
    title: 'Health Link',
    description:
      'Your one-stop solution for hospital appointments, health records, and more.',
    url: 'https://health-link-v1.vercel.app',
    images: [
      {
        url: 'https://health-link-v1.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Health Link - One Stop Solution for Health Management',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sasta.tony.stark',
    title: 'Health Link',
    description:
      'Your one-stop solution for hospital appointments, health records, and more.',
    images: [
      {
        url: 'https://health-link-v1.vercel.app/twitter-image.jpg',
        alt: 'Health Link Twitter Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
