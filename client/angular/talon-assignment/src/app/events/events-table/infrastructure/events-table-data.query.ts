import { TableDataQuery } from '../../../table/infrastructure/table-data.query'
import { EventData } from '../event'
import { Inject, Injectable } from '@angular/core'
import { EventsTableDataStore } from './events-table-data.store'
import { TABLE_DATA_STORE } from '../../../table/table/table'

@Injectable()
export class EventsTableDataQuery extends TableDataQuery<EventData> {
  constructor (@Inject(TABLE_DATA_STORE) protected override store: EventsTableDataStore) {
    super(store)
  }
}
