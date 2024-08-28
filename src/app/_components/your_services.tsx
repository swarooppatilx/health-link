import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="mb-6 p-2">
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800">Services</h3>
          <p className="text-gray-600">
            Get care and support to help stay well
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <Link href="/services/appointment">
          <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
            <span>Book Appointment</span>
            <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
          </div>
        </Link>
        <Link href="/services/prescriptions">
          <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
            <span>Request repeat prescriptions</span>
            <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
          </div>
        </Link>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Contact for a document or update</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Check for available appointments</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default App;
