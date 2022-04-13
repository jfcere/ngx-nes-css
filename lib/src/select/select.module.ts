import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesSelectFieldComponent } from './select-field/select-field.component';
import { NesSelectComponent } from './select/select.component';

const SHARED_DECLARATIONS = [
  NesSelectComponent,
  NesSelectFieldComponent,
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
export class NesSelectModule { }
