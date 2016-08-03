import { Map, Record, List } from 'immutable';

export const GifDetailsRecord = Record({
  id: '',
  results: {},
  hasError: false,
  isLoading: false,
});

// Provides strong typing for build-time checking and editor completion on top
// of the record type above.
export interface IGifDetails extends Map<string, any> {
  id: string;
  results: {};
  hasError: boolean;
  isLoading: boolean;
  set: (prop: string, val: any) => IGifDetails;
  merge: (other: any) => IGifDetails;
};
