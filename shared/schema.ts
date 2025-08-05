import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const downloads = pgTable("downloads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  platform: text("platform").notNull(),
  language: text("language").notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  downloadedAt: timestamp("downloaded_at").notNull().defaultNow(),
});

export const faqViews = pgTable("faq_views", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  question: text("question").notNull(),
  language: text("language").notNull(),
  viewedAt: timestamp("viewed_at").notNull().defaultNow(),
});

export const insertDownloadSchema = createInsertSchema(downloads).pick({
  platform: true,
  language: true,
  userAgent: true,
  ipAddress: true,
});

export const insertFaqViewSchema = createInsertSchema(faqViews).pick({
  question: true,
  language: true,
});

export type InsertDownload = z.infer<typeof insertDownloadSchema>;
export type Download = typeof downloads.$inferSelect;
export type InsertFaqView = z.infer<typeof insertFaqViewSchema>;
export type FaqView = typeof faqViews.$inferSelect;
