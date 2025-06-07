import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PokemonListComponent } from './pokemon-list.component'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { PokemonService } from '../../services/pokemon.service'

describe('PokemonListComponent', () => {
  let component: PokemonListComponent
  let fixture: ComponentFixture<PokemonListComponent>
  let httpMock: HttpTestingController
  let service: PokemonService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent)
    component = fixture.componentInstance
    httpMock = TestBed.inject(HttpTestingController)
    service = TestBed.inject(PokemonService)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
