BEGIN;

-- 1. Fail fast unless exactly one MTG game exists.
DO $$
BEGIN
  IF (SELECT count(*) FROM games WHERE slug = 'mtg') <> 1 THEN
    RAISE EXCEPTION 'Expected exactly one games row with slug=mtg';
  END IF;
END
$$;

-- 2. Add nullable game identity columns.
ALTER TABLE collections ADD COLUMN game_id uuid;
ALTER TABLE inventory_items ADD COLUMN game_id uuid;
ALTER TABLE listings ADD COLUMN game_id uuid;
ALTER TABLE listing_offers ADD COLUMN game_id uuid;
ALTER TABLE offer_items ADD COLUMN game_id uuid;
ALTER TABLE wishlists ADD COLUMN game_id uuid;
ALTER TABLE wishlist_items ADD COLUMN game_id uuid;
ALTER TABLE wishlist_offers ADD COLUMN game_id uuid;
ALTER TABLE wishlist_offer_items ADD COLUMN game_id uuid;
ALTER TABLE wishlist_offer_requested_items ADD COLUMN game_id uuid;
ALTER TABLE transactions ADD COLUMN game_id uuid;
ALTER TABLE transaction_items ADD COLUMN game_id uuid;
ALTER TABLE store_trade_handoffs ADD COLUMN game_id uuid;
ALTER TABLE inventory_item_interests ADD COLUMN game_id uuid;

-- 3. Backfill roots and parent-derived game identity.
WITH mtg AS (SELECT id FROM games WHERE slug = 'mtg')
UPDATE collections SET game_id = mtg.id FROM mtg;

WITH mtg AS (SELECT id FROM games WHERE slug = 'mtg')
UPDATE wishlists SET game_id = mtg.id FROM mtg;

UPDATE inventory_items i SET game_id = p.game_id
FROM card_printings p WHERE p.id = i.printing_id;

UPDATE listings l SET game_id = i.game_id
FROM inventory_items i WHERE i.id = l.inventory_item_id;

UPDATE listing_offers o SET game_id = l.game_id
FROM listings l WHERE l.id = o.listing_id;

UPDATE offer_items oi SET game_id = o.game_id
FROM listing_offers o WHERE o.id = oi.offer_id;

UPDATE wishlist_items wi SET game_id = w.game_id
FROM wishlists w WHERE w.id = wi.wishlist_id;

UPDATE wishlist_offers wo SET game_id = wi.game_id
FROM wishlist_items wi WHERE wi.id = wo.wishlist_item_id;

UPDATE wishlist_offer_items x SET game_id = wo.game_id
FROM wishlist_offers wo WHERE wo.id = x.wishlist_offer_id;

UPDATE wishlist_offer_requested_items x SET game_id = wo.game_id
FROM wishlist_offers wo WHERE wo.id = x.wishlist_offer_id;

WITH mtg AS (SELECT id FROM games WHERE slug = 'mtg'),
resolved AS (
  SELECT t.id, COALESCE(l.game_id, lo.game_id, wo.game_id, mtg.id) AS game_id
  FROM transactions t
  CROSS JOIN mtg
  LEFT JOIN listings l ON l.id = t.listing_id
  LEFT JOIN listing_offers lo ON lo.id = t.accepted_offer_id
  LEFT JOIN wishlist_offers wo ON wo.id = t.accepted_wishlist_offer_id
)
UPDATE transactions t SET game_id = resolved.game_id
FROM resolved WHERE resolved.id = t.id;

UPDATE transaction_items ti SET game_id = t.game_id
FROM transactions t WHERE t.id = ti.transaction_id;

UPDATE store_trade_handoffs h SET game_id = t.game_id
FROM transactions t WHERE t.id = h.transaction_id;

UPDATE inventory_item_interests x SET game_id = i.game_id
FROM inventory_items i WHERE i.id = x.inventory_item_id;

