'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { type ServiceItems } from '@/types/basic';
import Loading from '@/app/loading';
import { fetcher } from 'utils/fetcher';

const App = () => {
  const [data, setData] = useState<ServiceItems | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<ServiceItems>('/api/services');
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
    return <Loading />;
  }

  return (
    <div className='mb-6 p-2'>
      <div className='mb-6 rounded-lg bg-white p-4 shadow-sm'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-xl font-bold text-gray-800'>Services</h3>
          <p className='text-gray-600'>
            Get care and support to help stay well
          </p>
        </div>
      </div>
      <div className='rounded-lg bg-white shadow-md'>
        {data?.map((service, index) => (
          <div key={index}>
            {service.hasLink ? (
              <Link href={service.link ?? '#'}>
                <div className='flex cursor-pointer items-center justify-between border-b p-4 font-bold text-nhs-blue'>
                  <span>{service.title}</span>
                  <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
                </div>
              </Link>
            ) : (
              <div className='flex items-center justify-between border-b p-4 font-bold text-nhs-blue'>
                <span>{service.title}</span>
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
