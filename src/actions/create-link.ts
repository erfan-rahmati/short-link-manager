"use server";

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

  console.log("CREATE LINK ACTION STARTED");
  const session = await auth.getSession();


  if (!session.data?.user) {

    return {
      success: false,

      message: "You must be logged in",

      errors: {
        general: [
          "Please login first",
        ],
      },

      link: null,
    };

  }



  const parsed =
    createLinkSchema.safeParse({

      destinationUrl:
        formData.get("destinationUrl"),

      slug:
        formData.get("slug"),

      title:
        formData.get("title"),

    });



  if (!parsed.success) {

    return {

      success: false,

      message: "Invalid input",

      errors:
        parsed.error.flatten().fieldErrors,

      link: null,

    };

  }




  const exists =
    await slugExists(parsed.data.slug);



  if (exists) {

    return {

      success: false,

      message: "Slug already exists",

      errors: {

        slug: [
          "This slug is already used",
        ],

      },

      link: null,

    };

  }




  const link =
    await createLink({

      userId:
        session.data.user.id,

      ...parsed.data,

    });



  return {

    success: true,

    message:
      "Link created successfully",

    errors: {},

    link,

  };

}