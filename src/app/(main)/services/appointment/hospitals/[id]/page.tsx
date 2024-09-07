import Header from '@/components/common/header';
import Appointment from '@/components/services/appointment';
import Footer from '@/components/common/footer';

interface Props {
  params: {
    id: string;
  };
}

const HospitalPage = ({ params }: Props) => {
  const { id } = params;

  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>
        <Appointment id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default HospitalPage;
