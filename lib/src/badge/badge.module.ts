import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NesBadgeComponent } from './badge';
import { NesBadgeColorComponent } from './badge-color';
import { NesIconBadgeComponent } from './icon-badge';
import { NesSplitedBadgeComponent } from './splited-badge';

const SHARED_DECLARATIONS = [
  NesBadgeColorComponent,
  NesBadgeComponent,
  NesIconBadgeComponent,
  NesSplitedBadgeComponent,
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
export class NesBadgeModule { }
