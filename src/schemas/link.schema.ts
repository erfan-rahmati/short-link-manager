import { z } from "zod";


export const createLinkSchema = z.object({

  destinationUrl: z
    .string()
    .trim()
    .url(
      "لینک وارد شده معتبر نیست."
    )
    .refine(
      (value) =>
        value.startsWith("http://") ||
        value.startsWith("https://"),
      "لینک باید با http یا https شروع شود."
    ),



  slug: z
    .string()
    .trim()
    .max(
      50,
      "شناسه کوتاه نمی‌تواند بیشتر از ۵۰ کاراکتر باشد."
    )
    .regex(
      /^[a-zA-Z0-9-]*$/,
      "شناسه کوتاه فقط شامل حروف انگلیسی، عدد و خط تیره است."
    )
    .transform(
      (value) =>
        value === "" ? undefined : value
    )
    .optional(),



  title: z
    .string()
    .trim()
    .max(
      100,
      "عنوان نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد."
    )
    .transform(
      (value) =>
        value === "" ? undefined : value
    )
    .optional(),

});


export type CreateLinkInput =
  z.infer<typeof createLinkSchema>;