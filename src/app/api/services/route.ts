import { NextResponse } from 'next/server';
import { type ServiceItem } from '@/types/basic';

const services: ServiceItem[] = [
  {
    title: 'Book Appointment',
    description: 'Get care and support to help stay well',
    link: '/services/appointment/hospitals',
    hasLink: true,
  },
  {
    title: 'Upcoming and past appointments',
    link: '/services/appointment',
    hasLink: true,
  },
  {
    title: 'View and manage prescriptions',
    link: '/services/prescriptions',
    hasLink: true,
  },
  {
    title: 'Contact for a document or update',
    hasLink: false,
  },
  {
    title: 'Check for available appointments',
    hasLink: false,
  },
];

export async function GET() {
  return NextResponse.json(services);
}
