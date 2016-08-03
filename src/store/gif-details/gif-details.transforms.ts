import { IGifDetails, GifDetailsRecord } from './gif-details.types';
import { fromJS, List } from 'immutable';

export function deimmutifyGifDetails(search: IGifDetails): Object {
  return search.toJS();
}

export function reimmutifyGifDetails(plain: any): IGifDetails {
  let record = new GifDetailsRecord(plain);
  return record as IGifDetails;
}
