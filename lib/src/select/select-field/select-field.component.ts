import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NesSelectColor } from '../select/select.component';

@Component({
  selector: 'nes-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesSelectFieldComponent implements OnChanges {
  @Input() dark = false;
  @Input() id!: string;
  @Input() inline = false;
  @Input() label?: string;

  private readonly _dark$ = new BehaviorSubject<boolean>(this.dark);

  readonly color$ = new BehaviorSubject<NesSelectColor | null>(null);
  readonly dark$ = this._dark$.asObservable();

  ngOnChanges(changes: SimpleChanges): void {
    this._handleDarkChange(changes);
  }

  private _handleDarkChange({ dark }: SimpleChanges): void {
    if (dark == null || dark.currentValue === dark.previousValue) {
      return;
    }
    this._dark$.next(dark.currentValue);
  }
}
