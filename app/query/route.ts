import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listUsers() {
  // Hapus akun lama yang tidak diperlukan
  await sql`DELETE FROM users WHERE email NOT IN ('admin', 'siti@example.com');`;

	const data = await sql`
    SELECT name, email, password
    FROM users;
  `;

	return data;
}

export async function GET() {
  try {
  	return Response.json(await listUsers());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
// Hapus akun lama yang tidak diperlukan