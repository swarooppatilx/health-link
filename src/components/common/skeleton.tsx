import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className='space-y-4'>
      <div className='bg-gray-200 h-8 rounded-lg w-3/4'></div>
      <div className='bg-gray-200 h-6 rounded-lg w-1/2'></div>
      <div className='space-y-2'>
        {[...Array(3)].map((_, index) => (
          <div key={index} className='flex items-center justify-between p-4 border-b'>
            <div className='bg-gray-200 h-6 rounded-lg w-3/4'></div>
            <div className='bg-gray-200 h-6 rounded-lg w-6'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
