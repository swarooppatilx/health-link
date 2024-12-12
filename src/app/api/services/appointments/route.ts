import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/models/Appointment';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all appointments
    const appointments = await Appointment.find();

    // Transform data if necessary
    const formattedAppointments = appointments.map((appointment) => ({
      id: appointment._id,
      date: appointment.date,
      symptoms: appointment.symptoms,
      createdAt: appointment.createdAt,
      updatedAt: appointment.updatedAt,
    }));

    return new NextResponse(JSON.stringify(formattedAppointments), { status: 200 });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
