import { NextResponse } from 'next/server';
import { getAppointmentsByUserId } from '@/models/appointment'; // Import the getAppointments function from the model
import { getSession } from '@/lib/session'; // Ensure this function correctly fetches session info

export async function GET() {
  try {
    // Fetch all appointments using the model
    const userId = await getSession();
    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: 'User not authenticated' }),
        { status: 401 },
      );
    }
    const appointments = await getAppointmentsByUserId(userId);

    if (appointments.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: 'No appointments found' }),
        { status: 404 },
      );
    }

    // Return the appointments in the response
    return new NextResponse(JSON.stringify(appointments), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Internal Server Error' }),
      { status: 500 },
    );
  }
}
