import { Map } from 'immutable';
import { IPayloadAction } from '../../actions';
import { SearchActions } from '../../actions/search.actions';
import { INITIAL_STATE } from './search.initial-state';
import { ISearch } from './search.types';

export function searchReducer(
  state: ISearch = INITIAL_STATE,
  action: IPayloadAction): ISearch {

  switch (action.type) {
  case SearchActions.SEARCH_SET_TERM:
    return state.merge({
      page: 0,
      term: action.payload.term,
      results: [],
      hasError: false,
      isLoading: false,
    });
  case SearchActions.SEARCH_LOADING:
    return state.merge({
      results: [],
      hasError: false,
      isLoading: true,
    });

  case SearchActions.SEARCH_RESULTS_RECEIVED:
    return state.merge({
      results: action.payload.results,
      hasError: false,
      isLoading: false,
    });

  case SearchActions.SEARCH_ERROR:
    return state.merge({
      results: [],
      hasError: true,
      isLoading: false,
    });

  case SearchActions.SEARCH_SET_PAGE:
    return state.merge({
      page: action.payload.page,
    });

  default:
    return state;
  }
}
