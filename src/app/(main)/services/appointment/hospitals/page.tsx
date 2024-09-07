import Header from '@/components/common/header';
import Hospital_List from '@/components/services/hospital_list';
import Footer from '@/components/common/footer';

export default function NHSApp() {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>
        <Hospital_List />
      </div>
      <Footer />
    </div>
  );
}
