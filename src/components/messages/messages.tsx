const messagesData = [
  {
    title: 'Your healthcare services',
    items: [
      'From your doctor',
      'About hospital and specialist care appointments',
      'About invitations and reminders',
    ],
  },
  {
    title: 'Your hospital and specialist doctors',
    items: ['Your health record', 'Documents and letters', 'Reports'],
  },
];

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
        {messagesData.map((message, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold text-nhs-blue text-lg">
              {message.title}
            </h3>
            <ul className="text-sm text-gray-700 list-disc pl-5 mt-2 space-y-1">
              {message.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
