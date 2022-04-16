import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesIconDirective } from './icon.directive';

const SHARED_DECLARATIONS = [
  NesIconDirective,
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
export class NesIconModule { }
