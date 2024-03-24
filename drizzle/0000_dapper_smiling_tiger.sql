CREATE TABLE IF NOT EXISTS "artist" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"created_at" date DEFAULT CURRENT_TIMESTAMP,
	"updated_at" date DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "music" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"link" text,
	"artist_id" integer,
	"created_at" date DEFAULT CURRENT_TIMESTAMP,
	"updated_at" date DEFAULT CURRENT_TIMESTAMP
);
