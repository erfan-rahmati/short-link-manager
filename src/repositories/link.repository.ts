import { and, eq, sql } from "drizzle-orm";

import { db } from "@/src/db";
import { links } from "@/src/db/schema";

export async function createLink(data: {
  userId: string;
  slug: string;
  destinationUrl: string;
  title?: string;
}) {
  const [link] = await db
    .insert(links)
    .values({
      userId: data.userId,
      slug: data.slug,
      destinationUrl: data.destinationUrl,
      title: data.title ?? null,
    })
    .returning();

  return link;
}

export async function getLinkBySlug(slug: string) {
  const [link] = await db
    .select()
    .from(links)
    .where(eq(links.slug, slug));

  return link ?? null;
}

export async function getLinksByUserId(userId: string) {
  return db.query.links.findMany({
    where: (links, { eq }) =>
      eq(links.userId, userId),

    orderBy: (links, { desc }) => [
      desc(links.createdAt),
    ],
  });
}

export async function getUserLinks(userId: string) {
  return getLinksByUserId(userId);
}

export async function getLinkById(
  id: string,
  userId?: string
) {
  const conditions = [
    eq(links.id, id),
  ];

  if (userId) {
    conditions.push(
      eq(links.userId, userId)
    );
  }

  const [link] = await db
    .select()
    .from(links)
    .where(
      and(...conditions)
    );

  return link ?? null;
}

export async function deleteLink(
  id: string,
  userId: string
) {
  const result = await db
    .delete(links)
    .where(
      and(
        eq(links.id, id),
        eq(links.userId, userId)
      )
    )
    .returning();

  return result[0] ?? null;
}

export async function slugExists(
  slug: string
) {
  const link =
    await getLinkBySlug(slug);

  return Boolean(link);
}

export async function incrementLinkClicks(
  id: string
) {
  await db
    .update(links)
    .set({
      clickCount:
        sql`${links.clickCount} + 1`,
    })
    .where(
      eq(links.id, id)
    );
}

export async function getUserLinkStats(
  userId: string
) {
  const userLinks =
    await getLinksByUserId(userId);

  return {
    totalLinks: userLinks.length,

    totalClicks: userLinks.reduce(
      (sum, link) =>
        sum + link.clickCount,
      0
    ),

    activeLinks: userLinks.filter(
      (link) =>
        link.isActive
    ).length,
  };
}