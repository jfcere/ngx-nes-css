import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NesDialogRef } from 'ngx-nes-css';

@Component({
  selector: 'app-dialog-dark-rounded',
  templateUrl: './dialog-dark-rounded.component.html',
  styleUrls: ['./dialog-dark-rounded.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDarkRoundedComponent {

  constructor(
    private readonly _dialogRef: NesDialogRef,
  ) { }

  onCancelClick(): void {
    console.log('[Dark rounded dialog] Canceled');
    this._dialogRef.close();
  }

  onConfirmClick(): void {
    console.log('[Dark rounded dialog] Confirmed');
    this._dialogRef.close();
  }
}
