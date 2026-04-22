'use server';

import { cookies } from 'next/headers';



export async function loginAction(data: {
    email: string;
    password: string;
}) {
    const { email, password } = data;
    const cookieStore = await cookies();

  // Mock auth
  if (email === 'admin@test.com' && password === '123456') {
      

    cookieStore.set('isAdmin', 'true', {
      httpOnly: true,
      path: '/',
    });

    return { success: true };
  }

  return { success: false, message: 'Invalid credentials' };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('isAdmin');
}