"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth";

import { deleteLink } from "@/src/repositories/link.repository";


export type DeleteLinkActionState = {
  success: boolean;

  message?: string;

  errors: {
    general?: string[];
  };
};



export async function deleteLinkAction(
  id: string
): Promise<DeleteLinkActionState> {

  const session =
    await auth.getSession();



  if (!session.data?.user) {

    return {

      success: false,

      message:
        "حذف لینک امکان‌پذیر نیست.",

      errors: {

        general: [
          "لطفاً ابتدا وارد حساب کاربری شوید.",
        ],

      },

    };

  }



  try {

    await deleteLink(
      id,
      session.data.user.id
    );


    revalidatePath(
      "/dashboard"
    );


    return {

      success: true,

      message:
        "لینک با موفقیت حذف شد.",

      errors: {},

    };


  } catch {

    return {

      success: false,

      message:
        "حذف لینک انجام نشد.",

      errors: {

        general: [
          "خطایی هنگام حذف لینک رخ داد. دوباره تلاش کنید.",
        ],

      },

    };

  }

}