import "dotenv/config";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import { createDbClient } from "../client";

type Card={quantity:number;name:string;setCode?:string;collectorNumber?:string;scryfallId?:string;finish:string;condition:string;language:string};
type Deck={name:string;batchKey:string;officialSource:string;ownerUserId:string|null;ownerStoreId:string|null;collectionName:string|null;collectionVisibility:string|null;cards:Card[]};
type Resolved=Card&{printingId:string;gameId:string};
const argv=process.argv.slice(2),apply=argv.includes("--apply"),files=argv.filter(x=>!x.startsWith("--")).map(x=>resolve(x));

export function parseMoxfieldStyleLine(line:string):Card {
  const m=line.trim().match(/^(\d+)\s+(.+?)\s+\(([A-Za-z0-9]+)\)\s+(\S+)$/);
  if(!m) throw new Error(`Unsupported text line: ${line}`);
  return {quantity:+m[1]!,name:m[2]!,setCode:m[3]!,collectorNumber:m[4]!,finish:"nonfoil",condition:"near_mint",language:"en"};
}

function load(path:string):Deck {
  if(path.endsWith(".txt")) throw new Error("Text lines share the normalized parser, but imports require a JSON owner/deck wrapper.");
  return JSON.parse(readFileSync(path,"utf8")) as Deck;
}
function valid(d:Deck){
  if(!!d.ownerUserId===!!d.ownerStoreId) throw new Error(`${d.name}: exactly one owner is required.`);
  if(d.ownerStoreId&&d.collectionName) throw new Error(`${d.name}: store inventory cannot use a collection.`);
  if(d.cards.some(c=>!Number.isInteger(c.quantity)||c.quantity<1||!c.name||!c.finish||!c.condition||!c.language)) throw new Error(`${d.name}: invalid normalized entry.`);
}

async function main(){
  if(!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
  if(!files.length) throw new Error("Pass normalized JSON manifest paths.");
  const decks=files.map(load); decks.forEach(valid);
  const db=createDbClient(process.env.DATABASE_URL),ready:Array<{deck:Deck;cards:Resolved[];gameId:string}>=[],report:Array<Record<string,unknown>>=[];
  try{
    const game=await db.games.findUnique({where:{slug:"mtg"},select:{id:true}});
    if(!game) throw new Error("The MTG game is not configured.");
    for(const deck of decks){
      const owner=deck.ownerUserId?await db.user_profiles.findUnique({where:{id:deck.ownerUserId}}):await db.stores.findUnique({where:{id:deck.ownerStoreId!}});
      if(!owner||owner.status!=="active") throw new Error(`${deck.name}: owner missing or inactive.`);
      const cards:Resolved[]=[]; let unresolved=0,ambiguous=0;
      for(const c of deck.cards){
        const hits=await db.card_printings.findMany({where:{
          game_id:game.id,source:"scryfall",...(c.scryfallId?{source_key:c.scryfallId}:{}),...(c.collectorNumber?{collector_number:c.collectorNumber}:{}),
          language_code:c.language,...(c.setCode?{card_sets:{code:c.setCode.toLowerCase()}}:{}),
          canonical_cards:{name:c.name},printing_finishes:{some:{finish:c.finish}},is_digital:false
        },select:{id:true,game_id:true}});
        if(!hits.length){unresolved++;continue} if(hits.length>1){ambiguous++;continue} cards.push({...c,printingId:hits[0]!.id,gameId:hits[0]!.game_id});
      }
      const gameIds=[...new Set(cards.map(c=>c.gameId))];
      if(gameIds.length!==1) throw new Error(`${deck.name}: all resolved printings must belong to exactly one game.`);
      const gameId=gameIds[0]!;
      if(gameId!==game.id) throw new Error(`${deck.name}: resolved printing game does not match MTG.`);
      if(deck.ownerStoreId&&!await db.store_games.findUnique({where:{store_id_game_id:{store_id:deck.ownerStoreId,game_id:gameId}},select:{store_id:true}})) throw new Error(`${deck.name}: store owner does not support the imported game.`);
      const collection=deck.collectionName?await db.collections.findUnique({where:{user_id_game_id_name:{user_id:deck.ownerUserId!,game_id:gameId,name:deck.collectionName}}}):null;
      if(collection&&collection.user_id!==deck.ownerUserId) throw new Error(`${deck.name}: collection owner mismatch.`);
      const total=deck.cards.reduce((n,c)=>n+c.quantity,0),foil=deck.cards.reduce((n,c)=>n+(c.finish==="foil"?c.quantity:0),0);
      report.push({deck:deck.name,owner:deck.ownerUserId??deck.ownerStoreId,collection:deck.collectionName?(collection?`use: ${deck.collectionName}`:`create: ${deck.collectionName}`):"none (store)",playableCards:total,inventoryRows:total,foil,nonfoil:total-foil,resolvedEntries:cards.length,unresolved,ambiguous,allPrintingsAndFinishesLocal:!unresolved&&!ambiguous&&cards.length===deck.cards.length});
      if(total!==100||unresolved||ambiguous||cards.length!==deck.cards.length){console.table(report);throw new Error(`${deck.name}: preflight failed; no writes performed.`)}
      ready.push({deck,cards,gameId});
    }
    console.table(report); console.log(`Mode: ${apply?"APPLY":"DRY RUN (default)"}`); if(!apply)return;
    const digest=createHash("sha256").update(files.map(f=>readFileSync(f)).join("")).digest("hex"),receipt=resolve(".bulk-import-receipts",`${digest}.json`);
    if(existsSync(receipt)) throw new Error(`Apply blocked by existing receipt: ${receipt}`);
    await db.$transaction(async tx=>{
      for(const {deck,cards,gameId} of ready){
        let collectionId:string|null=null;
        if(deck.collectionName){
          const col=await tx.collections.upsert({where:{user_id_game_id_name:{user_id:deck.ownerUserId!,game_id:gameId,name:deck.collectionName}},update:{},create:{user_id:deck.ownerUserId!,game_id:gameId,name:deck.collectionName,visibility:deck.collectionVisibility??"public"}});
          collectionId=col.id;
          if(await tx.inventory_items.count({where:{collection_id:collectionId}})) throw new Error(`${deck.name}: collection is not empty; repeated apply blocked.`);
        }
        for(const c of cards) for(let i=0;i<c.quantity;i++) await tx.inventory_items.create({data:{game_id:c.gameId,printing_id:c.printingId,finish:c.finish,owner_user_id:deck.ownerUserId,owner_store_id:deck.ownerStoreId,collection_id:collectionId,condition:c.condition,language_code:c.language,quantity:1,status:"available"}});
      }
    });
    mkdirSync(dirname(receipt),{recursive:true}); writeFileSync(receipt,JSON.stringify({digest,appliedAt:new Date().toISOString(),manifests:files.map(f=>basename(f))},null,2),{flag:"wx"});
    console.log(`Applied atomically. Receipt: ${receipt}`);
  }finally{await db.$disconnect()}
}
main().catch(e=>{console.error(e instanceof Error?e.message:e);process.exitCode=1});
