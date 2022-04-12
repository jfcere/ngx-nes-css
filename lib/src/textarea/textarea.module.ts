import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesTextareaComponent } from './textarea';
import { NesTextareaFieldComponent } from './textarea-field';

const SHARED_DECLARATIONS = [
  NesTextareaComponent,
  NesTextareaFieldComponent,
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
export class NesTextareaModule { }
