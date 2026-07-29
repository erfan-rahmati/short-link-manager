import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
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
          title="ورود به حساب"
          description="مدیریت لینک‌های کوتاه خودت را شروع کن"
        >
          <LoginForm />

          <p
            className="
              mt-6
              text-center
              text-sm
              text-muted-foreground
            "
          >
            حساب کاربری ندارید؟{" "}
            <Link
              href="/signup"
              className="
                font-medium
                text-primary
                hover:underline
              "
            >
              ثبت‌نام کنید
            </Link>
          </p>
        </AuthCard>
      </div>
    </main>
  );
}
