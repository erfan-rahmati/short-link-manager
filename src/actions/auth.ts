"use server";

import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import {
  signupSchema,
  signinSchema,
} from "@/src/schemas/auth.schema";


export type AuthState = {
  success: boolean;

  message?: string;

  errors: {
    email?: string[];
    password?: string[];
    name?: string[];
    general?: string[];
  };
};



export async function signInAction(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {

  const parsed = signinSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });


  if (!parsed.success) {
    return {
      success: false,
      message: "اطلاعات وارد شده صحیح نیست.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }


  try {

    const result = await auth.signIn.email({
      email: parsed.data.email,
      password: parsed.data.password,
    });


    console.log(
      "LOGIN RESULT:",
      JSON.stringify(result, null, 2)
    );


    if (result.error) {

      return {
        success: false,
        message: "ورود انجام نشد.",
        errors: {
          general: [
            result.error.message ??
            "ایمیل یا رمز عبور اشتباه است.",
          ],
        },
      };

    }


  } catch (error) {

    console.error(
      "LOGIN ERROR:",
      error
    );


    return {
      success: false,
      message: "خطایی هنگام ورود رخ داد.",
      errors: {
        general: [
          "لطفاً دوباره تلاش کنید.",
        ],
      },
    };

  }


  redirect("/dashboard");

}






export async function signUpAction(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {


  const parsed = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });



  if (!parsed.success) {

    return {
      success: false,
      message: "اطلاعات ثبت نام صحیح نیست.",
      errors: parsed.error.flatten().fieldErrors,
    };

  }



  try {


    const result = await auth.signUp.email({

      email: parsed.data.email,

      password: parsed.data.password,

      name: parsed.data.name,

    });



    console.log(
      "SIGNUP RESULT:",
      JSON.stringify(result, null, 2)
    );



    if (result.error) {

      return {

        success: false,

        message: "ثبت نام انجام نشد.",

        errors: {

          general: [

            result.error.message ??
            "این ایمیل قبلاً استفاده شده یا امکان ثبت نام وجود ندارد.",

          ],

        },

      };

    }



  } catch (error) {


    console.error(
      "SIGNUP ERROR:",
      error
    );


    return {

      success: false,

      message:
        "خطایی هنگام ساخت حساب رخ داد.",

      errors: {

        general: [

          "لطفاً دوباره تلاش کنید.",

        ],

      },

    };

  }



  redirect("/dashboard");

}