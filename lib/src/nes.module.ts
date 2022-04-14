import { NgModule } from '@angular/core';
import { NesAvatarModule } from './avatar';
import { NesBadgeModule } from './badge';
import { NesBalloonModule } from './balloon';
import { NesButtonModule } from './button';
import { NesCheckboxModule } from './checkbox';
import { NesContainerModule } from './container';
import { NesInputModule } from './input';
import { NesListModule } from './list';
import { NesPointerModule } from './pointer';
import { NesProgressModule } from './progress';
import { NesRadioModule } from './radio';
import { NesSelectModule } from './select';
import { NesTableModule } from './table';
import { NesTextModule } from './text';
import { NesTextareaModule } from './textarea';

const SHARED_IMPORTS = [
  NesAvatarModule,
  NesBadgeModule,
  NesBalloonModule,
  NesButtonModule,
  NesCheckboxModule,
  NesContainerModule,
  NesInputModule,
  NesListModule,
  NesPointerModule,
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
