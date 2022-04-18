import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { SwiperModule } from 'swiper/angular';
import { NesModule } from 'ngx-nes-css';
import { SnippetComponent } from './snippet.component';

const SHARED_DECLARATIONS = [
  SnippetComponent,
];

@NgModule({
  declarations: [
    ...SHARED_DECLARATIONS,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MarkdownModule.forChild(),
    NesModule,
    SwiperModule,
  ],
  exports: [
    ...SHARED_DECLARATIONS,
  ],
})
export class SnippetModule { }
