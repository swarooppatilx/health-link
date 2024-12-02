'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useSWR from 'swr';
import { useState } from 'react';
import { HealthRecord } from '@prisma/client';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';

const MyHealthRecords = () => {
  const { data, isLoading } = useSWR<HealthRecord[]>(
    '/api/health/records',
    fetcher,
  );

  const [showAll, setShowAll] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<HealthRecord | null>(
    null,
  );

  const records = data ?? [];
  if (!selectedRecord && records.length > 0) {
    setSelectedRecord(records[0] ?? null);
  }

  if (isLoading) return <Loading />;

  const renderRecordCard = (record: HealthRecord) => {
    const { title, date, time } = record;

    return (
      <Link href={'#'}>
        <div className='mb-4 rounded-lg bg-white p-4'>
          <h2 className='mb-1 font-bold'>{title}</h2>
          <p className='mb-1 text-sm'>
            Date: {date.toString().substring(0, 10)}
          </p>
          <p className='mb-1 text-sm'>Time: {time}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className='mx-auto mb-4 flex flex-col bg-gray-100 pb-20'>
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Your Health Records</h1>

        {showAll ? (
          <>
            {records.length > 0 ? (
              records.map((record) => (
                <div
                  key={record.id}
                  onClick={() => setSelectedRecord(record)}
                  className='cursor-pointer'
                >
                  {renderRecordCard(record)}
                </div>
              ))
            ) : (
              <p>No health records available.</p>
            )}
          </>
        ) : (
          <>
            {selectedRecord ? (
              <>
                {renderRecordCard(selectedRecord)}
                <div
                  className='mb-4 flex cursor-pointer items-center rounded-lg bg-white p-4'
                  onClick={() => setShowAll(true)}
                >
                  <FontAwesomeIcon
                    icon={faFileMedical}
                    className='mr-2 h-5 w-5 text-blue-600'
                  />
                  <span className='font-semibold text-blue-600'>
                    View All Records
                  </span>
                </div>
              </>
            ) : (
              <p>No health records available.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyHealthRecords;
