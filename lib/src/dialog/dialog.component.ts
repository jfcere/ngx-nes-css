import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nes-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesDialogComponent {
  @Input() dark = false;
  @Input() rounded = false;
}
