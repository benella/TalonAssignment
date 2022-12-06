import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'ta-multi-select-filter',
  templateUrl: './multi-select-filter.component.html',
  styleUrls: ['./multi-select-filter.component.scss']
})
export class MultiSelectFilterComponent implements OnInit {
  @Input() key?: string
  @Output() value = new EventEmitter<string[]>()

  constructor () { }

  ngOnInit (): void {
  }
}
