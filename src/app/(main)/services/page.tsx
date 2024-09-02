import Header from '@/components/common/header';
import Services from '@/components/services/your_services';
import Footer from '@/components/common/footer';

export default function NHSApp() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Services />
      </div>
      <Footer />
    </div>
  );
}
