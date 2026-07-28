ALTER TABLE "links" ADD COLUMN "is_active" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "links" ADD COLUMN "expires_at" timestamp with time zone;