'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import BackButton from '@/components/common/back';
import { useEffect, useState } from 'react';
import {
  type Prescription,
  type Prescription as PrescriptionType,
} from '@/types/basic';
import Spinner from '@/components/common/spinner';
import { fetcher } from 'utils/fetcher';

const MyPrescriptions = () => {
  const [data, setData] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedPrescription, setSelectedPrescription] =
    useState<PrescriptionType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<Prescription[]>(
          '/api/services/prescriptions',
        );
        setData(result);
        if (result.length > 0) {
          setSelectedPrescription(result[0] ?? null);
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

  const renderPrescriptionCard = (prescription: PrescriptionType) => {
    const { patientName, doctorName, dateIssued, medications, instructions } =
      prescription;

    return (
      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='mb-1 font-bold'>Patient: {patientName}</h2>
        <p className='mb-1 text-sm'>Doctor: {doctorName}</p>
        <p className='mb-1 text-sm'>Date Issued: {dateIssued}</p>
        <p className='mb-1 text-sm'>Instructions: {instructions}</p>
        {medications.map((med, index) => (
          <div key={index} className='mb-2'>
            <p className='font-semibold'>{med.name}</p>
            <p className='text-sm'>Dosage: {med.dosage}</p>
            <p className='text-sm'>Frequency: {med.frequency}</p>
            <p className='text-sm'>Duration: {med.duration}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='mx-auto flex flex-col bg-gray-100'>
      <BackButton />

      {/* Main Content */}
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Your Prescriptions</h1>

        {showAll ? (
          <>
            {data.length > 0 ? (
              data.map((prescription) => (
                <div
                  key={prescription.id}
                  onClick={() => setSelectedPrescription(prescription)}
                >
                  <div className='cursor-pointer'>
                    {renderPrescriptionCard(prescription)}
                  </div>
                </div>
              ))
            ) : (
              <p>No prescriptions available.</p>
            )}
          </>
        ) : (
          <>
            {selectedPrescription ? (
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
          </>
        )}
      </div>
    </div>
  );
};

export default MyPrescriptions;
