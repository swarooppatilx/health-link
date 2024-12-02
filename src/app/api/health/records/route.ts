import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const records = await prisma.healthRecord.findMany();
    return NextResponse.json(records);
  } catch (error) {
    console.error('Error fetching health records:', error);
    return NextResponse.json(
      { error: 'Unable to fetch health records' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const record = await prisma.healthRecord.create({ data });
    return NextResponse.json(record);
  } catch (error) {
    console.error('Error creating health record:', error);
    return NextResponse.json(
      { error: 'Unable to create health record' },
      { status: 500 },
    );
  }
}
