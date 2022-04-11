import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesContainerComponent } from './container.component';

const SHARED_DECLARATIONS = [
  NesContainerComponent,
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
export class NesContainerModule { }
