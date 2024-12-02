import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const prescriptions = await prisma.prescription.findMany({
      include: { medications: true }, // Include related medications
    });
    return NextResponse.json(prescriptions);
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    return NextResponse.json(
      { error: 'Unable to fetch prescriptions' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const prescription = await prisma.prescription.create({
      data: {
        ...data,
        medications: {
          create: data.medications, // Create related medications
        },
      },
    });
    return NextResponse.json(prescription);
  } catch (error) {
    console.error('Error creating prescription:', error);
    return NextResponse.json(
      { error: 'Unable to create prescription' },
      { status: 500 },
    );
  }
}
