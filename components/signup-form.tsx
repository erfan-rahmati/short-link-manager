"use client";

import { useActionState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { signUpAction } from "@/src/actions/auth";


const initialState = {
  success: false,
  error: "",
};


export default function SignupForm() {
  const [state, formAction, pending] = useActionState(
    signUpAction,
    initialState
  );


  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Create an account
        </CardTitle>
      </CardHeader>


      <CardContent>

        <form
          action={formAction}
          className="space-y-5"
        >

          <div className="space-y-2">
            <Label htmlFor="name">
              Name
            </Label>

            <Input
              id="name"
              name="name"
              required
            />
          </div>


          <div className="space-y-2">
            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              name="email"
              type="email"
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
              required
            />
          </div>


          <Button
            type="submit"
            className="w-full"
            disabled={pending}
          >
            {pending
              ? "Creating..."
              : "Create account"}
          </Button>


          {state.error && (
            <p className="text-sm text-red-500">
              {state.error}
            </p>
          )}


          {state.success && (
            <p className="text-sm text-green-500">
              Account created successfully
            </p>
          )}

        </form>

      </CardContent>
    </Card>
  );
}