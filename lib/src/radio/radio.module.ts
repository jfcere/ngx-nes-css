import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesRadioGroupComponent } from './radio-group/radio-group.component';
import { NesRadioOptionComponent } from './radio-option/radio-option.component';

const SHARED_DECLARATIONS = [
  NesRadioGroupComponent,
  NesRadioOptionComponent,
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
export class NesRadioModule { }
