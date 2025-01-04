import { NextResponse } from 'next/server';
import { getUserByEmail } from '@/models/user';
import { getSession } from '@/lib/session';
export async function GET() {
  const session = await getSession();
  if (session) {
    const user = await getUserByEmail(session);
    return NextResponse.json(user);
  }
  return NextResponse.json({ error: 'No session found' });
}
