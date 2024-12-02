import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const messages = await prisma.message.findMany();
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Unable to fetch messages' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const message = await prisma.message.create({ data });
    return NextResponse.json(message);
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json(
      { error: 'Unable to create message' },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const message = await prisma.message.delete({
      where: { id },
    });
    return NextResponse.json(message);
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json(
      { error: 'Unable to delete message' },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, ...data } = await req.json();
    const message = await prisma.message.update({
      where: { id },
      data,
    });
    return NextResponse.json(message);
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json(
      { error: 'Unable to update message' },
      { status: 500 },
    );
  }
}
