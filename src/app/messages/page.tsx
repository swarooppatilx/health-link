import Header from '../../components/common/header';

import Messages from '../../components/messages/messages';
import Footer from '../../components/common/footer';

export default function NHSApp() {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <Header />
      <div className='flex-grow'>
        <Messages />
      </div>
      <Footer />
    </div>
  );
}
