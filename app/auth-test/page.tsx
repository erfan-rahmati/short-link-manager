import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AuthTestPage() {
  const session = await auth.getSession();

  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl font-bold">
        Auth Test
      </h1>

      <pre className="rounded bg-gray-100 p-4 text-sm text-black">
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
}