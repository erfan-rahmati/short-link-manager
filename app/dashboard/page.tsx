import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { getUserLinks } from "@/src/repositories/link.repository";

import { LogoutButton } from "@/components/logout-button";

export default async function DashboardPage() {
  const session = await auth.getSession();

  if (!session.data?.user) {
    redirect("/login");
  }

  const links = await getUserLinks(session.data.user.id);

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="mt-2 text-muted-foreground">Manage your short links</p>

          <p className="mt-1 text-sm text-muted-foreground">
            Welcome back, {session.data.user.name}
          </p>
        </div>

        <LogoutButton />
      </div>

      <div className="space-y-4">
        {links.length === 0 ? (
          <p className="text-muted-foreground">No links yet.</p>
        ) : (
          links.map((link) => (
            <div
              key={link.id}
              className="
                rounded-lg
                border
                p-5
                space-y-2
              "
            >
              <h2 className="font-semibold">{link.title || link.slug}</h2>

              <p className="text-sm text-muted-foreground">/{link.slug}</p>

              <p className="text-sm break-all">{link.destinationUrl}</p>

              <p className="text-sm">Clicks: {link.clickCount}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
