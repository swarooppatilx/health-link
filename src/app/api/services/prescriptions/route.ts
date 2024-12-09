import { NextResponse } from 'next/server';
import { type Prescription } from '@/types/basic';

const prescriptions: Prescription[] = [
  {
    id: 'p1',
    patientName: 'John Doe',
    doctorName: 'Dr. Smith',
    dateIssued: '2024-09-07',
    medications: [
      {
        name: 'Amoxicillin',
        dosage: '500 mg',
        frequency: 'Twice a day',
        duration: '7 days',
      },
      {
        name: 'Ibuprofen',
        dosage: '200 mg',
        frequency: 'Every 8 hours',
        duration: '5 days',
      },
    ],
    instructions: 'Take medication with food to avoid stomach upset.',
  },
  {
    id: 'p2',
    patientName: 'John Doe',
    doctorName: 'Dr. Johnson',
    dateIssued: '2024-09-08',
    medications: [
      {
        name: 'Paracetamol',
        dosage: '650 mg',
        frequency: 'Every 6 hours',
        duration: '3 days',
      },
    ],
    instructions: 'Avoid alcohol while taking this medication.',
  },
  {
    id: 'p3',
    patientName: 'John Doe',
    doctorName: 'Dr. Brown',
    dateIssued: '2024-09-09',
    medications: [
      {
        name: 'Cough Syrup',
        dosage: '10 ml',
        frequency: 'Three times a day',
        duration: '5 days',
      },
    ],
    instructions: 'Shake well before use.',
  },
];

export function GET() {
  return NextResponse.json(prescriptions);
}
