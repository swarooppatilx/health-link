import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import HealthRecord from '@/components/health/health_record';

export default function NHSApp() {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>
        <HealthRecord />
      </div>
      <Footer />
    </div>
  );
}
