import Link from "next/link";

import { Link2 } from "lucide-react";

export function LandingFooter() {
  return (
    <footer
      className="
        border-t
        bg-background
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          gap-6
          px-6
          py-10
          md:flex-row
          md:items-center
          md:justify-between
          md:px-8
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
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-primary
              text-primary-foreground
            "
          >
            <Link2 size={20} />
          </div>

          <div>
            <p className="font-bold">ShortLink</p>

            <p
              className="
                text-sm
                text-muted-foreground
              "
            >
              مدیریت حرفه‌ای لینک‌های کوتاه
            </p>
          </div>
        </div>

        <div
          className="
            flex
            flex-wrap
            gap-5
            text-sm
            text-muted-foreground
          "
        >
          <Link href="/login" className="hover:text-primary">
            ورود
          </Link>

          <Link href="/signup" className="hover:text-primary">
            ثبت‌نام
          </Link>

          <Link href="/dashboard" className="hover:text-primary">
            داشبورد
          </Link>
        </div>

        <p
          className="
            text-sm
            text-muted-foreground
          "
        >
          © {new Date().getFullYear()} ShortLink
        </p>
      </div>
    </footer>
  );
}
