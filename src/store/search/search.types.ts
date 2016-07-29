import { Map, Record } from 'immutable';

// Allows you to call '.counter' directly instead of having to
// call .get('counter'). Note that this is still a wrapper around
// immutable.Map; to mutate you still need to call .set('count');
export const SearchRecord = Record({
  results: [],
  hasError: false,
  isLoading: false,
});

// Provides strong typing for build-time checking and editor completion on top
// of the record type above.
export interface ISearch extends Map<string, any> {
  results: any[];
  hasError: boolean;
  isLoading: boolean;
  set: (prop: string, val: any) => ISearch;
  merge: (other: any) => ISearch;
};
