import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

export type NesPixelArt
  = 'nes-logo'
  | 'nes-jp-logo'
  | 'snes-logo'
  | 'snes-jp-logo'
  | 'nes-octocat'
  | 'nes-octocat-animate'
  | 'nes-smartphone'
  | 'nes-phone';

const PIXELART_CLASSLIST_MAP = new Map<NesPixelArt, string[]>([
  ['nes-octocat-animate', ['nes-octocat', 'animate']],
]);

@Directive({
  selector: '[nes-pixel-art]',
})
export class NesPixelArtDirective implements OnChanges {
  @Input('pixel-art') pixelArt?: NesPixelArt;

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _renderer: Renderer2,
  ) { }

  ngOnChanges(change: SimpleChanges): void {
    this._handlePixelArtChange(change);
  }

  private _handlePixelArtChange({ pixelArt }: SimpleChanges): void {
    if (pixelArt == null || pixelArt.currentValue === pixelArt.previousValue) {
      return;
    }

    const previousClassList = PIXELART_CLASSLIST_MAP.get(pixelArt.previousValue) || [pixelArt.previousValue];
    const currentClassList = PIXELART_CLASSLIST_MAP.get(pixelArt.currentValue) || [pixelArt.currentValue];

    previousClassList.forEach(
      (cssClass) => this._renderer.removeClass(this._elementRef.nativeElement, cssClass),
    );

    currentClassList.forEach(
      (cssClass) => this._renderer.addClass(this._elementRef.nativeElement, cssClass),
    );
  }
}
