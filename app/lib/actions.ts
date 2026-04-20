'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Mohon maaf, periksa kembali alamat email dan kata sandi Anda berikan.';
        default:
          return 'Terjadi kesalahan sistem saat mencoba autentikasi.';
      }
    }
    throw error;
  }
}

export async function logOut() {
  await signOut();
}
