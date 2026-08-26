/* eslint-disable @typescript-eslint/no-explicit-any -- API read models are runtime-owned. */
import Link from "next/link";
import { notFound } from "next/navigation";
import { CardRail } from "../../../../components/card-rail/card-rail";
import { CardTile } from "../../../../components/card-tile/card-tile";
import { getPublicStore, getPublicStoreInventory, getPublicStoreListings } from "../../../../features/marketplace/api";
import styles from "./page.module.css";

type View="overview"|"available"|"inventory";
const views:Array<{id:View;label:string}>=[{id:"overview",label:"Overview"},{id:"available",label:"Available"},{id:"inventory",label:"Inventory"}];
const pageNumber=(value:string|string[]|undefined)=>{const raw=Array.isArray(value)?value[0]:value;return raw&&/^\d+$/.test(raw)&&Number(raw)>0?Number(raw):1};
const selectedView=(value:string|string[]|undefined):View=>{const raw=Array.isArray(value)?value[0]:value;return views.some(item=>item.id===raw)?raw as View:"overview"};

function Pagination({storeId,view,page,hasMore}:{storeId:string;view:View;page:number;hasMore:boolean}){
  if(page===1&&!hasMore)return null;const href=(target:number)=>`/stores/${storeId}?view=${view}&page=${target}`;
  return <nav className={styles.pagination} aria-label={`${view} pagination`}><span>Page {page}</span><div>{page>1?<Link href={href(page-1)} rel="prev">← Previous</Link>:<span aria-disabled="true">← Previous</span>}{hasMore?<Link href={href(page+1)} rel="next">Next →</Link>:<span aria-disabled="true">Next →</span>}</div></nav>;
}

export default async function StorePage({params,searchParams}:{params:Promise<{storeId:string}>;searchParams:Promise<{view?:string|string[];page?:string|string[]}>}){
  const [{storeId},query]=await Promise.all([params,searchParams]);const view=selectedView(query.view),page=pageNumber(query.page);
  const profile=await getPublicStore(storeId);if(profile.status==="not-found")notFound();
  if(profile.status!=="ready")return <main className={styles.main}><section className={styles.empty}><h1>Store temporarily unavailable</h1><p>Please try again shortly.</p></section></main>;
  const {store,summary}=profile.data;
  const resources=view==="overview"?await Promise.all([getPublicStoreListings(storeId,1,10),getPublicStoreInventory(storeId,1,10)]):view==="available"?[await getPublicStoreListings(storeId,page,24)]:[await getPublicStoreInventory(storeId,page,24)];
  if(resources.some(item=>item.status==="not-found"))notFound();const failed=resources.some(item=>item.status!=="ready");
  const listingResult=(view==="overview"||view==="available")&&resources[0]?.status==="ready"?resources[0].data:null;
  const inventoryResource=view==="overview"?resources[1]:view==="inventory"?resources[0]:null;
  const inventoryResult:any=inventoryResource?.status==="ready"?inventoryResource.data:null;
  const location=[store.city,store.state_region,store.country_code].filter(Boolean).join(", ");
  return <main className={styles.main}>
    <header className={styles.header}><p className={styles.eyebrow}>Local game store</p><h1>{store.name} <span aria-label="verified DeckDeal LGS">✓</span></h1>{location&&<p className={styles.location}>{location}</p>}{store.description&&<p className={styles.description}>{store.description}</p>}<p className={styles.partner}>Verified DeckDeal trade-mediation partner</p>
      <dl className={styles.summary}><div><dd>{summary.available_card_quantity.toLocaleString()}</dd><dt>cards in public inventory</dt></div><div><dd>{summary.marketplace_card_quantity.toLocaleString()}</dd><dt>currently available on DeckDeal</dt></div><div><dd>{summary.active_listing_count.toLocaleString()}</dd><dt>active listings</dt></div></dl>
    </header>
    <nav className={styles.views} aria-label="Store profile views">{views.map(item=><Link key={item.id} href={item.id==="overview"?`/stores/${storeId}`:`/stores/${storeId}?view=${item.id}`} aria-current={view===item.id?"page":undefined}>{item.label}</Link>)}</nav>
    {failed?<section className={styles.empty}>We couldn&apos;t load this Store content. Please try again shortly.</section>:<>
      {listingResult&&(view==="overview"?<CardRail tone="fresh" eyebrow="Currently listed" title="Available on DeckDeal" meta={`${summary.active_listing_count.toLocaleString()} active listings`} cards={listingResult.items as any} emptyMessage="This Store has no active listings right now."/>:<section><p className={styles.kicker}>Marketplace availability</p><h2>Available on DeckDeal</h2><p className={styles.context}>Cards this Store is currently offering to trade or sell through DeckDeal.</p><div className={styles.grid}>{listingResult.items.map((card:any)=><CardTile key={card.id} card={card} layout="grid"/>)}</div><Pagination storeId={storeId} view={view} page={page} hasMore={listingResult.pagination.has_more}/></section>)}
      {inventoryResult&&(view==="overview"?<CardRail tone="catalog" eyebrow="Store-owned cards" title="Store inventory" meta={`${summary.available_card_quantity.toLocaleString()} public cards · not necessarily listed`} cards={inventoryResult.cards} emptyMessage="This Store has no public inventory right now."/>:<section><p className={styles.kicker}>Public inventory</p><h2>Store inventory</h2><p className={styles.context}>Public inventory may include cards the Store is not currently offering through DeckDeal.</p><div className={styles.grid}>{inventoryResult.cards.map((card:any)=><CardTile key={card.id} card={{...card,listing:undefined}} layout="grid"/>)}</div><Pagination storeId={storeId} view={view} page={page} hasMore={inventoryResult.pagination.has_more}/></section>)}
    </>}
  </main>;
}
