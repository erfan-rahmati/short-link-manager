import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

import { getLinkById } from "@/src/repositories/link.repository";

import { UpdateLinkForm } from "@/components/update-link-form";

export default async function EditLinkPage({
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

  return (
    <main
      className="
        mx-auto
        max-w-3xl
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
          ویرایش لینک
        </h1>

        <p
          className="
            mt-2
            text-muted-foreground
          "
        >
          اطلاعات لینک کوتاه خود را بروزرسانی کنید.
        </p>
      </div>

      <UpdateLinkForm
        id={link.id}
        link={{
          destinationUrl: link.destinationUrl,

          title: link.title,
        }}
      />
    </main>
  );
}
