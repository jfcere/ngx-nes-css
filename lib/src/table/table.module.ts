import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesTableComponent } from './table';
import { NesTableResponsiveComponent } from './table-responsive';

const SHARED_DECLARATIONS = [
  NesTableComponent,
  NesTableResponsiveComponent,
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
export class NesTableModule { }
