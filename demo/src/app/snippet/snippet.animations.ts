import { animate, state, style, transition, trigger } from '@angular/animations';

export const COLLAPSABLE_ANIMATION = trigger('collapsableAnimation', [
  state('true',
    style({ height: '*', overflow: '*' }),
  ),
  state('false',
    style({ height: '0', overflow: 'hidden' }),
  ),
  transition('false => true', [
    animate(
      '300ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({ height: '*', overflow: '*' }),
    ),
  ]),
  transition('true => false', [
    animate(
      '300ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({ height: 0, overflow: 'hidden' }),
    ),
  ]),
]);
