import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="bg-white p-4 flex justify-end">
    <div className="flex space-x-2">
      <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-500 w-6 h-6 me-2" />
      <FontAwesomeIcon icon={faUser} className="text-gray-500 w-6 h-6" />
    </div>
  </div>
);

export default Header;
