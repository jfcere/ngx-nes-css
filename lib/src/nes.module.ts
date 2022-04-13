import { NgModule } from '@angular/core';
import { NesAvatarModule } from './avatar';
import { NesBalloonModule } from './balloon';
import { NesButtonModule } from './button';
import { NesCheckboxModule } from './checkbox';
import { NesContainerModule } from './container';
import { NesInputModule } from './input';
import { NesListModule } from './list';
import { NesProgressModule } from './progress';
import { NesRadioModule } from './radio';
import { NesSelectModule } from './select';
import { NesTableModule } from './table';
import { NesTextModule } from './text';
import { NesTextareaModule } from './textarea';

const SHARED_IMPORTS = [
  NesAvatarModule,
  NesBalloonModule,
  NesButtonModule,
  NesCheckboxModule,
  NesContainerModule,
  NesInputModule,
  NesListModule,
  NesProgressModule,
  NesRadioModule,
  NesSelectModule,
  NesTableModule,
  NesTextModule,
  NesTextareaModule,
];

@NgModule({
  imports: [
    ...SHARED_IMPORTS,
  ],
  exports: [
    ...SHARED_IMPORTS,
  ],
})
export class NesModule { }
