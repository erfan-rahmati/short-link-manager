import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getCurrentUser } from "@/lib/session";

import { getLinkById } from "@/src/repositories/link.repository";

import { getLinkClickStats } from "@/src/repositories/click.repository";

import { LinkClickChart } from "@/components/dashboard/chart/link-click-chart";

export default async function LinkDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const user = await getCurrentUser();

  const { id } = await params;

  const link = await getLinkById(id, user.id);

  if (!link) {
    notFound();
  }

  const clickStats = await getLinkClickStats(link.id);

  const shortUrl = `${
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  }/r/${link.slug}`;

  return (
    <main
      className="
        mx-auto
        max-w-5xl
        space-y-8
        p-6
        md:p-8
      "
    >
      <div>
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          جزئیات لینک
        </h1>

        <p
          className="
            mt-2
            text-muted-foreground
          "
        >
          آمار و اطلاعات لینک شما
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>اطلاعات لینک</CardTitle>
        </CardHeader>

        <CardContent
          className="
            space-y-4
          "
        >
          <div>
            <p className="text-sm text-muted-foreground">لینک کوتاه</p>

            <p
              className="
                mt-1
                break-all
                font-medium
              "
            >
              {shortUrl}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">مقصد</p>

            <p
              className="
                mt-1
                break-all
              "
            >
              {link.destinationUrl}
            </p>
          </div>

          <div
            className="
              grid
              gap-4
              md:grid-cols-2
            "
          >
            <div>
              <p className="text-sm text-muted-foreground">تعداد کلیک</p>

              <p className="mt-1 text-xl font-bold">{link.clickCount}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">تاریخ ساخت</p>

              <p className="mt-1">
                {new Intl.DateTimeFormat("fa-IR", {
                  dateStyle: "medium",
                }).format(link.createdAt)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <LinkClickChart data={clickStats} />
    </main>
  );
}
