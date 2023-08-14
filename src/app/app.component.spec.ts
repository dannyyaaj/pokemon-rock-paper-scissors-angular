import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component'
import { HttpClientModule } from '@angular/common/http'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        PokemonListComponent
      ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should exist', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeDefined()
  })
})
