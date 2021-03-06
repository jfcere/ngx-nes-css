import { ElementRef, Renderer2 } from '@angular/core';
import { NesIconDirective } from './icon.directive';

describe('IconDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef<HTMLElement>;
    const mockRenderer2 = {} as Renderer2;
    const directive = new NesIconDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
