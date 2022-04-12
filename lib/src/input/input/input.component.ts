import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NesInputFieldComponent } from '../input-field';

export type NesInputColor = 'success' | 'warning' | 'error';

@Component({
  selector: 'nes-input, input[nes-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  host: {
    'class': 'nes-input',
    '[class]': "color ? 'is-' + color : ''",
    '[class.is-dark]': 'dark',
    '[attr.id]': 'id',
    'attr.type': 'text',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesInputComponent implements OnInit, OnDestroy {
  @Input() color?: NesInputColor;

  dark = this._inputField.dark;
  id = this._inputField.id;

  private readonly _destroyed$ = new Subject<void>();

  constructor(
    private readonly _inputField: NesInputFieldComponent,
  ) { }

  ngOnInit(): void {
    this._inputField.dark$
      .pipe(takeUntil(this._destroyed$))
      .subscribe(dark => this.dark = dark);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
