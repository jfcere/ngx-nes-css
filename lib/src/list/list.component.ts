import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type NesListType = 'disc' | 'circle';

@Component({
  selector: 'nes-list, ul[nes-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: {
    'class': 'nes-list',
    '[class]': "listType ? 'is-' + listType : ''",
    '[class.is-dark]': 'dark',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesListComponent {
  @Input() dark = false;
  @Input('list-type') listType?: NesListType;
}
