'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

interface HospitalData {
  name: string;
  description: string;
  availableServices: string[];
  availableBeds: number;
}

interface AppointmentProps {
  id: string;
}

const Appointment: React.FC<AppointmentProps> = ({ id }) => {
  const router = useRouter();
  const { data, isLoading, error } = useSWR<HospitalData>(
    `/api/health/hospitals?id=${id}`,
    fetcher,
  );

  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    time: '',
    symptoms: '',
    duration: '',
    painSeverity: 0,
    underlyingConditions: '',
  });

  const [errors, setErrors] = useState({
    date: '',
    time: '',
    symptoms: '',
    duration: '',
    painSeverity: '',
    underlyingConditions: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setAppointmentDetails((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear validation errors for the field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const validateForm = () => {
    const newErrors: typeof errors = {
      date: '',
      time: '',
      symptoms: '',
      duration: '',
      painSeverity: '',
      underlyingConditions: '',
    };
    let isValid = true;

    if (!appointmentDetails.date) {
      newErrors.date = 'Please select a date.';
      isValid = false;
    }
    if (!appointmentDetails.time) {
      newErrors.time = 'Please select a time.';
      isValid = false;
    }
    if (!appointmentDetails.symptoms.trim()) {
      newErrors.symptoms = 'Please describe your symptoms.';
      isValid = false;
    }
    if (!appointmentDetails.duration) {
      newErrors.duration = 'Please select the duration.';
      isValid = false;
    }
    if (!appointmentDetails.underlyingConditions.trim()) {
      newErrors.underlyingConditions = 'Please select the Chronic Conditions.';
      isValid = false;
    }
    if (
      appointmentDetails.painSeverity < 1 ||
      appointmentDetails.painSeverity > 10
    ) {
      newErrors.painSeverity =
        'Please select a pain severity between 1 and 10.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const {
      date,
      time,
      symptoms,
      duration,
      painSeverity,
      underlyingConditions,
    } = appointmentDetails;

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hospitalId: id,
          date,
          time,
          symptoms,
          duration,
          painSeverity,
          underlyingConditions,
        }),
      });

      if (response.ok) {
        alert('Appointment confirmed!');
        router.push('/services/appointment'); // Redirect to the appointment services page
      } else {
        alert('Failed to book the appointment. Please try again.');
        console.error(
          'Appointment Details:',
          appointmentDetails,
          'Hospital ID:',
          id,
        );
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading hospital details. Please try again later.</div>;
  }

  return (
    <div className='mx-auto flex flex-col bg-gray-100'>
      <div className='flex-grow p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Book an Appointment</h1>

        {/* Hospital Details */}
        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <h2 className='mb-2 text-xl font-semibold'>{data?.name}</h2>
          <p className='mb-2 text-sm text-gray-700'>{data?.description}</p>
          <p className='mb-2 text-sm'>
            <strong className='text-nhs-blue'>Available Services:</strong>
            <br />
            {data?.availableServices?.join(', ')}
          </p>
          <p className='text-sm'>
            <strong className='text-nhs-blue'>Available Beds:</strong>{' '}
            {data?.availableBeds}
          </p>
        </div>

        {/* Date Picker */}
        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <div className='flex items-center rounded-lg border border-gray-300'>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className='ml-3 h-5 w-5 text-gray-500'
            />
            <input
              id='date'
              type='date'
              className='w-full rounded-lg border-0 bg-gray-50 py-2 pl-10 pr-2 focus:border-blue-500 focus:outline-none'
              value={appointmentDetails.date}
              onChange={handleInputChange}
              required
            />
          </div>
          {errors.date && (
            <p className='mt-1 text-sm text-red-500'>{errors.date}</p>
          )}
        </div>

        {/* Time Picker */}
        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <div className='flex items-center rounded-lg border border-gray-300'>
            <FontAwesomeIcon
              icon={faClock}
              className='ml-3 h-5 w-5 text-gray-500'
            />
            <input
              id='time'
              type='time'
              className='w-full rounded-lg border-0 bg-gray-50 py-2 pl-10 pr-2 focus:border-blue-500 focus:outline-none'
              value={appointmentDetails.time}
              onChange={handleInputChange}
              required
            />
          </div>
          {errors.time && (
            <p className='mt-1 text-sm text-red-500'>{errors.time}</p>
          )}
        </div>

        {/* Symptoms */}
        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <label
            htmlFor='symptoms'
            className='mt-2 block text-sm font-semibold text-nhs-blue'
          >
            Describe your Symptoms
          </label>
          <textarea
            id='symptoms'
            placeholder='Examples: Head ache, Nausea, Chills'
            className='w-full rounded-lg border-0 bg-gray-50 py-2 pl-10 pr-2 focus:border-blue-500 focus:outline-none'
            value={appointmentDetails.symptoms}
            onChange={handleInputChange}
            required
          />
          {errors.symptoms && (
            <p className='mt-1 text-sm text-red-500'>{errors.symptoms}</p>
          )}
        </div>

        {/* Duration */}
        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <label className='block text-sm font-semibold text-nhs-blue'>
            How long have you been experiencing these symptoms?
          </label>
          <select
            id='duration'
            className='w-full rounded-lg bg-gray-50 py-2 pr-2 focus:border-blue-500 focus:outline-none'
            value={appointmentDetails.duration}
            onChange={handleInputChange}
          >
            <option value=''>Select Duration</option>
            <option value='hours'>Hours</option>
            <option value='days'>Days</option>
            <option value='weeks'>Weeks</option>
            <option value='months'>Months</option>
          </select>
          {errors.duration && (
            <p className='mt-1 text-sm text-red-500'>{errors.duration}</p>
          )}
        </div>

        {/* Pain Severity */}
        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <label className='block text-sm font-semibold text-nhs-blue'>
            On a scale of 1 to 10, how severe is your pain?
          </label>
          <input
            type='range'
            id='painSeverity'
            min='1'
            max='10'
            className='w-full'
            value={appointmentDetails.painSeverity}
            onChange={handleInputChange}
          />
          <p className='text-sm text-gray-700'>
            Severity: {appointmentDetails.painSeverity}
          </p>
          {errors.painSeverity && (
            <p className='mt-1 text-sm text-red-500'>{errors.painSeverity}</p>
          )}
        </div>

        {/* Chronic Conditions */}
        <div className='mb-4 rounded-lg bg-white p-4 shadow-md'>
          <label className='block text-sm font-semibold text-nhs-blue'>
            Do you have any chronic conditions?
          </label>
          <textarea
            id='underlyingConditions'
            placeholder='Examples: Diabetes, hypertension, etc.'
            className='w-full rounded-lg bg-gray-50 py-2 pl-10 pr-2 focus:border-blue-500 focus:outline-none'
            value={appointmentDetails.underlyingConditions}
            onChange={handleInputChange}
          />
          {errors.underlyingConditions && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.underlyingConditions}
            </p>
          )}
        </div>

        <div className='mb-36'>
          <button
            className='w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
            onClick={handleSubmit}
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
