import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import SwiperCore, { FreeMode } from 'swiper';
import { COLLAPSABLE_ANIMATION } from './snippet.animations';

SwiperCore.use([FreeMode]);

export interface Tab {
  label: string;
  src: string;
}

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [COLLAPSABLE_ANIMATION],
})
export class SnippetComponent implements OnChanges {
  @Input() files: string[] = [];

  opened = false;
  tabs: Tab[] = [];
  selectedTab?: Tab;

  ngOnChanges(changes: SimpleChanges): void {
    this._handleFilesChange(changes);
  }

  setActive(file: Tab): void {
    this.selectedTab = file;
  }

  toggleOpened(): void {
    this.opened = !this.opened;
  }

  private _handleFilesChange({ files }: SimpleChanges): void {
    if (files == null || files.previousValue === files.currentValue) {
      return;
    }
    this.tabs = files.currentValue.map((file: string): Tab => {
      const filename = file.split('/').pop()!;
      return { label: filename, src: file };
    });
    this.selectedTab = this.tabs[0];
  }
}
