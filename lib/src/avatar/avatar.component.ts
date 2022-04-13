import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type NesAvatarSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'nes-avatar, img[nes-avatar]',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  host: {
    'class': 'nes-avatar',
    '[class]': "size ? 'is-' + size : ''",
    '[class.is-pixelated]': 'pixelated',
    '[class.is-rounded]': 'rounded',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesAvatarComponent {
  @Input() pixelated = false;
  @Input() rounded = false;
  @Input() size?: NesAvatarSize;
}
