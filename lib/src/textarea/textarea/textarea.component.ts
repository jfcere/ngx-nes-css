import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NesTextareaFieldComponent } from '../textarea-field';

export type NesTextareaColor = 'success' | 'warning' | 'error';

@Component({
  selector: 'nes-textarea, textarea[nes-textarea]',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  host: {
    'class': 'nes-textarea',
    '[class]': "color ? 'is-' + color : ''",
    '[class.is-dark]': 'dark',
    '[attr.id]': 'id',
    'attr.type': 'text',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesTextareaComponent implements OnInit, OnDestroy {
  @Input() color?: NesTextareaColor;

  dark = this._textareaField.dark;
  id = this._textareaField.id;

  private readonly _destroyed$ = new Subject<void>();

  constructor(
    private readonly _textareaField: NesTextareaFieldComponent,
  ) { }

  ngOnInit(): void {
    this._textareaField.dark$
      .pipe(takeUntil(this._destroyed$))
      .subscribe(dark => this.dark = dark);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
