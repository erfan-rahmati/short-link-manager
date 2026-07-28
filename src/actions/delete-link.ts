"use server";

import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import {
  deleteLink,
  getLinkById,
} from "@/src/repositories/link.repository";


export async function deleteLinkAction(
  id: string
) {

  const session = await auth.getSession();


  if (!session.data?.user) {
    redirect("/login");
  }


  const link = await getLinkById(id);


  if (!link) {
    return {
      success: false,
      message: "Link not found",
    };
  }


  if (link.userId !== session.data.user.id) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }


  await deleteLink(id);


  return {
    success: true,
  };
}