import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faHeartbeat,
  faFileMedical,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Messages = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="flex-grow p-4 text-black rounded-t-3xl">
        <h2 className="text-xl font-semibold mb-2">Messages</h2>
        <p className="text-sm text-gray-600 mb-4">You have 4 inboxes</p>

        <div className="mb-4">
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-blue-600">
              Your healthcare services
            </h3>
            <ul className="text-sm text-gray-700 list-disc pl-4 mt-2">
              <li>from your GP surgery</li>
              <li>about hospital and specialist care appointments</li>
              <li>about invitations and reminders</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold text-blue-600">
              Your hospital and specialist doctors
            </h3>
            <ul className="text-sm text-gray-700 list-disc pl-4 mt-2">
              <li>your health record</li>
              <li>documents and letters</li>
              <li>pre-appointment questionnaires</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
