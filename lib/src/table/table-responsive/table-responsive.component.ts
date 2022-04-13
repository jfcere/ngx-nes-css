import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nes-table-responsive, [nes-table-responsive]',
  templateUrl: './table-responsive.component.html',
  styleUrls: ['./table-responsive.component.scss'],
  host: {
    'class': 'nes-table-responsive',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NesTableResponsiveComponent { }
