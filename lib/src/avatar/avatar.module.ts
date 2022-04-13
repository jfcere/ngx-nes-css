import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesAvatarComponent } from './avatar.component';

const SHARED_DECLARATIONS = [
  NesAvatarComponent,
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
export class NesAvatarModule { }
