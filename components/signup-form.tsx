"use client";

import { useActionState } from "react";

import {
  Button
} from "@/components/ui/button";

import {
  Input
} from "@/components/ui/input";

import {
  Label
} from "@/components/ui/label";

import {
  signUpAction
} from "@/src/actions/auth";


const initialState = {
  success: false,
  error: "",
};


export function SignupForm() {

  const [
    state,
    formAction,
    pending
  ] = useActionState(
    signUpAction,
    initialState
  );


  return (
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
          placeholder="John Doe"
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


      {
        state.error && (
          <p className="text-sm text-red-500">
            {state.error}
          </p>
        )
      }


      <Button
        disabled={pending}
        className="w-full"
      >
        {
          pending
            ? "Creating..."
            : "Create account"
        }
      </Button>


    </form>
  );
}