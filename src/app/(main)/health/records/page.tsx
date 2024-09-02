import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import HealthRecord from '@/components/health/health_record';

export default function NHSApp() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <HealthRecord />
      </div>
      <Footer />
    </div>
  );
}
