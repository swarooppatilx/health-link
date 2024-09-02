'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { type HealthItems } from '@/types/basic';
import Spinner from '../common/spinner';
import { fetcher } from 'utils/fetcher';

const App = () => {
  const [data, setData] = useState<HealthItems>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<HealthItems>('/api/health');
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='mb-6 p-2'>
      <div className='mb-6 rounded-lg bg-white p-4 shadow-sm'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-xl font-bold text-gray-800'>Your Health</h3>
          <p className='text-gray-600'>
            View your personal records and choices
          </p>
        </div>
      </div>
      <div className='rounded-lg bg-white shadow-md'>
        {data.map((item, index) => (
          <div key={index}>
            {item.hasLink ? (
              <Link href={item.link ?? '#'}>
                <div className='flex cursor-pointer items-center justify-between border-b p-4 font-bold text-nhs-blue'>
                  <span>{item.title}</span>
                  <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
                </div>
              </Link>
            ) : (
              <div className='flex items-center justify-between border-b p-4 font-bold text-nhs-blue'>
                <span>{item.title}</span>
                <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
