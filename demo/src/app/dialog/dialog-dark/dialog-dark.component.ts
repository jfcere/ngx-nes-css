import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NesDialogRef } from 'ngx-nes-css';

@Component({
  selector: 'app-dialog-dark',
  templateUrl: './dialog-dark.component.html',
  styleUrls: ['./dialog-dark.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDarkComponent {

  constructor(
    private readonly _dialogRef: NesDialogRef,
  ) { }

  onCancelClick(): void {
    console.log('[Dark dialog] Canceled');
    this._dialogRef.close();
  }

  onConfirmClick(): void {
    console.log('[Dark dialog] Confirmed');
    this._dialogRef.close();
  }
}
