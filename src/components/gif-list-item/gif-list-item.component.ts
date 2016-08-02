import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'gif-list-item',
  template: `
    <div class="max-width-1">
      <img src="{{gif.getIn(['images', 'downsized', 'url'])}}" (click)="onClick.emit(gif.get('id'))">
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItem {
  @Input() gif: any;
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();
};
