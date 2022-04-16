import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';

export type NesIconName = NesIconReactionName | NesIconSnsName | NesIconOtherName;
export type NesIconSize = 'small' | 'medium' | 'large';
export type NesIconState = 'half' | 'transparent' | 'empty';

export type NesIconReactionName
  = 'heart'
  | 'star'
  | 'like';

export type NesIconSnsName =
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'github'
  | 'google'
  | 'gmail'
  | 'medium'
  | 'linkedin'
  | 'twitch'
  | 'youtube'
  | 'reddit'
  | 'whatsapp';

export type NesIconOtherName
  = 'close'
  | 'trophy'
  | 'coin';

@Directive({
  selector: 'i[nes-icon]',
  host: {
    'class': 'nes-icon',
  },
})
export class NesIconDirective implements OnChanges {
  @Input() icon?: NesIconName;
  @Input() size?: NesIconSize;
  @Input() state?: NesIconState;

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _renderer: Renderer2,
  ) { }

  ngOnChanges(change: SimpleChanges): void {
    this._handleClassChange(change['icon']);
    this._handleClassChange(change['size'], (value) => `is-${value}`);
    this._handleClassChange(change['state'], (value) => `is-${value}`);
  }

  private _handleClassChange(change: SimpleChange, formatter?: (value: string) => string): void {
    if (change == null || change.currentValue === change.previousValue) {
      return;
    }

    this._renderer.removeClass(
      this._elementRef.nativeElement,
      formatter?.(change.previousValue) || change.previousValue);

    this._renderer.addClass(
      this._elementRef.nativeElement,
      formatter?.(change.currentValue) || change.currentValue);
  }
}
