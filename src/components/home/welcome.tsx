'use client';

import useSWR from 'swr';
import { type UserData } from '@/types/basic';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning,';
  if (hour < 18) return 'Good Afternoon,';
  return 'Good Evening,';
};

const WelcomeSection = () => {
  const { data, isLoading } = useSWR<UserData>('/api/user', fetcher);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='p-4'>
      <div className='mb-2 text-2xl font-bold text-blue-600'>Health Link</div>
      <h1 className='mb-1 text-2xl font-bold'>{getGreeting()}</h1>
      <h2 className='mb-2 text-2xl font-bold'>{data?.name}</h2>
      <p className='mb-2 font-bold text-gray-700'>
        ABHA number: <span className='text-nhs-blue'>{data?.abha}</span>
      </p>
    </div>
  );
};

export default WelcomeSection;
