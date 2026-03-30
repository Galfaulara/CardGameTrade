import type { ID, Timestamps } from "@repo/types";

export type BaseEntity = {
  id: ID;
} & Timestamps;
