ALTER TABLE "user_profiles"
ADD COLUMN "preferred_store_id" UUID;

CREATE INDEX "idx_user_profiles_preferred_store_id"
ON "user_profiles"("preferred_store_id");

ALTER TABLE "user_profiles"
ADD CONSTRAINT "fk_user_profiles_preferred_store"
FOREIGN KEY ("preferred_store_id") REFERENCES "stores"("id")
ON DELETE SET NULL ON UPDATE NO ACTION;
