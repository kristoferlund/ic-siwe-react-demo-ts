import { UserProfile, profileStore } from "../user_profiles";
import { Variant, ic, text, update } from "azle";

import { SIWE_PROVIDER_CANISTER } from "../siwe_provider";

const SaveMyProfileResponse = Variant({
  Ok: UserProfile,
  Err: text,
});

export type SaveMyProfileResponse = typeof SaveMyProfileResponse.tsType;

async function get_address() {
  // Check if the siwe provider canister is initialized
  if (!SIWE_PROVIDER_CANISTER)
    throw new Error("Siwe provider canister not initialized");

  // Call the get_address method on the siwe provider canister
  const response = await ic.call(SIWE_PROVIDER_CANISTER.get_address, {
    args: [ic.caller().toUint8Array()],
  });
  if (response.Err) throw new Error(response.Err);
  if (!response.Ok) throw new Error("Failed to get the caller address");

  return response.Ok;
}

export const save_my_profile = update(
  [text, text],
  SaveMyProfileResponse,
  async (name, avatar_url): Promise<SaveMyProfileResponse> => {
    try {
      const address = await get_address();
      const profile: UserProfile = {
        address: address.toString(),
        name,
        avatar_url,
      };
      profileStore.insert(ic.caller().toString(), profile);
      return { Ok: profile };
    } catch (error) {
      if (error instanceof Error) return { Err: error.message };
      return { Err: "Failed to save profile" };
    }
  }
);
