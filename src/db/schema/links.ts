import {
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: text("user_id").notNull(),

  slug: text("slug").notNull().unique(),

  destinationUrl: text("destination_url").notNull(),

  title: text("title"),

  clickCount: integer("click_count").default(0).notNull(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});