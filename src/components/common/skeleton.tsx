import React from 'react';

const Skeleton: React.FC = () => {
  const skeletonItems = Array.from({ length: 3 });

  return (
    <div className='space-y-4'>
      <div className='h-8 w-3/4 rounded-lg bg-gray-200'></div>
      <div className='h-6 w-1/2 rounded-lg bg-gray-200'></div>
      <div className='space-y-2'>
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className='flex items-center justify-between border-b p-4'
          >
            <div className='h-6 w-3/4 rounded-lg bg-gray-200'></div>
            <div className='h-6 w-6 rounded-lg bg-gray-200'></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skeleton;
