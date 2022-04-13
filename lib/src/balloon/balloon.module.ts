import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesBalloonComponent } from './balloon.component';

const SHARED_DECLARATIONS = [
  NesBalloonComponent,
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
export class NesBalloonModule { }
