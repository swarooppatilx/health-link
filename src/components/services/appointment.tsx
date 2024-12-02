'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
import { Hospital } from '@prisma/client';
import Loading from '@/app/loading';
import Modal from '@/components/common/modal';
import { fetcher } from '@/lib/fetcher';
import { useState } from 'react';

export default function Page({ id }: { id: string }) {
  const { data, isLoading } = useSWR<Hospital>(
    `/api/health/hospitals?id=${id}`,
    fetcher,
  );

  const [isModalOpen, setModalOpen] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='mx-auto flex flex-col bg-gray-100'>
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Book an Appointment</h1>

        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <h2 className='mb-2 text-xl font-semibold'>{data?.name}</h2>
          <p className='mb-2 text-sm text-gray-700'>{data?.description}</p>
          <p className='mb-2 text-sm'>
            <strong className='text-nhs-blue'>Available Services:</strong>
            <br />
            {data?.availableServices?.join(', ')}
          </p>
          <p className='text-sm'>
            <strong className='text-nhs-blue'>Available Beds:</strong>{' '}
            {data?.availableBeds}
          </p>
        </div>

        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <div className='flex items-center rounded-lg border border-gray-300'>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className='ml-3 h-5 w-5 text-gray-500'
            />
            <input
              id='appointment-date'
              type='date'
              className='w-full rounded-lg border-0 bg-gray-50 py-2 pl-10 pr-2 focus:border-blue-500 focus:outline-none'
              required
            />
          </div>
          <label
            htmlFor='appointment-date'
            className='mt-2 block text-sm font-semibold text-nhs-blue'
          >
            Choose Date
          </label>
        </div>

        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <div className='flex items-center rounded-lg border border-gray-300'>
            <FontAwesomeIcon
              icon={faClock}
              className='ml-3 h-5 w-5 text-gray-500'
            />
            <input
              id='appointment-time'
              type='time'
              className='w-full rounded-lg border-0 bg-gray-50 py-2 pl-10 pr-2 focus:border-blue-500 focus:outline-none'
              required
            />
          </div>
          <label
            htmlFor='appointment-time'
            className='mt-2 block text-sm font-semibold text-nhs-blue'
          >
            Choose Time
          </label>
        </div>

        <button
          className='w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
          onClick={() => setModalOpen(true)}
        >
          Confirm Appointment
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
