import Image from 'next/image';

export default function EmailLogin() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        <button className="text-blue-700">✕ Close</button>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-semibold">Enter your email address</h1>
        <p className="mt-4">
          If you have used the NHS App or other NHS websites, you should enter the email address you used to register for them.
        </p>
        <p className="mt-4">
          We will check if you have an NHS login. If not, you can set one up.
        </p>
      </div>
      <div className="mt-8">
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 border border-gray-400 rounded"
        />
        <button className="w-full mt-4 bg-green-600 text-white py-3 rounded">Continue</button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">What is NHS login?</h2>
        <p className="mt-4">
          NHS login allows you to securely access health websites and apps with just your email address and a password.
        </p>
      </div>
      <div className="mt-auto">
        <hr className="border-t border-gray-400"/>
        <p className="mt-4 text-blue-700">Terms of use</p>
      </div>
    </div>
  );
}

