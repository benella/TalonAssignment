import { Query } from '@datorama/akita'
import { TableState } from './table-state'
import { TableDataStore } from './table-data.store'
import { combineLatest } from 'rxjs'

export abstract class TableDataQuery<T> extends Query<TableState<T>> {
  protected constructor (protected override store: TableDataStore<T>) {
    super(store)
  }

  objects$ = this.select(state => state.objects || [])
  pageQuery$ = combineLatest([
    this.select('offset'),
    this.select('pageSize'),
    this.select('filters')
  ])

  filterOptions$ = (filterKey: string) => this.select(state => state.filterOptions[filterKey])
}
