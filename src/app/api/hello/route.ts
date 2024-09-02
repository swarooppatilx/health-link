import { NextResponse } from 'next/server';

// Define the GET request handler
export async function GET() {
  // Create the response object with JSON data
  const data = { message: 'Hello, Next.js 13 with App Router!' };

  // Return the response as JSON
  return NextResponse.json(data);
}
