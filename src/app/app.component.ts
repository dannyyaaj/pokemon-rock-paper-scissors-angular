import { Component } from '@angular/core'
import { GENERATIONS, TYPE_RULES, Generation } from './models/pokemon'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userScore = 0;
  compScore = 0;
  resultText = '';

  readonly allGenerations = GENERATIONS;
  currentGeneration: Generation = GENERATIONS[0];


  calculateResults(playerChoice: string) {
    const opponentChoice = this.getRandomStarter()
    const user = '(you)'
    const opp = '(opponent)'


    const playerStarter = this.currentGeneration.starters.find(s => s.name === playerChoice)!
    const opponentStarter = this.currentGeneration.starters.find(s => s.name === opponentChoice)!

    if (playerChoice === opponentChoice) {
      this.resultText = `It's a draw! You both picked ${this.capitalize(playerChoice)}.`
    } else if (TYPE_RULES[playerStarter.gameType] === opponentStarter.gameType) {
      this.userScore++
      this.resultText = `${this.capitalize(playerChoice)} ${user} beats ${this.capitalize(opponentChoice)} ${opp}. You win!`
    } else {
      this.compScore++
      this.resultText = `${this.capitalize(playerChoice)} ${user} loses to ${this.capitalize(opponentChoice)} ${opp}. You lose!`
    }
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  private getRandomStarter(): string {
    const starters = this.currentGeneration.starters
    const randIndex = Math.floor(Math.random() * starters.length)
    return starters[randIndex].name
  }


  switchGeneration(gen: Generation) {
    this.currentGeneration = gen
    this.resetScoreBoard()
  }

  resetScoreBoard() {
    this.userScore = 0
    this.compScore = 0
    this.resultText = ''
  }
}
