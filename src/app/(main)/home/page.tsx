import Header from '../../../components/common/header';
import WelcomeSection from '../../../components/home/welcome';
import ServicesSection from '../../../components/home/services_section';
import HealthSection from '../../../components/home/health_section';
import Footer from '../../../components/common/footer';

export default function NHSApp() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <WelcomeSection />
        <ServicesSection />
        <HealthSection />
      </div>
      <Footer />
    </div>
  );
}
