import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className='flex justify-end bg-white p-4'>
    <div className='flex space-x-2'>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        className='me-2 h-6 w-6 text-gray-500'
      />
      <Link href='/login'>
        <FontAwesomeIcon icon={faUser} className='h-6 w-6 text-gray-500' />
      </Link>
    </div>
  </div>
);

export default Header;
