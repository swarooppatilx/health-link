import { NextResponse } from 'next/server';
import { z } from 'zod';
import { User } from '@/models/User';
import { setSession } from '@/lib/session';
import { connectToDatabase } from '@/lib/mongodb';

// Zod Schema for validation
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const parsedBody = loginSchema.parse(body);

    const existingUser = await User.findOne({
      $or: [{ email: parsedBody.email }],
    });

    if (!existingUser) {
      return NextResponse.json(
        {
          message: 'This email is not registered.',
          success: false,
        },
        { status: 400 },
      );
    }

    // Set session
    await setSession(existingUser._id);

    return NextResponse.json(
      {
        message: 'User loggedin up successfully!',
        success: true,
        data: existingUser,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation error.', success: false, errors: error.errors },
        { status: 400 },
      );
    }

    console.error('Error signin in user:', error);
    return NextResponse.json(
      { message: 'Internal server error.', success: false },
      { status: 500 },
    );
  }
}
