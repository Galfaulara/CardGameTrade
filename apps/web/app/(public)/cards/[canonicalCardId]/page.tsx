/* eslint-disable @typescript-eslint/no-explicit-any -- Catalog layout fields are normalized by the API. */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PublicUserLink } from "../../../../components/public-user-link/public-user-link";
import { PublicStoreLink } from "../../../../components/public-store-link/public-store-link";
import { getCardDetail } from "../../../../features/marketplace/api";
import { AddToCollectionLauncher } from "../../../../components/add-to-collection/add-to-collection-launcher";
import { ListingIntentPill } from "../../../../components/listing-intent/listing-intent-pill";
import { NavigationBack } from "../../../../components/navigation-back/navigation-back";
import { MarketPrices } from "../../../../features/marketplace/market-prices";
import { ResourceGameSync } from "../../../../features/games/resource-game-sync";
import { loadGames } from "../../../../features/games/games.server";
import { resolveResourceGame } from "../../../../features/games/active-game";
import {
  cardImageState,
  finishLabel,
  isMtgGame,
  isSpecialFinish,
  shouldShowScryfall,
} from "../../../../features/cards/presentation";
import styles from "./page.module.css";
import { CardFaceViewer } from "../../../../components/card-face-viewer/card-face-viewer";
import { trueDfcFaces } from "../../../../features/cards/card-faces";
import { getMyCardRelationshipContext } from "../../../../features/auth/authenticated-api";

export const dynamic = "force-dynamic";
const value = (input: unknown) =>
  input == null || input === "" ? null : String(input);
const money = (amount: string, currency: string) => {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
    }).format(Number(amount));
  } catch {
    return `${currency} ${amount}`;
  }
};

