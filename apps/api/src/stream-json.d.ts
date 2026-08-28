declare module "stream-json/filters/pick.js" {
  import type { Duplex } from "node:stream";
  export const pick: { asStream(options?: { filter?: string }): Duplex };
}

declare module "stream-json/streamers/stream-object.js" {
  import type { Duplex } from "node:stream";
  export const streamObject: { asStream(): Duplex };
}
