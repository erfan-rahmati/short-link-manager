"use server";

import {
  createLink,
  slugExists,
} from "@/src/repositories/link.repository";

import { createLinkSchema } from "@/src/schemas/link.schema";

export async function createLinkAction(formData: FormData) {
  const parsed = createLinkSchema.safeParse({
    destinationUrl: formData.get("destinationUrl"),
    slug: formData.get("slug"),
    title: formData.get("title"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // جلوگیری از ثبت Slug تکراری
  if (await slugExists(parsed.data.slug)) {
    return {
      success: false,
      errors: {
        slug: ["Slug already exists"],
      },
    };
  }

  // فعلاً تا زمان راه‌اندازی Neon Auth
  const userId = "demo-user";

  const link = await createLink({
    userId,
    ...parsed.data,
  });

  return {
    success: true,
    link,
  };
}