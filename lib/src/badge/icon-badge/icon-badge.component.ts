import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nes-icon-badge, a[nes-icon-badge]',
  templateUrl: './icon-badge.component.html',
  styleUrls: ['./icon-badge.component.scss'],
  host: {
    'class': 'nes-badge is-icon',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesIconBadgeComponent { }
