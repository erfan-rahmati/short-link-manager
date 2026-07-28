import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const session =
    await auth.getSession();


  if (!session.data?.user) {
    redirect("/login");
  }


  return (
    <>
      {children}
    </>
  );
}