ALTER TABLE "user_profiles"
ADD COLUMN "username_normalized" TEXT;

UPDATE "user_profiles"
SET "username_normalized" = lower(btrim("username"))
WHERE "username" IS NOT NULL;

CREATE UNIQUE INDEX "uq_user_profiles_username_normalized"
ON "user_profiles"("username_normalized");
