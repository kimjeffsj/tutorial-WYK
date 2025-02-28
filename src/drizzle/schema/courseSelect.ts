import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { CourseTable } from "./course";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";

export const courseSectionStatuses = ["public", "private"] as const;
export type CourseSectionStatus = (typeof courseSectionStatuses)[number];
export const courseSectionStatusEnum = pgEnum(
  "course_Section_status",
  courseSectionStatuses
);

export const CourseSectionTable = pgTable("courseSections", {
  id,
  name: text().notNull(),
  status: courseSectionStatusEnum().notNull().default("private"),
  order: integer().notNull(),
  courseId: uuid()
    .notNull()
    .references(() => CourseTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
});

export const CourseSectionRelationships = relations(
  CourseSectionTable,
  ({ one }) => ({
    course: one(CourseTable, {
      fields: [CourseSectionTable.courseId],
      references: [CourseTable.id],
    }),
  })
);
