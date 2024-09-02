import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPlus,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className='flex justify-center bg-nhs-blue py-4 font-bold text-gray-100'>
    <Link href='/home'>
      <div className='mx-4 flex flex-col items-center'>
        <FontAwesomeIcon icon={faHome} className='h-6 w-6' />
        <div className='mt-1 text-xs'>Home</div>
      </div>
    </Link>
    <Link href='/services'>
      <div className='mx-4 flex flex-col items-center'>
        <FontAwesomeIcon icon={faPlus} className='h-6 w-6' />
        <div className='mt-1 text-xs'>Services</div>
      </div>
    </Link>
    <Link href='/health'>
      <div className='mx-4 flex flex-col items-center'>
        <FontAwesomeIcon icon={faHeart} className='h-6 w-6' />
        <div className='mt-1 text-xs'>Your health</div>
      </div>
    </Link>
    <Link href='/messages'>
      <div className='mx-4 flex flex-col items-center'>
        <FontAwesomeIcon icon={faEnvelope} className='h-6 w-6' />
        <div className='mt-1 text-xs'>Messages</div>
      </div>
    </Link>
  </div>
);

export default Footer;
