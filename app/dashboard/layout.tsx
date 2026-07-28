import { getCurrentUser } from "@/lib/session";
import { DashboardHeader } from "@/components/dashboard-navbar";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  await getCurrentUser();


  return (
    <div className="min-h-screen">

      <DashboardHeader />

      <main>
        {children}
      </main>

    </div>
  );
}