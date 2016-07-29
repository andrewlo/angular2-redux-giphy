import { reimmutifySearch } from './search.transforms';
import { fromJS, List } from 'immutable';

export const INITIAL_STATE = reimmutifySearch({
  page: 0,
  pageSize: 25,
  term: '',
  results: [],
  hasError: false,
  isLoading: false,
});
