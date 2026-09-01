CREATE TABLE "user_notifications" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "recipient_user_id" UUID NOT NULL,
  "actor_user_id" UUID,
  "type" TEXT NOT NULL,
  "inventory_item_id" UUID,
  "inventory_item_interest_id" UUID,
  "read_at" TIMESTAMPTZ(6),
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_notifications_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ck_user_notifications_type" CHECK ("type" IN ('inventory_interest_created')),
  CONSTRAINT "fk_user_notifications_recipient" FOREIGN KEY ("recipient_user_id") REFERENCES "user_profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT "fk_user_notifications_actor" FOREIGN KEY ("actor_user_id") REFERENCES "user_profiles"("id") ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT "fk_user_notifications_inventory_item" FOREIGN KEY ("inventory_item_id") REFERENCES "inventory_items"("id") ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT "fk_user_notifications_inventory_interest" FOREIGN KEY ("inventory_item_interest_id") REFERENCES "inventory_item_interests"("id") ON DELETE SET NULL ON UPDATE NO ACTION
);

CREATE UNIQUE INDEX "user_notifications_inventory_item_interest_id_key" ON "user_notifications"("inventory_item_interest_id");
CREATE INDEX "idx_user_notifications_recipient_unread_newest" ON "user_notifications"("recipient_user_id", "read_at", "created_at" DESC);
