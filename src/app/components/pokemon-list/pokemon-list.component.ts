import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Observable, forkJoin } from 'rxjs'
import { Pokemon } from 'src/app/models/pokemon'
import { PokemonService } from 'src/app/services/pokemon.service'

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Output() pokemonSelected = new EventEmitter<string>();

  onSelect(code: string) {
    this.pokemonSelected.emit(code)
  }
  
  readonly starters: string[] = ['bulbasaur', 'charmander', 'squirtle'];
  pokemonStarters: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon(this.starters)
  }

  private getPokemon(list: string[]) {
    forkJoin(list.map(name => this.pokemonService.getPokemonDetail(name)))
      .subscribe((pokemonList: Pokemon[]) => {
        this.pokemonStarters = pokemonList
      })
  }

}