-- 4. Create and backfill certified store/game capabilities.
CREATE TABLE store_games (
  store_id uuid NOT NULL,
  game_id uuid NOT NULL,
  trade_mediation_enabled boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT store_games_pkey PRIMARY KEY (store_id, game_id),
  CONSTRAINT fk_store_games_store FOREIGN KEY (store_id) REFERENCES stores(id)
    ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT fk_store_games_game FOREIGN KEY (game_id) REFERENCES games(id)
    ON UPDATE NO ACTION ON DELETE RESTRICT
);

WITH mtg AS (SELECT id FROM games WHERE slug = 'mtg')
INSERT INTO store_games (store_id, game_id, trade_mediation_enabled)
SELECT s.id, mtg.id, s.trade_mediation_enabled FROM stores s CROSS JOIN mtg;

-- 5. Validate all backfills before enforcement.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM collections WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM inventory_items WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM listings WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM listing_offers WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM offer_items WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM wishlists WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM wishlist_items WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM wishlist_offers WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM wishlist_offer_items WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM wishlist_offer_requested_items WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM transactions WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM transaction_items WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM store_trade_handoffs WHERE game_id IS NULL
    UNION ALL SELECT 1 FROM inventory_item_interests WHERE game_id IS NULL
  ) THEN
    RAISE EXCEPTION 'One or more game_id backfills failed';
  END IF;

  IF EXISTS (
    SELECT 1 FROM inventory_items i JOIN card_printings p ON p.id = i.printing_id
    WHERE i.game_id <> p.game_id
  ) OR EXISTS (
    SELECT 1 FROM listings l JOIN inventory_items i ON i.id = l.inventory_item_id
    WHERE l.game_id <> i.game_id
  ) OR EXISTS (
    SELECT 1 FROM listing_offers o JOIN listings l ON l.id = o.listing_id
    WHERE o.game_id <> l.game_id
  ) OR EXISTS (
    SELECT 1 FROM wishlist_items wi JOIN wishlists w ON w.id = wi.wishlist_id
    WHERE wi.game_id <> w.game_id
  ) OR EXISTS (
    SELECT 1 FROM transaction_items ti JOIN transactions t ON t.id = ti.transaction_id
    WHERE ti.game_id <> t.game_id
  ) THEN
    RAISE EXCEPTION 'Cross-game parent/child mismatch detected';
  END IF;

  IF EXISTS (
    SELECT 1 FROM (
      SELECT user_id, game_id, name FROM collections
      GROUP BY user_id, game_id, name HAVING count(*) > 1
    ) duplicates
  ) OR EXISTS (
    SELECT 1 FROM (
      SELECT user_id, game_id, name FROM wishlists
      GROUP BY user_id, game_id, name HAVING count(*) > 1
    ) duplicates
  ) THEN
    RAISE EXCEPTION 'Target collection/wishlist uniqueness would fail';
  END IF;
END
$$;

-- 6. Enforce required game identity.
ALTER TABLE collections ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE inventory_items ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE listings ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE listing_offers ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE offer_items ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE wishlists ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE wishlist_items ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE wishlist_offers ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE wishlist_offer_items ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE wishlist_offer_requested_items ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE transactions ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE transaction_items ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE store_trade_handoffs ALTER COLUMN game_id SET NOT NULL;
ALTER TABLE inventory_item_interests ALTER COLUMN game_id SET NOT NULL;

-- 7. Add prerequisite composite keys and replace uniqueness.
ALTER TABLE card_printings
  ADD CONSTRAINT uq_card_printings_id_game UNIQUE (id, game_id);

ALTER TABLE collections
  ADD CONSTRAINT uq_collections_id_user_game UNIQUE (id, user_id, game_id),
  ADD CONSTRAINT uq_collections_user_game_name UNIQUE (user_id, game_id, name),
  DROP CONSTRAINT uq_collections_user_name;

ALTER TABLE inventory_items
  ADD CONSTRAINT uq_inventory_items_id_game UNIQUE (id, game_id);
ALTER TABLE listings
  ADD CONSTRAINT uq_listings_id_game UNIQUE (id, game_id);
ALTER TABLE listing_offers
  ADD CONSTRAINT uq_listing_offers_id_game UNIQUE (id, game_id);
