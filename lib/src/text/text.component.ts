import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type NesTextColor = 'primary' | 'success' | 'warning' | 'error';

@Component({
  selector: 'nes-text, [nes-text]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  host: {
    'class': 'nes-text',
    '[class]': "color ? 'is-' + color : ''",
    '[class.is-disabled]': 'disabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesTextComponent {
  @Input() color?: NesTextColor;
  @Input() disabled = false;
}
