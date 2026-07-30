"use client";

import Link from "next/link";

import { Menu, Link2, LayoutDashboard, PlusCircle } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { LogoutButton } from "@/components/logout-button";

import { ThemeToggle } from "@/components/theme-toggle";

export function MobileDashboardMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl"
              aria-label="باز کردن منو"
            />
          }
        >
          <Menu size={22} />
        </SheetTrigger>

        <SheetContent
          side="right"
          dir="rtl"
          className="
            w-[300px]
            bg-background
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
                  <h2 className="text-lg font-bold">ShortLink</h2>

                  <p className="text-xs text-muted-foreground">
                    مدیریت لینک‌های کوتاه
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                flex-1
                space-y-2
                p-5
              "
            >
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="
                    w-full
                    justify-start
                    gap-3
                  "
                >
                  <LayoutDashboard size={18} />
                  داشبورد
                </Button>
              </Link>

              <Link href="/dashboard/new">
                <Button
                  variant="ghost"
                  className="
                    w-full
                    justify-start
                    gap-3
                    hover:bg-primary/10
                    hover:text-primary
                  "
                >
                  <PlusCircle size={18} />
                  ساخت لینک
                </Button>
              </Link>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  px-3
                  py-2
                "
              >
                <span
                  className="
                    text-sm
                    text-muted-foreground
                  "
                >
                  تغییر حالت نمایش
                </span>

                <ThemeToggle />
              </div>
            </div>

            <div
              className="
                border-t
                p-5
              "
            >
              <p
                className="
                  mb-3
                  text-xs
                  text-muted-foreground
                "
              >
                حساب کاربری
              </p>

              <LogoutButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
