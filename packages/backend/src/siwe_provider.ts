import { Canister, Variant, Vec, nat8, query, text } from "azle";

let Address = text;

let GetAddressResponse = Variant({
  Ok: Address,
  Err: text,
});

export const SiweProviderCanister = Canister({
  get_address: query([Vec(nat8)], GetAddressResponse),
});

export let SIWE_PROVIDER_CANISTER: typeof SiweProviderCanister;

export function initializeSiweProviderCanister(
  canister: typeof SiweProviderCanister
) {
  SIWE_PROVIDER_CANISTER = canister;
}
