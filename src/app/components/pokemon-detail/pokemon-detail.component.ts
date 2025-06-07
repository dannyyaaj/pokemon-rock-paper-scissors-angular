import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Pokemon } from 'src/app/models/pokemon'

@Component({
  selector: 'poke-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon
  @Output() pokemonChoice = new EventEmitter<string>();

  onClick(): void {
    this.pokemonChoice.emit(this.pokemon.name)
  }
}
