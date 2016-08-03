import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'gif-details',
  template: `
    <div *ngIf="details">
      <img src="{{details.getIn(['images', 'downsized_medium', 'url'])}}">
      <div><a href="{{details.get('url')}}">View in Giphy</a></div>
      <div>{{details.get('rating')}}</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifDetails {
  @Input() details: any;
};
