import { z } from "zod";

export const createLinkSchema = z.object({
  destinationUrl: z.url("Please enter a valid URL"),

  slug: z
    .string()
    .trim()
    .min(3, "Slug must be at least 3 characters")
    .max(50, "Slug must be at most 50 characters")
    .regex(
      /^[a-zA-Z0-9-_]+$/,
      "Slug can only contain letters, numbers, hyphens and underscores"
    ),

  title: z
    .string()
    .trim()
    .max(100)
    .optional(),
});

export type CreateLinkInput = z.infer<typeof createLinkSchema>;