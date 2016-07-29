import { Action } from 'redux';
import { CounterActions } from './counter.actions';
import { SessionActions } from './session.actions';
import { SearchActions } from './search.actions';


export interface IPayloadAction extends Action {
  payload?: any;
}

export const ACTION_PROVIDERS = [ CounterActions, SessionActions, SearchActions ];
export { CounterActions, SessionActions, SearchActions };
