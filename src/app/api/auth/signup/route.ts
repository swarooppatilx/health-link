import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/models/user';
import { createOtp, sendOtp } from '@/models/otp';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, mobile } = await req.json();

    // Validate input fields before proceeding
    if (!firstName || !lastName || !email || !mobile) {
      return NextResponse.json(
        { message: 'Missing required user fields' },
        { status: 400 },
      );
    }

    // Check if the user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 },
      );
    }

    // Create a new user with validated fields
    const newUser = await createUser({ firstName, lastName, email, mobile });

    // Generate and send OTP
    const otpData = await createOtp(email);
    await sendOtp(email, otpData.otp);

    return NextResponse.json({
      message: 'User created successfully. OTP sent for verification.',
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
