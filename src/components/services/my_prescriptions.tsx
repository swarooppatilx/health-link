'use client';

import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import {Prescription} from '@prisma/client';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';

const MyPrescriptions = () => {
  const { data, isLoading } = useSWR<Prescription[]>(
    '/api/services/prescriptions',
    fetcher
  );

  const [showAll, setShowAll] = useState(false);
  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null);

  useEffect(() => {
    if (!selectedPrescription && data && data.length > 0) {
      setSelectedPrescription(data[0] ?? null);
    }
  }, [data, selectedPrescription]);

  if (isLoading) return <Loading />;

  const prescriptions = data ?? [];

  const renderPrescriptionCard = (prescription: Prescription) => {
    const { patientName, doctorName, dateIssued, instructions } =
      prescription;

    const formattedDateIssued = new Date(dateIssued).toLocaleDateString();

    return (
      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='mb-1 font-bold'>Patient: {patientName}</h2>
        <p className='mb-1 text-sm'>Doctor: {doctorName}</p>
        <p className='mb-1 text-sm'>Date Issued: {formattedDateIssued}</p>
        <p className='mb-1 text-sm'>Instructions: {instructions}</p>
      </div>
    );
  };

  return (
    <div className='mx-auto mb-4 flex flex-col bg-gray-100 pb-20'>
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Your Prescriptions</h1>

        {showAll ? (
          prescriptions.length > 0 ? (
            prescriptions.map((prescription) => (
              <div
                key={prescription.id}
                onClick={() => setSelectedPrescription(prescription)}
                className='cursor-pointer'
              >
                {renderPrescriptionCard(prescription)}
              </div>
            ))
          ) : (
            <p>No prescriptions available.</p>
          )
        ) : selectedPrescription ? (
          <>
            {renderPrescriptionCard(selectedPrescription)}
            <div
              className='mb-4 flex cursor-pointer items-center rounded-lg bg-white p-4'
              onClick={() => setShowAll(true)}
            >
              <FontAwesomeIcon
                icon={faFileMedical}
                className='mr-2 h-5 w-5 text-blue-600'
              />
              <span className='font-semibold text-blue-600'>
                View All Prescriptions
              </span>
            </div>
          </>
        ) : (
          <p>No prescriptions available.</p>
        )}
      </div>
    </div>
  );
};

export default MyPrescriptions;
