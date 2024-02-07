import { Canister, Principal, init } from "azle";
import {
  SiweProviderCanister,
  initializeSiweProviderCanister,
} from "./siwe_provider";

import { get_my_profile } from "./service/get_my_profile";
import { list_profiles } from "./service/list_profiles";
import { save_my_profile } from "./service/save_my_profile";

export default Canister({
  init: init([Principal], (siweProviderPrincipal) => {
    initializeSiweProviderCanister(SiweProviderCanister(siweProviderPrincipal));
  }),

  get_my_profile,
  save_my_profile,
  list_profiles,
});
