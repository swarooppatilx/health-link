import { NextResponse } from 'next/server';
import { type ListItem } from '@/types/basic';

const services: ListItem[] = [
  {
    title: 'Book Appointment',
    link: '/services/appointment/hospitals',
  },
  {
    title: 'Upcoming and past appointments',
    link: '/services/appointment',
  },
  {
    title: 'View and manage prescriptions',
    link: '/services/prescriptions',
  },
  {
    title: 'Contact for a document or update',
  },
  {
    title: 'Check for available appointments',
  },
];

export async function GET() {
  return NextResponse.json(services);
}
