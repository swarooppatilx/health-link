import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  try {
    const { userId } = await auth(); // Get the user ID from the auth function
    const appointments = await prisma.appointment.findMany({
      include: {
        hospital: true, // Includes the related hospital details
      },
    });

    // Filter appointments by userId
    const userAppointments = appointments.filter(appointment => appointment.userId === userId);

    return NextResponse.json(userAppointments); // Return filtered appointments
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Unable to fetch appointments' },
      { status: 500 },
    );
  }
}


export async function POST(request: Request) {
  const { userId, hospitalId, date, time, estimatedTime } =
    await request.json();

  if (!userId || !hospitalId || !date || !time) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    );
  }

  try {
    // Combine `date` and `time` into an ISO-8601 compliant string
    const appointmentDate = new Date(`${date}T${time}:00`).toISOString();

    const appointment = await prisma.appointment.create({
      data: {
        userId,
        date: appointmentDate,
        time,
        estimatedTime: estimatedTime,
        hospital: {
          connect: {
            id: hospitalId, // Connect the hospital by its unique `id`
          },
        },
      },
    });

    return NextResponse.json(appointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 },
    );
  }
}
