import { reimmutifyGifDetails } from './gif-details.transforms';
import { fromJS, List } from 'immutable';

export const INITIAL_STATE = reimmutifyGifDetails({
  id: '',
  results: null,
  hasError: false,
  isLoading: false,
});
