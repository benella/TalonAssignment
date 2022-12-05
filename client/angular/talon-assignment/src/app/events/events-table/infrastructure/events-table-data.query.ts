import { TableDataQuery } from '../../../table/infrastructure/table-data.query'
import { EventData } from '../event'
import { Injectable } from '@angular/core'
import { EventsTableDataStore } from './events-table-data.store'

@Injectable()
export class EventsTableDataQuery extends TableDataQuery<EventData> {
  constructor (protected override store: EventsTableDataStore) {
    super(store)
  }
}
