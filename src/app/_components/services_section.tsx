import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ServicesSection = () => (
  <div className="mb-6 p-2">
    <div className="flex justify-between mb-2">
      <h3 className="font-bold">Services</h3>
      <a href="/services" className="text-blue-600">
        View all
      </a>
    </div>
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
        <span>Book appoinment</span>
        <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
      </div>
      <Link href="/prescriptions">
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Request repeat prescriptions</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
      </Link>
    </div>
  </div>
);

export default ServicesSection;
