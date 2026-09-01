CREATE TABLE "user_friendships" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_low_id" UUID NOT NULL,
  "user_high_id" UUID NOT NULL,
  "requester_user_id" UUID NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'pending',
  "requested_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "responded_at" TIMESTAMPTZ(6),
  "removed_at" TIMESTAMPTZ(6),
  "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_friendships_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ck_user_friendships_pair_order" CHECK ("user_low_id" < "user_high_id"),
  CONSTRAINT "ck_user_friendships_requester_in_pair" CHECK ("requester_user_id" IN ("user_low_id", "user_high_id")),
  CONSTRAINT "ck_user_friendships_status" CHECK ("status" IN ('pending', 'accepted', 'declined', 'removed')),
  CONSTRAINT "fk_user_friendships_low" FOREIGN KEY ("user_low_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_user_friendships_high" FOREIGN KEY ("user_high_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_user_friendships_requester" FOREIGN KEY ("requester_user_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION
);
CREATE UNIQUE INDEX "uq_user_friendships_pair" ON "user_friendships"("user_low_id", "user_high_id");
CREATE INDEX "idx_user_friendships_requester_status" ON "user_friendships"("requester_user_id", "status");
CREATE INDEX "idx_user_friendships_low_status" ON "user_friendships"("user_low_id", "status");
CREATE INDEX "idx_user_friendships_high_status" ON "user_friendships"("user_high_id", "status");

CREATE TABLE "user_blocks" (
  "blocker_user_id" UUID NOT NULL,
  "blocked_user_id" UUID NOT NULL,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_blocks_pkey" PRIMARY KEY ("blocker_user_id", "blocked_user_id"),
  CONSTRAINT "ck_user_blocks_not_self" CHECK ("blocker_user_id" <> "blocked_user_id"),
  CONSTRAINT "fk_user_blocks_blocker" FOREIGN KEY ("blocker_user_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_user_blocks_blocked" FOREIGN KEY ("blocked_user_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION
);
CREATE INDEX "idx_user_blocks_blocked" ON "user_blocks"("blocked_user_id");

CREATE TABLE "conversations" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "kind" TEXT NOT NULL,
  "user_low_id" UUID NOT NULL,
  "user_high_id" UUID NOT NULL,
  "created_by_user_id" UUID NOT NULL,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "last_message_at" TIMESTAMPTZ(6),
  CONSTRAINT "conversations_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ck_conversations_kind" CHECK ("kind" IN ('general', 'contextual')),
  CONSTRAINT "ck_conversations_pair_order" CHECK ("user_low_id" < "user_high_id"),
  CONSTRAINT "ck_conversations_creator_in_pair" CHECK ("created_by_user_id" IN ("user_low_id", "user_high_id")),
  CONSTRAINT "fk_conversations_low" FOREIGN KEY ("user_low_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_conversations_high" FOREIGN KEY ("user_high_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_conversations_created_by" FOREIGN KEY ("created_by_user_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION
);
CREATE UNIQUE INDEX "uq_conversations_general_pair" ON "conversations"("user_low_id", "user_high_id") WHERE "kind" = 'general';
CREATE INDEX "idx_conversations_pair" ON "conversations"("user_low_id", "user_high_id");
CREATE INDEX "idx_conversations_last_message" ON "conversations"("last_message_at" DESC);

CREATE TABLE "conversation_participants" (
  "conversation_id" UUID NOT NULL,
  "user_id" UUID NOT NULL,
  "joined_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "last_read_at" TIMESTAMPTZ(6),
  "archived_at" TIMESTAMPTZ(6),
  CONSTRAINT "conversation_participants_pkey" PRIMARY KEY ("conversation_id", "user_id"),
  CONSTRAINT "fk_conversation_participants_conversation" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT "fk_conversation_participants_user" FOREIGN KEY ("user_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION
);
CREATE INDEX "idx_conversation_participants_inbox" ON "conversation_participants"("user_id", "archived_at");

CREATE TABLE "messages" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "conversation_id" UUID NOT NULL,
  "sender_user_id" UUID NOT NULL,
  "body" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "edited_at" TIMESTAMPTZ(6),
  "deleted_at" TIMESTAMPTZ(6),
  CONSTRAINT "messages_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ck_messages_body" CHECK (length(btrim("body")) BETWEEN 1 AND 4000),
  CONSTRAINT "fk_messages_conversation" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT "fk_messages_sender" FOREIGN KEY ("sender_user_id") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_messages_participant" FOREIGN KEY ("conversation_id", "sender_user_id") REFERENCES "conversation_participants"("conversation_id", "user_id") ON DELETE RESTRICT ON UPDATE NO ACTION
);
CREATE INDEX "idx_messages_conversation_created" ON "messages"("conversation_id", "created_at");
CREATE INDEX "idx_messages_sender" ON "messages"("sender_user_id");

CREATE TABLE "conversation_contexts" (
  "conversation_id" UUID NOT NULL,
  "listing_id" UUID,
  "inventory_item_interest_id" UUID,
  "listing_offer_id" UUID,
  "wishlist_offer_id" UUID,
  "transaction_id" UUID,
  CONSTRAINT "conversation_contexts_pkey" PRIMARY KEY ("conversation_id"),
  CONSTRAINT "ck_conversation_contexts_exactly_one" CHECK (num_nonnulls("listing_id", "inventory_item_interest_id", "listing_offer_id", "wishlist_offer_id", "transaction_id") = 1),
  CONSTRAINT "fk_conversation_contexts_conversation" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT "fk_conversation_contexts_listing" FOREIGN KEY ("listing_id") REFERENCES "listings"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_conversation_contexts_interest" FOREIGN KEY ("inventory_item_interest_id") REFERENCES "inventory_item_interests"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_conversation_contexts_listing_offer" FOREIGN KEY ("listing_offer_id") REFERENCES "listing_offers"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_conversation_contexts_wishlist_offer" FOREIGN KEY ("wishlist_offer_id") REFERENCES "wishlist_offers"("id") ON DELETE RESTRICT ON UPDATE NO ACTION,
  CONSTRAINT "fk_conversation_contexts_transaction" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("id") ON DELETE RESTRICT ON UPDATE NO ACTION
);
CREATE UNIQUE INDEX "uq_conversation_context_listing" ON "conversation_contexts"("listing_id") WHERE "listing_id" IS NOT NULL;
CREATE UNIQUE INDEX "uq_conversation_context_interest" ON "conversation_contexts"("inventory_item_interest_id") WHERE "inventory_item_interest_id" IS NOT NULL;
CREATE UNIQUE INDEX "uq_conversation_context_listing_offer" ON "conversation_contexts"("listing_offer_id") WHERE "listing_offer_id" IS NOT NULL;
CREATE UNIQUE INDEX "uq_conversation_context_wishlist_offer" ON "conversation_contexts"("wishlist_offer_id") WHERE "wishlist_offer_id" IS NOT NULL;
CREATE UNIQUE INDEX "uq_conversation_context_transaction" ON "conversation_contexts"("transaction_id") WHERE "transaction_id" IS NOT NULL;

ALTER TABLE "user_notifications" ADD COLUMN "user_friendship_id" UUID;
ALTER TABLE "user_notifications" ADD CONSTRAINT "fk_user_notifications_friendship" FOREIGN KEY ("user_friendship_id") REFERENCES "user_friendships"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "user_notifications" DROP CONSTRAINT "ck_user_notifications_type";
ALTER TABLE "user_notifications" ADD CONSTRAINT "ck_user_notifications_type" CHECK ("type" IN ('inventory_interest_created', 'friend_request_received', 'friend_request_accepted'));
CREATE INDEX "idx_user_notifications_friendship" ON "user_notifications"("user_friendship_id");
