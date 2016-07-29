import { Map, Record, List } from 'immutable';

export const SearchRecord = Record({
  term: '',
  results: List<any>([]),
  hasError: false,
  isLoading: false,
});

// Provides strong typing for build-time checking and editor completion on top
// of the record type above.
export interface ISearch extends Map<string, any> {
  term: string;
  results: List<any>;
  hasError: boolean;
  isLoading: boolean;
  set: (prop: string, val: any) => ISearch;
  merge: (other: any) => ISearch;
};
