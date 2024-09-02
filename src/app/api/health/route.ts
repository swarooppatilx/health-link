import { NextResponse } from 'next/server';
import { type HealthItem } from '@/types/basic';

// Define the data for each item in a JSON array
const healthItems: HealthItem[] = [
  {
    title: 'View and manage prescriptions',
    hasLink: false,
  },
  {
    title: 'Health Record',
    link: '/health/records',
    hasLink: true,
  },
  {
    title: 'Upcoming and past appointments',
    hasLink: false,
  },
  {
    title: 'Test results and imaging',
    hasLink: false,
  },
  {
    title: 'COVID-19 vaccine record',
    hasLink: false,
  },
  {
    title: 'COVID Pass',
    hasLink: false,
  },
  {
    title: 'Your health choices',
    hasLink: false,
  },
];

// Define the GET request handler
export async function GET() {
  return NextResponse.json(healthItems);
}
