import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'poke-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() pokemon: Pokemon
  @Output() pokemonChoice = new EventEmitter<string>()

  onClick(event: Event) {
    console.log(event, 'event obj')
    const element = event.target as HTMLInputElement
    const value = element.value
    console.log(value, ' was clicked')
    this.pokemonChoice.emit(value)
  }

}
