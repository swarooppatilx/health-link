import { NextResponse } from 'next/server';
import { getUserByEmail } from '@/models/user';
import { createOtp, sendOtp, verifyOtp } from '@/models/otp';
import { setSession } from '@/lib/session';

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    // If OTP is not provided, handle login (sending OTP)
    if (otp === undefined) {
      if (!email) {
        return NextResponse.json(
          { message: 'Email is required' },
          { status: 400 },
        );
      }

      // Check if the user exists by email
      const user = await getUserByEmail(email);
      if (!user) {
        return NextResponse.json(
          { message: 'User not found' },
          { status: 404 },
        );
      }

      // Generate OTP for the user
      const otpData = await createOtp(email);
      if (!otpData) {
        return NextResponse.json(
          { message: 'Failed to generate OTP' },
          { status: 500 },
        );
      }

      // Send OTP to the user's email
      await sendOtp(email, otpData.otp);

      // Return success message
      return NextResponse.json({ message: 'OTP sent successfully' });
    }

    // If OTP is provided, handle OTP verification
    if (!email || !otp) {
      return NextResponse.json(
        { message: 'Email and OTP are required for verification' },
        { status: 400 },
      );
    }

    // Verify the OTP
    const isOtpValid = await verifyOtp(email, otp);

    if (!isOtpValid) {
      return NextResponse.json(
        { message: 'Invalid OTP or OTP expired' },
        { status: 400 },
      );
    }

    // OTP is valid, return success
    await setSession(email);
    return NextResponse.json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error during login or OTP verification:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
