import Link from "next/link";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

type DashboardHeroProps = {
  name?: string;
};

export function DashboardHero({ name }: DashboardHeroProps) {
  return (
    <section
      className="
        flex
        flex-col
        gap-6
        rounded-3xl
        border
        bg-card
        p-6
        shadow-sm
        md:flex-row
        md:items-center
        md:justify-between
        md:p-8
      "
    >
      <div>
        <h1
          className="
            text-3xl
            font-bold
            tracking-tight
          "
        >
          داشبورد
        </h1>

        <p
          className="
            mt-2
            text-muted-foreground
          "
        >
          خوش آمدی {name ?? "کاربر"}، لینک‌های کوتاه خودت را مدیریت کن.
        </p>
      </div>

      <Link href="/dashboard/new">
        <Button size="lg">
          <Plus size={18} />
          ساخت لینک جدید
        </Button>
      </Link>
    </section>
  );
}
