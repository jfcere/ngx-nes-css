import { NgModule } from '@angular/core';
import { NesButtonModule } from './button';
import { NesCheckboxModule } from './checkbox';
import { NesContainerModule } from './container';
import { NesProgressModule } from './progress';
import { NesRadioModule } from './radio';
import { NesTextModule } from './text';

const SHARED_IMPORTS = [
  NesButtonModule,
  NesCheckboxModule,
  NesContainerModule,
  NesProgressModule,
  NesRadioModule,
  NesTextModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...SHARED_IMPORTS,
  ],
  exports: [
    ...SHARED_IMPORTS,
  ],
})
export class NesModule { }
