"use server";

import { auth } from "@/lib/auth";

type AuthState = {
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
    return {
      success: false,
      error: "Login failed",
    };
  }

  return {
    success: true,
  };
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

  return {
    success: true,
  };
}