import Link from "next/link";

import { MousePointerClick, Link2, BarChart3 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section
      className="
        mx-auto
        grid
        max-w-6xl
        gap-12
        px-6
        py-20
        md:grid-cols-2
        md:px-8
        md:py-32
      "
    >
      <div
        className="
          flex
          flex-col
          justify-center
          space-y-8
        "
      >
        <div className="space-y-5">
          <h1
            className="
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              md:text-6xl
            "
          >
            مدیریت لینک‌های کوتاه،
            <br />
            سریع و حرفه‌ای
          </h1>

          <p
            className="
              max-w-xl
              text-lg
              text-muted-foreground
            "
          >
            لینک‌های کوتاه بسازید، عملکرد آن‌ها را بررسی کنید و همه چیز را از یک
            داشبورد ساده مدیریت کنید.
          </p>
        </div>

        <div
          className="
            flex
            flex-wrap
            gap-4
          "
        >
          <Link href="/signup">
            <Button size="lg">شروع رایگان</Button>
          </Link>

          <Link href="/login">
            <Button size="lg" variant="outline">
              ورود به حساب
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="
          flex
          items-center
          justify-center
        "
      >
        <Card
          className="
            w-full
            max-w-md
            shadow-xl
          "
        >
          <CardContent
            className="
              space-y-6
              p-6
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    text-muted-foreground
                  "
                >
                  تعداد کلیک‌ها
                </p>

                <p
                  className="
                    text-4xl
                    font-bold
                  "
                >
                  1,248
                </p>
              </div>

              <MousePointerClick
                className="
                  text-primary
                "
              />
            </div>

            <div
              className="
                grid
                gap-3
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-muted
                  p-4
                "
              >
                <Link2 size={20} />

                <span>example.com/product</span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-muted
                  p-4
                "
              >
                <BarChart3 size={20} />

                <span>تحلیل بازدید هفتگی</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
