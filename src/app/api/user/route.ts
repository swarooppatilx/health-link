import { NextResponse } from 'next/server';
import { type UserData } from '@/types/basic';

const user: UserData[] = [
  {
    id: '1',
    name: 'John Doe',
    dob: '1990-01-01',
    appointments: [
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
          link: '/services/appointment/hospitals/1',
          hasLink: true,
        },
      },
    ],
    health_records: [
      {
        id: 'r1',
        title: 'Blood Test',
        date: '2024-09-01',
        time: '08:00 AM',
        link: '',
      },
    ],
  },
];
export async function GET() {
  return NextResponse.json(user);
}
