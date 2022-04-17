import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import SwiperCore, { FreeMode } from 'swiper';

SwiperCore.use([FreeMode]);

export interface File {
  name: string;
  src: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnChanges {
  @Input() files: string[] = [
    'assets/snippets/nes-dialog.html',
    'assets/snippets/nes-dialog.ts',
    'assets/snippets/nes-dialog-default.html',
    'assets/snippets/nes-dialog-default.ts',
  ];

  tabs: File[] = [];
  selectedTab = this.tabs[0];

  ngOnChanges(changes: SimpleChanges): void {
    this._handleFilesChange(changes);
  }

  setActive(file: File): void {
    this.selectedTab = file;
  }

  private _handleFilesChange({ files }: SimpleChanges): void {
    if (files == null || files.previousValue === files.currentValue) {
      return;
    }
    this.tabs = files.currentValue.map((file: string) => {
      const filename = file.split('/').pop();
      return { name: filename, src: file };
    });
    this.selectedTab = this.tabs[0];
  }
}
