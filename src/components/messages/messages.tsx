'use client';

import useSWR from 'swr';
import { type Messages } from '@/types/basic';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';

const MessagesComponent = () => {
  const { data, isLoading } = useSWR<Messages>('/api/messages', fetcher);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='m-2 text-gray-800'>
      <div className='mb-2 rounded-lg bg-white p-4 shadow-sm'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-xl font-bold text-gray-800'>Messages</h3>
          <p className='text-gray-600'>You have 2 inbox</p>
        </div>
      </div>
      <div className='space-y-4'>
        {data?.map((message, index) => (
          <div key={index} className='rounded-lg bg-white p-4 shadow'>
            <h3 className='text-lg font-semibold text-nhs-blue'>
              {message.title}
            </h3>
            <ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700'>
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

export default MessagesComponent;
