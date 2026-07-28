import { eq } from "drizzle-orm";

import { db } from "@/src/db";
import { links } from "@/src/db/schema";


export async function createLink(data: {
  userId: string;
  slug: string;
  destinationUrl: string;
  title?: string;
}) {

  const [link] =
    await db
      .insert(links)
      .values(data)
      .returning();

  return link;
}



export async function getLinkBySlug(
  slug: string
) {

  const [link] =
    await db
      .select()
      .from(links)
      .where(
        eq(
          links.slug,
          slug
        )
      );


  return link ?? null;
}


export async function getUserLinks(userId: string) {
  return db.query.links.findMany({
    where: (links, { eq }) =>
      eq(links.userId, userId),

    orderBy: (links, { desc }) => [
      desc(links.createdAt),
    ],
  });
}



export async function deleteLink(
  id: string
) {

  await db
    .delete(links)
    .where(
      eq(
        links.id,
        id
      )
    );

}



export async function slugExists(
  slug: string
) {

  const link =
    await getLinkBySlug(slug);


  return link !== null;

}