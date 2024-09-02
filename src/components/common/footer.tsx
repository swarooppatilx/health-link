import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPlus,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="bg-nhs-blue flex justify-center py-4 text-gray-100 font-bold">
    <Link href="/home">
      <div className="flex flex-col items-center mx-4">
        <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
        <div className="text-xs mt-1">Home</div>
      </div>
    </Link>
    <Link href="/services">
      <div className="flex flex-col items-center mx-4">
        <FontAwesomeIcon icon={faPlus} className="w-6 h-6" />
        <div className="text-xs mt-1">Services</div>
      </div>
    </Link>
    <Link href="/health">
      <div className="flex flex-col items-center mx-4">
        <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
        <div className="text-xs mt-1">Your health</div>
      </div>
    </Link>
    <Link href="/messages">
      <div className="flex flex-col items-center mx-4">
        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
        <div className="text-xs mt-1">Messages</div>
      </div>
    </Link>
  </div>
);

export default Footer;
