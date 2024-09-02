import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const AppointmentBooking = () => (
  <div className="mx-auto bg-gray-100 flex flex-col">
    <Link href="/home">
      <div className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-blue-600 w-4 h-4 mr-2"
          />
          <span className="text-blue-600">Back</span>
        </div>
      </div>
    </Link>

    {/* Main Content */}
    <div className="flex-grow p-4">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>

      <div className="bg-white rounded-lg p-4 mb-4">
        <h2 className="font-bold mb-1">Select a Doctor</h2>
        <p className="text-sm mb-1">Dr. Anjali Sharma</p>
        <p className="text-sm mb-1">Cardiologist, Ruby Hall Clinic</p>
        <p className="text-blue-600">01132421713</p>
      </div>

      <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="text-blue-600 w-5 h-5 mr-2"
        />
        <span className="text-blue-600 font-semibold">Choose Date & Time</span>
      </div>

      <div className="bg-white rounded-lg p-4 mb-4">
        <h2 className="font-bold mb-1">Available Slots</h2>
        <p className="text-sm mb-1">10:00 AM - 11:00 AM</p>
        <p className="text-sm mb-1">01:00 PM - 02:00 PM</p>
        <p className="text-sm mb-1">03:00 PM - 04:00 PM</p>
      </div>

      <button className="bg-green-600 text-white w-full py-3 rounded-lg font-semibold">
        Confirm Appointment
      </button>
    </div>
  </div>
);

export default AppointmentBooking;
