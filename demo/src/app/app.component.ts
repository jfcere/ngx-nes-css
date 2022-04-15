import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject, takeUntil } from 'rxjs';
import { NesDialogService } from 'ngx-nes-css';
import { DialogDarkComponent, DialogDarkRoundedComponent, DialogDefaultComponent, DialogDefaultParams, DialogRoundedComponent } from './dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly _destroyed$ = new Subject<void>();

  progress$ = new BehaviorSubject<number>(0);

  radioAnswerLight = 'Yes';
  radioAnswerDark = 'No';

  checkboxLight = true;
  checkboxDark = false;

  inputValue = '';

  textareaValue = '';

  selectValue = '';

  constructor(
    private readonly _dialogService: NesDialogService,
  ) { }

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => {
        const value = (this.progress$.value % 100) + 10;
        this.progress$.next(value);
      });
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

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
