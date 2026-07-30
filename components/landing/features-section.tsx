import { Link2, BarChart3, ShieldCheck, Zap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "ساخت لینک سریع",
    description: "در چند ثانیه لینک کوتاه حرفه‌ای بسازید و مدیریت کنید.",
    icon: Link2,
  },
  {
    title: "تحلیل کلیک‌ها",
    description: "عملکرد لینک‌ها را با آمار دقیق و نمودار مشاهده کنید.",
    icon: BarChart3,
  },
  {
    title: "مدیریت ساده",
    description: "تمام لینک‌های خود را در یک داشبورد حرفه‌ای کنترل کنید.",
    icon: Zap,
  },
  {
    title: "امن و قابل اعتماد",
    description: "ساخته شده با تکنولوژی‌های مدرن برای تجربه بهتر.",
    icon: ShieldCheck,
  },
];

export function FeaturesSection() {
  return (
    <section
      className="
        mx-auto
        max-w-6xl
        space-y-10
        px-6
        py-20
        md:px-8
      "
    >
      <div
        className="
          mx-auto
          max-w-2xl
          space-y-3
          text-center
        "
      >
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          همه چیز برای مدیریت لینک‌ها
        </h2>

        <p
          className="
            text-muted-foreground
          "
        >
          ابزارهایی که برای ساخت، مدیریت و تحلیل لینک‌های کوتاه نیاز دارید.
        </p>
      </div>

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <CardHeader>
                <div
                  className="
                    mb-4
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

                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p
                  className="
                    text-sm
                    leading-6
                    text-muted-foreground
                  "
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
