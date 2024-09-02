import { NextResponse } from 'next/server';

// Define the service data in an array
const services = [
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
  const data = services;

  // Return the response as JSON
  return NextResponse.json(data);
}
