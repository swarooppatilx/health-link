'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
import { useState } from 'react';
import { Hospital } from '@prisma/client';
import Loading from '@/app/loading';
import SearchBar from '@/components/common/searchbar';
import { fetcher } from '@/lib/fetcher';

const App = () => {
  const { data, isLoading } = useSWR<Hospital[]>(
    '/api/health/hospitals',
    fetcher,
  );

  const link = '/services/appointment/hospitals/';
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = (data ?? []).filter((hospital) =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (isLoading) return <Loading />;

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
              {
                <Link href={link.concat(item.id) ?? '#'}>
                  <div className='flex cursor-pointer items-center justify-between border-b p-4 font-bold text-nhs-blue'>
                    <span>{item.name}</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className='h-6 w-6'
                    />
                  </div>
                </Link>
              }
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
