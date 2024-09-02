import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const AppointmentBooking = () => (
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
      <h1 className='mb-4 text-2xl font-bold'>Book an Appointment</h1>

      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='mb-1 font-bold'>Select a Doctor</h2>
        <p className='mb-1 text-sm'>Dr. Anjali Sharma</p>
        <p className='mb-1 text-sm'>Cardiologist, Ruby Hall Clinic</p>
        <p className='text-blue-600'>01132421713</p>
      </div>

      <div className='mb-4 flex items-center rounded-lg bg-white p-4'>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className='mr-2 h-5 w-5 text-blue-600'
        />
        <span className='font-semibold text-blue-600'>Choose Date & Time</span>
      </div>

      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='mb-1 font-bold'>Available Slots</h2>
        <p className='mb-1 text-sm'>10:00 AM - 11:00 AM</p>
        <p className='mb-1 text-sm'>01:00 PM - 02:00 PM</p>
        <p className='mb-1 text-sm'>03:00 PM - 04:00 PM</p>
      </div>

      <button className='w-full rounded-lg bg-green-600 py-3 font-semibold text-white'>
        Confirm Appointment
      </button>
    </div>
  </div>
);

export default AppointmentBooking;
