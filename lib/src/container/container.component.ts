import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nes-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesContainerComponent {
  @Input() centered = false;
  @Input() dark = false;
  @Input() rounded = false;
  @Input() title?: string;
}
