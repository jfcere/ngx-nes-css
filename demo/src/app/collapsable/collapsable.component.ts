import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COLLAPSABLE_ANIMATION } from './collapsable.animations';

@Component({
  selector: 'app-collapsable, [appCollapsable]',
  exportAs: 'appCollapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [COLLAPSABLE_ANIMATION],
})
export class CollapsableComponent {
  @Input() opened = false;

  toggle(): void {
    this.opened = !this.opened;
  }
}
