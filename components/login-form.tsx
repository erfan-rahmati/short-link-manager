"use client";

import { useActionState } from "react";

import {
  signInAction,
  type AuthState,
} from "@/src/actions/auth";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: AuthState = {
  success: false,
};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    signInAction,
    initialState
  );

  return (
    <CardContent>
      <form
        action={formAction}
        className="space-y-5"
      >
        <div className="space-y-2">
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">
            Password
          </Label>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
          />
        </div>

        {state.error && (
          <p className="text-sm text-red-500">
            {state.error}
          </p>
        )}

        {state.success && (
          <p className="text-sm text-green-600">
            Login successful.
          </p>
        )}

        <Button
          type="submit"
          disabled={pending}
          className="w-full"
        >
          {pending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </CardContent>
  );
}