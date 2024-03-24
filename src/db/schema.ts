import { date, integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { sql, relations } from "drizzle-orm";

export const music = pgTable("music", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  link: text("link").notNull(),
  artist_id: integer("artist_id").notNull(),
  image: text("image").notNull(),
  created_at: date("created_at").default(sql`CURRENT_TIMESTAMP`),
  updated_at: date("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const artist = pgTable("artist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  created_at: date("created_at").default(sql`CURRENT_TIMESTAMP`),
  updated_at: date("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const artistMusicRelations = relations(artist, ({ many }) => ({
  musics: many(music),
}));
