import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="mb-6 p-2">
      <div className="flex justify-between mb-2">
        <div className="flex flex-col justify-center mb-2">
          <h3 className="font-bold">Services</h3>
          <p>Get care and support to help stay well</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Health Record</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
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
