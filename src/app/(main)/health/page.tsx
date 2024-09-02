import Header from '@/components/common/header';
import Health from '@/components/health/your_health';
import Footer from '@/components/common/footer';

export default function NHSApp() {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>
        <Health />
      </div>
      <Footer />
    </div>
  );
}
