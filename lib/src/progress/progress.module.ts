import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesProgressComponent } from './progress.component';

const SHARED_DECLARATIONS = [
  NesProgressComponent,
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
export class NesProgressModule { }
