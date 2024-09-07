import Header from '@/components/common/header';
import MyAppointments from '@/components/services/my_appointments';
import Footer from '@/components/common/footer';

export default function NHSApp() {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>
        <MyAppointments />
      </div>
      <Footer />
    </div>
  );
}
