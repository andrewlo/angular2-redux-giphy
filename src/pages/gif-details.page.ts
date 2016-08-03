import { Component, Inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { GifDetailsActions } from '../actions';
import { RioContainer, GifDetails } from '../components';
import { IGifDetails } from '../store';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Component({
  selector: 'gif-details-page',
  providers: [ GifDetailsActions ],
  directives: [ RioContainer, GifDetails ],
  pipes: [ AsyncPipe ],
  template: `
    <rio-container testid="gif-details" [size]=4 [center]=true>
      <div *ngIf="loading$ | async">Loading...</div>
      <div *ngIf="!(loading$ | async)">
        <gif-details [details]="results$ | async"></gif-details>
      </div>
    </rio-container>
  `
})
export class GifDetailsPage {
  @select(['gifDetails', 'results']) results$: Observable<any>;
  @select(['gifDetails', 'isLoading']) loading$: Observable<boolean>;

  private paramSub: any;

  constructor(private actions: GifDetailsActions,
    private activatedRoute: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.paramSub = this.activatedRoute.params
      .subscribe(params => {
        this.actions.getDetails(params['id']);
      });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

}
