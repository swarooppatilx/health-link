'use client';

//import useSWR from 'swr';
//import { type UserData } from '@/types/basic';
//import Loading from '@/app/loading';
//import { fetcher } from '@/lib/fetcher';
import { useUser } from '@clerk/nextjs';
import { SignOutButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Loading from '@/app/loading';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning,';
  if (hour < 18) return 'Good Afternoon,';
  return 'Good Evening,';
};

const WelcomeSection = () => {
  //const { data, isLoading } = useSWR<UserData>('/api/user', fetcher);
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return <Loading />;
  }
  // if (isLoading) {
  //  return <Loading />;
  // }

  return (
    <div className='p-4'>
      <div className='mb-2 text-2xl font-bold text-blue-600'>Health Link</div>
      <h1 className='mb-1 text-2xl font-bold'>{getGreeting()}</h1>
      <h2 className='mb-2 text-2xl font-bold'>{user?.fullName}</h2>
      <SignOutButton>
        <Button variant='destructive'>Sign Out</Button>
      </SignOutButton>
    </div>
  );
};

export default WelcomeSection;
