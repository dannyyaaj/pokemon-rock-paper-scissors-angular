import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component'
import { HttpClientModule } from '@angular/common/http'
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component'
import { ResultComponent } from './components/result/result.component'
import { ScoreBoardComponent } from './components/score-board/score-board.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ScoreBoardComponent,
        PokemonListComponent,
        PokemonDetailComponent,
        ResultComponent],
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

  it('should initialize with zero scores and empty result text', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.userScore).toBe(0)
    expect(app.compScore).toBe(0)
    expect(app.resultText).toBe('')
  })
})
