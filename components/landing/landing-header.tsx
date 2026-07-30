import Link from "next/link";

import { Link2, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/theme-toggle";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function LandingHeader() {
  return (
    <header
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
        {/* Logo */}
        <Link
          href="/"
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
                text-xs
                text-muted-foreground
              "
            >
              مدیریت لینک‌های کوتاه
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div
          className="
            hidden
            items-center
            gap-3
            md:flex
          "
        >
          <ThemeToggle />

          <Link href="/login">
            <Button variant="ghost">ورود</Button>
          </Link>

          <Link href="/signup">
            <Button>ثبت نام</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="rounded-xl" />
              }
            >
              <Menu size={22} />
            </SheetTrigger>

            <SheetContent
              side="right"
              dir="rtl"
              className="
                w-[300px]
                p-0
              "
            >
              <div
                className="
                  flex
                  h-full
                  flex-col
                "
              >
                {/* Header */}
                <div
                  className="
                    border-b
                    p-6
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
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
                          text-xs
                          text-muted-foreground
                        "
                      >
                        مدیریت لینک‌های کوتاه
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div
                  className="
                    flex-1
                    space-y-3
                    p-6
                  "
                >
                  <ThemeToggle />

                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="
                        mt-4
                        w-full
                        justify-start
                      "
                    >
                      ورود
                    </Button>
                  </Link>

                  <Link href="/signup">
                    <Button
                      className="
                        w-full
                        justify-start
                      "
                    >
                      ثبت نام
                    </Button>
                  </Link>
                </div>

                {/* Footer */}
                <div
                  className="
                    border-t
                    p-6
                  "
                >
                  <p
                    className="
                      text-xs
                      text-muted-foreground
                    "
                  >
                    ShortLink © 2026
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
