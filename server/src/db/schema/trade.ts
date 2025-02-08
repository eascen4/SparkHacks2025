import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { courseTable } from "./course";
import { userTable } from "./user";

export const tradeTable = pgTable("trades", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => userTable.id),
  courseId: integer("course_id")
    .notNull()
    .references(() => courseTable.id),
  reason: text("reason").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertTrade = typeof tradeTable.$inferInsert;
export type SelectTrade = typeof tradeTable.$inferSelect;
