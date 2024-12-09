import { NextResponse } from 'next/server';
import { type UserData } from '@/types/basic';

const user: UserData = {
  id: '1',
  name: 'John Doe',
  abha: '12345678',
  dob: '1990-01-01',
};
export function GET() {
  return NextResponse.json(user);
}
