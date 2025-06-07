import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userScore = 0;
  compScore = 0;
  resultText = '';

  private rules: { [key: string]: string } = {
    bulbasaur: 'squirtle',  // bulbasaur beats squirtle
    squirtle: 'charmander', // squirtle beats charmander
    charmander: 'bulbasaur' // charmander beats bulbasaur
  }

  readonly starters: string[] = ['bulbasaur', 'charmander', 'squirtle'];

  calculateResults(playerChoice: string) {
    const opponentChoice = this.getRandomStarter()
    const user = '(you)'
    const opp = '(opponent)'

    if (playerChoice === opponentChoice) {
      this.resultText = `It's a draw! You both picked ${this.capitalize(playerChoice)}.`
    } else if (this.rules[playerChoice] === opponentChoice) {
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
    const randIndex = Math.floor(Math.random() * this.starters.length)
    return this.starters[randIndex]
  }

  resetScoreBoard() {
    this.userScore = 0
    this.compScore = 0
    this.resultText = ''
  }
}
