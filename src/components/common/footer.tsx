import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPlus,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className='fixed bottom-0 flex w-full max-w-md transform items-center justify-center bg-nhs-blue py-3 shadow-inner'>
    <div className='flex items-center justify-around gap-x-8'>
      {/* Home Link */}
      <Link href='/home' className='group flex flex-col items-center'>
        <FontAwesomeIcon
          icon={faHome}
          className='h-5 w-5 text-gray-100 transition-colors duration-200 group-hover:text-white'
        />
        <span className='mt-1 text-xs font-bold text-gray-100 group-hover:text-white'>
          Home
        </span>
      </Link>

      {/* Services Link */}
      <Link href='/services' className='group flex flex-col items-center'>
        <FontAwesomeIcon
          icon={faPlus}
          className='h-5 w-5 text-gray-100 transition-colors duration-200 group-hover:text-white'
        />
        <span className='mt-1 text-xs font-bold text-gray-100 group-hover:text-white'>
          Services
        </span>
      </Link>

      {/* Health Link */}
      <Link href='/health' className='group flex flex-col items-center'>
        <FontAwesomeIcon
          icon={faHeart}
          className='h-5 w-5 text-gray-100 transition-colors duration-200 group-hover:text-white'
        />
        <span className='mt-1 text-xs font-bold text-gray-100 group-hover:text-white'>
          Your Health
        </span>
      </Link>

      {/* Messages Link */}
      <Link href='/messages' className='group flex flex-col items-center'>
        <FontAwesomeIcon
          icon={faEnvelope}
          className='h-5 w-5 text-gray-100 transition-colors duration-200 group-hover:text-white'
        />
        <span className='mt-1 text-xs font-bold text-gray-100 group-hover:text-white'>
          Messages
        </span>
      </Link>
    </div>
  </footer>
);

export default Footer;
