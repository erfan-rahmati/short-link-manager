"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import {
    updateLink,
} from "@/src/repositories/link.repository";

import {
    updateLinkSchema,
} from "@/src/schemas/update-link.schema";


export type UpdateLinkActionState = {
    success: boolean;

    message?: string;

    errors: {
        destinationUrl?: string[];
        title?: string[];
        general?: string[];
    };
};



export async function updateLinkAction(
    id: string,
    _prevState: UpdateLinkActionState,
    formData: FormData
): Promise<UpdateLinkActionState> {

    const session =
        await auth.getSession();


    if (!session.data?.user) {

        return {
            success: false,
            message: "ویرایش لینک امکان‌پذیر نیست.",
            errors: {
                general: [
                    "لطفاً ابتدا وارد حساب کاربری شوید.",
                ],
            },
        };

    }


    const parsed =
        updateLinkSchema.safeParse({
            destinationUrl:
                formData.get("destinationUrl"),

            title:
                formData.get("title"),
        });



    if (!parsed.success) {

        return {
            success: false,
            message:
                "اطلاعات وارد شده صحیح نیست.",

            errors:
                parsed.error.flatten()
                    .fieldErrors,
        };

    }



    try {

        const updatedLink =
            await updateLink(
                id,
                session.data.user.id,
                {
                    destinationUrl:
                        parsed.data.destinationUrl,

                    title:
                        parsed.data.title ?? null,
                }
            );


        if (!updatedLink) {

            return {
                success: false,

                message:
                    "ویرایش لینک انجام نشد.",

                errors: {
                    general: [
                        "لینک پیدا نشد یا دسترسی ندارید.",
                    ],
                },
            };

        }



        revalidatePath("/dashboard");


    } catch {

        return {
            success: false,

            message:
                "خطایی هنگام ویرایش لینک رخ داد.",

            errors: {
                general: [
                    "لطفاً دوباره تلاش کنید.",
                ],
            },
        };

    }


    redirect("/dashboard");

}