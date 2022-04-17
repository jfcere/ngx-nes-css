import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { SwiperModule } from 'swiper/angular';
import { TabsComponent } from './tabs.component';

const SHARED_DECLARATIONS = [
  TabsComponent,
];

@NgModule({
  declarations: [
    ...SHARED_DECLARATIONS,
  ],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    SwiperModule,
  ],
  exports: [
    ...SHARED_DECLARATIONS,
  ],
})
export class TabsModule { }
