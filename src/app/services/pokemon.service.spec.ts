import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { PokemonService } from './pokemon.service'
import { Pokemon } from '../models/pokemon'

describe('PokemonService', () => {
  let service: PokemonService
  let httpMock: HttpTestingController

  const mockPokemon: Pokemon = {
    name: 'bulbasaur',
    id: 1,
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    order: 1,
    height: 7,
    weight: 69
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    })
    service = TestBed.inject(PokemonService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should fetch Pokemon details by name', () => {
    service.getPokemonDetail('bulbasaur').subscribe(pokemon => {
      expect(pokemon.name).toBe('bulbasaur')
    })

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    expect(request.request.method).toBe('GET')
    request.flush(mockPokemon)
  })
})
