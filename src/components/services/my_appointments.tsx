'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Appointment } from '@prisma/client';
import Loading from '@/app/loading';
import { fetcher } from '@/lib/fetcher';

const MyAppointments = () => {
  const { data, isLoading } = useSWR<Appointment[]>(
    '/api/services/appointments',
    fetcher,
  );

  const [showAll, setShowAll] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  // Update selected appointment after data is fetched
  useEffect(() => {
    if (data && data.length > 0 && !selectedAppointment) {
      setSelectedAppointment(data[0]);
    }
  }, [data, selectedAppointment]);

  if (isLoading) return <Loading />;

  const appointments = data ?? [];

  const renderAppointmentCard = (appointment: Appointment) => {
    const { date, time, estimatedTime } = appointment;

    const formattedDate = new Date(date).toLocaleDateString();
    const formattedTime = new Date(time).toLocaleTimeString();

    return (
      <div className='mb-4 rounded-lg bg-white p-4'>
        <p className='mb-1 text-sm'>Date: {formattedDate}</p>
        <p className='mb-1 text-sm'>Time: {formattedTime}</p>
        <p className='mb-1 text-sm'>Estimated Time: {estimatedTime}</p>
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
                  {
                    renderAppointmentCard(appointment)
                  }
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
                {
                  renderAppointmentCard(selectedAppointment)
                }
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
