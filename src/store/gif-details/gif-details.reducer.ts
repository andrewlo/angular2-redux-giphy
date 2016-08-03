import { Map } from 'immutable';
import { IPayloadAction } from '../../actions';
import { GifDetailsActions } from '../../actions/gif-details.actions';
import { INITIAL_STATE } from './gif-details.initial-state';
import { IGifDetails } from './gif-details.types';

export function gifDetailsReducer(
  state: IGifDetails = INITIAL_STATE,
  action: IPayloadAction): IGifDetails {

  switch (action.type) {
  case GifDetailsActions.GIF_DETAILS_LOADING:
    return state.merge({
      id: action.payload.id,
      results: null,
      hasError: false,
      isLoading: true,
    });

  case GifDetailsActions.GIF_DETAILS_RECEIVED:
    return state.merge({
      results: action.payload.results,
      hasError: false,
      isLoading: false,
    });

  case GifDetailsActions.GIF_DETAILS_ERROR:
    return state.merge({
      id: '',
      results: null,
      hasError: true,
      isLoading: false,
    });

  default:
    return state;
  }
}
