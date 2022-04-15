import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NesDialogRef } from 'ngx-nes-css';

export type DialogDefaultParams = {
  canceled: () => void,
  confirmed: () => void,
};

@Component({
  selector: 'app-dialog-default',
  templateUrl: './dialog-default.component.html',
  styleUrls: ['./dialog-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDefaultComponent {

  constructor(
    private readonly _dialogRef: NesDialogRef<DialogDefaultParams>,
  ) { }

  onCancelClick(): void {
    this._dialogRef.data?.canceled();
  }

  onConfirmClick(): void {
    this._dialogRef.data?.confirmed();
  }
}
