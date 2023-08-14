import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  readonly apiPath: string = 'https://pokeapi.co/api/v2/pokemon/';
  // readonly spriteApiPath: string =
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';

  constructor(private readonly httpClient: HttpClient) { }

  getPokemonDetail(name: string): Observable<Pokemon> {
    const path = `${this.apiPath}${name}`
    return this.httpClient.get<Pokemon>(path)
  }
}
