import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";


export async function getCurrentUser() {

  const session = await auth.getSession();


  if (!session.data?.user) {
    redirect("/login");
  }


  return session.data.user;
}