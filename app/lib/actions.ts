'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import postgres from 'postgres';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

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

export async function registerUser(
  prevState: string | undefined,
  formData: FormData,
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (password !== confirmPassword) {
    return 'Konfirmasi password tidak cocok dengan password yang dimasukkan.';
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;
  } catch (error: any) {
    // Tangkap error jika email sudah terdaftar (unique constraint)
    if (error.code === '23505' || error.message.includes('unique constraint')) {
      return 'Email ini sudah terdaftar. Silakan gunakan email lain atau login.';
    }
    return 'Gagal membuat akun, silakan coba lagi nanti.';
  }

  // Baris redirect harus berada di luar try-catch di Next.js actions
  redirect('/login?registered=success');
}
