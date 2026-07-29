import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";

import SignupForm from "@/components/signup-form";

export default function SignupPage() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-background
        px-4
      "
    >
      <div className="w-full max-w-md">
        <AuthCard
          title="ساخت حساب جدید"
          description="برای مدیریت لینک‌های کوتاه ثبت‌نام کنید"
        >
          <SignupForm />

          <p
            className="
              mt-6
              text-center
              text-sm
              text-muted-foreground
            "
          >
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <Link
              href="/login"
              className="
                font-medium
                text-primary
                hover:underline
              "
            >
              وارد شوید
            </Link>
          </p>
        </AuthCard>
      </div>
    </main>
  );
}
