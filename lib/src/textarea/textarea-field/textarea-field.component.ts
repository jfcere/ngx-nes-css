import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'nes-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesTextareaFieldComponent implements OnChanges {
  @Input() dark = false;
  @Input() id!: string;
  @Input() inline = false;
  @Input() label?: string;

  private readonly _dark$ = new BehaviorSubject<boolean>(this.dark);

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
