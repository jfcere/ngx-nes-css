import { Directive, Input } from '@angular/core';

export type NesCharacter
  = 'mario'
  | 'ash'
  | 'pokeball'
  | 'bulbasaur'
  | 'charmander'
  | 'squirtle'
  | 'kirby';

@Directive({
  selector: '[nes-character]',
  host: {
    '[class]': "character ? 'nes-' + character : ''",
  },
})
export class NesCharacterDirective {
  @Input() character?: NesCharacter;
}
