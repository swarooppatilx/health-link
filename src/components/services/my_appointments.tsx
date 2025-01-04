'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
import { useState } from 'react';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';

type Appointment = {
  id: string;
  date: string;
  time: string;
  symptoms: string;
  painSeverity: string;
  underlyingConditions: string;
  createdAt: string;
};

const MyAppointments = () => {
  const { data, isLoading } = useSWR<Appointment[]>(
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
    const { date, time, symptoms, painSeverity, underlyingConditions, createdAt } = appointment;

    return (
      <div className='mb-4 rounded-lg bg-white p-4'>
        <h2 className='mb-1 font-bold'>Appointment</h2>
        <p className='mb-1 text-sm'>
          Date: {new Date(date).toLocaleDateString()}
        </p>
        <p className='mb-1 text-sm'>Time: {time}</p>
        <p className='mb-1 text-sm'>Symptoms: {symptoms}</p>
        <p className='mb-1 text-sm'>Pain Severity: {painSeverity}</p>
        <p className='mb-1 text-sm'>Underlying Condition: {underlyingConditions}</p>
        <p className='mb-1 text-sm'>
          Created At: {new Date(createdAt).toLocaleString()}
        </p>
      </div>
    );
  };

  return (
    <div className='mx-auto mb-4 flex flex-col bg-gray-100 pb-20'>
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Your Appointments</h1>

        {showAll ? (
          appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                onClick={() => setSelectedAppointment(appointment)}
                className='cursor-pointer'
              >
                {renderAppointmentCard(appointment)}
              </div>
            ))
          ) : (
            <p>No appointments available.</p>
          )
        ) : selectedAppointment ? (
          <>
            {renderAppointmentCard(selectedAppointment)}
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
      </div>
    </div>
  );
};

export default MyAppointments;
