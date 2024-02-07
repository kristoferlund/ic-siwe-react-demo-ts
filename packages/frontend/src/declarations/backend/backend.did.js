export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get_my_profile' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'avatar_url' : IDL.Text,
              'name' : IDL.Text,
              'address' : IDL.Text,
            }),
            'Err' : IDL.Text,
          }),
        ],
        ['query'],
      ),
    'list_profiles' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Vec(
              IDL.Tuple(
                IDL.Text,
                IDL.Record({
                  'avatar_url' : IDL.Text,
                  'name' : IDL.Text,
                  'address' : IDL.Text,
                }),
              )
            ),
            'Err' : IDL.Text,
          }),
        ],
        ['query'],
      ),
    'save_my_profile' : IDL.Func(
        [IDL.Text, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'avatar_url' : IDL.Text,
              'name' : IDL.Text,
              'address' : IDL.Text,
            }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
