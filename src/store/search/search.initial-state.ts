import { reimmutifySearch } from './search.transforms';

export const INITIAL_STATE = reimmutifySearch({
  results: [],
  hasError: false,
  isLoading: false,
});
