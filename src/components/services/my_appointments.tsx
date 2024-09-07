'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import BackButton from '@/components/common/back';
import { useEffect, useState } from 'react';
import { type Appointments, type Appointment } from '@/types/basic';
import Spinner from '@/components/common/spinner';
import { fetcher } from 'utils/fetcher';

const MyAppointments = () => {
  const [data, setData] = useState<Appointments>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher<Appointments>(
          '/api/services/appointments',
        );
        setData(result);
        if (result.length > 0) {
          setSelectedAppointment(result[0] ?? null);
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

  const renderAppointmentCard = (appointment: Appointment) => {
    const { hospital, date, time, estimated_time } = appointment;

    return (
      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='mb-1 font-bold'>{hospital.name}</h2>
        <p className='mb-1 text-sm'>Date: {date}</p>
        <p className='mb-1 text-sm'>Time: {time}</p>
        <p className='mb-1 text-sm'>Estimated Time: {estimated_time}</p>
      </div>
    );
  };

  return (
    <div className='mx-auto flex flex-col bg-gray-100'>
      <BackButton />

      {/* Main Content */}
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Your Appointments</h1>

        {showAll ? (
          <>
            {data.length > 0 ? (
              data.map((appointment) => (
                <div
                  key={appointment.id}
                  onClick={() => setSelectedAppointment(appointment)}
                >
                  {appointment.hospital.hasLink ? (
                    <Link href={appointment.hospital.link ?? '#'}>
                      {renderAppointmentCard(appointment)}
                    </Link>
                  ) : (
                    renderAppointmentCard(appointment)
                  )}
                </div>
              ))
            ) : (
              <p>No appointments available.</p>
            )}
          </>
        ) : (
          <>
            {selectedAppointment ? (
              <>
                {selectedAppointment.hospital.hasLink ? (
                  <Link href={selectedAppointment.hospital.link ?? '#'}>
                    {renderAppointmentCard(selectedAppointment)}
                  </Link>
                ) : (
                  renderAppointmentCard(selectedAppointment)
                )}
                <div
                  className='mb-4 flex cursor-pointer items-center rounded-lg bg-white p-4'
                  onClick={() => setShowAll(true)}
                >
                  <FontAwesomeIcon
                    icon={faFileMedical}
                    className='mr-2 h-5 w-5 text-blue-600'
                  />
                  <span className='font-semibold text-blue-600'>
                    Previous Appointments
                  </span>
                </div>
              </>
            ) : (
              <p>No appointments available.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
