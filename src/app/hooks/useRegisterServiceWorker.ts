'use client'; // Ensure this is a Client Component

import { useEffect } from 'react';

export default function useRegisterServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const swUrl = '/sw.js'; // Path to your service worker file
      navigator.serviceWorker.register(swUrl).then(
        (registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        },
        (error) => {
          console.error('Service Worker registration failed:', error);
        }
      );
    }
  }, []);
}
