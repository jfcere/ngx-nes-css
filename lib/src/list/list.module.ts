import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesListComponent } from './list.component';

const SHARED_DECLARATIONS = [
  NesListComponent,
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
export class NesListModule { }
