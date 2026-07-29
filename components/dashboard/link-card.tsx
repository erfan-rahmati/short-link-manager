import {
  ExternalLink,
  MousePointerClick,
  CalendarDays,
  Link2,
  Pencil,
} from "lucide-react";

import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { CopyButton } from "./copy-button";

import { DeleteLinkButton } from "./delete-link-button";

type LinkCardProps = {
  link: {
    id: string;
    slug: string;
    title: string | null;
    destinationUrl: string;
    clickCount: number;
    createdAt: Date;
    isActive: boolean;
  };
};

export function LinkCard({ link }: LinkCardProps) {
  const shortUrl = `${
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  }/r/${link.slug}`;

  return (
    <Card
      className="
        group
        overflow-hidden
        transition-all
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <CardHeader
        className="
          space-y-4
        "
      >
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div
            className="
              min-w-0
              flex-1
            "
          >
            <h3
              className="
                truncate
                text-lg
                font-semibold
              "
            >
              {link.title || link.slug}
            </h3>

            <Badge
              variant={link.isActive ? "default" : "secondary"}
              className="mt-3"
            >
              {link.isActive ? "فعال" : "غیرفعال"}
            </Badge>
          </div>

          <div
            className="
              flex
              items-center
              gap-1
            "
          >
            <Link href={`/dashboard/links/${link.id}/edit`}>
              <Button size="icon" variant="ghost" aria-label="ویرایش لینک">
                <Pencil size={18} />
              </Button>
            </Link>

            <a
              href={link.destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="باز کردن لینک مقصد"
            >
              <Button size="icon" variant="ghost">
                <ExternalLink size={18} />
              </Button>
            </a>

            <DeleteLinkButton id={link.id} />
          </div>
        </div>
      </CardHeader>

      <CardContent
        className="
          space-y-5
        "
      >
        <div>
          <p
            className="
              mb-2
              text-sm
              text-muted-foreground
            "
          >
            لینک کوتاه
          </p>

          <div
            className="
              flex
              items-center
              justify-between
              gap-2
              rounded-xl
              bg-muted
              px-3
              py-2
            "
          >
            <div
              className="
                flex
                min-w-0
                items-center
                gap-2
              "
            >
              <Link2 size={16} className="text-primary" />

              <span
                className="
                  truncate
                  text-sm
                  font-medium
                "
              >
                {shortUrl}
              </span>
            </div>

            <CopyButton value={shortUrl} />
          </div>
        </div>

        <div>
          <p
            className="
              text-sm
              text-muted-foreground
            "
          >
            مقصد
          </p>

          <p
            className="
              mt-1
              break-all
              text-sm
            "
          >
            {link.destinationUrl}
          </p>
        </div>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            text-sm
            text-muted-foreground
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <MousePointerClick size={16} />
            {link.clickCount} کلیک
          </div>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <CalendarDays size={16} />

            {new Intl.DateTimeFormat("fa-IR", {
              dateStyle: "medium",
            }).format(link.createdAt)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
