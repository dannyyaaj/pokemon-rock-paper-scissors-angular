import { Component, OnInit } from '@angular/core';
import { Observable, tap, pipe, of, forkJoin } from 'rxjs';
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
  pokemonStarters$: Observable<Pokemon>[] = this.starters.map((starter) => this.pokemonService.getPokemonDetail(starter).pipe(
    tap((pokemon) => {
      const result: Pokemon[] = []
      result.push(pokemon)
      return of(result)
    })
  ))

  ngOnInit(): void {
    this.getPokemon(this.starters)
  }

  private getPokemon(list: string[]) {
    const arr: Observable<Pokemon>[] = [];
    list.map((name: string) => {
      arr.push(
        this.pokemonService.getPokemonDetail(name)
      );
    });
    forkJoin([...arr]).subscribe((pokemonStarters: Pokemon[]) => {
      this.pokemonStarters.push(...pokemonStarters)
    })
  }

  constructor(private pokemonService: PokemonService) { }

}
