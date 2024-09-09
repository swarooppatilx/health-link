'use client';

import { permanentRedirect } from 'next/navigation';
import useRegisterServiceWorker from './hooks/useRegisterServiceWorker';

export default function Intro() {
  useRegisterServiceWorker();
  permanentRedirect('/intro');
}
