"use client";
import { useRouter } from "next/navigation";
import styles from "./navigation-back.module.css";
export function NavigationBack({fallback,label="Back"}:{fallback:string;label?:string}){const router=useRouter();const goBack=()=>{const previous=sessionStorage.getItem("deckdeal:previous-path");const current=window.location.pathname+window.location.search;router.push(previous?.startsWith("/")&&!previous.startsWith("//")&&previous!==current?previous:fallback);};return <button className={styles.back} type="button" onClick={goBack}>← {label}</button>;}
