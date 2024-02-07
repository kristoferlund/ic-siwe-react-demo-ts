import { Result, Variant, ic, query, text } from "azle";
import { UserProfile, profileStore } from "../user_profiles";

const GetMyProfileResponse = Variant({
  Ok: UserProfile,
  Err: text,
});

export type GetMyProfileResponse = typeof GetMyProfileResponse.tsType;

export const get_my_profile = query(
  [],
  GetMyProfileResponse,
  (): GetMyProfileResponse => {
    let profile = profileStore.get(ic.caller().toString());
    if (profile.None || !profile.Some)
      return { Err: "No profile found for the given address" };
    return { Ok: profile.Some };
  }
);
