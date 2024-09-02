'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { type HealthItems } from '@/types/basic';
import Spinner from '../common/spinner';
import { fetcher } from 'utils/fetcher';

const HealthSection = () => {
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
      <div className='mb-2 flex justify-between'>
        <h3 className='font-bold'>Health</h3>
        <Link href='/health'>
          <p className='text-blue-600'>View all</p>
        </Link>
      </div>
      <div className='rounded-lg bg-white shadow-md'>
        {data.slice(0, 3).map((item, index) => (
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

export default HealthSection;
