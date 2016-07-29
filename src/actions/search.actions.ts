import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class SearchActions {
  static SEARCH_LOADING = 'SEARCH_LOADING';
  static SEARCH_RESULTS_RECEIVED = 'SEARCH_RESULTS_RECEIVED';
  static SEARCH_ERROR = 'SEARCH_ERROR';
  static SEARCH_SET_TERM = 'SEARCH_SET_TERM';

  constructor(private ngRedux: NgRedux<IAppState>, private http: Http) {}

  term(term) {
    return {
      type: SearchActions.SEARCH_SET_TERM,
      payload: {
        term,
      }
    }
  }

  loading() {
    return {
      type: SearchActions.SEARCH_LOADING,
    };
  }

  error(error) {
    return {
      type: SearchActions.SEARCH_ERROR,
      payload: error,
    };
  }

  success(results) {
    return {
      type: SearchActions.SEARCH_RESULTS_RECEIVED,
      payload: {
        results: results.json().data,
      }
    };
  }

  setTerm(term) {
    if (this.ngRedux.getState().search.get('term') === term) {
      return;
    }
    this.ngRedux.dispatch(this.term(term));
    this.search();
  }

  search() {
    this.ngRedux.dispatch(this.loading());

    let term = this.ngRedux.getState().search.get('term');
    this.http.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`)
      .subscribe(
        result => this.ngRedux.dispatch(this.success(result)),
        error => this.ngRedux.dispatch(this.error(error)));
  };
} 
