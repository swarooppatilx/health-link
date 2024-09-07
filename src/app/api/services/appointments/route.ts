import { NextResponse } from 'next/server';
import { type Appointments } from '@/types/basic';

const appointments: Appointments = [
  {
    id: 'a1',
    date: '2024-09-10',
    time: '10:00 AM',
    estimated_time: '30 mins',
    hospital: {
      id: 'h1',
      name: 'City Hospital',
      description: 'A well-known hospital in the city.',
      availableServices: ['Cardiology', 'Neurology'],
      availableBeds: 10,
      link: '',
      hasLink: true,
    },
  },
  {
    id: 'a2',
    date: '2024-09-15',
    time: '02:00 PM',
    estimated_time: '45 mins',
    hospital: {
      id: 'h2',
      name: 'Green Valley Clinic',
      description: 'A small clinic specializing in general healthcare.',
      availableServices: ['General Checkup', 'Pediatrics'],
      availableBeds: 5,
      link: '',
      hasLink: true,
    },
  },
  {
    id: 'a3',
    date: '2024-09-20',
    time: '11:30 AM',
    estimated_time: '20 mins',
    hospital: {
      id: 'h3',
      name: 'Sunrise Medical Center',
      description: 'A modern medical center with advanced diagnostic services.',
      availableServices: ['Radiology', 'Orthopedics', 'Dermatology'],
      availableBeds: 15,
      link: '',
      hasLink: true,
    },
  },
];

export async function GET() {
  return NextResponse.json(appointments);
}
