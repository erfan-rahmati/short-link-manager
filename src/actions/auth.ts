"use server";

import { auth } from "@/lib/auth";

export async function signInAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return {
      error: "Invalid credentials",
    };
  }

  const { error } = await auth.signIn.email({
    email,
    password,
  });

  if (error) {
    return {
      error: "Login failed",
    };
  }

  return {
    success: true,
  };
}


export async function signUpAction(
  formData: FormData
) {
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
      error: "Signup failed",
    };
  }

  return {
    success: true,
  };
}