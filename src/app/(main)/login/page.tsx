'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState<{ email: string }>({
    email: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter(); // useRouter for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccessMessage('Login successful!');
      setFormData({ email: '' });

      // Redirect to the homepage
      router.push('/home');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to login user');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

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
            <form className='space-y-4' onSubmit={handleSubmit}>
              <input
                type='email'
                name='email'
                placeholder='Email address'
                value={formData.email}
                onChange={handleChange}
                className='w-full rounded border border-gray-400 p-3'
              />
              <button
                type='submit'
                className='mt-4 w-full rounded bg-green-600 py-3 text-white'
              >
                Login
              </button>
            </form>
            {error && <p className='mt-4 text-red-600'>{error}</p>}
            {successMessage && (
              <p className='mt-4 text-green-600'>{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
