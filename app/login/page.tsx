import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">
            Login
          </CardTitle>
        </CardHeader>

        <LoginForm />
      </Card>
    </main>
  );
}