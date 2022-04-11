import { ChangeDetectionStrategy, Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'nes-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NesRadioGroupComponent),
      multi: true,
    },
  ],
})
export class NesRadioGroupComponent implements ControlValueAccessor, OnChanges {

  @Input() dark = false;
  @Input() name!: string;

  private _onChange: any = () => {};
  private _onTouch: any = () => {};

  private _dark$ = new ReplaySubject<boolean>();
  private _value$ = new ReplaySubject<string>();

  dark$ = this._dark$.asObservable();
  value$ = this._value$.asObservable();

  ngOnChanges(changes: SimpleChanges): void {
    this._handleDarkChange(changes);
  }

  setValue(value: string): void {
    this._value$.next(value);
    this._onChange(value);
    this._onTouch(value);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  writeValue(value: string): void {
    this._value$.next(value);
  }

  private _handleDarkChange({ dark }: SimpleChanges): void {
    if (dark == null || dark.currentValue === dark.previousValue) {
      return;
    }
    this._dark$.next(dark.currentValue);
  }
}
