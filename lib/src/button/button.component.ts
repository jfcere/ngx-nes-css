import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type NesButtonColor = 'primary' | 'success' | 'warning' | 'error';

@Component({
  selector: 'nes-button, a[nes-button], button[nes-button], label[nes-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    'class': 'nes-btn',
    '[class]': "color ? 'is-' + color : ''",
    '[class.is-disabled]': 'disabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesButtonComponent {
  @Input() color?: NesButtonColor;
  @Input() disabled = false;
}
