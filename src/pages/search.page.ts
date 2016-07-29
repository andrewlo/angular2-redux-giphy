import { Component, Inject, ApplicationRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { SearchActions } from '../actions';
import { RioContainer, RioForm, RioFormGroup, RioLabel, RioInput } from '../components';
import { ISearch } from '../store';
import { List } from 'immutable';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'search-page',
  providers: [ SearchActions ],
  directives: [ RioContainer, RioForm, RioFormGroup, RioLabel, RioInput ],
  pipes: [ AsyncPipe ],
  template: `
    <rio-container testid="counter" [size]=2 [center]=true>
      <h2 data-testid="counter-heading" id="qa-counter-heading"
        class="center caps">
        Search: {{term$ | async}}
      </h2>
      <rio-form [group]="group"
        (onSubmit)="handleSubmit()">
        <rio-form-group
          testid="search-term">
          <rio-input
            inputType='text'
            placeholder='Search'
            [control]="term"></rio-input>
        </rio-form-group>
      </rio-form>
      <div *ngIf="loading$ | async">
        Loading...
      </div>
      <div *ngIf="!(loading$ | async)">
        <div *ngFor="let result of (results$ | async)">
          <img src="{{result.getIn(['images', 'downsized', 'url'])}}">
        </div>
        <div *ngIf="(results$ | async).size === 0">
          No results
        </div>
      </div>
    </rio-container>
  `
})
export class SearchPage {
  @select(['search', 'results']) results$: Observable<List<any>>;
  @select(['search', 'isLoading']) loading$: Observable<boolean>;
  @select(['search', 'term']) term$: Observable<string>;
  private term: FormControl;
  private group: FormGroup;

  constructor(private actions: SearchActions, private builder: FormBuilder) {
    this.term = new FormControl('');
    this.group = this.builder.group({
      term: this.term,
    });
  }
  ngOnInit() {
   // this.actions.search('inside out');
  }
  handleSubmit() {
    this.actions.search(this.term.value);
  }
}
