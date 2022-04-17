import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NesDialogService } from 'ngx-nes-css';
import { DialogDarkComponent, DialogDarkRoundedComponent, DialogDefaultComponent, DialogDefaultParams, DialogRoundedComponent } from './dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  constructor(
    private readonly _dialogService: NesDialogService,
  ) { }

  openDialogDefault(): void {
    const dialogRef = this._dialogService.open<DialogDefaultParams>({
      component: DialogDefaultComponent,
      data: {
        canceled: () => {
          console.log('[Default dialog] Canceled');
          dialogRef.close();
        },
        confirmed: () => {
          console.log('[Default dialog] Confirmed');
          dialogRef.close();
        },
      },
    });

    dialogRef.afterClosed$.subscribe(() => {
      console.log('[Default dialog] Closed');
    });
  }

  openDialogDark(): void {
    this._dialogService.open({ component: DialogDarkComponent });
  }

  openDialogRounded(): void {
    this._dialogService.open({ component: DialogRoundedComponent });
  }

  openDialogDarkRounded(): void {
    this._dialogService.open({ component: DialogDarkRoundedComponent });
  }
}
