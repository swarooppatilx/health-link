import Header from '../../../components/common/header';
import WelcomeSection from '../../../components/home/welcome';
import ServicesSection from '../../../components/home/services_section';
import HealthSection from '../../../components/home/health_section';
import Footer from '../../../components/common/footer';

export default function NHSApp() {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>
        <WelcomeSection />
        <ServicesSection />
        <HealthSection />
      </div>
      <Footer />
    </div>
  );
}
