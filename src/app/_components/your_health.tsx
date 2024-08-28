import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="mb-6 p-2">
      <div className="flex justify-between mb-2">
        <div className="flex flex-col justify-center mb-2">
          <h3 className="font-bold">Your Health</h3>
          <p>View your personal records and choices</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Health record</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>View and manage prescriptions</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Upcoming and past appointments</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Test results and imaging</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>COVID-19 vaccine record</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>COVID Pass</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
        <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
          <span>Your health choices</span>
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default App;
