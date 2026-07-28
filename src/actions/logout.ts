"use server";

import { auth } from "@/lib/auth";

export async function logoutAction() {
    await auth.signOut();

    return {
        success: true,
    };
}