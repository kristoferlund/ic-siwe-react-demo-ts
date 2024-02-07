import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'get_my_profile' : ActorMethod<
    [],
    { 'Ok' : { 'avatar_url' : string, 'name' : string, 'address' : string } } |
      { 'Err' : string }
  >,
  'list_profiles' : ActorMethod<
    [],
    {
        'Ok' : Array<
          [
            string,
            { 'avatar_url' : string, 'name' : string, 'address' : string },
          ]
        >
      } |
      { 'Err' : string }
  >,
  'save_my_profile' : ActorMethod<
    [string, string],
    { 'Ok' : { 'avatar_url' : string, 'name' : string, 'address' : string } } |
      { 'Err' : string }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
