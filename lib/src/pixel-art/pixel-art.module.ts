import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesPixelArtDirective } from './pixel-art.directive';

const SHARED_DECLARATIONS = [
  NesPixelArtDirective,
];

@NgModule({
  declarations: [
    ...SHARED_DECLARATIONS,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...SHARED_DECLARATIONS,
  ],
})
export class NesPixelArtModule { }
