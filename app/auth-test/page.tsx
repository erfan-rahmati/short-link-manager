import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AuthTestPage() {
  const result = await auth.getSession();

  return (
    <main className="p-8">
      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>
    </main>
  );
}