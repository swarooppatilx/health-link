import Header from '../../../../components/common/header';
import Footer from '../../../../components/common/footer';
import Appointment from '../../../../components/services/appointment';
export default function NHSApp() {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>
        <Appointment />
      </div>
      <Footer />
    </div>
  );
}
