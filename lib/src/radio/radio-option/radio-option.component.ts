import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { NesRadioGroupComponent } from '../radio-group';

@Component({
  selector: 'nes-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesRadioOptionComponent {
  @Input() value!: string;

  name = this._radioGroup.name;
  dark$ = this._radioGroup.dark$;
  checked$ = this._radioGroup.value$.pipe(
    map((groupValue) => groupValue === this.value ? '' : null),
  );

  constructor(
    private readonly _radioGroup: NesRadioGroupComponent,
  ) { }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this._radioGroup.setValue(this.value);
    }
  }
}
