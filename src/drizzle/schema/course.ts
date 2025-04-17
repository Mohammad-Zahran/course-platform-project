import { relations } from "drizzle-orm";
import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const CourseTable = pgTable("courses", {
  id: uuid().primaryKey().defaultRandom(),
  description: text().notNull(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export default CourseRelationships = relations(
  CourseTable,
  ({ one, many }) => ({
    test: one(),
  })
);
