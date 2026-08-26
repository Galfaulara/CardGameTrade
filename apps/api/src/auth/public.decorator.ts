import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = "deckdeal:is-public";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const ALLOW_UNMAPPED_DECKDEAL_USER_KEY = "deckdeal:allow-unmapped-user";
export const AllowUnmappedDeckDealUser = () =>
  SetMetadata(ALLOW_UNMAPPED_DECKDEAL_USER_KEY, true);
