import { z } from "zod";


export const signupSchema = z.object({

  name: z
    .string()
    .trim()
    .min(
      2,
      "نام باید حداقل ۲ کاراکتر باشد."
    ),


  email: z
    .string()
    .trim()
    .toLowerCase()
    .email(
      "فرمت ایمیل صحیح نیست."
    ),


  password: z
    .string()
    .trim()
    .min(
      8,
      "رمز عبور باید حداقل ۸ کاراکتر باشد."
    ),

});



export const signinSchema = z.object({

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email(
      "فرمت ایمیل صحیح نیست."
    ),


  password: z
    .string()
    .trim()
    .min(
      8,
      "رمز عبور باید حداقل ۸ کاراکتر باشد."
    ),

});