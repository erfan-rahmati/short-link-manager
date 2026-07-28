import Link from "next/link";

import { LogoutButton } from "@/components/logout-button";

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <Link
          href="/dashboard"
          className="text-xl font-bold"
        >
          ShortLink
        </Link>


        <nav className="flex items-center gap-4 text-sm">

          <Link
            href="/dashboard"
            className="text-muted-foreground hover:text-foreground"
          >
            Dashboard
          </Link>


          <Link
            href="/dashboard/new"
            className="text-muted-foreground hover:text-foreground"
          >
            New Link
          </Link>


          <LogoutButton />

        </nav>

      </div>
    </header>
  );
}