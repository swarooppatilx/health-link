import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="mb-6 p-2">
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800">Your Health</h3>
          <p className="text-gray-600">
            View your personal records and choices
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>View and manage prescriptions</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <Link href="/health/records">
          <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
            <span>Health Record</span>
            <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
          </div>
        </Link>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Upcoming and past appointments</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Test results and imaging</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>COVID-19 vaccine record</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>COVID Pass</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Your health choices</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default App;
