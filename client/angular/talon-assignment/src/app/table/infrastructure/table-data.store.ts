import { Store } from '@datorama/akita'
import { TableState } from './table-state'

export function createInitialState<T> (): TableState<T> {
  return {
    objects: [],
    total: 0,
    pageSize: 5,
    offset: 0,
    filters: [],
    filterOptions: {}
  }
}

export abstract class TableDataStore<T> extends Store<TableState<T>> {
  protected constructor (name: string) {
    super(createInitialState(), { name })
  }
}
