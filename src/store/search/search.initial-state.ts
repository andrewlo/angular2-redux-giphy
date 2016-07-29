import { reimmutifySearch } from './search.transforms';
import { fromJS, List } from 'immutable';

export const INITIAL_STATE = reimmutifySearch({
  term: '',
  results: [],
  hasError: false,
  isLoading: false,
});
