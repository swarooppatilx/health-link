import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (id) {
    const hospitalItem = await prisma.hospital.findUnique({
      where: { id },
    });

    if (hospitalItem) {
      return NextResponse.json(hospitalItem);
    } else {
      return NextResponse.json(
        { error: 'Hospital not found' },
        { status: 404 },
      );
    }
  } else {
    const hospitalItems = await prisma.hospital.findMany();
    return NextResponse.json(hospitalItems);
  }
}
