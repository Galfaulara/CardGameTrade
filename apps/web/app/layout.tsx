import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "DeckDeal",
    template: "%s | DeckDeal",
  },
  description:
    "A store-mediated marketplace for collecting and trading cards with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
          ? <ClerkProvider appearance={{ variables: { colorPrimary: "#2457e6", borderRadius: "0.75rem" } }}>{children}</ClerkProvider>
          : children}
      </body>
    </html>
  );
}
