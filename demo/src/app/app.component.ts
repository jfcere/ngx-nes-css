import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject, takeUntil } from 'rxjs';

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
}
