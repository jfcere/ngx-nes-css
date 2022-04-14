import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type NesBadgeColor = 'dark' | 'primary' | 'success' | 'warning' | 'error';

@Component({
  selector: 'nes-badge-color, [nes-badge-color]',
  templateUrl: './badge-color.component.html',
  styleUrls: ['./badge-color.component.scss'],
  host: {
    '[class]': "color ? 'is-' + color : ''",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesBadgeColorComponent {
  @Input('nes-badge-color') color?: NesBadgeColor;
}
