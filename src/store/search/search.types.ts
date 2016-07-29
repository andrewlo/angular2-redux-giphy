import { Map, Record, List } from 'immutable';

export const SearchRecord = Record({
  page: 0,
  pageSize: 25,
  term: '',
  results: List<any>([]),
  hasError: false,
  isLoading: false,
});

// Provides strong typing for build-time checking and editor completion on top
// of the record type above.
export interface ISearch extends Map<string, any> {
  page: number;
  pageSize: number;
  term: string;
  results: List<any>;
  hasError: boolean;
  isLoading: boolean;
  set: (prop: string, val: any) => ISearch;
  merge: (other: any) => ISearch;
};
