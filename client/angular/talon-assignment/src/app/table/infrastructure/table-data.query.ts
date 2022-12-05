import { Query } from '@datorama/akita'
import { TableState } from './table-state'
import { TableDataStore } from './table-data.store'

export abstract class TableDataQuery<T> extends Query<TableState<T>> {
  protected constructor (protected override store: TableDataStore<T>) {
    super(store)
  }

  objects$ = this.select(state => state.objects || [])
}
