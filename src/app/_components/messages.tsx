const Messages = () => {
  return (
    <div className="text-gray-800 m-2">
      <div className="bg-white shadow-sm rounded-lg p-4 mb-2">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800">Messages</h3>
          <p className="text-gray-600">You have 2 inbox</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white shadow rounded-lg p-4 mb-2">
          <h3 className="font-semibold text-nhs-blue text-lg">
            Your healthcare services
          </h3>
          <ul className="text-sm text-gray-700 list-disc pl-5 mt-2 space-y-1">
            <li>From your doctor</li>
            <li>About hospital and specialist care appointments</li>
            <li>About invitations and reminders</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold text-nhs-blue text-lg">
            Your hospital and specialist doctors
          </h3>
          <ul className="text-sm text-gray-700 list-disc pl-5 mt-2 space-y-1">
            <li>Your health record</li>
            <li>Documents and letters</li>
            <li>Reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Messages;
