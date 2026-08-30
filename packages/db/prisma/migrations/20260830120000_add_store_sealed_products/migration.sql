BEGIN;

ALTER TABLE stores
  ADD COLUMN verification_submitted_at timestamptz,
  ADD COLUMN verification_reviewed_at timestamptz,
  ADD COLUMN verification_reviewed_by_user_id uuid,
  ADD COLUMN verification_review_notes text,
  ADD CONSTRAINT fk_stores_verification_reviewed_by_user
    FOREIGN KEY (verification_reviewed_by_user_id) REFERENCES user_profiles(id)
    ON UPDATE NO ACTION ON DELETE SET NULL;

CREATE INDEX idx_stores_verification_reviewed_by_user_id
  ON stores (verification_reviewed_by_user_id);

CREATE TABLE store_sealed_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id uuid NOT NULL,
  game_id uuid NOT NULL,
  name text NOT NULL,
  description text,
  product_type text NOT NULL,
  card_set_id uuid,
  sku text,
  upc text,
  price numeric(12,2) NOT NULL,
  currency_code text NOT NULL,
  quantity_on_hand integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'draft',
  featured boolean NOT NULL DEFAULT false,
  display_order integer NOT NULL DEFAULT 0,
  created_by_staff_id uuid NOT NULL,
  updated_by_staff_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT ck_store_sealed_products_name_nonblank CHECK (btrim(name) <> ''),
  CONSTRAINT ck_store_sealed_products_price_nonnegative CHECK (price >= 0),
  CONSTRAINT ck_store_sealed_products_quantity_nonnegative CHECK (quantity_on_hand >= 0),
  CONSTRAINT ck_store_sealed_products_display_order_nonnegative CHECK (display_order >= 0),
  CONSTRAINT ck_store_sealed_products_currency_code_length CHECK (char_length(currency_code) = 3),
  CONSTRAINT ck_store_sealed_products_status CHECK (status IN ('draft', 'active', 'paused', 'archived')),
  CONSTRAINT fk_store_sealed_products_store FOREIGN KEY (store_id)
    REFERENCES stores(id) ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT fk_store_sealed_products_store_game FOREIGN KEY (store_id, game_id)
    REFERENCES store_games(store_id, game_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fk_store_sealed_products_set_game FOREIGN KEY (card_set_id, game_id)
    REFERENCES card_sets(id, game_id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  CONSTRAINT fk_store_sealed_products_created_staff FOREIGN KEY (created_by_staff_id, store_id)
    REFERENCES store_staff(id, store_id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  CONSTRAINT fk_store_sealed_products_updated_staff FOREIGN KEY (updated_by_staff_id, store_id)
    REFERENCES store_staff(id, store_id) ON UPDATE NO ACTION ON DELETE RESTRICT
);

CREATE UNIQUE INDEX uq_store_sealed_products_store_sku
  ON store_sealed_products (store_id, sku) WHERE sku IS NOT NULL;
CREATE INDEX idx_store_sealed_products_store_game_status_order
  ON store_sealed_products (store_id, game_id, status, display_order);
CREATE INDEX idx_store_sealed_products_store_public
  ON store_sealed_products (store_id, status, featured, display_order);
CREATE INDEX idx_store_sealed_products_set_game
  ON store_sealed_products (card_set_id, game_id);
CREATE INDEX idx_store_sealed_products_created_staff
  ON store_sealed_products (created_by_staff_id, store_id);
CREATE INDEX idx_store_sealed_products_updated_staff
  ON store_sealed_products (updated_by_staff_id, store_id);

CREATE TABLE store_sealed_product_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  store_sealed_product_id uuid NOT NULL,
  storage_provider text NOT NULL DEFAULT 'supabase',
  storage_key text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  is_primary boolean NOT NULL DEFAULT false,
  alt_text text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT ck_store_sealed_product_images_sort_order_nonnegative CHECK (sort_order >= 0),
  CONSTRAINT fk_store_sealed_product_images_product FOREIGN KEY (store_sealed_product_id)
    REFERENCES store_sealed_products(id) ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT uq_store_sealed_product_images_storage_key
    UNIQUE (store_sealed_product_id, storage_key)
);

CREATE UNIQUE INDEX uq_store_sealed_product_images_primary
  ON store_sealed_product_images (store_sealed_product_id) WHERE is_primary = true;
CREATE INDEX idx_store_sealed_product_images_product_order
  ON store_sealed_product_images (store_sealed_product_id, sort_order);

COMMIT;
