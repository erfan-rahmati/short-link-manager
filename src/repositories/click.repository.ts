import { and, eq, gte } from "drizzle-orm";

import { db } from "@/src/db";

import {
    clickEvents,
    links,
} from "@/src/db/schema";


function formatPersianDate(date: Date) {
    return new Intl.DateTimeFormat("fa-IR", {
        month: "short",
        day: "numeric",
    }).format(date);
}

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

                const date = formatPersianDate(item.clickedAt);


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

                const date = formatPersianDate(item.clickedAt);


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


            const key = formatPersianDate(date);


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

export async function getLinkClickStats(
    linkId: string,
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
        .where(
            and(
                eq(clickEvents.linkId, linkId),
                gte(
                    clickEvents.clickedAt,
                    startDate
                )
            )
        );


    const grouped =
        clicks.reduce<Record<string, number>>(
            (acc, item) => {

                const date = formatPersianDate(item.clickedAt);


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


            const key = formatPersianDate(date);


            return {
                date: key,
                clicks: grouped[key] ?? 0,
            };

        }
    ).reverse();
}