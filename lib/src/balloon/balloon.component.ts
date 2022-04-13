import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type NesBalloonFrom = 'left' | 'right';

@Component({
  selector: 'nes-balloon, [nes-balloon]',
  templateUrl: './balloon.component.html',
  styleUrls: ['./balloon.component.scss'],
  host: {
    'class': 'nes-balloon',
    '[class]': "from ? 'from-' + from : ''",
    '[class.is-dark]': 'dark',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesBalloonComponent {
  @Input() dark = false;
  @Input() from?: NesBalloonFrom;
}
