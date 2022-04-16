import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesCharacterDirective } from './character.directive';

const SHARED_DECLARATIONS = [
  NesCharacterDirective,
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
export class NesCharacterModule { }
