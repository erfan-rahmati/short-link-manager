import { z } from "zod";

export const updateLinkSchema = z.object({
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

    title: z
        .string()
        .trim()
        .max(
            100,
            "عنوان نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد."
        )
        .transform(
            (value) =>
                value === "" ? null : value
        )
        .nullable(),
});


export type UpdateLinkInput =
    z.infer<typeof updateLinkSchema>;