"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./notification-bell.module.css";

type Notification = { id:string; type:string; readAt:string|null; inventoryItemId:string|null; friendshipId:string|null; cardName:string; interestType:string|null; actor:{id:string;username:string|null;displayName:string|null}|null };
export function NotificationBell() {
  const [data,setData]=useState<{unreadCount:number;items:Notification[]}>({unreadCount:0,items:[]});
  const [open,setOpen]=useState(false); const [loading,setLoading]=useState(true); const [busy,setBusy]=useState(false);
  async function load(){setLoading(true);try{const response=await fetch("/api/me/notifications",{cache:"no-store"});if(response.ok)setData(await response.json());}finally{setLoading(false)}}
  useEffect(()=>{void load()},[]);
  async function markAll(){setBusy(true);try{const response=await fetch("/api/me/notifications/read-all",{method:"PATCH"});if(response.ok)setData(await response.json())}finally{setBusy(false)}}
  async function markOne(id:string){const response=await fetch(`/api/me/notifications/${id}/read`,{method:"PATCH"});if(response.ok)setData(await response.json())}
  return <div className={styles.root}>
    <button className={styles.bell} type="button" aria-label={data.unreadCount?`Notifications, ${data.unreadCount} unread`:"Notifications"} aria-expanded={open} onClick={()=>setOpen(!open)}>{loading?"…":"🔔"}{data.unreadCount>0?<span>{data.unreadCount>99?"99+":data.unreadCount}</span>:null}</button>
    {open?<section className={styles.panel} aria-label="Recent notifications"><header><strong>Notifications</strong><button disabled={busy||!data.unreadCount} onClick={()=>void markAll()}>{busy?"Marking…":"Mark all read"}</button></header>
      {data.items.length?<ul>{data.items.slice(0,8).map(item=><li key={item.id} className={item.readAt?styles.read:""}><Link href={item.type.startsWith("friend_")?"/account/friends":item.inventoryItemId?`/account/inventory?item=${item.inventoryItemId}&activity=1`:"/account/inventory"} onClick={()=>void markOne(item.id)}><strong>@{item.actor?.username??item.actor?.displayName??"Collector"}</strong> {item.type==="friend_request_received"?"sent you a friend request.":item.type==="friend_request_accepted"?"accepted your friend request.":<>{item.interestType==="buy"?"is interested in buying":item.interestType==="trade"?"is interested in trading for":item.interestType==="watch"?"is watching":"is interested in"} your {item.cardName}.</>}</Link></li>)}</ul>:<p className={styles.empty}>No notifications yet.</p>}
    </section>:null}
  </div>;
}
