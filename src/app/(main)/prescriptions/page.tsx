import Header from '../../_components/header';
import WelcomeSection from '../../_components/welcome';
import ServicesSection from '../../_components/services_section';
import HealthSection from '../../_components/health_section';
import Footer from '../../_components/footer';
import Prescriptions from '../../_components/prescriptions';

export default function NHSApp() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Prescriptions />
      </div>
      <Footer />
    </div>
  );
}



