import { LinkIcon } from "lucide-react";

import { LinkCard } from "./link-card";

type LinkItem = {
  id: string;
  slug: string;
  title: string | null;
  destinationUrl: string;
  clickCount: number;
  createdAt: Date;
  isActive: boolean;
};

type LinksListProps = {
  links: LinkItem[];
};

export function LinksList({ links }: LinksListProps) {
  if (links.length === 0) {
    return (
      <section
        className="
          rounded-2xl
          border
          bg-card
          p-10
          text-center
        "
      >
        <div
          className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-primary/10
            text-primary
          "
        >
          <LinkIcon size={28} />
        </div>

        <h3
          className="
            mt-5
            text-xl
            font-semibold
          "
        >
          هنوز لینکی ندارید
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-muted-foreground
          "
        >
          اولین لینک کوتاه خود را بسازید و مدیریت آن را شروع کنید.
        </p>
      </section>
    );
  }

  return (
    <section
      className="
        space-y-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-2
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            لینک‌های شما
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-muted-foreground
            "
          >
            مدیریت و مشاهده تمام لینک‌های کوتاه ساخته شده
          </p>
        </div>

        <div
          className="
            rounded-full
            bg-primary/10
            px-4
            py-2
            text-sm
            font-medium
            text-primary
          "
        >
          {links.length} لینک
        </div>
      </div>

      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          2xl:grid-cols-3
        "
      >
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}
