import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NesSelectFieldComponent } from '../select-field';

export type NesSelectColor = 'success' | 'warning' | 'error';

@Component({
  selector: 'nes-select, select[nes-select]',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    'class': 'nes-select',
    '[class]': "color ? 'is-' + color : ''",
    '[class.is-dark]': 'dark',
    '[attr.id]': 'id',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesSelectComponent implements OnInit, OnChanges, OnDestroy {
  @Input() color?: NesSelectColor;

  dark = this._selectField.dark;
  id = this._selectField.id;

  private readonly _destroyed$ = new Subject<void>();

  constructor(
    private readonly _selectField: NesSelectFieldComponent,
  ) { }

  ngOnInit(): void {
    this._selectField.dark$
      .pipe(takeUntil(this._destroyed$))
      .subscribe(dark => this.dark = dark);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._handleColorChange(changes);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  private _handleColorChange({ color }: SimpleChanges): void {
    if (color == null || color.currentValue === color.previousValue) {
      return;
    }
    this._selectField.color$.next(color.currentValue);
  }
}
