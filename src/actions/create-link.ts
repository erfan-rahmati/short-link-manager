"use server";
import type { CreateLinkActionState } from "@/src/types/action-state";
import {
  createLink,
  slugExists,
} from "@/src/repositories/link.repository";

import { createLinkSchema } from "@/src/schemas/link.schema";

export async function createLinkAction(
  _prevState: CreateLinkActionState,
  formData: FormData
): Promise<CreateLinkActionState> {
  const parsed = createLinkSchema.safeParse({
    destinationUrl: formData.get("destinationUrl"),
    slug: formData.get("slug"),
    title: formData.get("title"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      link: null,
    };
  }

  if (await slugExists(parsed.data.slug)) {
    return {
      success: false,
      errors: {
        slug: ["Slug already exists"],
      },
      link: null,
    };
  }

  const userId = "demo-user";

  const link = await createLink({
    userId,
    ...parsed.data,
  });

  return {
    success: true,
    errors: {},
    link,
  };
}