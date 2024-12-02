import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => <UserProfile path='/profile' />;

export default function Page() {
  return (
    <div className='flex justify-center py-24'>
      <UserProfilePage />
    </div>
  );
}
