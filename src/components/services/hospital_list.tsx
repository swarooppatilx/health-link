'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { type HospitalItems } from '@/types/basic';
import Spinner from '@/components/common/spinner';
import SearchBar from '@/components/common/searchbar'; // Import the SearchBar component
import { fetcher } from 'utils/fetcher';

const App = () => {
  const [data, setData] = useState<HospitalItems>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<HospitalItems>('/api/health/hospitals');
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

  const filteredData = data.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='mb-6 p-2'>
      <div className='mb-6 rounded-lg bg-white p-4 shadow-sm'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-xl font-bold text-gray-800'>Hospitals</h3>
          <p className='text-gray-600'>Choose Hospital for Booking</p>
        </div>
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className='rounded-lg bg-white shadow-md'>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id}>
              {item.hasLink ? (
                <Link href={item.link ?? '#'}>
                  <div className='flex cursor-pointer items-center justify-between border-b p-4 font-bold text-nhs-blue'>
                    <span>{item.name}</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className='h-6 w-6'
                    />
                  </div>
                </Link>
              ) : (
                <div className='flex items-center justify-between border-b p-4 font-bold text-nhs-blue'>
                  <span>{item.name}</span>
                  <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='p-4 text-gray-600'>No hospitals found</div>
        )}
      </div>
    </div>
  );
};

export default App;
