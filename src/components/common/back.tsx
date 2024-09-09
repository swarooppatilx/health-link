'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname !== '/home') {
    return (
      <div
        className='flex cursor-pointer items-center bg-white p-2'
        onClick={() => router.back()}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className='h-4 w-4 text-blue-600'
        />
        <span className='text-blue-600'>Back</span>
      </div>
    );
  }
};

export default BackButton;
