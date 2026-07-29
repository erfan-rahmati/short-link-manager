import { LinkIcon, MousePointerClick, Activity } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type DashboardStatsProps = {
  totalLinks: number;
  totalClicks: number;
  activeLinks: number;
};

export function DashboardStats({
  totalLinks,
  totalClicks,
  activeLinks,
}: DashboardStatsProps) {
  const stats = [
    {
      title: "لینک‌های ساخته شده",
      value: totalLinks,
      description: "تعداد کل لینک‌ها",
      icon: LinkIcon,
    },
    {
      title: "بازدیدها",
      value: totalClicks,
      description: "تعداد کلیک‌ها",
      icon: MousePointerClick,
    },
    {
      title: "لینک‌های فعال",
      value: activeLinks,
      description: "لینک‌های قابل استفاده",
      icon: Activity,
    },
  ];

  return (
    <section
      className="
        grid
        gap-5
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="
              overflow-hidden
              transition-all
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <CardContent className="p-6">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <Icon size={22} />
              </div>

              <p
                className="
                  mt-5
                  text-sm
                  text-muted-foreground
                "
              >
                {item.title}
              </p>

              <p
                className="
                  mt-2
                  text-3xl
                  font-bold
                "
              >
                {item.value}
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  text-muted-foreground
                "
              >
                {item.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
