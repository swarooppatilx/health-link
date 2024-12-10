import { NextResponse } from 'next/server';
import { z } from 'zod';
import { User } from '@/models/User';
import { setSession } from '@/lib/session';
import { connectToDatabase } from '@/lib/mongodb';

// Zod Schema for validation
const SignupSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().regex(/^\d{10}$/, 'Mobile number must be 10 digits'),
});

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const parsedBody = SignupSchema.parse(body);

    const existingUser = await User.findOne({
      $or: [{ email: parsedBody.email }, { mobile: parsedBody.mobile }],
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: 'A user with this email or mobile number already exists.',
          success: false,
        },
        { status: 400 },
      );
    }

    const newUser = await User.create({
      firstName: parsedBody.firstName,
      lastName: parsedBody.lastName,
      email: parsedBody.email,
      mobile: parsedBody.mobile,
    });

    // Set session
    await setSession(newUser._id);

    return NextResponse.json(
      { message: 'User signed up successfully!', success: true, data: newUser },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation error.', success: false, errors: error.errors },
        { status: 400 },
      );
    }

    console.error('Error signing up user:', error);
    return NextResponse.json(
      { message: 'Internal server error.', success: false },
      { status: 500 },
    );
  }
}
