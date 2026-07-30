import { getCurrentUser } from "@/lib/session";

import { getLinksByUserId } from "@/src/repositories/link.repository";

import { DashboardHero } from "@/components/dashboard/dashboard-hero";

import { DashboardStats } from "@/components/dashboard/dashboard-stats";

import { LinksList } from "@/components/dashboard/links-list";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  const links = await getLinksByUserId(user.id);

  const totalClicks = links.reduce((sum, link) => sum + link.clickCount, 0);

  const activeLinks = links.filter((link) => link.isActive).length;

  return (
    <main
      className="
        mx-auto
        max-w-6xl
        space-y-10
        p-6
        md:p-8
      "
    >
      <DashboardHero name={user.name} />

      <DashboardStats
        totalLinks={links.length}
        totalClicks={totalClicks}
        activeLinks={activeLinks}
      />

      <LinksList links={links} />
    </main>
  );
}
