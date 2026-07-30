"use client";

import { Button } from "@/components/ui/button";

export default function RedirectError({ reset }: { reset: () => void }) {
  return (
    <main
      className="
        flex
        min-h-screen
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
          انتقال لینک انجام نشد
        </h2>

        <p
          className="
            text-muted-foreground
          "
        >
          مشکلی هنگام باز کردن لینک کوتاه رخ داد.
        </p>

        <Button onClick={reset}>تلاش مجدد</Button>
      </div>
    </main>
  );
}
