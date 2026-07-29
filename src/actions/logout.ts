"use server";

import { auth } from "@/lib/auth";


export type LogoutActionState = {
    success: boolean;

    message?: string;

    errors: {
        general?: string[];
    };
};



export async function logoutAction(): Promise<LogoutActionState> {

    try {

        await auth.signOut();


        return {

            success: true,

            message:
                "با موفقیت از حساب کاربری خارج شدید.",

            errors: {},

        };


    } catch {

        return {

            success: false,

            message:
                "خروج از حساب انجام نشد.",

            errors: {

                general: [
                    "خطایی هنگام خروج رخ داد. دوباره تلاش کنید.",
                ],

            },

        };

    }

}