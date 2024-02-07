import { Record, StableBTreeMap, text } from "azle";

const UserKey = text;

type UserKey = typeof UserKey.tsType;

export const UserProfile = Record({
  address: text,
  name: text,
  avatar_url: text,
});

export type UserProfile = typeof UserProfile.tsType;

export let profileStore = StableBTreeMap<UserKey, UserProfile>(0);
