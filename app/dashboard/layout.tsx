import { getCurrentUser } from "@/lib/session";

import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen">
      <DashboardNavbar user={user} />

      <main>{children}</main>
    </div>
  );
}
