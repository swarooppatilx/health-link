'use client';

import useRegisterServiceWorker from '@/app/hooks/useRegisterServiceWorker';
import Image from 'next/image';
import Link from 'next/link';

export default function NHSIntro() {
  useRegisterServiceWorker();
  return (
    <div className='flex h-screen items-center justify-center bg-nhs-blue'>
      <div className='text-center'>
        <div className=''>
          <Image
            src='/nhs-logo.png' // Replace with your actual NHS logo path
            alt='NHS Logo'
            height={280}
            width={280}
            className='mx-auto mt-28'
          />
        </div>
        <p className='mb-5 mt-28 text-base font-bold text-white'>
          Access your health services
        </p>
        <Link href='/home'>
          <button className='mb-10 rounded bg-white px-8 py-2 font-bold text-nhs-blue'>
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
