import { combineReducers } from 'redux';
import * as counter from './counter';
import * as session from './session';
import * as search from './search';

export interface IAppState {
  counter?: counter.ICounter;
  session?: session.ISession;
  search?: search.ISearch;
};

export const rootReducer = combineReducers<IAppState>({
  counter: counter.counterReducer,
  session: session.sessionReducer,
  search: search.searchReducer,
});

export function deimmutify(store) {
  return {
    counter: counter.deimmutifyCounter(store.counter),
    session: session.deimmutifySession(store.session),
    search: search.deimmutifySearch(store.search),
  };
}

export function reimmutify(plain) {
  return {
    counter: counter.reimmutifyCounter(plain.counter),
    session: session.reimmutifySession(plain.session),
    search: search.reimmutifySearch(plain.search),
  };
}
