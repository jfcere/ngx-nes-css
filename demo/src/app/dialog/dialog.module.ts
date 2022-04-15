import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesModule } from 'ngx-nes-css';
import { DialogDarkComponent } from './dialog-dark';
import { DialogDarkRoundedComponent } from './dialog-dark-rounded';
import { DialogDefaultComponent } from './dialog-default';
import { DialogRoundedComponent } from './dialog-rounded';

const SHARED_DECLARATIONS = [
  DialogDarkComponent,
  DialogDarkRoundedComponent,
  DialogDefaultComponent,
  DialogRoundedComponent,
];

@NgModule({
  declarations: [
    ...SHARED_DECLARATIONS,
  ],
  imports: [
    CommonModule,
    NesModule,
  ],
  exports: [
    ...SHARED_DECLARATIONS,
  ],
})
export class DialogModule { }