export default async function CardPage({
  params,
  searchParams,
}: {
  params: Promise<{ canonicalCardId: string }>;
  searchParams: Promise<{ printing?: string; offersPage?: string }>;
}) {
  const { canonicalCardId } = await params,
    query = await searchParams,
    parsed = Number(query.offersPage),
    offersPage = Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
  const games = await loadGames();
  const mtgGameId = games.find((game) => game.slug === "mtg")?.id ?? null;
  const result = await getCardDetail(
    canonicalCardId,
    query.printing,
    offersPage,
    mtgGameId,
  );
  if (result.status === "not-found") notFound();
  if (result.status !== "ready")
    return (
      <main className={styles.main}>
        <h1>Card temporarily unavailable</h1>
        <p>Please try again shortly.</p>
      </main>
    );
  const {
      card,
      selected_printing: selected,
      other_printings: others,
    } = result.detail,
    listings = result.listings;
  const cardGameSlug = resolveResourceGame(games, card.game_id)?.slug ?? null;
  const relationship=cardGameSlug?await getMyCardRelationshipContext(cardGameSlug,[canonicalCardId],selected?[selected.id]:[]).catch(()=>null):null;
  const isMtg = isMtgGame(cardGameSlug);
  const typeLine = (subject: any) =>
    subject.type_line ? <p className={styles.type}>{subject.type_line}</p> : null;
  const mtgRules = (subject: any) => (
    <>
      {subject.mana_cost && <p className={styles.mana}>{subject.mana_cost}</p>}
      {subject.oracle_text && (
        <p className={styles.oracle}>{subject.oracle_text}</p>
      )}
      <dl className={styles.stats}>
        {value(subject.power) && (
          <>
            <dt>Power / Toughness</dt>
            <dd>
              {subject.power} / {subject.toughness}
            </dd>
          </>
        )}
        {value(subject.loyalty) && (
          <>
            <dt>Loyalty</dt>
            <dd>{subject.loyalty}</dd>
          </>
        )}
        {value(subject.defense) && (
          <>
            <dt>Defense</dt>
            <dd>{subject.defense}</dd>
          </>
        )}
      </dl>
    </>
  );
  const image = cardImageState(
    selected?.image_large_uri ?? selected?.image_normal_uri ?? null,
  );
  const dfcFaces = trueDfcFaces(selected);
  const listingHref = (page: number) =>
    `/cards/${canonicalCardId}?${new URLSearchParams({ ...query, offersPage: String(page) }).toString()}`;
  return (
    <main className={styles.main}>
      <ResourceGameSync gameId={card.game_id} />
      <NavigationBack fallback="/search" />
      <section className={styles.hero}>
        {dfcFaces && selected ? (
          <CardFaceViewer front={dfcFaces[0]} back={dfcFaces[1]} canonicalCardId={canonicalCardId} printingId={selected.id} language={selected.language_code} />
        ) : <div className={styles.art}>
          {image.kind === "image" ? (
            <Image
              src={image.url}
              alt={`${card.name} — ${selected?.set.name ?? "unknown"} printing`}
              fill
              sizes="(max-width: 48rem) 82vw, 360px"
              unoptimized
            />
          ) : (
            <span>Card image unavailable</span>
          )}
        </div>}
        <div className={styles.info}>
          <p className={styles.eyebrow}>DeckDeal card catalog</p>
          <h1>{card.name}</h1>
          {relationship&&((selected&&(relationship.printingOwned[selected.id]??0)>0)||relationship.canonicalWants.includes(canonicalCardId))?<div className={styles.tags}>{selected&&(relationship.printingOwned[selected.id]??0)>0?<span>Owned ×{relationship.printingOwned[selected.id]}</span>:null}{relationship.canonicalWants.includes(canonicalCardId)?<span>In Wishlists</span>:null}</div>:null}
          {dfcFaces ? null : isMtg && card.faces?.length
            ? card.faces.map((face: any, index: number) => (
                <section className={styles.face} key={`${face.name}-${index}`}>
                  <h2>{face.name ?? `Face ${index + 1}`}</h2>
                  {typeLine(face)}
                  {mtgRules(face)}
                </section>
              ))
            : (
                <>
                  {typeLine(card)}
                  {isMtg && mtgRules(card)}
                </>
              )}
          {selected && (
            <section className={styles.printing}>
              <div className={styles.printingHeading}>
                <h2>Selected printing</h2>
                <AddToCollectionLauncher
                  className={styles.addAction}
                  canonicalCardId={canonicalCardId}
                  cardName={card.name}
                  printingId={selected.id}
                  gameId={card.game_id}
                />
              </div>
              <dl>
                <dt>Set</dt>
                <dd>
                  {selected.set.name} ({selected.set.code.toUpperCase()})
                </dd>
                <dt>Collector number</dt>
                <dd>{selected.collector_number}</dd>
                <dt>Rarity</dt>
                <dd>{selected.rarity ?? "Unknown"}</dd>
                <dt>Language</dt>
                <dd>{selected.language_code.toUpperCase()}</dd>
                {selected.artist_name && (
                  <>
                    <dt>Artist</dt>
                    <dd>{selected.artist_name}</dd>
                  </>
                )}
                {selected.treatment && (
                  <>
                    <dt>Treatment</dt>
                    <dd>{selected.treatment}</dd>
                  </>
                )}
                {selected.released_at && (
                  <>
                    <dt>Released</dt>
                    <dd>
                      {new Date(selected.released_at).toLocaleDateString()}
                    </dd>
                  </>
                )}
                {result.market_finishes.length > 0 && (
                  <>
                    <dt>Finishes</dt>
                    <dd className={styles.finishList}>
                      {result.market_finishes.map(({ finish }: { finish: string }) => (
                        <span
                          key={finish}
                          className={isSpecialFinish(finish) ? styles.finishSpecial : undefined}
                        >
                          {finishLabel(finish)}
                        </span>
                      ))}
                    </dd>
                  </>
                )}
              </dl>
              {isMtg &&
                result.market_finishes.map(({ finish }: { finish: string }) => (
                  <MarketPrices key={finish} prices={result.market_prices.filter((price: { finish: string }) => price.finish === finish)} title={`Market prices · ${finish.replaceAll("_", " ")}`} />
                ))}
              {shouldShowScryfall(cardGameSlug, selected.scryfall_uri) && (
                <a
                  href={selected.scryfall_uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Scryfall ↗
                </a>
              )}
            </section>
          )}
        </div>
      </section>
      <section className={styles.market}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Marketplace</p>
            <h2>Available on DeckDeal</h2>
          </div>
          <strong>{listings.total_results} listings</strong>
        </div>
        {listings.items.length ? (
          <div className={styles.listings}>
            {listings.items.map((listing: any) => {
              const item = listing.inventory_item,
                seller = listing.seller,
                sellerName =
                  seller?.display_name ?? seller?.username ?? seller?.name;
              return (
                <article key={listing.id}>
                  <div>
                    <strong>
                      {seller?.kind === "user" &&
                      seller?.id &&
                      (seller?.display_name || seller?.username) ? (
                        <PublicUserLink
                          user={{
                            id: seller.id,
                            display_name: seller.display_name ?? null,
                            username: seller.username ?? null,
                          }}
                        />
                      ) : seller?.kind === "store" &&
                        seller?.id &&
                        sellerName ? (
                        <PublicStoreLink
                          store={{ id: seller.id, name: sellerName }}
                        />
                      ) : (
                        (sellerName ?? "DeckDeal seller")
                      )}
                    </strong>
                    <span>
                      {seller?.kind === "store" ? "LGS" : "Collector"}
                    </span>
                  </div>
                  <p>
                    {item.printing.set.code.toUpperCase()} #
                    {item.printing.collector_number} ·{" "}
                    {item.condition.replaceAll("_", " ")} ·{" "}
                    {item.finish.replaceAll("_", " ")}
                  </p>
                  <div className={styles.pillWrap}>
                    <ListingIntentPill
                      listing={{
                        id: listing.id,
                        acceptsCash:
                          listing.accepts_cash,
                        acceptsTrade:
                          listing.accepts_trade,
                      }}
                    />
                  </div>
                  {listing.accepts_cash &&
                  listing.asking_price &&
                  listing.currency_code ? (
                    <strong>
                      {money(
                        listing.asking_price,
                        listing.currency_code,
                      )}
                    </strong>
                  ) : (
                    <span />
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <p className={styles.empty}>
            No copies of this card are currently listed on DeckDeal.
          </p>
        )}
        {listings.total_pages > 1 && (
          <nav className={styles.pages}>
            {offersPage > 1 ? (
              <Link href={listingHref(offersPage - 1)}>Previous</Link>
            ) : (
              <span />
            )}
            <span>
              Page {offersPage} of {listings.total_pages}
            </span>
            {offersPage < listings.total_pages ? (
              <Link href={listingHref(offersPage + 1)}>Next</Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </section>
      {others.length > 0 && (
        <section className={styles.printings}>
          <h2>Other printings</h2>
          <div>
            {others.map((printing: any) => (
              <Link
                key={printing.id}
                href={`/cards/${canonicalCardId}?printing=${printing.id}`}
              >
                <span>
                  {printing.image_small_uri ? (
                    <Image
                      src={printing.image_small_uri}
                      alt=""
                      width={64}
                      height={89}
                      unoptimized
                    />
                  ) : null}
                </span>
                <strong>
                  {printing.set.code.toUpperCase()} #{printing.collector_number}
                </strong>
                {printing.language_code !== "en" && (
                  <small>{printing.language_code.toUpperCase()}</small>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
