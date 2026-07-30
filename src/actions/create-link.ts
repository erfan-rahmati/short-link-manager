"use server";

import { nanoid } from "nanoid";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth";

import {
  createLink,
  slugExists,
} from "@/src/repositories/link.repository";

import { createLinkSchema } from "@/src/schemas/link.schema";

import type {
  CreateLinkActionState,
} from "@/src/types/action-state";


export async function createLinkAction(
  _prevState: CreateLinkActionState,
  formData: FormData
): Promise<CreateLinkActionState> {

  const session =
    await auth.getSession();


  if (!session.data?.user) {

    return {
      success: false,

      message:
        "لطفاً ابتدا وارد حساب کاربری شوید.",

      errors: {
        general: [
          "برای ساخت لینک باید وارد حساب شوید.",
        ],
      },

      data: null,
    };

  }



  const rawSlug =
    String(
      formData.get("slug") ?? ""
    ).trim();



  const slug =
    rawSlug || nanoid(6);



  const rawData = {

    destinationUrl:
      String(
        formData.get("destinationUrl") ?? ""
      ).trim(),


    slug,


    title:
      String(
        formData.get("title") ?? ""
      ).trim() || undefined,

  };



  const parsed =
    createLinkSchema.safeParse(rawData);



  if (!parsed.success) {

    return {

      success: false,

      message:
        "اطلاعات وارد شده صحیح نیست.",

      errors:
        parsed.error.flatten()
          .fieldErrors,

      data: null,

    };

  }



  const exists =
    await slugExists(slug);



  if (exists) {

    return {

      success: false,

      message:
        "این نام کوتاه قبلاً استفاده شده است.",

      errors: {

        slug: [

          "لطفاً یک نام کوتاه دیگر انتخاب کنید.",

        ],

      },

      data: null,

    };

  }



  try {

    await createLink({

      userId:
        session.data.user.id,


      slug,


      destinationUrl:
        parsed.data.destinationUrl,


      title:
        parsed.data.title,

    });



    revalidatePath(
      "/dashboard"
    );


  } catch {

    return {

      success: false,

      message:
        "ساخت لینک انجام نشد.",


      errors: {

        general: [

          "خطای غیرمنتظره‌ای رخ داد. دوباره تلاش کنید.",

        ],

      },


      data: null,

    };

  }



  redirect("/dashboard");

}