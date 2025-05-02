import { relations, sql } from "drizzle-orm"
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core"

import { generateId } from "@/lib/id"

import { products } from "./products"
import { subcategories } from "./subcategories"
import { lifecycleDates } from "./utils"

export const categories = pgTable("categories", {
  id: varchar("id", { length: 30 })
    .$defaultFn(() => generateId())
    .primaryKey(), // prefix_ + nanoid (12)
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  image: text("image"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`current_timestamp`)
    .$onUpdate(() => new Date()),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
  subcategories: many(subcategories),
}))

export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert
