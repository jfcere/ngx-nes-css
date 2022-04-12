import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesInputComponent } from './input';
import { NesInputFieldComponent } from './input-field';

const SHARED_DECLARATIONS = [
  NesInputComponent,
  NesInputFieldComponent,
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
export class NesInputModule { }
