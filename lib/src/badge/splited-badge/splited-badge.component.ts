import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nes-splited-badge, a[nes-splited-badge]',
  templateUrl: './splited-badge.component.html',
  styleUrls: ['./splited-badge.component.scss'],
  host: {
    'class': 'nes-badge is-splited',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesSplitedBadgeComponent { }
