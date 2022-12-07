import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core'
import { TABLE_DATA_QUERY } from '../table/table'
import { TableDataQuery } from '../infrastructure/table-data.query'
import { Observable, of, tap } from 'rxjs'
import { FormControl } from '@angular/forms'
import { MatSelect } from '@angular/material/select'

@Component({
  selector: 'ta-multi-select-filter',
  templateUrl: './multi-select-filter.component.html',
  styleUrls: ['./multi-select-filter.component.scss']
})
export class MultiSelectFilterComponent implements OnInit {
  @Input() key?: string
  @Output() value = new EventEmitter<[string, string[]]>()

  @ViewChild(MatSelect, { static: true }) select!: MatSelect

  form = new FormControl([''])
  options$: Observable<string[]> = of([])
  selected: string[] = []

  constructor (@Inject(TABLE_DATA_QUERY) readonly query: TableDataQuery<any>) {}

  ngOnInit (): void {
    if (this.key) {
      this.options$ = this.query.filterOptions$(this.key)
    }

    this.form.valueChanges
      .pipe(tap(selectedOptions => {
        this.selected = selectedOptions || []
        this.value.next([this.key || '', this.selected])
      })).subscribe()
  }

  removeChip (option: string): void {
    this.select
    this.selected.splice(this.selected.indexOf(option), 1)
    this.value.next([this.key || '', this.selected])
  }
}
