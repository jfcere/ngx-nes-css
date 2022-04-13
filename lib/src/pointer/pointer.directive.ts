import { Directive } from '@angular/core';

@Directive({
  selector: '[nesPointer], [nes-pointer]',
  host: {
    'class': 'nes-pointer',
  },
})
export class NesPointerDirective { }
