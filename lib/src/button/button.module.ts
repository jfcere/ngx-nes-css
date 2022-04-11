import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesButtonComponent } from './button.component';

const SHARED_DECLARATIONS = [
  NesButtonComponent,
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
export class NesButtonModule { }
