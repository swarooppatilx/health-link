import { NextRequest, NextResponse } from 'next/server';
import { createAppointment } from '@/models/appointment'; // Assuming the `createAppointment` function is imported from lib/appointment
import { z } from 'zod'; // Optional: Using Zod for validation
import { getSession } from '@/lib/session'; // Ensure this function correctly fetches session info

// Create a Zod schema for validating the incoming data
const AppointmentSchema = z.object({
  hospitalId: z.string(),
  date: z.string(),
  time: z.string(),
  symptoms: z.string(),
  duration: z.string(),
  painSeverity: z.string(),
  underlyingConditions: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON request body
    const body = await req.json();
    const parsedData = AppointmentSchema.parse(body); // Validate the incoming data

    const {
      hospitalId,
      date,
      time,
      symptoms,
      duration,
      painSeverity,
      underlyingConditions,
    } = parsedData;

    // Get the userId from the session
    const userId = await getSession();

    if (!userId) {
      throw new Error('User not authenticated');
    }

    // Create the appointment using the validated data
    const appointment = await createAppointment(
      hospitalId,
      userId,
      date,
      time,
      symptoms,
      duration,
      painSeverity,
      underlyingConditions || '',
    );

    // Return a success response with the appointment data
    return NextResponse.json(
      {
        message: 'Appointment created successfully!',
        appointment,
      },
      { status: 201 },
    );
  } catch (error) {
    // Handle errors (e.g., invalid data or server issues)
    return NextResponse.json(
      {
        error: 'Failed to create the appointment. Please check the data.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 400 },
    );
  }
}
