import { getLinksByUserId } from "@/src/repositories/link.repository";

export default async function DashboardPage() {
  // فعلاً موقت
  const userId = "demo-user";

  const links = await getLinksByUserId(userId);

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="space-y-4">
        {links.length === 0 ? (
          <p>No links yet.</p>
        ) : (
          links.map((link) => (
            <div
              key={link.id}
              className="rounded-lg border p-4"
            >
              <h2 className="font-semibold">
                {link.title || link.slug}
              </h2>

              <p className="text-sm text-muted-foreground">
                /{link.slug}
              </p>

              <p className="text-sm break-all">
                {link.destinationUrl}
              </p>

              <p className="text-sm mt-2">
                Clicks: {link.clickCount}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}