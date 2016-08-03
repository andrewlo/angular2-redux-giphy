import { Component, Inject, ApplicationRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { SearchActions } from '../actions';
import { RioContainer, RioForm, RioFormGroup, RioLabel, RioInput, RioButton, GifList } from '../components';
import { ISearch } from '../store';
import { List } from 'immutable';
import 'rxjs/add/operator/combineLatest';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Component({
  selector: 'search-page',
  providers: [ SearchActions ],
  directives: [ RioContainer, RioForm, RioFormGroup, RioLabel, RioInput, RioButton, GifList ],
  pipes: [ AsyncPipe ],
  template: `
    <rio-container testid="search" [size]=4 [center]=true>
      <h2 data-testid="search-heading"
        class="center caps">
        Search: {{term$ | async}}
      </h2>
      <rio-button
        className="bg-black"
        (onClick)="prevPage()">
        Prev
      </rio-button>
      <rio-button
        className="bg-black"
        (onClick)="nextPage()">
        Next
      </rio-button>
      <div class="right">Page: {{page$ | async}}</div>
      <rio-form [group]="group"
        (onSubmit)="onSubmit()">
        <rio-form-group
          testid="search-term">
          <rio-input
            inputType='text'
            placeholder='Search'
            [control]="termForm"></rio-input>
        </rio-form-group>
      </rio-form>
      <div *ngIf="loading$ | async">
        Loading...
      </div>
      <div *ngIf="!(loading$ | async)">
        <gif-list [list]="results$ | async" (onClick)="onClickGif($event)"></gif-list>
      </div>
    </rio-container>
  `
})
export class SearchPage {
  @select(['search', 'results']) results$: Observable<List<any>>;
  @select(['search', 'isLoading']) loading$: Observable<boolean>;
  @select(['search', 'term']) term$: Observable<string>;
  @select(['search', 'page']) page$: Observable<number>;

  private termForm: FormControl;
  private group: FormGroup;
  private querySub: any;
  private stateSub: any;

  constructor(private actions: SearchActions,
    private builder: FormBuilder,
    private router: Router,
    private ngRedux: NgRedux<IAppState>) {
    this.termForm = new FormControl('');
    this.group = this.builder.group({
      term: this.termForm,
    });
  }

  ngOnInit() {
    this.querySub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        const term = params['term'];
        if (term) {
          this.actions.setTerm(decodeURIComponent(term));
        }
        const page = +params['page'] || 0;
        this.actions.setPage(page);
      });

    // Do search & update query params if either search params change
    this.stateSub = this.term$.combineLatest(this.page$).subscribe(n => {
      this.actions.search();
      this.updateQueryParams();
    });
  }

  ngOnDestroy() {
    this.querySub.unsubscribe();
    this.stateSub.unsubscribe();
  }

  onSubmit() {
    this.actions.setTerm(this.termForm.value);
  }

  nextPage() {
    this.actions.nextPage();
  }

  prevPage() {
    this.actions.prevPage();
  }

  updateQueryParams() {
    this.router.navigate(['search'], {
      queryParams: {
        term: this.ngRedux.getState().search.get('term'),
        page: this.ngRedux.getState().search.get('page'),
      }
    });
  }

  onClickGif(id: number) {
    this.router.navigate(['gif-details', id]);
  }
}
