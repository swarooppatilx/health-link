import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { z } from 'zod';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/models/Appointment';

// Zod Schema for validation
const AppointmentSchema = z.object({
  hospitalId: z.string().min(1, 'Hospital ID is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  symptoms: z.string().min(1, 'Symptoms description is required'),
  duration: z.string().min(1, 'Duration is required'),
  painSeverity: z.string().min(1, 'Pain Severity is required'),
  underlyingConditions: z.string().min(1, 'Chronic Conditions is required'),
});

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const parsedBody = AppointmentSchema.parse(body);

    // Save appointment to database
    const newAppointment = await Appointment.create({
      hospitalId: parsedBody.hospitalId,
      date: new Date(`${parsedBody.date}T${parsedBody.time}`), // Combine date and time
      symptoms: parsedBody.symptoms,
      duration: parsedBody.duration,
      painSeverity: parsedBody.painSeverity,
      underlyingConditions: parsedBody.underlyingConditions,
    });

    return NextResponse.json(
      {
        message: 'Appointment saved successfully!',
        success: true,
        data: newAppointment,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(req.json());
      return NextResponse.json(
        { message: 'Validation error.', success: false, errors: error.errors },
        { status: 400 },
      );
    }

    console.error('Error saving appointment:', error);
    return NextResponse.json(
      { message: 'Internal server error.', success: false },
      { status: 500 },
    );
  }
}
