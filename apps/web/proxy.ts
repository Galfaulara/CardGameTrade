import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const configured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY);
const authorizedParties = (process.env.CLERK_AUTHORIZED_PARTIES ?? "http://localhost:3000")
  .split(",").map((value) => value.trim()).filter(Boolean);
const withClerk = clerkMiddleware({ authorizedParties });

export default configured ? withClerk : () => NextResponse.next();

export const config = { matcher: [
  "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  "/(api|trpc)(.*)", "/__clerk/(.*)",
] };
