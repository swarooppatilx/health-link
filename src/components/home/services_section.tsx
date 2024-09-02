import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ServicesSection = () => (
  <div className='mb-6 p-2'>
    <div className='mb-2 flex justify-between'>
      <h3 className='font-bold'>Services</h3>
      <a href='/services' className='text-blue-600'>
        View all
      </a>
    </div>
    <div className='rounded-lg bg-white shadow-md'>
      <Link href='/services/appointment'>
        <div className='flex items-center justify-between border-b p-4 font-bold text-nhs-blue'>
          <span>Book appoinment</span>
          <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
        </div>
      </Link>
      <Link href='/services/prescriptions'>
        <div className='flex items-center justify-between border-b p-4 font-bold text-nhs-blue'>
          <span>Request repeat prescriptions</span>
          <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
        </div>
      </Link>
    </div>
  </div>
);

export default ServicesSection;
