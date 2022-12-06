import { Component, Input } from '@angular/core'

@Component({
  selector: 'ta-user-cell',
  templateUrl: './user-cell.component.html',
  styleUrls: ['./user-cell.component.scss']
})
export class UserCellComponent {
  @Input() name?: string
  @Input() email?: string
}
