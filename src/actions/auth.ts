"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export type AuthState = {
  success: boolean;
  error?: string;
};

export async function signInAction(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return {
      success: false,
      error: "Invalid credentials",
    };
  }

  const { error } = await auth.signIn.email({
    email,
    password,
  });

  if (error) {
  console.error("SIGNUP ERROR:", error);

  return {
    success: false,
    error: error.message ?? "Signup failed",
  };
}

  redirect("/dashboard");
}


export async function signUpAction(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {

  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const name = String(formData.get("name"));

  const { error } = await auth.signUp.email({
    email,
    password,
    name,
  });

  if (error) {
    return {
      success: false,
      error: "Signup failed",
    };
  }

  redirect("/dashboard");
}