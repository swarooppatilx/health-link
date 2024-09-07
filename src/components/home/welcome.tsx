import React from 'react';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning,';
  if (hour < 18) return 'Good Afternoon,';
  return 'Good Evening,';
};

const WelcomeSection = () => {
  const greeting = getGreeting();

  return (
    <div className='p-4'>
      <div className='mb-2 text-2xl font-bold text-blue-600'>Health Link</div>
      <h1 className='mb-1 text-2xl font-bold'>{greeting}</h1>
      <h2 className='mb-4 text-2xl font-bold'>Swaroop Patil</h2>
      <p className='mb-6 font-bold text-gray-700'>
        ABHA number: <span className='text-nhs-blue'>123 456 7890</span>
      </p>
    </div>
  );
};

export default WelcomeSection;
