'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState<{ email: string; otp: string }>({
    email: '',
    otp: '',
  });
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [otpVerified, setOtpVerified] = useState<boolean>(false); // New state for OTP verification
  const [isLoading, setIsLoading] = useState<boolean>(false); // For handling loading state
  const router = useRouter(); // useRouter for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccessMessage('OTP sent successfully! Please check your email.');
      setIsLoading(false);
      setOtpVerified(false); // Reset OTP verification on new login attempt
    } catch (err) {
      setIsLoading(false);
      if (err instanceof Error) {
        setError(err.message || 'Failed to send OTP');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'OTP verification failed');
      }

      setOtpVerified(true); // OTP verified successfully
      setSuccessMessage('OTP verified successfully!');
      router.push('/home');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to verify OTP');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className='mx-auto flex h-screen max-w-md flex-col bg-gray-100 p-4'>
      <div className='flex flex-grow flex-col p-4'>
        <Link href='/home'>
          <button className='self-end text-blue-600 transition-all hover:text-blue-800'>
            ✕ Close
          </button>
        </Link>
        <div className='mt-40'>
          <h1 className='text-2xl font-semibold text-gray-800'>
            Enter your email
          </h1>
          <p className='mt-4 text-sm text-gray-600'>
            Please enter the email you registered with to receive an OTP.
          </p>
        </div>

        {/* Step 1: Email input to send OTP */}
        {!otpVerified && !successMessage && (
          <form
            className='mt-8 w-full max-w-md space-y-6'
            onSubmit={handleSubmit}
          >
            <input
              type='email'
              name='email'
              placeholder='Email address'
              value={formData.email}
              onChange={handleChange}
              className='w-full rounded-lg border border-gray-300 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <button
              type='submit'
              className={`w-full rounded-lg bg-green-600 py-3 font-semibold text-white focus:outline-none ${
                isLoading ? 'cursor-wait opacity-50' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        )}

        {/* Step 2: OTP form */}
        {successMessage && !otpVerified && (
          <div className='mt-8 w-full max-w-md space-y-6'>
            <h2 className='text-xl font-semibold text-gray-800'>Verify OTP</h2>
            <form className='space-y-4' onSubmit={handleVerifyOtp}>
              <input
                type='text'
                name='otp'
                placeholder='Enter OTP'
                value={otp}
                onChange={handleOtpChange}
                className='w-full rounded-lg border border-gray-300 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500'
                maxLength={6}
                required
              />
              <button
                type='submit'
                className={`w-full rounded-lg bg-blue-600 py-3 font-semibold text-white focus:outline-none ${
                  isLoading ? 'cursor-wait opacity-50' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
            </form>
          </div>
        )}

        {!otpVerified && !successMessage && (
          <div className='mt-8 text-center'>
            <p className='text-sm text-gray-600'>
              Don&apos;t have an account?{' '}
              <Link
                href='/signup'
                className='text-blue-600 hover:text-blue-800'
              >
                Sign up here
              </Link>
            </p>
          </div>
        )}

        {/* Error and success messages */}
        {error && (
          <p className='mt-6 text-center font-semibold text-red-600'>{error}</p>
        )}
        {successMessage && !otpVerified && (
          <p className='mt-6 text-center font-semibold text-green-600'>
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}
