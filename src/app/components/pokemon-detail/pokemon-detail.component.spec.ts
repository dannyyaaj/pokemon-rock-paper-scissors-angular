
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PokemonDetailComponent } from './pokemon-detail.component'
import { Pokemon } from 'src/app/models/pokemon'
import { By } from '@angular/platform-browser'

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent
  let fixture: ComponentFixture<PokemonDetailComponent>


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent)
    component = fixture.componentInstance

    const mockPokemon: Pokemon = {
      name: 'bulbasaur',
      id: 1,
      sprites: {
        front_default: 'https://example.com/bulbasaur.png'
      },
      order: 0,
      height: 0,
      weight: 0
    }

    component.pokemon = mockPokemon
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should emit pokemonChoice when clicked', () => {
    spyOn(component.pokemonChoice, 'emit')

    const buttonEl = fixture.debugElement.query(By.css('button'))
    buttonEl.triggerEventHandler('click', null)

    expect(component.pokemonChoice.emit).toHaveBeenCalledWith('bulbasaur')
  })
});

