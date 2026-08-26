export type MyProfileStore = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  city: string | null;
  state_region: string | null;
  country_code: string | null;
  eligible: boolean;
};

export type MyProfileStoreOption = Omit<MyProfileStore, "eligible">;

export type MyProfile = {
  id: string;
  display_name: string | null;
  username: string | null;
  preferred_store_id: string | null;
  preferred_store: MyProfileStore | null;
  public_profile_available: boolean;
};
