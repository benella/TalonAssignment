import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core'
import { TABLE_DATA_QUERY } from '../table/table'
import { TableDataQuery } from '../infrastructure/table-data.query'
import { Observable, of } from 'rxjs'
import { MatSelect } from '@angular/material/select'

@Component({
  selector: 'ta-multi-select-filter',
  templateUrl: './multi-select-filter.component.html',
  styleUrls: ['./multi-select-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectFilterComponent implements OnInit {
  @Input() key?: string
  @Output() value = new EventEmitter<[string, string[]]>()

  @ViewChild(MatSelect, { static: true }) select!: MatSelect

  options$: Observable<string[]> = of([])
  selected: string[] = []

  constructor (@Inject(TABLE_DATA_QUERY) readonly query: TableDataQuery<any>) {}

  ngOnInit (): void {
    if (this.key) {
      this.options$ = this.query.filterOptions$(this.key)
    }
  }

  onValueChanged (value: any): void {
    this.selected = value
    this.value.next([this.key || '', this.selected])
  }

  removeChip (option: string): void {
    this.selected.splice(this.selected.indexOf(option), 1)
    this.onValueChanged(this.selected.slice())
  }
}
