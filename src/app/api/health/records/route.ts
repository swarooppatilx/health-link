import { NextResponse } from 'next/server';
import { type HealthRecords } from '@/types/basic';

const healthRecords: HealthRecords = [
  {
    id: 'r1',
    title: 'Blood Test',
    date: '2024-09-01',
    time: '08:00 AM',
    link: '',
  },
  {
    id: 'r2',
    title: 'X-ray Scan',
    date: '2024-08-25',
    time: '09:30 AM',
    link: '',
  },
  {
    id: 'r3',
    title: 'MRI Scan',
    date: '2024-08-20',
    time: '11:00 AM',
    link: '',
  },
  {
    id: 'r4',
    title: 'Annual Physical Exam',
    date: '2024-07-15',
    time: '10:00 AM',
    link: '',
  },
  {
    id: 'r5',
    title: 'Allergy Test',
    date: '2024-07-05',
    time: '02:00 PM',
    link: '',
  },
];

export function GET() {
  return NextResponse.json(healthRecords);
}
