import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// Define data for pharmacy information
const pharmacyInfo = {
  name: 'Ashish Medico',
  addressLine1: 'Near Ruby Hall Clinic, Pune',
  addressLine2: 'SW12 9HD',
  contactNumber: '01132421713',
};

const Prescriptions = () => (
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
      <h1 className="text-2xl font-bold mb-4">
        Check the pharmacy this will be sent to
      </h1>

      <div className="bg-white rounded-lg p-4 mb-4">
        <h2 className="font-bold mb-1">{pharmacyInfo.name}</h2>
        <p className="text-sm mb-1">{pharmacyInfo.addressLine1}</p>
        <p className="text-sm mb-2">{pharmacyInfo.addressLine2}</p>
        <p className="text-blue-600">{pharmacyInfo.contactNumber}</p>
      </div>

      <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
        <FontAwesomeIcon
          icon={faClock}
          className="text-blue-600 w-5 h-5 mr-2"
        />
        <span className="text-blue-600 font-semibold">Opening times</span>
      </div>

      <a href="#" className="text-blue-600 block mb-8">
        Change your nominated pharmacy
      </a>

      <button className="bg-green-600 text-white w-full py-3 rounded-lg font-semibold">
        Continue
      </button>
    </div>
  </div>
);

export default Prescriptions;
