'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useSWR from 'swr';
import { useState } from 'react';
import { type Appointments, type Appointment } from '@/types/basic';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';

const MyAppointments = () => {
  const { data, isLoading } = useSWR<Appointments>(
    '/api/services/appointments',
    fetcher,
  );

  const [showAll, setShowAll] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  if (isLoading) return <Loading />;

  const appointments = data ?? [];
  if (!selectedAppointment && appointments.length > 0) {
    setSelectedAppointment(appointments[0] ?? null);
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
    <div className='mx-auto mb-4 flex flex-col bg-gray-100 pb-20'>
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Your Appointments</h1>

        {showAll ? (
          <>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  onClick={() => setSelectedAppointment(appointment)}
                  className='cursor-pointer'
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
