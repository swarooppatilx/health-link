import { NextResponse } from 'next/server';
import { type ServiceItem } from '@/types/basic';

// Define the service data in an array
const services: ServiceItem[] = [
  {
    title: 'Book Appointment',
    description: 'Get care and support to help stay well',
    link: '/services/appointment',
    hasLink: true,
  },
  {
    title: 'Request repeat prescriptions',
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

// Define the GET request handler
export async function GET() {
  // Create the response object with JSON data
  return NextResponse.json(services);
}
