import Link from 'next/link';

export default function App() {
  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100'>
      <div className='flex-grow'>
        <div className='flex h-screen flex-col bg-gray-100 p-4'>
          <Link href='/home'>
            <div className='flex items-center justify-between'>
              <button className='text-blue-700'>✕ Close</button>
            </div>
          </Link>
          <div className='mt-8'>
            <h1 className='text-2xl font-semibold'>Enter your email address</h1>
            <p className='mt-4'>
              If you have used the Health Link App or website, you should enter
              the email address you used to register for them.
            </p>
            <p className='mt-4'>
              We will check if you have an account. If not, you can set one up.
            </p>
          </div>
          <div className='mt-8'>
            <input
              type='email'
              placeholder='Email address'
              className='w-full rounded border border-gray-400 p-3'
            />
            <button className='mt-4 w-full rounded bg-green-600 py-3 text-white'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
