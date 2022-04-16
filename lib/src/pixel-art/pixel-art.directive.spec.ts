import { ElementRef, Renderer2 } from '@angular/core';
import { NesPixelArtDirective } from './pixel-art.directive';

describe('PixelArtDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef<HTMLElement>;
    const mockRenderer2 = {} as Renderer2;
    const directive = new NesPixelArtDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
