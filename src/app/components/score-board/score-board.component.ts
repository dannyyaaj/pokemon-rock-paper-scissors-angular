import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'poke-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent {
  @Input() userScore!: number
  @Input() compScore!: number

  @Output() resetScores = new EventEmitter<void>();

  onReset() {
    this.resetScores.emit()
  }
}
