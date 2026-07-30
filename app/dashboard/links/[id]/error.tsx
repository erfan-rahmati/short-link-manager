"use client";

import { Button } from "@/components/ui/button";

export default function LinkDetailError({ reset }: { reset: () => void }) {
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
          دریافت اطلاعات لینک ناموفق بود
        </h2>

        <p
          className="
            text-muted-foreground
          "
        >
          هنگام دریافت جزئیات لینک مشکلی پیش آمد.
        </p>

        <Button onClick={reset}>تلاش مجدد</Button>
      </div>
    </main>
  );
}
