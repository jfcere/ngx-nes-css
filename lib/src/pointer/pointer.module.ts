import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesPointerDirective } from './pointer.directive';

const SHARED_DECLARATIONS = [
  NesPointerDirective,
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
export class NesPointerModule { }
