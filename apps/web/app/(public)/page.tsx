import { CardRail } from "../../components/card-rail/card-rail";
import { PublicUserLink } from "../../components/public-user-link/public-user-link";
import { PublicStoreLink } from "../../components/public-store-link/public-store-link";
import { SearchForm } from "../../components/search-form/search-form";
import { getPublicCollections, getPublicStores, getRecentListings } from "../../features/marketplace/api";
import styles from "./page.module.css";

const steps=[["Discover real cards","Search exact printings and browse inventory that collectors have actually registered."],["Shape the deal","Buy, trade, or combine both through offers tied to physical inventory."],["Meet at a trusted store","Complete the handoff with a participating local game store."]] as const;

const collectionEyebrow = (owner: { id: string; display_name: string | null; username: string | null }) =>
  (owner.display_name ?? owner.username)
    ? <><PublicUserLink user={owner} />&apos;s collection</>
    : "Public collection";

export default async function HomePage(){
  const [collections,stores,listings]=await Promise.all([getPublicCollections(),getPublicStores(),getRecentListings()]);
  return <div>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>The local marketplace for trading cards</p>
        <h1>Find the card. Make the deal. Trade with confidence.</h1>
        <p>Discover exact printings from collectors and stores, then bring the exchange home through a trusted local game store.</p>
        <div className={styles.heroSearch}><SearchForm /></div>
      </div>
      <div className={styles.heroVisual} aria-hidden="true"><div/><div><b>DD</b><span>Cards worth finding</span></div></div>
    </section>
    <div id="discover">
      {stores.map(store => <CardRail key={store.id} tone="fresh" eyebrow="Local store" title={<>Fresh from <PublicStoreLink store={store}/></>} meta={`${store.marketplace_card_quantity.toLocaleString()} marketplace cards`} action={{href:`/stores/${store.id}`,label:"View store →"}} cards={store.cards} emptyMessage="This store has no active marketplace listings right now." />)}
      {collections.map(collection => <CardRail key={collection.id} tone="marketplace" eyebrow={collectionEyebrow(collection.owner)} title={collection.name} meta={`${collection.marketplace_card_quantity.toLocaleString()} marketplace cards · ${collection.card_quantity.toLocaleString()} public cards`} preferredStore={collection.preferred_store??undefined} action={{ href: `/collections/${collection.id}`, label: "View collection →" }} cards={collection.cards} emptyMessage="This collection has no active marketplace listings right now." />)}
      <CardRail tone="marketplace" eyebrow="Live marketplace" title="Recently listed" cards={listings} emptyMessage="No active listings are available yet. Newly listed cards will appear here automatically." />
    </div>
    <section className={styles.how} id="how-it-works">
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>How DeckDeal works</p><h2>From binder to handoff, without the guesswork.</h2></div>
      <ol>{steps.map(([title,copy],i)=><li key={title}><span>{i+1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    </section>
    <section className={styles.stores} id="local-stores">
      <div><p className={styles.eyebrow}>Local stores make it real</p><h2>A trusted place to finish the trade.</h2></div>
      <p>DeckDeal keeps discovery fast online while participating LGS partners support receipt, verification, and release when a card changes hands.</p>
    </section>
  </div>
}
