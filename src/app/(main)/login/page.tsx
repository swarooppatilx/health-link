import Link from 'next/link';

export default function App() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col">
      <div className="flex-grow">
        <div className="flex flex-col h-screen bg-gray-100 p-4">
          <Link href="/home">
            <div className="flex justify-between items-center">
              <button className="text-blue-700">✕ Close</button>
            </div>
          </Link>
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Enter your email address</h1>
            <p className="mt-4">
              If you have used the Health Link App or website, you should enter
              the email address you used to register for them.
            </p>
            <p className="mt-4">
              We will check if you have an account. If not, you can set one up.
            </p>
          </div>
          <div className="mt-8">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-400 rounded"
            />
            <button className="w-full mt-4 bg-green-600 text-white py-3 rounded">
              Continue
            </button>
          </div>
          <div className="mt-auto">
            <hr className="border-t border-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
