"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { signUpAction, type AuthState } from "@/src/actions/auth";

const initialState: AuthState = {
  success: false,

  errors: {},
};

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(
    signUpAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state.message, state.success]);

  return (
    <Card className="w-full max-w-md">
      <CardContent>
        <form action={formAction} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">نام</Label>

            <Input id="name" name="name" required />

            {state.errors.name && (
              <p className="text-sm text-destructive">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>

            <Input id="email" name="email" type="email" required />

            {state.errors.email && (
              <p className="text-sm text-destructive">
                {state.errors.email[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">رمز عبور</Label>

            <Input id="password" name="password" type="password" required />

            {state.errors.password && (
              <p className="text-sm text-destructive">
                {state.errors.password[0]}
              </p>
            )}
          </div>

          {state.errors.general && (
            <p className="text-sm text-destructive">
              {state.errors.general[0]}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "در حال ثبت نام..." : "ثبت نام"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
