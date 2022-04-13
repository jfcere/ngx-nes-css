import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nes-table, table[nes-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  host: {
    'class': 'nes-table',
    '[class.is-bordered]': 'bordered',
    '[class.is-centered]': 'centered',
    '[class.is-dark]': 'dark',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesTableComponent {
  @Input() bordered = false;
  @Input() centered = false;
  @Input() dark = false;
}
