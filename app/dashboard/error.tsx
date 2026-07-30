"use client";

import { Button } from "@/components/ui/button";

export default function DashboardError({ reset }: { reset: () => void }) {
  return (
    <main
      className="
        flex
        min-h-[400px]
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          space-y-4
          text-center
        "
      >
        <h2
          className="
            text-2xl
            font-bold
          "
        >
          خطایی رخ داد
        </h2>

        <p
          className="
            text-muted-foreground
          "
        >
          دریافت اطلاعات داشبورد با مشکل مواجه شد.
        </p>

        <Button onClick={reset}>تلاش مجدد</Button>
      </div>
    </main>
  );
}
