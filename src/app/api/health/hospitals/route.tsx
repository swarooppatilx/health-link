// app/api/health/hospitals/route.ts
import { NextResponse } from 'next/server';
import { type HospitalItem } from '@/types/basic';

// Function to generate hospital link
const generateHospitalLink = (id: string) => `/services/appointment/hospitals/${id}`;

// Updated Array of hospital items with dynamic links
const hospitalItems: HospitalItem[] = [
  { 
    id: '1', 
    name: 'Ruby Hall Clinic', 
    description: 'A premier healthcare institution with a wide range of services.', 
    availableServices: ['Cardiology', 'Neurology', 'Orthopedics'], 
    availableBeds: 120,
    link: generateHospitalLink('1'),
    hasLink: true
  },
  { 
    id: '2', 
    name: 'Jehangir Hospital', 
    description: 'A multi-specialty hospital providing advanced medical care.', 
    availableServices: ['Pediatrics', 'General Surgery', 'Urology'], 
    availableBeds: 100,
    link: generateHospitalLink('2'),
    hasLink: true
  },
  { 
    id: '3', 
    name: 'Sahyadri Hospital', 
    description: 'Known for its expert medical staff and modern facilities.', 
    availableServices: ['Gynecology', 'Oncology', 'Nephrology'], 
    availableBeds: 80,
    link: generateHospitalLink('3'),
    hasLink: true
  },
  { 
    id: '4', 
    name: 'Deenanath Mangeshkar Hospital', 
    description: 'Provides comprehensive care in various specialties.', 
    availableServices: ['Dermatology', 'Endocrinology', 'Pulmonology'], 
    availableBeds: 150,
    link: generateHospitalLink('4'),
    hasLink: true
  },
  { 
    id: '5', 
    name: 'Aditya Birla Memorial Hospital', 
    description: 'Offers advanced healthcare services with a focus on patient care.', 
    availableServices: ['Gastroenterology', 'Rheumatology', 'Hematology'], 
    availableBeds: 90,
    link: generateHospitalLink('5'),
    hasLink: true
  },
  { 
    id: '6', 
    name: 'Noble Hospital', 
    description: 'A well-established hospital providing quality medical care.', 
    availableServices: ['Ophthalmology', 'ENT', 'Psychiatry'], 
    availableBeds: 110,
    link: generateHospitalLink('6'),
    hasLink: true
  },
  { 
    id: '7', 
    name: 'Columbia Asia Hospital', 
    description: 'Features state-of-the-art medical equipment and skilled professionals.', 
    availableServices: ['Internal Medicine', 'Orthopedic Surgery', 'Anesthesiology'], 
    availableBeds: 85,
    link: generateHospitalLink('7'),
    hasLink: true
  },
];

// Define the GET request handler
export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id'); // Extract the `id` from query parameters

  if (id) {
    // Find the hospital item by ID
    const hospitalItem = hospitalItems.find((item) => item.id === id);

    // If the item is found, return it; otherwise, return a 404 response
    if (hospitalItem) {
      return NextResponse.json(hospitalItem);
    } else {
      return NextResponse.json({ error: 'Hospital not found' }, { status: 404 });
    }
  } else {
    // Return all hospital items if no `id` is provided
    return NextResponse.json(hospitalItems);
  }
}
