import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Define the data for each item in a JSON array
const healthItems = [
  {
    title: 'View and manage prescriptions',
    hasLink: false,
  },
  {
    title: 'Health Record',
    link: '/health/records',
    hasLink: true,
  },
  {
    title: 'Upcoming and past appointments',
    hasLink: false,
  },
  {
    title: 'Test results and imaging',
    hasLink: false,
  },
  {
    title: 'COVID-19 vaccine record',
    hasLink: false,
  },
  {
    title: 'COVID Pass',
    hasLink: false,
  },
  {
    title: 'Your health choices',
    hasLink: false,
  },
];

const App = () => {
  return (
    <div className="mb-6 p-2">
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800">Your Health</h3>
          <p className="text-gray-600">
            View your personal records and choices
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        {healthItems.map((item, index) => (
          <div key={index}>
            {item.hasLink ? (
              <Link href={item.link ?? ''}>
                <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold cursor-pointer">
                  <span>{item.title}</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
                </div>
              </Link>
            ) : (
              <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
                <span>{item.title}</span>
                <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
