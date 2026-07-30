import { redirect, notFound } from "next/navigation";
import { unstable_noStore } from "next/cache";

import {
  getLinkBySlug,
  incrementLinkClicks,
} from "@/src/repositories/link.repository";

import { createClickEvent } from "@/src/repositories/click.repository";

export default async function RedirectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  unstable_noStore();
  const { slug } = await params;

  const link = await getLinkBySlug(slug);

  if (!link) {
    notFound();
  }

  if (!link.isActive) {
    notFound();
  }

  await Promise.all([
    incrementLinkClicks(link.id),

    createClickEvent({
      linkId: link.id,
    }),
  ]);

  redirect(link.destinationUrl);
}
