import { ISearch, SearchRecord } from './search.types';

export function deimmutifySearch(search: ISearch): Object {
  return search.toJS();
}

export function reimmutifySearch(plain: Object): ISearch {
  return new SearchRecord(plain) as ISearch;
}
