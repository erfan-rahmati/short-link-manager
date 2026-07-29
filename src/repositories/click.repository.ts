import { and, eq, gte } from "drizzle-orm";

import { db } from "@/src/db";

import {
    clickEvents,
    links,
} from "@/src/db/schema";


export async function getUserClickStats(
    userId: string
) {
    const clicks = await db
        .select({
            clickedAt: clickEvents.clickedAt,
        })
        .from(clickEvents)
        .innerJoin(
            links,
            eq(clickEvents.linkId, links.id)
        )
        .where(
            eq(links.userId, userId)
        );


    const grouped =
        clicks.reduce<Record<string, number>>(
            (acc, item) => {

                const date =
                    item.clickedAt
                        .toISOString()
                        .split("T")[0];


                acc[date] =
                    (acc[date] ?? 0) + 1;


                return acc;

            },
            {}
        );


    return Object.entries(grouped)
        .map(([date, clicks]) => ({
            date,
            clicks,
        }))
        .sort(
            (a, b) =>
                a.date.localeCompare(b.date)
        );
}



export async function getRecentUserClickStats(
    userId: string,
    days = 7
) {

    const startDate = new Date();

    startDate.setDate(
        startDate.getDate() - days
    );


    const clicks = await db
        .select({
            clickedAt: clickEvents.clickedAt,
        })
        .from(clickEvents)
        .innerJoin(
            links,
            eq(clickEvents.linkId, links.id)
        )
        .where(
            and(
                eq(links.userId, userId),
                gte(
                    clickEvents.clickedAt,
                    startDate
                )
            )
        );


    const grouped =
        clicks.reduce<Record<string, number>>(
            (acc, item) => {

                const date =
                    item.clickedAt
                        .toISOString()
                        .split("T")[0];


                acc[date] =
                    (acc[date] ?? 0) + 1;


                return acc;

            },
            {}
        );


    return Array.from(
        { length: days },
        (_, index) => {

            const date = new Date();

            date.setDate(
                date.getDate() - index
            );


            const key =
                date
                    .toISOString()
                    .split("T")[0];


            return {
                date: key,
                clicks: grouped[key] ?? 0,
            };

        }
    ).reverse();

}



export async function createClickEvent(
    data: {
        linkId: string;
    }
) {

    const [event] =
        await db
            .insert(clickEvents)
            .values(data)
            .returning();


    return event;

}