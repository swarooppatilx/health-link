import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import BackButton from '@/components/common/back';

const Header = () => (
  <header className='flex items-center justify-between bg-white py-2 pr-4 shadow-md'>
    {/* Logo or App Name - can be added here if needed */}
    <div className='flex items-start'>
      <BackButton />
    </div>

    <div className='flex items-center space-x-4'>
      {/* Help Icon */}
      <button
        aria-label='Help'
        className='transition-colors duration-200 hover:text-nhs-blue'
      >
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className='h-5 w-5 text-gray-600'
        />
      </button>

      {/* User/Login Icon */}
      <Link href='/profile' aria-label='User Profile'>
        <FontAwesomeIcon
          icon={faUser}
          className='h-5 w-5 text-gray-600 transition-colors duration-200 hover:text-nhs-blue'
        />
      </Link>
    </div>
  </header>
);

export default Header;
