import {
  pgTable,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { links } from "./links";

export const clickEvents = pgTable("click_events", {
  id: uuid("id").defaultRandom().primaryKey(),

  linkId: uuid("link_id")
  .references(() => links.id, {
    onDelete: "cascade",
  })
  .notNull(),

  clickedAt: timestamp("clicked_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});