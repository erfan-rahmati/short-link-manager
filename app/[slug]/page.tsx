import { redirect, notFound } from "next/navigation";

import {
  getLinkBySlug,
  incrementLinkClicks,
} from "@/src/repositories/link.repository";


export default async function RedirectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {


  const { slug } = await params;


  const link = await getLinkBySlug(slug);


  if (!link) {
    notFound();
  }


  if (!link.isActive) {
    notFound();
  }


  await incrementLinkClicks(link.id);


  redirect(link.destinationUrl);

}