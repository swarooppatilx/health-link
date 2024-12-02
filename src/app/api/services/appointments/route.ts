import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        hospital: true, // This will include the related hospital data
      }});
    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Unable to fetch appointments' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const appointment = await prisma.appointment.create({ data });
    return NextResponse.json(appointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Unable to create appointment' },
      { status: 500 },
    );
  }
}