ALTER TABLE transactions
  ADD CONSTRAINT uq_transactions_id_game UNIQUE (id, game_id);

ALTER TABLE wishlists
  ADD CONSTRAINT uq_wishlists_id_game UNIQUE (id, game_id),
  ADD CONSTRAINT uq_wishlists_user_game_name UNIQUE (user_id, game_id, name),
  DROP CONSTRAINT uq_wishlists_user_name;

ALTER TABLE wishlist_items
  ADD CONSTRAINT uq_wishlist_items_id_game UNIQUE (id, game_id);
ALTER TABLE wishlist_offers
  ADD CONSTRAINT uq_wishlist_offers_id_game UNIQUE (id, game_id);

ALTER TABLE card_sets
  DROP CONSTRAINT uq_card_sets_source,
  ADD CONSTRAINT uq_card_sets_source UNIQUE (game_id, source, source_id);
ALTER TABLE card_printings
  DROP CONSTRAINT uq_card_printings_source,
  ADD CONSTRAINT uq_card_printings_source UNIQUE (game_id, source, source_key);

-- 8. Replace legacy relationships with certified same-game relationships.
ALTER TABLE collections
  ADD CONSTRAINT fk_collections_game FOREIGN KEY (game_id) REFERENCES games(id)
    ON UPDATE NO ACTION ON DELETE RESTRICT;

