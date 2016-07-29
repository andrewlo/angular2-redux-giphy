import { ISearch, SearchRecord } from './search.types';
import { fromJS, List } from 'immutable';

export function deimmutifySearch(search: ISearch): Object {
  return search.toJS();
}

export function reimmutifySearch(plain: any): ISearch {
  let record = new SearchRecord(plain);

  // results needs to be Immutable List
  record = record.set('results', fromJS(plain.results));
  return record as ISearch;
}
