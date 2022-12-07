import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'ta-severity-cell',
  templateUrl: './severity-cell.component.html',
  styleUrls: ['./severity-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeverityCellComponent {
  @Input() value?: string
}
