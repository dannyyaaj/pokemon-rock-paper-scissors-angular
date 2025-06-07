import { Component, Input } from '@angular/core'

@Component({
  selector: 'poke-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() resultText!: string
}
