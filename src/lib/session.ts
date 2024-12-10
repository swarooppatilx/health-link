import { cookies } from 'next/headers';

export async function setSession(userId: string) {
  const cookieStore = cookies();
  cookieStore.set('user_id', userId, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });
}

export async function getSession() {
  const cookieStore = cookies();
  return cookieStore.get('user_id')?.value || null;
}
