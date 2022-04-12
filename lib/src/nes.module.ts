import { NgModule } from '@angular/core';
import { NesButtonModule } from './button';
import { NesCheckboxModule } from './checkbox';
import { NesContainerModule } from './container';
import { NesInputModule } from './input';
import { NesProgressModule } from './progress';
import { NesRadioModule } from './radio';
import { NesTextModule } from './text';

const SHARED_IMPORTS = [
  NesButtonModule,
  NesCheckboxModule,
  NesContainerModule,
  NesInputModule,
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
