import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const courseTable = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  department: text("department").notNull(),
  code: text("code").notNull(),
  description: text("description").notNull(),
  creditHours: integer("credit_hours").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertCourse = typeof courseTable.$inferInsert;
export type SelectCourse = typeof courseTable.$inferSelect;
