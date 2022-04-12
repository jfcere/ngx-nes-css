import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesCheckboxComponent } from './checkbox.component';

const SHARED_DECLARATIONS = [
  NesCheckboxComponent,
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
export class NesCheckboxModule { }
