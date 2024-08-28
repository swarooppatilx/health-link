import Header from '../_components/header';

import Messages from '../_components/messages';
import Footer from '../_components/footer';

export default function NHSApp() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Messages />
      </div>
      <Footer />
    </div>
  );
}
