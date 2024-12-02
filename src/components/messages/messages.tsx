'use client';

import useSWR from 'swr';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';
import { Message } from '@prisma/client';

const MessagesComponent = () => {
  // Infer the type from Prisma's model for Message
  const { data, isLoading } = useSWR<Message[]>('/api/messages', fetcher);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='m-2 text-gray-800'>
      <div className='mb-2 rounded-lg bg-white p-4 shadow-sm'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-xl font-bold text-gray-800'>Messages</h3>
          <p className='text-gray-600'>
            You have {data?.length ?? 0} inbox {data?.length === 1 ? '' : 'es'}
          </p>
        </div>
      </div>
      <div className='space-y-4'>
        {data?.map((message) => (
          <div key={message.id} className='rounded-lg bg-white p-4 shadow'>
            <h3 className='text-lg font-semibold text-nhs-blue'>{message.title}</h3>
            <p className='mt-2 text-sm text-gray-700'>{message.content}</p>
            <p className='mt-1 text-xs text-gray-500'>
              Created At: {new Date(message.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesComponent;
