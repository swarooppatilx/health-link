import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HealthSection = () => (
  <div className='mb-6 p-2'>
    <div className='mb-2 flex justify-between'>
      <h3 className='font-bold'>Health</h3>
      <Link href='/health'>
        <p className='text-blue-600'>View all</p>
      </Link>
    </div>
    <div className='rounded-lg bg-white shadow-md'>
      <Link href='/health/records'>
        <div className='flex items-center justify-between border-b p-4 font-bold text-nhs-blue'>
          <span>Health record</span>
          <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
        </div>
      </Link>
      <div className='flex items-center justify-between border-b p-4 font-bold text-nhs-blue'>
        <span>View and manage prescriptions</span>
        <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
      </div>
      <div className='flex items-center justify-between border-b p-4 font-bold text-nhs-blue'>
        <span>Upcoming and past appointments</span>
        <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
      </div>
    </div>
  </div>
);

export default HealthSection;
