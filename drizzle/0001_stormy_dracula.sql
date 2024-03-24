ALTER TABLE "artist" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "music" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "music" ALTER COLUMN "link" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "music" ALTER COLUMN "artist_id" SET NOT NULL;