import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type NesProgressColor = 'primary' | 'success' | 'warning' | 'error' | 'pattern';

@Component({
  selector: 'nes-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesProgressComponent {
  @Input() color?: NesProgressColor;
  @Input() max? = 100;
  @Input() value?: number | null = 0;
}
