'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { type HospitalItem } from '@/types/basic';
import Spinner from '@/components/common/spinner';
import { fetcher } from 'utils/fetcher';

export default function Page({ id }: { id: string }) {
  const [data, setData] = useState<HospitalItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<HospitalItem>(
          `/api/health/hospitals?id=${id}`,
        );
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='mx-auto flex flex-col bg-gray-100'>
      <Link href='/home'>
        <div className='flex items-center justify-between bg-white p-4 shadow-md'>
          <div className='flex items-center'>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='mr-2 h-4 w-4 text-blue-600'
            />
            <span className='text-blue-600'>Back</span>
          </div>
        </div>
      </Link>

      {/* Main Content */}
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Book an Appointment</h1>

        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <h2 className='mb-2 text-xl font-semibold'>{data?.name}</h2>
          <p className='mb-2 text-sm text-gray-700'>{data?.description}</p>
          <p className='mb-2 text-sm text-blue-600'>
            <strong>Available Services:</strong>{' '}
            {data?.availableServices?.join(', ')}
          </p>
          <p className='text-sm text-blue-600'>
            <strong>Available Beds:</strong> {data?.availableBeds}
          </p>
        </div>

        <div className='mb-4 rounded-lg bg-white shadow-md'>
          <div className='flex cursor-pointer flex-col focus-within:ring-2 focus-within:ring-blue-500'>
            <label
              htmlFor='appointment-date'
              className='mb-2 block text-sm font-semibold text-blue-600'
            >
              Choose Date
            </label>
            <input
              id='appointment-date'
              type='date'
              className='w-full rounded-lg border border-gray-300 bg-gray-50 p-2 focus:border-blue-500 focus:outline-none'
            />
          </div>
        </div>

        <div className='mb-4 rounded-lg bg-white shadow-md'>
          <div className='flex cursor-pointer flex-col focus-within:ring-2 focus-within:ring-blue-500'>
            <label
              htmlFor='appointment-time'
              className='mb-2 block text-sm font-semibold text-blue-600'
            >
              Choose Time
            </label>
            <input
              id='appointment-time'
              type='time'
              className='w-full rounded-lg border border-gray-300 bg-gray-50 p-2 focus:border-blue-500 focus:outline-none'
            />
          </div>
        </div>

        <button className='w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'>
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
