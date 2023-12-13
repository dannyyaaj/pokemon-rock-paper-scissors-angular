import { Component, OnInit } from '@angular/core';
import { Observable, tap, pipe, of, forkJoin, BehaviorSubject, map } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  readonly starters: string[] = ['bulbasaur', 'charmander', 'squirtle']

  pokemonStarters: Pokemon[] = []
  pokemonStarters$: Observable<Pokemon>[] = [];

  ngOnInit(): void {
    this.getPokemon(this.starters)
  }

  constructor(private pokemonService: PokemonService) { }

  private getPokemon(list: string[]) {
    // map through string array and pass it to the pokemon service get detail method
    list.map((name: string) => {
      this.pokemonStarters$.push(
        this.pokemonService.getPokemonDetail(name)
      )
    })

    this.pokemonStarters$.map((pokemon) => pokemon.subscribe(
      (starter) => this.pokemonStarters.push(starter)
    ))

  }

  calculateResults(choice: string) {
    console.log(choice, 'inside pokemon list')
  }

}