ALTER TABLE inventory_items
  DROP CONSTRAINT fk_inventory_items_collection_owner,
  ADD CONSTRAINT fk_inventory_items_collection_owner_game
    FOREIGN KEY (collection_id, owner_user_id, game_id)
    REFERENCES collections(id, user_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_inventory_items_owner_store_game
    FOREIGN KEY (owner_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_inventory_items_printing_same_game
    FOREIGN KEY (printing_id, game_id) REFERENCES card_printings(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT;

ALTER TABLE listings
  DROP CONSTRAINT fk_listings_preferred_store,
  ADD CONSTRAINT fk_listings_inventory_same_game
    FOREIGN KEY (inventory_item_id, game_id) REFERENCES inventory_items(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE,
  ADD CONSTRAINT fk_listings_preferred_store_game
    FOREIGN KEY (preferred_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT;

ALTER TABLE listing_offers
  ADD CONSTRAINT fk_listing_offers_listing_same_game
    FOREIGN KEY (listing_id, game_id) REFERENCES listings(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE,
  ADD CONSTRAINT fk_listing_offers_offer_store_game
    FOREIGN KEY (offerer_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT;

ALTER TABLE offer_items
  ADD CONSTRAINT fk_offer_items_inventory_same_game
    FOREIGN KEY (inventory_item_id, game_id) REFERENCES inventory_items(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_offer_items_offer_same_game
    FOREIGN KEY (offer_id, game_id) REFERENCES listing_offers(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE;

ALTER TABLE wishlists
  DROP CONSTRAINT fk_wishlists_preferred_store,
  ADD CONSTRAINT fk_wishlists_game FOREIGN KEY (game_id) REFERENCES games(id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_wishlists_preferred_store_game
    FOREIGN KEY (preferred_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT;

ALTER TABLE wishlist_items
  DROP CONSTRAINT fk_wishlist_items_canonical_card,
  DROP CONSTRAINT fk_wishlist_items_printing,
  DROP CONSTRAINT fk_wishlist_items_wishlist,
  ADD CONSTRAINT fk_wishlist_items_canonical_same_game
    FOREIGN KEY (canonical_card_id, game_id) REFERENCES canonical_cards(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_wishlist_items_printing_same_game
    FOREIGN KEY (printing_id, game_id) REFERENCES card_printings(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_wishlist_items_wishlist_same_game
    FOREIGN KEY (wishlist_id, game_id) REFERENCES wishlists(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE;

ALTER TABLE wishlist_offers
  DROP CONSTRAINT fk_wishlist_offers_wishlist_item,
  ADD CONSTRAINT fk_wishlist_offers_offer_store_game
    FOREIGN KEY (offerer_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_wishlist_offers_wishlist_item_same_game
    FOREIGN KEY (wishlist_item_id, game_id) REFERENCES wishlist_items(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE;

ALTER TABLE wishlist_offer_items
  DROP CONSTRAINT fk_wishlist_offer_items_offer,
  ADD CONSTRAINT fk_wishlist_offer_items_inventory_same_game
    FOREIGN KEY (inventory_item_id, game_id) REFERENCES inventory_items(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_wishlist_offer_items_offer_same_game
    FOREIGN KEY (wishlist_offer_id, game_id) REFERENCES wishlist_offers(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE;

ALTER TABLE wishlist_offer_requested_items
  DROP CONSTRAINT fk_wishlist_offer_requested_items_canonical_card,
  DROP CONSTRAINT fk_wishlist_offer_requested_items_inventory_item,
  DROP CONSTRAINT fk_wishlist_offer_requested_items_offer,
  DROP CONSTRAINT fk_wishlist_offer_requested_items_printing,
  ADD CONSTRAINT fk_wishlist_offer_requested_items_canonical_same_game
    FOREIGN KEY (requested_canonical_card_id, game_id) REFERENCES canonical_cards(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_wishlist_offer_requested_items_inventory_same_game
    FOREIGN KEY (requested_inventory_item_id, game_id) REFERENCES inventory_items(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_wishlist_offer_requested_items_offer_same_game
    FOREIGN KEY (wishlist_offer_id, game_id) REFERENCES wishlist_offers(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE,
  ADD CONSTRAINT fk_wishlist_offer_requested_items_printing_same_game
    FOREIGN KEY (requested_printing_id, game_id) REFERENCES card_printings(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT;

ALTER TABLE transactions
  DROP CONSTRAINT fk_transactions_accepted_wishlist_offer,
  DROP CONSTRAINT fk_transactions_counterparty_store,
  DROP CONSTRAINT fk_transactions_listing,
  DROP CONSTRAINT fk_transactions_seller_store,
  ADD CONSTRAINT fk_transactions_accepted_offer_same_game
    FOREIGN KEY (accepted_offer_id, game_id) REFERENCES listing_offers(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_transactions_accepted_wishlist_offer_same_game
    FOREIGN KEY (accepted_wishlist_offer_id, game_id) REFERENCES wishlist_offers(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_transactions_counterparty_store_game
    FOREIGN KEY (counterparty_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_transactions_listing_same_game
    FOREIGN KEY (listing_id, game_id) REFERENCES listings(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_transactions_seller_store_game
    FOREIGN KEY (seller_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT;

ALTER TABLE transaction_items
  DROP CONSTRAINT fk_transaction_items_from_store,
  DROP CONSTRAINT fk_transaction_items_inventory_item,
  DROP CONSTRAINT fk_transaction_items_result_inventory_item,
  DROP CONSTRAINT fk_transaction_items_to_store,
  DROP CONSTRAINT fk_transaction_items_transaction,
  ADD CONSTRAINT fk_transaction_items_from_store_game
    FOREIGN KEY (from_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_transaction_items_inventory_same_game
    FOREIGN KEY (inventory_item_id, game_id) REFERENCES inventory_items(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_transaction_items_result_inventory_same_game
    FOREIGN KEY (result_inventory_item_id, game_id) REFERENCES inventory_items(id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_transaction_items_to_store_game
    FOREIGN KEY (to_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_transaction_items_transaction_same_game
    FOREIGN KEY (transaction_id, game_id) REFERENCES transactions(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE;

ALTER TABLE store_trade_handoffs
  DROP CONSTRAINT fk_store_trade_handoffs_store,
  DROP CONSTRAINT fk_store_trade_handoffs_transaction,
  ADD CONSTRAINT fk_store_trade_handoffs_store_game
    FOREIGN KEY (store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_store_trade_handoffs_transaction_same_game
    FOREIGN KEY (transaction_id, game_id) REFERENCES transactions(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE;

ALTER TABLE inventory_item_interests
  DROP CONSTRAINT fk_inventory_item_interests_inventory_item,
  DROP CONSTRAINT fk_inventory_item_interests_listing_offer,
  DROP CONSTRAINT fk_inventory_item_interests_wishlist_offer,
  ADD CONSTRAINT fk_inventory_item_interests_inventory_same_game
    FOREIGN KEY (inventory_item_id, game_id) REFERENCES inventory_items(id, game_id)
    ON UPDATE NO ACTION ON DELETE CASCADE,
  ADD CONSTRAINT fk_inventory_item_interests_listing_offer_same_game
    FOREIGN KEY (converted_listing_offer_id, game_id) REFERENCES listing_offers(id, game_id)
    ON UPDATE NO ACTION ON DELETE SET NULL (converted_listing_offer_id),
  ADD CONSTRAINT fk_inventory_item_interests_store_game
    FOREIGN KEY (interested_store_id, game_id) REFERENCES store_games(store_id, game_id)
    ON UPDATE NO ACTION ON DELETE RESTRICT,
  ADD CONSTRAINT fk_inventory_item_interests_wishlist_offer_same_game
    FOREIGN KEY (converted_wishlist_offer_id, game_id) REFERENCES wishlist_offers(id, game_id)
    ON UPDATE NO ACTION ON DELETE SET NULL (converted_wishlist_offer_id);

-- 9. Certified lookup and partial indexes.
CREATE INDEX idx_collections_game_id ON collections (game_id);
CREATE INDEX idx_inventory_items_owner_store_game ON inventory_items (owner_store_id, game_id);
CREATE INDEX idx_inventory_items_owner_user_game ON inventory_items (owner_user_id, game_id);
CREATE INDEX idx_listings_game_id ON listings (game_id);
CREATE INDEX idx_listing_offers_game_id ON listing_offers (game_id);
CREATE INDEX idx_offer_items_game_id ON offer_items (game_id);
CREATE INDEX idx_wishlists_game_id ON wishlists (game_id);
CREATE INDEX idx_wishlist_items_game_id ON wishlist_items (game_id);
CREATE INDEX idx_wishlist_offers_game_id ON wishlist_offers (game_id);
CREATE INDEX idx_wishlist_offer_items_game_id ON wishlist_offer_items (game_id);
CREATE INDEX idx_wishlist_offer_requested_items_game_id ON wishlist_offer_requested_items (game_id);
CREATE INDEX idx_transactions_game_id ON transactions (game_id);
CREATE INDEX idx_transaction_items_game_id ON transaction_items (game_id);
CREATE INDEX idx_store_trade_handoffs_game_id ON store_trade_handoffs (game_id);
CREATE INDEX idx_inventory_item_interests_game_id ON inventory_item_interests (game_id);
CREATE INDEX idx_store_games_game_mediation_enabled
  ON store_games (game_id, store_id) WHERE trade_mediation_enabled = true;

-- 10. Remove implicit provider defaults.
ALTER TABLE canonical_cards ALTER COLUMN source DROP DEFAULT;
ALTER TABLE card_sets ALTER COLUMN source DROP DEFAULT;
ALTER TABLE card_printings ALTER COLUMN source DROP DEFAULT;

-- 11. Final integrity assertions.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM inventory_items i
    WHERE NOT EXISTS (
      SELECT 1
      FROM card_printings p
      WHERE p.id = i.printing_id AND p.game_id = i.game_id
    )
  ) THEN
    RAISE EXCEPTION 'Final same-game inventory verification failed';
  END IF;

  IF EXISTS (
    SELECT 1 FROM transaction_items ti JOIN transactions t ON t.id = ti.transaction_id
    WHERE ti.game_id <> t.game_id
  ) OR EXISTS (
    SELECT 1 FROM store_trade_handoffs h JOIN transactions t ON t.id = h.transaction_id
    WHERE h.game_id <> t.game_id
  ) THEN
    RAISE EXCEPTION 'Final transaction game verification failed';
  END IF;
END
$$;

COMMIT;
