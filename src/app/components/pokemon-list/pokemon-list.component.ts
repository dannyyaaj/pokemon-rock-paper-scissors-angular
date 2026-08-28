import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'
import { Observable, forkJoin } from 'rxjs'
import { Pokemon, Starter } from 'src/app/models/pokemon'
import { PokemonService } from 'src/app/services/pokemon.service'

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnChanges {
  @Input() starters!: Starter[]
  @Output() pokemonSelected = new EventEmitter<string>();

  onSelect(code: string) {
    this.pokemonSelected.emit(code)
  }

  pokemonStarters$!: Observable<Pokemon[]>

  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(): void {
    this.pokemonStarters$ = this.getPokemon(this.starters)
  }

  private getPokemon(pokemons: Starter[]): Observable<Pokemon[]> {
    return forkJoin(pokemons.map(pokemon => this.pokemonService.getPokemonDetail(pokemon.name)))
  }

}
