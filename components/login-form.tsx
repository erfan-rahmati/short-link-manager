"use client";

import { useEffect, useActionState } from "react";
import { toast } from "sonner";

import { signInAction, type AuthState } from "@/src/actions/auth";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: AuthState = {
  success: false,

  errors: {},
};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    signInAction,
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
    <CardContent>
      <form action={formAction} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">ایمیل</Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          {state.errors.email && (
            <p className="text-sm text-destructive">{state.errors.email[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">رمز عبور</Label>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
          />

          {state.errors.password && (
            <p className="text-sm text-destructive">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        {state.errors.general && (
          <p className="text-sm text-destructive">{state.errors.general[0]}</p>
        )}

        <Button type="submit" disabled={pending} className="w-full">
          {pending ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </CardContent>
  );
}
