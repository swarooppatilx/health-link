'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import BackButton from '@/components/common/back';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { type HealthRecords, type HealthRecord } from '@/types/basic';
import Spinner from '@/components/common/spinner';
import { fetcher } from 'utils/fetcher';

const MyHealthRecords = () => {
  const [data, setData] = useState<HealthRecords>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<HealthRecord | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<HealthRecords>('/api/health/records');
        setData(result);
        if (result.length > 0) {
          setSelectedRecord(result[0] ?? null);
        }
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

  const renderRecordCard = (record: HealthRecord) => {
    const { title, date, time, link } = record;

    return (
      <Link href={link ?? '#'}>
        <div className='mb-4 rounded-lg bg-white p-4'>
          <h2 className='mb-1 font-bold'>{title}</h2>
          <p className='mb-1 text-sm'>Date: {date}</p>
          <p className='mb-1 text-sm'>Time: {time}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className='mx-auto flex flex-col bg-gray-100'>
      <BackButton />

      {/* Main Content */}
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Your Health Records</h1>

        {showAll ? (
          <>
            {data.length > 0 ? (
              data.map((record) => (
                <div key={record.id} onClick={() => setSelectedRecord(record)}>
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
