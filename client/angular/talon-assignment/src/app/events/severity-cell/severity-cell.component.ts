import { Component, Input } from '@angular/core'

@Component({
  selector: 'ta-severity-cell',
  templateUrl: './severity-cell.component.html',
  styleUrls: ['./severity-cell.component.scss']
})
export class SeverityCellComponent {
  @Input() value?: string
}
