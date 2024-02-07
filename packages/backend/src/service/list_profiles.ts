import { Tuple, Variant, Vec, nat8, query, text } from "azle";
import { UserProfile, profileStore } from "../user_profiles";

export const ListProfilesResponse = Variant({
  Ok: Vec(Tuple(text, UserProfile)),
  Err: text,
});

export type ListProfilesResponse = typeof ListProfilesResponse.tsType;

export const list_profiles = query(
  [],
  ListProfilesResponse,
  (): ListProfilesResponse => {
    return { Ok: profileStore.items() };
  }
);
