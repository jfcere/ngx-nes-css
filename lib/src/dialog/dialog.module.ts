import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesDialogComponent } from './dialog.component';

const SHARED_DECLARATIONS = [
  NesDialogComponent,
];

@NgModule({
  declarations: [
    ...SHARED_DECLARATIONS,
  ],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  exports: [
    ...SHARED_DECLARATIONS,
  ],
})
export class NesDialogModule { }
