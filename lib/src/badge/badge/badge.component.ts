import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nes-badge, [nes-badge]',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  host: {
    'class': 'nes-badge',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesBadgeComponent { }
