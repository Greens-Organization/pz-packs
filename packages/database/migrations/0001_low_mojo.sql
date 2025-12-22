CREATE TABLE "modpack_exports" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7() NOT NULL,
	"modpack_id" uuid NOT NULL,
	"user_id" uuid,
	"version" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"file_content" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "modpack_exports" ADD CONSTRAINT "modpack_exports_modpack_id_modpacks_id_fk" FOREIGN KEY ("modpack_id") REFERENCES "public"."modpacks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "modpack_exports" ADD CONSTRAINT "modpack_exports_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;