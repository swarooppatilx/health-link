'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  });
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false); // To toggle OTP input visibility
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

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      // Send OTP request
      const response = await fetch('/api/auth/signup', {
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

      setSuccessMessage('OTP sent successfully! Please check your email.');
      setIsOtpSent(true); // Show OTP input field after OTP is sent
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to send OTP');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

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

      setSuccessMessage('Account created successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
      });
      setOtp('');
      setIsOtpSent(false); // Hide OTP input field after successful signup
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
      <div className='flex-grow'>
        <div className='flex h-screen flex-col p-4'>
          <Link href='/home'>
            <div className='flex items-center justify-between'>
              <button className='text-blue-700'>✕ Close</button>
            </div>
          </Link>
          <div className='mt-40'>
            <h1 className='text-2xl font-semibold'>Create Your Account</h1>
            <p className='mt-4'>
              Fill in the details below to set up your account. If you already
              have an account, use the email address you registered with.
            </p>
          </div>
          {!isOtpSent ? (
            <form className='mt-8 space-y-4' onSubmit={handleSignupSubmit}>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
                className='w-full rounded border border-gray-400 p-3'
                required
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                className='w-full rounded border border-gray-400 p-3'
                required
              />
              <input
                type='tel'
                name='mobile'
                placeholder='Mobile Number'
                value={formData.mobile}
                onChange={handleChange}
                className='w-full rounded border border-gray-400 p-3'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className='w-full rounded border border-gray-400 p-3'
                required
              />
              <button
                type='submit'
                className='mt-4 w-full rounded bg-green-600 py-3 text-white'
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form className='mt-8 space-y-4' onSubmit={handleOtpSubmit}>
              <input
                type='text'
                name='otp'
                placeholder='Enter OTP'
                value={otp}
                onChange={handleOtpChange}
                className='w-full rounded border border-gray-400 p-3'
                required
              />
              <button
                type='submit'
                className='mt-4 w-full rounded bg-green-600 py-3 text-white'
              >
                Verify OTP
              </button>
            </form>
          )}

          {!isOtpSent && (
            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-600'>
                Already have an account?{' '}
                <Link
                  href='/login'
                  className='text-blue-600 hover:text-blue-800'
                >
                  Login here
                </Link>
              </p>
            </div>
          )}

          {error && <p className='mt-4 text-red-600'>{error}</p>}
          {successMessage && (
            <p className='mt-4 text-green-600'>{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
