import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import BackButton from '@/components/common/back';

const pharmacyInfo = {
  name: 'Ashish Medico',
  addressLine1: 'Near Ruby Hall Clinic, Pune',
  addressLine2: 'SW12 9HD',
  contactNumber: '01132421713',
};

const Prescriptions = () => (
  <div className='mx-auto flex flex-col bg-gray-100'>
    <BackButton />

    {/* Main Content */}
    <div className='flex-grow p-4'>
      <h1 className='mb-4 text-2xl font-bold'>
        Check the pharmacy this will be sent to
      </h1>

      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='mb-1 font-bold'>{pharmacyInfo.name}</h2>
        <p className='mb-1 text-sm'>{pharmacyInfo.addressLine1}</p>
        <p className='mb-2 text-sm'>{pharmacyInfo.addressLine2}</p>
        <p className='text-blue-600'>{pharmacyInfo.contactNumber}</p>
      </div>

      <div className='mb-4 flex items-center rounded-lg bg-white p-4'>
        <FontAwesomeIcon
          icon={faClock}
          className='mr-2 h-5 w-5 text-blue-600'
        />
        <span className='font-semibold text-blue-600'>Opening times</span>
      </div>

      <a href='#' className='mb-8 block text-blue-600'>
        Change your nominated pharmacy
      </a>

      <button className='w-full rounded-lg bg-green-600 py-3 font-semibold text-white'>
        Continue
      </button>
    </div>
  </div>
);

export default Prescriptions;
