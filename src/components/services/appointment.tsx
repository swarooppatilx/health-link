'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
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
        const result = await fetcher<HospitalItem>(`/api/health/hospitals?id=${id}`);
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
      <div className='flex items-center justify-between bg-white p-4'>
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
  
      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='text-xl font-semibold mb-2'>{data?.name}</h2>
        <p className='mb-2 text-sm text-gray-700'>{data?.description}</p>
        <p className='mb-2 text-sm text-blue-600'>
          <strong>Available Services:</strong> {data?.availableServices?.join(', ')}
        </p>
        <p className='text-sm text-blue-600'>
          <strong>Available Beds:</strong> {data?.availableBeds}
        </p>
      </div>
  
      <div className='mb-4 rounded-lg bg-white p-4'>
        <label className='block mb-2 text-sm font-semibold text-blue-600'>
          Choose Date
        </label>
        <input
          type='date'
          className='w-full rounded-lg border-gray-300 p-2'
        />
      </div>
  
      <div className='mb-4 rounded-lg bg-white p-4'>
        <label className='block mb-2 text-sm font-semibold text-blue-600'>
          Choose Time
        </label>
        <input
          type='time'
          className='w-full rounded-lg border-gray-300 p-2'
        />
      </div>
  
      <button className='w-full rounded-lg bg-green-600 py-3 font-semibold text-white'>
        Confirm Appointment
      </button>
    </div>
  </div>
  
  );
}
