export const primaryNavigationItems = [
  { href: "/", label: "Home", active: (path: string) => path === "/" },
  { href: "/discover", label: "Discover", active: (path: string) => path === "/discover" || path.startsWith("/discover/") },
  { href: "/stores", label: "Local Stores", active: (path: string) => path === "/stores" || path.startsWith("/stores/") },
  { href: "/how-it-works", label: "How it works", active: (path: string) => path === "/how-it-works" || path.startsWith("/how-it-works/") },
];
