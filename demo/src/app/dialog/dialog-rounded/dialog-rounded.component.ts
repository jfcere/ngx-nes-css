import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NesDialogRef } from 'ngx-nes-css';

@Component({
  selector: 'app-dialog-rounded',
  templateUrl: './dialog-rounded.component.html',
  styleUrls: ['./dialog-rounded.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogRoundedComponent {

  constructor(
    private readonly _dialogRef: NesDialogRef,
  ) { }

  onCancelClick(): void {
    console.log('[Rounded dialog] Canceled');
    this._dialogRef.close();
  }

  onConfirmClick(): void {
    console.log('[Rounded dialog] Confirmed');
    this._dialogRef.close();
  }
}
