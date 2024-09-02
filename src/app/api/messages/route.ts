import { NextResponse } from 'next/server';
import { type Message } from '@/types/basic';
// Define the messages data array with proper typing
const messagesData: Message[] = [
  {
    title: 'Your healthcare services',
    items: [
      'From your doctor',
      'About hospital and specialist care appointments',
      'About invitations and reminders',
    ],
  },
  {
    title: 'Your hospital and specialist doctors',
    items: ['Your health record', 'Documents and letters', 'Reports'],
  },
];

// Define the GET request handler
export async function GET() {
  // Return the messages data as JSON
  return NextResponse.json(messagesData);
}
