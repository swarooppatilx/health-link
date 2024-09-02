import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faFileMedical,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HealthRecord = () => (
  <div className='mx-auto flex flex-col bg-gray-100'>
    <Link href='/home'>
      <div className='flex items-center justify-between bg-white p-4'>
        <div className='flex items-center'>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='mr-2 h-4 w-4 text-blue-600'
          />
          <span className='text-blue-600'>Back</span>
        </div>
      </div>
    </Link>

    {/* Main Content */}
    <div className='flex-grow p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Your Health Records</h1>

      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='mb-1 font-bold'>Recent Checkup</h2>
        <p className='mb-1 text-sm'>General Physician, Ruby Hall Clinic</p>
        <p className='mb-1 text-sm'>Date: 25th August 2024</p>
        <p className='text-blue-600'>View Report</p>
      </div>

      <div className='mb-4 flex items-center rounded-lg bg-white p-4'>
        <FontAwesomeIcon
          icon={faFileMedical}
          className='mr-2 h-5 w-5 text-blue-600'
        />
        <span className='font-semibold text-blue-600'>
          Previous Health Reports
        </span>
      </div>

      <a href='#' className='mb-8 block text-blue-600'>
        View all health records
      </a>

      <button className='w-full rounded-lg bg-green-600 py-3 font-semibold text-white'>
        Continue
      </button>
    </div>
  </div>
);

export default HealthRecord;
