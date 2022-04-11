import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { NesRadioGroupComponent } from '../radio-group';

@Component({
  selector: 'nes-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesRadioOptionComponent implements OnDestroy {
  @Input() value!: string;

  private readonly _destroyed$ = new Subject<void>();

  name = this._radioGroup.name;

  dark$ = this._radioGroup.dark$;
  checked$ = this._radioGroup.value$.pipe(
    takeUntil(this._destroyed$),
    map((groupValue) => groupValue === this.value ? '' : null));

  constructor(
    private readonly _radioGroup: NesRadioGroupComponent,
  ) { }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this._radioGroup.setValue(this.value);
    }
  }
}
