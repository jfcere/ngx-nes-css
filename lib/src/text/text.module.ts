import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesTextComponent } from './text.component';

const SHARED_DECLARATIONS = [
  NesTextComponent,
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
export class NesTextModule { }
