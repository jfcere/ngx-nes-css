import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nes-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NesCheckboxComponent),
      multi: true,
    },
  ],
})
export class NesCheckboxComponent implements ControlValueAccessor {
  @Input() checked = false;
  @Input() dark = false;
  @Output() change = new EventEmitter<boolean>();

  private _onChange: any = () => {};
  private _onTouch: any = () => {};

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.checked;

    // handle form control
    this._onChange(value);
    this._onTouch(value);

    // handle change event emitter
    this.change.emit(value);

    // stop `change` event propagation otherwise
    // it will be triggered twice at it is bubbling up
    event.stopPropagation();
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }
}
