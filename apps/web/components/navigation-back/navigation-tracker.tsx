"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
export function NavigationTracker(){const pathname=usePathname(),search=useSearchParams();useEffect(()=>{const current=`${pathname}${search.size?`?${search.toString()}`:""}`;const prior=sessionStorage.getItem("deckdeal:current-path");if(prior&&prior!==current)sessionStorage.setItem("deckdeal:previous-path",prior);sessionStorage.setItem("deckdeal:current-path",current);},[pathname,search]);return null;}
