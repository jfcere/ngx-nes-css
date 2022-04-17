import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { NesModule } from 'ngx-nes-css';
import { CollapsableComponent } from './collapsable.component';

const SHARED_DECLARATIONS = [
  CollapsableComponent,
];

@NgModule({
  declarations: [
    ...SHARED_DECLARATIONS,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MarkdownModule.forChild(),
    NesModule,
  ],
  exports: [
    ...SHARED_DECLARATIONS,
  ],
})
export class CollapsableModule { }
