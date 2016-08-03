import { IGifDetails } from './gif-details.types';
import { gifDetailsReducer } from './gif-details.reducer';
import { deimmutifyGifDetails, reimmutifyGifDetails } from './gif-details.transforms';

export {
  IGifDetails,
  gifDetailsReducer,
  deimmutifyGifDetails,
  reimmutifyGifDetails,
}
