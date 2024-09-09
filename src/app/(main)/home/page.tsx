import WelcomeSection from '@/components/home/welcome';
import ServicesSection from '@/components/home/services_section';
import HealthSection from '@/components/home/health_section';

export default function NHSApp() {
  return (
    <>
      <WelcomeSection />
      <ServicesSection />
      <HealthSection />
    </>
  );
}
