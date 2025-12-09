CREATE TABLE "modpacks_mods" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7() NOT NULL,
	"modpack_id" uuid NOT NULL,
	"mod_id" uuid NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "modpacks_mods" ADD CONSTRAINT "modpacks_mods_modpack_id_modpacks_id_fk" FOREIGN KEY ("modpack_id") REFERENCES "public"."modpacks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "modpacks_mods" ADD CONSTRAINT "modpacks_mods_mod_id_mods_id_fk" FOREIGN KEY ("mod_id") REFERENCES "public"."mods"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "modpacks" DROP COLUMN "mods";