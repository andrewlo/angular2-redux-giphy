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
  static SEARCH_SET_PAGE = 'SEARCH_SET_PAGE';

  constructor(private ngRedux: NgRedux<IAppState>, private http: Http) {}

  setTermAction(term: string) {
    return {
      type: SearchActions.SEARCH_SET_TERM,
      payload: {
        term,
      }
    };
  }

  loadingAction() {
    return {
      type: SearchActions.SEARCH_LOADING,
    };
  }

  errorAction(error) {
    return {
      type: SearchActions.SEARCH_ERROR,
      payload: error,
    };
  }

  successAction(results) {
    return {
      type: SearchActions.SEARCH_RESULTS_RECEIVED,
      payload: {
        results: results.json().data,
      }
    };
  }

  setPageAction(page: number) {
    return {
      type: SearchActions.SEARCH_SET_PAGE,
      payload: {
        page,
      }
    };
  }

  nextPage() {
    this.setPage(this.ngRedux.getState().search.get('page') + 1);
  }

  prevPage() {
    const page = this.ngRedux.getState().search.get('page');
    if (page > 0) {
      this.setPage(page - 1);
    }
  }

  setPage(pageNum: number) {
    if (this.ngRedux.getState().search.get('page') === pageNum) {
      return;
    }
    this.ngRedux.dispatch(this.setPageAction(pageNum));
  }

  setTerm(term: string) {
    if (this.ngRedux.getState().search.get('term') === term) {
      return;
    }
    this.ngRedux.dispatch(this.setTermAction(term));
  }

  search() {
    this.ngRedux.dispatch(this.loadingAction());

    const term = this.ngRedux.getState().search.get('term');
    const offset = this.ngRedux.getState().search.get('page') * this.ngRedux.getState().search.get('pageSize');
    const key = 'dc6zaTOxFJmzC';
    this.http.get(`http://api.giphy.com/v1/gifs/search?q=${term}&offset=${offset}&api_key=${key}`)
      .subscribe(
        result => this.ngRedux.dispatch(this.successAction(result)),
        error => this.ngRedux.dispatch(this.errorAction(error)));
  };
} 
