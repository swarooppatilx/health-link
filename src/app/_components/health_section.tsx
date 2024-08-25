import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HealthSection = () => (
<div className="mb-6 p-2">
<div className="flex justify-between mb-2">
  <h3 className="font-bold">Health</h3>
  <a href="#" className="text-blue-600">View all</a>
</div>
<div className="bg-white rounded-lg shadow-md">
  <div className="p-4 border-b flex justify-between items-center text-nhs-blue font-bold">
    <span>GP health record</span>
    <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
  </div>
  <div className="p-4 flex justify-between items-center text-nhs-blue font-bold">
    <span>View and manage prescriptions</span>
    <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
  </div>
  <div className="p-4 flex justify-between items-center text-nhs-blue font-bold">
    <span>Upcoming and past appointments</span>
    <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
  </div>
</div>
</div>
);

export default HealthSection;