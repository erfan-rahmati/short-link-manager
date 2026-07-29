import Link from "next/link";

import { Link2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { LogoutButton } from "@/components/logout-button";

import { MobileDashboardMenu } from "./mobile-dashboard-menu";

type DashboardNavbarProps = {
  user?: {
    name?: string | null;
    email?: string | null;
  };
};

export function DashboardNavbar({ user }: DashboardNavbarProps) {
  return (
    <nav
      className="
        border-b
        bg-background/80
        backdrop-blur
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          px-6
          py-4
          md:px-8
        "
      >
        <Link
          href="/dashboard"
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-primary
              text-primary-foreground
            "
          >
            <Link2 size={22} />
          </div>

          <div>
            <p className="text-lg font-bold">ShortLink</p>

            <p
              className="
                hidden
                text-xs
                text-muted-foreground
                sm:block
              "
            >
              {user?.name ?? "مدیریت لینک‌های کوتاه"}
            </p>
          </div>
        </Link>

        <div
          className="
            hidden
            items-center
            gap-3
            md:flex
          "
        >
          <Link href="/dashboard">
            <Button variant="ghost">داشبورد</Button>
          </Link>

          <Link href="/dashboard/new">
            <Button>ساخت لینک</Button>
          </Link>

          <LogoutButton />
        </div>

        <MobileDashboardMenu />
      </div>
    </nav>
  );
}
