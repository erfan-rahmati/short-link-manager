"use server";

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

  return {
    success: true,
    data: parsed.data,
  };
}