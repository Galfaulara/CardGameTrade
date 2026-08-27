import Link from "next/link";
import { CardTile } from "../../../components/card-tile/card-tile";
import { SearchForm } from "../../../components/search-form/search-form";
import { searchCatalog } from "../../../features/marketplace/api";
import styles from "./page.module.css";
export const dynamic="force-dynamic";
export default async function SearchPage({searchParams}:{searchParams:Promise<{q?:string,page?:string}>}){
  const params=await searchParams,query=params.q?.trim().replace(/\s+/g," ")??"",parsed=Number(params.page),page=Number.isInteger(parsed)&&parsed>0?parsed:1,result=await searchCatalog(query,page);
  const start=result.total_results?(result.page-1)*result.page_size+1:0,end=Math.min(result.page*result.page_size,result.total_results),href=(value:number)=>`/search?q=${encodeURIComponent(query)}&page=${value}`;
  return <main className={styles.main}><div className={styles.heading}><p>Catalog search</p><h1>{query?`Results for “${query}”`:"Find your next card"}</h1>{query&&<p>{result.total_results.toLocaleString()} cards found</p>}<SearchForm defaultValue={query}/></div><section className={styles.results} aria-label="Catalog search results">{result.cards.length?<ul className={styles.grid}>{result.cards.map(card=><li key={card.canonicalCardId}><CardTile card={card} layout="grid" canonicalAdd/></li>)}</ul>:<p className={styles.empty}>{query?"No matching cards were found. Try another card name.":"Enter a card name to explore the catalog."}</p>}{result.total_pages>0&&<nav className={styles.pagination} aria-label="Search result pages"><p>Showing {start}–{end} of {result.total_results.toLocaleString()} · Page {result.page} of {result.total_pages}</p><div>{result.page>1?<Link href={href(result.page-1)}>Previous</Link>:<span/>}{result.page<result.total_pages&&<Link href={href(result.page+1)}>Next</Link>}</div></nav>}</section></main>;
}
