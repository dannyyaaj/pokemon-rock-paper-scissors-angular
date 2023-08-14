import { Component, OnInit } from '@angular/core';
import { Observable, tap, pipe } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonStarters: Pokemon[] = []
  starters: string[] = ['charmander', 'bulbasaur', 'squirtle']

  ngOnInit(): void {
    const test =
      this.starters.map((starter) =>
        this.pokemonService.getPokemonDetail(starter).pipe(
          tap((pokemon) => this.pokemonStarters.push(pokemon))).subscribe()
      )

    console.log(test, 'test')
  }

  constructor(private pokemonService: PokemonService) { }

}
